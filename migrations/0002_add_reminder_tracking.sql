-- Abandoned-application email reminders.
-- Apply with: wrangler d1 migrations apply roth-academy-applications --remote
-- (drop --remote to apply to the local dev D1 instance instead)

ALTER TABLE applications ADD COLUMN reminder_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE applications ADD COLUMN last_reminder_at TEXT;

CREATE INDEX IF NOT EXISTS idx_applications_abandoned
  ON applications(status, reminder_count, updated_at, last_reminder_at);
