import { NextResponse } from "next/server";
import { getDb, encryptSSN, getSsnEncryptionKey, getApplicationByToken } from "@/lib/applications-db";

const JSON_SECTIONS = ["personal_info", "spouse_info", "business_info", "retirement_accounts", "setup_details"] as const;
type JsonSection = (typeof JSON_SECTIONS)[number];

function isJsonSection(value: unknown): value is JsonSection {
  return typeof value === "string" && (JSON_SECTIONS as readonly string[]).includes(value);
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = new URL(request.url).searchParams.get("token");
  if (!token) return NextResponse.json({ error: "Missing resume token" }, { status: 400 });

  let application;
  try {
    application = await getApplicationByToken(id, token);
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  if (!application) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(application);
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

  // Merged with SQLite's json_patch() directly in the UPDATE, not via a
  // SELECT-then-merge-then-write in application code -- two PATCH requests
  // for the same section (e.g. two fields filled within a second of each
  // other, each independently debounced) can genuinely overlap, and a
  // read-modify-write here would let the slower one silently clobber the
  // faster one's field. json_patch runs atomically inside the single
  // UPDATE statement, so there's no window for that race.
  const currentSectionUpdate = typeof body?.currentSection === "string" ? body.currentSection : section;
  await db
    .prepare(
      `UPDATE applications SET ${section} = json_patch(COALESCE(${section}, '{}'), ?1), current_section = ?2, updated_at = datetime('now') WHERE id = ?3`
    )
    .bind(JSON.stringify(data), currentSectionUpdate, id)
    .run();

  return NextResponse.json({ ok: true });
}
