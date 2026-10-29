import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const plan = body?.plan;
  const lead = body?.lead;

  if ((plan !== "401k" && plan !== "ira") || !lead?.firstName || !lead?.lastName || !lead?.email || !lead?.phone) {
    return NextResponse.json({ error: "Missing or invalid required fields" }, { status: 400 });
  }

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const id = crypto.randomUUID();
  const resumeToken = crypto.randomUUID();

  await db
    .prepare(
      `INSERT INTO applications (id, resume_token, plan, lead_first_name, lead_last_name, lead_email, lead_phone, eligibility_answers)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      id,
      resumeToken,
      plan,
      lead.firstName,
      lead.lastName,
      lead.email,
      lead.phone,
      body?.eligibilityAnswers ? JSON.stringify(body.eligibilityAnswers) : null
    )
    .run();

  return NextResponse.json({ id, resumeToken });
}
