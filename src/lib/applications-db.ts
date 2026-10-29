import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getDb() {
  const { env } = await getCloudflareContext({ async: true });
  return env.DB;
}

export async function getSsnEncryptionKey() {
  const { env } = await getCloudflareContext({ async: true });
  return env.SSN_ENCRYPTION_KEY;
}

// AES-256-GCM, keyed from the SSN_ENCRYPTION_KEY Worker secret. That secret
// must be a long random string (e.g. `openssl rand -base64 48`), not a
// human-chosen passphrase — PBKDF2 here just turns it into a proper key
// shape, it doesn't make a weak secret strong.
async function deriveKey(secret: string): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), "PBKDF2", false, [
    "deriveKey",
  ]);
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode("roth-academy-ssn-v1"),
      iterations: 100_000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

function toBase64(bytes: ArrayBuffer | Uint8Array) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (const b of arr) binary += String.fromCharCode(b);
  return btoa(binary);
}

function fromBase64(b64: string): Uint8Array<ArrayBuffer> {
  const binary = atob(b64);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export async function encryptSSN(ssn: string, secret: string): Promise<{ ciphertext: string; iv: string }> {
  const key = await deriveKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(ssn));
  return { ciphertext: toBase64(ciphertext), iv: toBase64(iv) };
}

// Only ever call this server-side, at the one moment a signed document is
// actually being generated — never to display or return the SSN anywhere.
export async function decryptSSN(ciphertext: string, iv: string, secret: string): Promise<string> {
  const key = await deriveKey(secret);
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64(iv) },
    key,
    fromBase64(ciphertext)
  );
  return new TextDecoder().decode(plaintext);
}
