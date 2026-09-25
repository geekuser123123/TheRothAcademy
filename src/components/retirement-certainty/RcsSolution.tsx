const OFFER_STYLES = `
.offer-section {
  background: #F5F6F8;
  padding: 40px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

.offer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
}

.offer-inner {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 72px;
  align-items: start;
}

.offer-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.offer-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(30px, 3.5vw, 46px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.12;
  margin-bottom: 14px;
  text-transform: none;
}

.offer-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin-bottom: 28px;
}

.offer-desc {
  font-size: 16px;
  line-height: 1.85;
  color: #6B7880;
  margin-bottom: 48px;
  max-width: 560px;
}

.offer-steps {
  display: flex;
  flex-direction: column;
  position: relative;
}

.offer-steps::before {
  content: '';
  position: absolute;
  left: 21px;
  top: 44px;
  bottom: 44px;
  width: 2px;
  background: linear-gradient(to bottom, #B89958, rgba(184,153,88,0.1));
  z-index: 0;
}

.offer-step {
  display: flex;
  gap: 24px;
  position: relative;
  z-index: 1;
  padding-bottom: 36px;
}

.offer-step:last-child {
  padding-bottom: 0;
}

.os-num {
  width: 44px;
  height: 44px;
  min-width: 44px;
  background: #0C0C0C;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #B89958;
  box-shadow: 0 4px 14px rgba(12,12,12,0.25);
  position: relative;
  z-index: 1;
}

.os-body {
  padding-top: 8px;
}

.os-title {
  font-size: 16px;
  font-weight: 700;
  color: #0C0C0C;
  margin-bottom: 6px;
}

.os-desc {
  font-size: 14px;
  line-height: 1.75;
  color: #8C959D;
}

.offer-topics-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0C0C0C;
  margin: 40px 0 16px;
}

.offer-topics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.offer-topic {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #E2E5E9;
  border-radius: 6px;
  padding: 11px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #2D3A42;
  transition: border-color 0.2s;
}

.offer-topic:hover {
  border-color: #B89958;
}

.ot-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #B89958;
  flex-shrink: 0;
}

.offer-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.05);
  position: sticky;
  top: 100px;
}

.offer-card-top {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  padding: 32px 36px 28px;
  position: relative;
  overflow: hidden;
}

.offer-card-top::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(184,153,88,0.12) 0%, transparent 65%);
  pointer-events: none;
}

.offer-card-top::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #B89958 0%, rgba(184,153,88,0.2) 100%);
}

.oct-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(184,153,88,0.12);
  border: 1px solid rgba(184,153,88,0.28);
  border-radius: 100px;
  padding: 5px 14px;
  font-size: 11px;
  font-weight: 600;
  color: #B89958;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
  position: relative;
}

.oct-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #B89958;
  animation: rcsOfferPulse 2s infinite;
}

@keyframes rcsOfferPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.oct-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
  position: relative;
  line-height: 1.2;
}

.oct-subtitle {
  font-size: 13px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 28px;
  position: relative;
}

.oct-price-block {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 6px;
}

.oct-currency {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: #B89958;
  line-height: 1;
  align-self: flex-start;
  margin-top: 10px;
  margin-right: 2px;
}

.oct-price {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 72px;
  font-weight: 700;
  color: #B89958;
  line-height: 1;
  letter-spacing: -2px;
}

.oct-price-right {
  margin-left: 40px;
  padding-bottom: 0px;
  align-self: flex-end !important;
}

.oct-price-tag {
  display: inline-block;
  background: rgba(184,153,88,0.15);
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 600;
  color: #B89958;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

.oct-price-note {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  line-height: 1.4;
}

.oct-separator {
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin: 20px 0 16px;
  position: relative;
}

.oct-meta-row {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
}

.oct-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: rgba(255,255,255,0.45);
}

.oct-meta-icon {
  width: 16px;
  height: 16px;
  opacity: 0.5;
}

.offer-card-features {
  padding: 26px 36px 22px;
}

.ocf-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #B0BAC2;
  margin-bottom: 16px;
}

.ocf-item {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 14px;
  color: #2D3A42;
  line-height: 1.45;
  padding: 11px 12px;
  border-radius: 8px;
  transition: background 0.15s;
}

.ocf-item:hover {
  background: #F5F6F8;
}

.ocf-check {
  width: 24px;
  height: 24px;
  min-width: 24px;
  background: rgba(12,12,12,0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ocf-check svg {
  width: 11px;
  height: 11px;
}

.offer-card-cta {
  padding: 4px 36px 24px;
}

.offer-book-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: #B89958 !important;
  color: #0C0C0C !important;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 19px 24px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(184,153,88,0.4);
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}

.offer-book-btn:hover {
  background: #a3854c;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(184,153,88,0.5);
}

.offer-book-btn-arrow {
  font-size: 18px;
  line-height: 1;
}

.offer-card-guarantee {
  margin: 0 36px 28px;
  background: #F8F9FA;
  border: 1px solid #E2E5E9;
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.ocg-seal {
  width: 44px;
  height: 44px;
  min-width: 44px;
  background: linear-gradient(135deg, #B89958, #a3854c);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 12px rgba(184,153,88,0.35);
}

.ocg-seal-pct {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 12px;
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1;
}

.ocg-seal-word {
  font-size: 6px;
  font-weight: 700;
  color: #0C0C0C;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.3;
}

.ocg-text strong {
  font-size: 13px;
  font-weight: 700;
  color: #0C0C0C;
  display: block;
  margin-bottom: 3px;
}

.ocg-text span {
  font-size: 12px;
  line-height: 1.6;
  color: #8C959D;
}

@media(max-width: 1024px) {
  .offer-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .offer-card {
    position: static;
    max-width: 520px;
  }
}

@media(max-width: 640px) {
  .offer-container { padding: 0 20px; }
  .offer-section { padding: 30px 0; }
  .offer-topics-grid { grid-template-columns: 1fr; }
  .offer-card-top { padding: 24px 24px 20px; }
  .offer-card-features,
  .offer-card-cta { padding-left: 24px; padding-right: 24px; }
  .offer-card-guarantee { margin-left: 24px; margin-right: 24px; }
  .oct-price { font-size: 60px; }
  .offer-book-btn {
    padding: 10px !important;
  }
}
`;

