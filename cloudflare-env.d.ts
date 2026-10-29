// Hand-written until `npm run cf-typegen` can run against the real D1
// database (requires `wrangler login` + the database to exist). Regenerating
// with that command will overwrite this file with the same shape plus
// whatever else wrangler.jsonc declares.
declare global {
  interface CloudflareEnv {
    DB: D1Database;
    SSN_ENCRYPTION_KEY: string;
  }
}

export {};
