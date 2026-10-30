import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getDocuSignConnectSecret() {
  const { env } = await getCloudflareContext({ async: true });
  return env.DOCUSIGN_CONNECT_HMAC_SECRET;
}

// DocuSign Connect signs each delivery with HMAC-SHA256 over the raw request
// body, base64-encoded, in the X-DocuSign-Signature-1 header. Verifying this
// is the only thing standing between "a real completed-envelope event" and
// "anyone who finds this URL can mark any application as fully signed."
export async function verifyDocuSignSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): Promise<boolean> {
  if (!signatureHeader) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody));
  const computedSig = btoa(String.fromCharCode(...new Uint8Array(sigBuffer)));

  if (computedSig.length !== signatureHeader.length) return false;
  let mismatch = 0;
  for (let i = 0; i < computedSig.length; i++) {
    mismatch |= computedSig.charCodeAt(i) ^ signatureHeader.charCodeAt(i);
  }
  return mismatch === 0;
}
