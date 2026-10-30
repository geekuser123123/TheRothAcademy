import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getStripeSecretKey() {
  const { env } = await getCloudflareContext({ async: true });
  return env.STRIPE_SECRET_KEY;
}

export async function getStripeWebhookSecret() {
  const { env } = await getCloudflareContext({ async: true });
  return env.STRIPE_WEBHOOK_SECRET;
}

// Stripe's API takes classic PHP-style bracket-notation form encoding for
// nested objects/arrays (e.g. line_items[0][price_data][unit_amount]).
function toFormParams(obj: Record<string, unknown>, prefix = ""): [string, string][] {
  const params: [string, string][] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    const paramKey = prefix ? `${prefix}[${key}]` : key;
    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (item !== null && typeof item === "object") {
          params.push(...toFormParams(item as Record<string, unknown>, `${paramKey}[${i}]`));
        } else {
          params.push([`${paramKey}[${i}]`, String(item)]);
        }
      });
    } else if (typeof value === "object") {
      params.push(...toFormParams(value as Record<string, unknown>, paramKey));
    } else {
      params.push([paramKey, String(value)]);
    }
  }
  return params;
}

export class StripeError extends Error {}

async function stripeRequest(secretKey: string, path: string, params: Record<string, unknown>) {
  const body = new URLSearchParams(toFormParams(params));
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  const data = (await res.json()) as Record<string, unknown>;
  if (!res.ok) {
    const message = (data?.error as Record<string, unknown> | undefined)?.message;
    throw new StripeError(typeof message === "string" ? message : `Stripe API error (${res.status})`);
  }
  return data;
}

export function createCheckoutSession(secretKey: string, params: Record<string, unknown>) {
  return stripeRequest(secretKey, "checkout/sessions", params);
}

// Manual webhook signature verification (no Stripe SDK dependency), per
// https://docs.stripe.com/webhooks#verify-manually -- the header looks like
// "t=<timestamp>,v1=<hex hmac>[,v0=...]"; we recompute HMAC-SHA256 over
// "<timestamp>.<raw body>" with the webhook secret and compare.
export async function verifyStripeSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
  toleranceSeconds = 300
): Promise<boolean> {
  if (!signatureHeader) return false;

  const parts = Object.fromEntries(
    signatureHeader.split(",").map((part) => {
      const [k, v] = part.split("=");
      return [k, v];
    })
  );
  const timestamp = parts["t"];
  const expectedSig = parts["v1"];
  if (!timestamp || !expectedSig) return false;

  const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(ageSeconds) || ageSeconds > toleranceSeconds) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${rawBody}`));
  const computedSig = Array.from(new Uint8Array(sigBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (computedSig.length !== expectedSig.length) return false;
  let mismatch = 0;
  for (let i = 0; i < computedSig.length; i++) {
    mismatch |= computedSig.charCodeAt(i) ^ expectedSig.charCodeAt(i);
  }
  return mismatch === 0;
}