const CHECK_ICON = (
  <svg viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const STEPS = [
  {
    title: "Review Your Primary Concern",
    desc: "We start by focusing on your most pressing compliance question, concern, or transaction, no time wasted on generalities. You bring the question; we bring the answer.",
  },
  {
    title: "Identify Compliance Risks",
    desc: "We identify potential compliance risks in your plan and clarify the applicable IRS rules and requirements that govern your specific situation.",
  },
  {
    title: "Determine the Safest Path Forward",
    desc: "You walk away knowing exactly where you stand, what needs attention, and what corrective steps if any should be taken next.",
  },
];

const TOPICS = [
  "Prohibited transaction concerns",
  "IRA compliance questions",
  "401(k) compliance questions",
  "Checkbook LLC concerns",
  "Real estate transactions",
  "Private lending review",
  "Asset titling questions",
  "Corrective action planning",
];

const FEATURES = [
  "Review of your primary compliance concern",
  "Identification of potential compliance risks",
  "Clarification of applicable IRS rules",
  "Discussion of corrective actions when necessary",
  "Clear direction on the safest path forward",
];

export function RcsSolution() {
  return (
    <section className="offer-section" id="offer">
      <style>{OFFER_STYLES}</style>
      <div className="offer-container">
        <div className="offer-inner">
          <div className="offer-left">
            <span className="offer-eyebrow">The Solution</span>
            <h2 className="offer-title">Introducing the Retirement Certainty Session</h2>
            <div className="offer-divider" />
            <p className="offer-desc">
              A focused 15-minute consultation designed to provide clarity, confidence, and direction regarding your
              self-directed retirement account. For more than 25 years, we have helped investors navigate the
              complex rules governing self-directed retirement plans.
            </p>

            <div className="offer-steps">
              {STEPS.map((step, index) => (
                <div className="offer-step" key={step.title}>
                  <div className="os-num">{index + 1}</div>
                  <div className="os-body">
                    <div className="os-title">{step.title}</div>
                    <div className="os-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="offer-topics-label">Topics Covered in This Session</div>
            <div className="offer-topics-grid">
              {TOPICS.map((topic) => (
                <div className="offer-topic" key={topic}>
                  <span className="ot-dot" />
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="offer-card">
              <div className="offer-card-top">
                <div className="oct-badge">
                  <span className="oct-badge-dot" />
                  15-Minute Expert Consultation
                </div>
                <div className="oct-title">Retirement Certainty Session</div>
                <div className="oct-subtitle">Direct access to a specialist · Secure online booking</div>

                <div className="oct-price-block">
                  <div className="oct-currency">$</div>
                  <div className="oct-price">125</div>
                  <div className="oct-price-right">
                    <div className="oct-price-tag">One-Time Fee</div>
                    <div className="oct-price-note">
                      No recurring charges.
                      <br />
                      No hidden fees.
                    </div>
                  </div>
                </div>

                <div className="oct-separator" />

                <div className="oct-meta-row">
                  <div className="oct-meta-item">
                    <svg className="oct-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    15 focused minutes
                  </div>
                  <div className="oct-meta-item">
                    <svg className="oct-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Secure payment
                  </div>
                  <div className="oct-meta-item">
                    <svg className="oct-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                    </svg>
                    Instant confirm
                  </div>
                </div>
              </div>

              <div className="offer-card-features">
                <div className="ocf-label">What&apos;s included in your session</div>
                {FEATURES.map((feature) => (
                  <div className="ocf-item" key={feature}>
                    <div className="ocf-check">{CHECK_ICON}</div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="offer-card-cta">
                <a href="#form" className="offer-book-btn">
                  Book My Consultation
                  <span className="offer-book-btn-arrow">→</span>
                </a>
              </div>

              <div className="offer-card-guarantee">
                <div className="ocg-seal">
                  <div className="ocg-seal-pct">400%</div>
                  <div className="ocg-seal-word">
                    Value
                    <br />
                    Guar.
                  </div>
                </div>
                <div className="ocg-text">
                  <strong>400% Value Guarantee</strong>
                  <span>
                    If you don&apos;t receive at least 4× the value of your investment, contact us within 7 days for
                    a full refund. No hassle, no arguments.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
