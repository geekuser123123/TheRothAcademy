import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";

// Reuses the exact same n8n webhook and email template as the scheduled
// 24-hour abandoned-reminder check -- this just fires it immediately when
// the customer explicitly asks for their link via "Save & finish later",
// instead of leaving them to wait up to a day for the first nudge.
const N8N_ABANDONED_WEBHOOK = "https://n8n.coreautomations.org/webhook/abandoned-reminder-ghl";

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
    .prepare(`SELECT plan, status, lead_first_name, lead_email FROM applications WHERE id = ?1 AND resume_token = ?2`)
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // "Save & finish later" only shows while the wizard is still in progress --
  // nothing to resume once the application is already complete.
  if (row.status !== "in_progress") {
    return NextResponse.json({ error: "This application is no longer in progress" }, { status: 409 });
  }

  const origin = new URL(request.url).origin;
  const resumeLink = `${origin}/apply/resume?id=${id}&token=${token}`;

  try {
    const res = await fetch(N8N_ABANDONED_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicationId: id,
        plan: row.plan,
        lead: { firstName: row.lead_first_name, email: row.lead_email },
        resumeLink,
        reminderNumber: 1,
      }),
    });
    if (!res.ok) throw new Error(`n8n webhook responded ${res.status}`);
  } catch (err) {
    console.error("Failed to email resume link", err);
    return NextResponse.json({ error: "Could not send the email" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
