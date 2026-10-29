import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";

// Fires once, when the client finishes Step 4. Pushes a summary of the
// application into GHL (contact custom fields + a full JSON dump) and moves
// the opportunity to the "Application Completed" stage. The SSN itself is
// never included — only whether one is on file.
const N8N_COMPLETE_WEBHOOK = "https://n8n.coreautomations.org/webhook/application-complete-ghl";

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
      `SELECT plan, lead_first_name, lead_last_name, lead_email, lead_phone,
              personal_info, spouse_info, business_info, retirement_accounts, setup_details, ssn_encrypted
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await db
    .prepare(`UPDATE applications SET status = 'complete', updated_at = datetime('now') WHERE id = ?1`)
    .bind(id)
    .run();

  const plan = row.plan as "401k" | "ira";
  const personalInfo = row.personal_info ? JSON.parse(row.personal_info as string) : {};
  const spouseInfo = row.spouse_info ? JSON.parse(row.spouse_info as string) : {};
  const businessInfo = row.business_info ? JSON.parse(row.business_info as string) : {};
  const retirementAccounts = row.retirement_accounts ? JSON.parse(row.retirement_accounts as string) : {};
  const setupDetails = row.setup_details ? JSON.parse(row.setup_details as string) : {};

  const businessEntityName = plan === "401k" ? (businessInfo.company_name ?? "") : (businessInfo.llc_name_choice_1 ?? "");
  const hasSpouseInvolvement = plan === "401k" ? (spouseInfo.has_cotrustee ?? "") : (spouseInfo.has_spouse_manager ?? "");

  const payload = {
    applicationId: id,
    plan,
    lead: {
      firstName: row.lead_first_name,
      lastName: row.lead_last_name,
      email: row.lead_email,
      phone: row.lead_phone,
    },
    businessEntityName,
    hasSpouseInvolvement,
    willTransferRetirement: retirementAccounts.will_transfer ?? "",
    ssnOnFile: row.ssn_encrypted ? "yes" : "no",
    applicationData: JSON.stringify({ personalInfo, spouseInfo, businessInfo, retirementAccounts, setupDetails }),
  };

  try {
    await fetch(N8N_COMPLETE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // D1 is already the source of truth and is marked complete regardless;
    // a failed notification just means GHL doesn't hear about it yet.
    console.error("Failed to notify GHL of application completion", err);
  }

  return NextResponse.json({ ok: true });
}
