import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";
import { createCheckoutSession, getStripeSecretKey, StripeError } from "@/lib/stripe";
import { PLANS, type PlanId } from "@/data/apply-content";

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
      `SELECT plan, status, payment_status, lead_email, stripe_checkout_session_id
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const planId = row.plan as PlanId;
  const leadEmail = row.lead_email as string;

  if (row.status !== "complete") {
    return NextResponse.json({ error: "Application is not complete yet" }, { status: 409 });
  }
  if (row.payment_status === "paid") {
    // Never create a second charge for an application that's already paid.
    return NextResponse.json({ error: "This application has already been paid" }, { status: 409 });
  }

  const secretKey = await getStripeSecretKey();
  if (!secretKey) {
    return NextResponse.json({ error: "Payments are not configured yet" }, { status: 503 });
  }

  const plan = PLANS[planId];
  const origin = new URL(request.url).origin;

  try {
    const session = await createCheckoutSession(secretKey, {
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: plan.price * 100,
            product_data: {
              name: `${plan.name} - Setup Fee`,
            },
          },
          quantity: 1,
        },
      ],
      customer_email: leadEmail,
      metadata: {
        applicationId: id,
        plan: planId,
      },
      success_url: `${origin}/apply/payment-success?session_id={CHECKOUT_SESSION_ID}&id=${id}&token=${token}`,
      cancel_url: `${origin}/apply/payment-cancelled?id=${id}&token=${token}`,
    });

    await db
      .prepare(`UPDATE applications SET stripe_checkout_session_id = ?1, updated_at = datetime('now') WHERE id = ?2`)
      .bind(session.id as string, id)
      .run();

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Failed to create Stripe checkout session", err);
    const message = err instanceof StripeError ? err.message : "Could not start checkout";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
