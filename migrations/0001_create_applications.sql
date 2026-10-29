-- Roth Academy /apply — detailed application storage (Step 4 onward).
-- Apply with: wrangler d1 migrations apply roth-academy-applications --remote
-- (drop --remote to apply to the local dev D1 instance instead)

CREATE TABLE IF NOT EXISTS applications (
  id TEXT PRIMARY KEY,
  resume_token TEXT NOT NULL UNIQUE,
  plan TEXT NOT NULL CHECK (plan IN ('401k', 'ira')),
  status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'complete')),

  -- Carried over from the Step 2 lead-capture / Step 3 eligibility screens.
  lead_first_name TEXT NOT NULL,
  lead_last_name TEXT NOT NULL,
  lead_email TEXT NOT NULL,
  lead_phone TEXT NOT NULL,
  eligibility_answers TEXT, -- JSON

  -- Step 4 sections, stored as JSON blobs keyed by field id. SSN is kept
  -- out of personal_info entirely and stored encrypted in its own columns.
  personal_info TEXT,       -- JSON
  ssn_encrypted TEXT,       -- base64 AES-GCM ciphertext, or NULL if not yet provided
  ssn_iv TEXT,              -- base64 initialization vector paired with ssn_encrypted
  spouse_info TEXT,         -- JSON
  business_info TEXT,       -- JSON (401(k) employer info, or IRA LLC info)
  retirement_accounts TEXT, -- JSON
  setup_details TEXT,       -- JSON

  current_section TEXT NOT NULL DEFAULT 'personal_info',

  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(lead_email);
CREATE INDEX IF NOT EXISTS idx_applications_resume_token ON applications(resume_token);
