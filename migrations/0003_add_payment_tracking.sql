-- Stripe checkout for the one-time setup fee (Step 6).
-- Apply with: wrangler d1 migrations apply roth-academy-applications --remote
-- (drop --remote to apply to the local dev D1 instance instead)

ALTER TABLE applications ADD COLUMN payment_status TEXT NOT NULL DEFAULT 'unpaid'
  CHECK (payment_status IN ('unpaid', 'paid', 'failed'));
ALTER TABLE applications ADD COLUMN stripe_checkout_session_id TEXT;
ALTER TABLE applications ADD COLUMN stripe_payment_intent_id TEXT;
ALTER TABLE applications ADD COLUMN amount_paid_cents INTEGER;
ALTER TABLE applications ADD COLUMN paid_at TEXT;

CREATE INDEX IF NOT EXISTS idx_applications_stripe_session ON applications(stripe_checkout_session_id);
