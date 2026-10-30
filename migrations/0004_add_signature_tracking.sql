-- DocuSign envelope tracking for Step 7 (electronic signature).
-- Apply with: wrangler d1 migrations apply roth-academy-applications --remote
-- (drop --remote to apply to the local dev D1 instance instead)

ALTER TABLE applications ADD COLUMN docusign_envelope_id TEXT;
ALTER TABLE applications ADD COLUMN docusign_status TEXT NOT NULL DEFAULT 'not_sent'
  CHECK (docusign_status IN ('not_sent', 'sent', 'completed'));

CREATE INDEX IF NOT EXISTS idx_applications_docusign_envelope ON applications(docusign_envelope_id);
