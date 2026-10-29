import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";
import { getApplicationSections, summarizeSectionValues, type ApplicationSectionId } from "@/data/application-content";
import type { PlanId } from "@/data/apply-content";

// Fires once, when the client finishes Step 4. Pushes a summary of the
// application into GHL (contact custom fields + a readable section-by-section
// summary) and moves the opportunity to the "Application Completed" stage.
// The SSN itself is never included — only whether one is on file.
const N8N_COMPLETE_WEBHOOK = "https://n8n.coreautomations.org/webhook/application-complete-ghl";

// Renders the application as labeled "Field: value" lines grouped under each
// section's title, using the same labels/options shown in the wizard UI and
// the review screen — so GHL shows something a staff member can skim, not a
// raw JSON blob.
function formatApplicationSummary(plan: PlanId, dataBySection: Record<ApplicationSectionId, Record<string, string>>) {
  const blocks: string[] = [];
  for (const section of getApplicationSections(plan)) {
    const lines = summarizeSectionValues(section, dataBySection[section.id] ?? {});
    if (lines.length > 0) {
      blocks.push(`${section.title.toUpperCase()}\n${lines.map((l) => `${l.label}: ${l.value}`).join("\n")}`);
    }
  }
  return blocks.join("\n\n");
}

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
    applicationData: formatApplicationSummary(plan, {
      personal_info: personalInfo,
      spouse_info: spouseInfo,
      business_info: businessInfo,
      retirement_accounts: retirementAccounts,
      setup_details: setupDetails,
    }),
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
