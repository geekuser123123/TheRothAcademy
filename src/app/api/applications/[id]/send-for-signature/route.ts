import { NextResponse } from "next/server";
import { getDb, decryptSSN, getSsnEncryptionKey } from "@/lib/applications-db";

// n8n builds the DocuSign envelope from the application data we send here
// and returns an embedded signing URL for the Client -- DocuSign emails the
// second signer (Co-Trustee / Manager) automatically if one is on the
// application.
const N8N_DOCUSIGN_WEBHOOK: Record<"401k" | "ira", string> = {
  "401k": "https://n8n.coreautomations.org/webhook/docusign-send-401k",
  ira: "https://n8n.coreautomations.org/webhook/docusign-send-ira",
};

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const token = body?.token;
  if (!token) return NextResponse.json({ error: "Missing resume token" }, { status: 400 });

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const row = await db
    .prepare(
      `SELECT plan, payment_status, docusign_envelope_id, docusign_status,
              lead_first_name, lead_last_name, lead_email, lead_phone,
              personal_info, spouse_info, business_info, eligibility_answers, ssn_encrypted, ssn_iv
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (row.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment has not been completed yet" }, { status: 409 });
  }

  const webhookUrl = N8N_DOCUSIGN_WEBHOOK[row.plan as "401k" | "ira"];
  if (!webhookUrl) {
    return NextResponse.json({ error: "Electronic signing for this plan isn't available yet" }, { status: 503 });
  }

  // Never create a second envelope for the same application -- if one's
  // already out, the customer needs to use that signing session, not a
  // fresh duplicate agreement.
  if (row.docusign_status === "sent" || row.docusign_status === "completed") {
    return NextResponse.json(
      { error: "A signing request has already been sent for this application", alreadySent: true },
      { status: 409 }
    );
  }

  const personalInfo = row.personal_info ? JSON.parse(row.personal_info as string) : {};
  const spouseInfo = row.spouse_info ? JSON.parse(row.spouse_info as string) : {};
  const businessInfo = row.business_info ? JSON.parse(row.business_info as string) : {};
  const eligibilityAnswers = row.eligibility_answers ? JSON.parse(row.eligibility_answers as string) : {};

  if (row.ssn_encrypted && row.ssn_iv) {
    const secret = await getSsnEncryptionKey();
    if (!secret) return NextResponse.json({ error: "Signing is not configured yet" }, { status: 503 });
    // Only decrypted here, at the one moment it's needed to populate the
    // signed PDF -- never logged, returned, or stored unencrypted.
    personalInfo.ssn = await decryptSSN(row.ssn_encrypted as string, row.ssn_iv as string, secret);
  }

  const origin = new URL(request.url).origin;

  let signingUrl: string;
  let envelopeId: string;
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicationId: id,
        returnUrl: `${origin}/apply/signing-complete?id=${id}&token=${token}`,
        lead: {
          firstName: row.lead_first_name,
          lastName: row.lead_last_name,
          email: row.lead_email,
          phone: row.lead_phone,
        },
        personalInfo,
        spouseInfo,
        businessInfo,
        eligibilityAnswers,
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { signingUrl?: string; envelopeId?: string };
    if (!res.ok || !data.signingUrl || !data.envelopeId) {
      throw new Error("n8n did not return a signing URL");
    }
    signingUrl = data.signingUrl;
    envelopeId = data.envelopeId;
  } catch (err) {
    console.error("Failed to send application for signature", err);
    return NextResponse.json({ error: "Could not start the signing process" }, { status: 502 });
  }

  await db
    .prepare(
      `UPDATE applications SET docusign_envelope_id = ?1, docusign_status = 'sent', updated_at = datetime('now') WHERE id = ?2`
    )
    .bind(envelopeId, id)
    .run();

  return NextResponse.json({ url: signingUrl });
}
