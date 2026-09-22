import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("CONTACT_WEBHOOK_URL is not configured");
    return NextResponse.json({ error: "Contact form is not configured yet" }, { status: 503 });
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, submittedAt: new Date().toISOString() }),
  });

  if (!webhookResponse.ok) {
    return NextResponse.json({ error: "Could not deliver request" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
