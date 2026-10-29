import { NextResponse } from "next/server";
import { getDb, encryptSSN, getSsnEncryptionKey } from "@/lib/applications-db";

const JSON_SECTIONS = ["personal_info", "spouse_info", "business_info", "retirement_accounts", "setup_details"] as const;
type JsonSection = (typeof JSON_SECTIONS)[number];

function isJsonSection(value: unknown): value is JsonSection {
  return typeof value === "string" && (JSON_SECTIONS as readonly string[]).includes(value);
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = new URL(request.url).searchParams.get("token");
  if (!token) return NextResponse.json({ error: "Missing resume token" }, { status: 400 });

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const row = await db
    .prepare(
      `SELECT id, plan, status, lead_first_name, lead_last_name, lead_email, lead_phone, eligibility_answers,
              personal_info, spouse_info, business_info, retirement_accounts, setup_details,
              current_section, ssn_encrypted
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { ssn_encrypted, ...rest } = row;
  return NextResponse.json({
    ...rest,
    eligibilityAnswers: rest.eligibility_answers ? JSON.parse(rest.eligibility_answers as string) : null,
    personalInfo: rest.personal_info ? JSON.parse(rest.personal_info as string) : {},
    spouseInfo: rest.spouse_info ? JSON.parse(rest.spouse_info as string) : {},
    businessInfo: rest.business_info ? JSON.parse(rest.business_info as string) : {},
    retirementAccounts: rest.retirement_accounts ? JSON.parse(rest.retirement_accounts as string) : {},
    setupDetails: rest.setup_details ? JSON.parse(rest.setup_details as string) : {},
    ssnOnFile: Boolean(ssn_encrypted),
  });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const token = body?.token;
  const section = body?.section;
  const data = body?.data;

  if (!token) return NextResponse.json({ error: "Missing resume token" }, { status: 400 });

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const owns = await db.prepare(`SELECT id FROM applications WHERE id = ?1 AND resume_token = ?2`).bind(id, token).first();
  if (!owns) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (section === "ssn") {
    const ssn = typeof data?.ssn === "string" ? data.ssn.trim() : "";
    if (!ssn) return NextResponse.json({ error: "Missing ssn" }, { status: 400 });

    const secret = await getSsnEncryptionKey();
    if (!secret) return NextResponse.json({ error: "Encryption is not configured yet" }, { status: 503 });

    const { ciphertext, iv } = await encryptSSN(ssn, secret);
    await db
      .prepare(`UPDATE applications SET ssn_encrypted = ?1, ssn_iv = ?2, updated_at = datetime('now') WHERE id = ?3`)
      .bind(ciphertext, iv, id)
      .run();
    return NextResponse.json({ ok: true });
  }

  if (!isJsonSection(section) || typeof data !== "object" || data === null) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  const existing = await db.prepare(`SELECT ${section} FROM applications WHERE id = ?1`).bind(id).first<Record<string, string | null>>();
  const merged = { ...(existing?.[section] ? JSON.parse(existing[section] as string) : {}), ...data };

  const currentSectionUpdate = typeof body?.currentSection === "string" ? body.currentSection : section;
  await db
    .prepare(`UPDATE applications SET ${section} = ?1, current_section = ?2, updated_at = datetime('now') WHERE id = ?3`)
    .bind(JSON.stringify(merged), currentSectionUpdate, id)
    .run();

  return NextResponse.json({ ok: true });
}
