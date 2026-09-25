const GUARANTEE_STYLES = `
.guarantee-section {
  background: #F5F6F8;
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

.guarantee-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
}

.guarantee-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: stretch;
}

.guarantee-left {
  display: flex;
  flex-direction: column;
}

.guarantee-visual {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  border-radius: 20px;
  padding: 52px 44px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.guarantee-visual::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #B89958, transparent);
}

.gv-bg-circle {
  position: absolute;
  top: -120px; right: -120px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(184,153,88,0.07) 0%, transparent 65%);
  pointer-events: none;
}

.gv-bg-circle-2 {
  position: absolute;
  bottom: -80px; left: -80px;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%);
  pointer-events: none;
}

.gv-top {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
  position: relative;
}

.gv-seal {
  position: relative;
  flex-shrink: 0;
}

.gv-seal-ring {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(184,153,88,0.08);
  border: 2px solid rgba(184,153,88,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gv-seal-core {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #B89958 0%, #a3854c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 28px rgba(184,153,88,0.45);
}

.gv-pct {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1;
  letter-spacing: -1px;
}

.gv-word {
  font-size: 7px;
  font-weight: 800;
  color: rgba(12,12,12,0.6);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 2px;
}

.gv-top-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
  line-height: 1.25;
}

.gv-top-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  line-height: 1.6;
}

.gv-divider {
  height: 1px;
  background: rgba(255,255,255,0.07);
  margin-bottom: 28px;
  position: relative;
}

.gv-quote {
  background: rgba(184,153,88,0.07);
  border-left: 3px solid #B89958;
  border-radius: 0 8px 8px 0;
  padding: 18px 20px;
  margin-bottom: 28px;
  position: relative;
}

.gv-quote-text {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 14px;
  font-style: italic;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
}

.gv-points {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 36px;
  flex-grow: 1;
  position: relative;
}

.gv-point {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px;
  padding: 14px 18px;
  transition: background 0.2s, border-color 0.2s;
}

.gv-point:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(184,153,88,0.2);
}

.gv-point-check {
  width: 28px;
  height: 28px;
  min-width: 28px;
  background: rgba(184,153,88,0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gv-point-check svg {
  width: 13px;
  height: 13px;
  color: #B89958;
}

.gv-point-text {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  line-height: 1.4;
}

.gv-stats-row {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 0;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.gv-stat {
  padding: 16px 12px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.07);
}

.gv-stat:last-child { border-right: none; }

.gv-stat-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #B89958;
  line-height: 1;
  margin-bottom: 4px;
}

.gv-stat-label {
  font-size: 10px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.guarantee-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.guarantee-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.guarantee-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(26px, 2.8vw, 36px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.2;
  margin-bottom: 14px;
  text-transform: none;
}

.guarantee-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin-bottom: 24px;
}

.guarantee-copy {
  font-size: 15px;
  line-height: 1.85;
  color: #6B7880;
  margin-bottom: 28px;
}

.guarantee-highlight {
  background: #ffffff;
  border: 1px solid #E2E5E9;
  border-left: 4px solid #B89958;
  border-radius: 0 10px 10px 0;
  padding: 20px 24px;
  margin-bottom: 28px;
}

.guarantee-highlight p {
  font-size: 15px;
  font-weight: 600;
  color: #0C0C0C;
  line-height: 1.65;
  margin: 0;
}

.guarantee-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 28px;
  background: #ffffff;
  border: 1px solid #E2E5E9;
  border-radius: 10px;
  overflow: hidden;
}

.gs-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 20px;
  border-bottom: 1px solid #F0F2F4;
  transition: background 0.15s;
}

.gs-item:last-child { border-bottom: none; }
.gs-item:hover { background: #F8F9FA; }

.gs-num {
  width: 26px;
  height: 26px;
  min-width: 26px;
  background: #0C0C0C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 12px;
  font-weight: 700;
  color: #B89958;
}

.gs-text {
  font-size: 13px;
  color: #2D3A42;
  line-height: 1.5;
}

.gs-text strong { color: #0C0C0C; }

.guarantee-cta-row {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.guarantee-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #B89958;
  color: #0C0C0C !important;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 7px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(184,153,88,0.35);
  transition: background 0.2s, transform 0.15s;
}

.guarantee-btn:hover {
  background: #a3854c !important;
  transform: translateY(-1px);
}

.guarantee-note {
  font-size: 12px;
  color: #8C959D;
  line-height: 1.6;
}

@media(max-width: 1024px) {
  .guarantee-inner { grid-template-columns: 1fr; gap: 40px; }
  .guarantee-left { max-width: 580px; margin: 0 auto; width: 100%; }
}

@media(max-width: 640px) {
  .guarantee-container { padding: 0 20px; }
  .guarantee-section { padding: 30px 0; }
  .guarantee-visual { padding: 36px 28px; }
  .gv-top { flex-direction: column; text-align: center; }
}
`;

const POINT_CHECK = (
  <svg viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const POINTS = [
  "Full refund if the value isn't delivered",
  "7-day refund window — no questions asked",
  "Backed by 25+ years of specialist experience",
  "Refund issued to original payment method within 5–10 days",
];

export function RcsGuarantee() {
  return (
    <section className="guarantee-section" id="guarantee">
      <style>{GUARANTEE_STYLES}</style>
      <div className="guarantee-container">
        <div className="guarantee-inner">
          <div className="guarantee-left">
            <div className="guarantee-visual">
              <div className="gv-bg-circle" />
              <div className="gv-bg-circle-2" />

              <div className="gv-top">
                <div className="gv-seal">
                  <div className="gv-seal-ring">
                    <div className="gv-seal-core">
                      <div className="gv-pct">400%</div>
                      <div className="gv-word">Value Guar.</div>
                    </div>
                  </div>
                </div>
                <div className="gv-top-text">
                  <div className="gv-top-title">The 400% Value Guarantee</div>
                  <div className="gv-top-sub">
                    Our promise that you&apos;ll walk away with clarity, confidence, and actionable information.
                  </div>
                </div>
              </div>

              <div className="gv-divider" />

              <div className="gv-quote">
                <div className="gv-quote-text">
                  &quot;If you don&apos;t feel you received at least four times the value of your investment, simply
                  contact us within 7 days and we&apos;ll make it right. No hassle. No arguments.&quot;
                </div>
              </div>

              <div className="gv-points">
                {POINTS.map((point) => (
                  <div className="gv-point" key={point}>
                    <div className="gv-point-check">{POINT_CHECK}</div>
                    <div className="gv-point-text">{point}</div>
                  </div>
                ))}
              </div>

              <div className="gv-stats-row">
                <div className="gv-stat">
                  <div className="gv-stat-num">$125</div>
                  <div className="gv-stat-label">Flat Fee</div>
                </div>
                <div className="gv-stat">
                  <div className="gv-stat-num">15</div>
                  <div className="gv-stat-label">Minutes</div>
                </div>
                <div className="gv-stat">
                  <div className="gv-stat-num">7</div>
                  <div className="gv-stat-label">Day Window</div>
                </div>
              </div>
            </div>
          </div>

          <div className="guarantee-right">
            <span className="guarantee-eyebrow">Risk-Free</span>
            <h2 className="guarantee-title">You Either Get the Clarity You Paid For Or You Get Your Money Back</h2>
            <div className="guarantee-divider" />
            <p className="guarantee-copy">
              We get it. Spending money on a consultation is easy when you know you&apos;re going to get value.
              It&apos;s a lot harder when you&apos;re not sure what you&apos;ll receive in return. That&apos;s
              exactly why we offer the 400% Value Guarantee, so you can book with complete confidence.
            </p>

            <div className="guarantee-highlight">
              <p>
                If you don&apos;t feel you received at least four times the value of your $125 investment, simply
                contact us within 7 days and we&apos;ll make it right. No hassle. No arguments.
              </p>
            </div>

            <div className="guarantee-steps">
              <div className="gs-item">
                <div className="gs-num">1</div>
                <div className="gs-text">
                  <strong>Complete your consultation</strong> - attend your full 15-minute session
                </div>
              </div>
              <div className="gs-item">
                <div className="gs-num">2</div>
                <div className="gs-text">
                  <strong>Request within 7 days</strong> - email tim@iraideas.com if you&apos;re not satisfied
                </div>
              </div>
              <div className="gs-item">
                <div className="gs-num">3</div>
                <div className="gs-text">
                  <strong>Full refund issued</strong> - returned to your original payment method within 5–10
                  business days
                </div>
              </div>
            </div>

            <div className="guarantee-cta-row">
              <a href="#form" className="guarantee-btn">
                Book My Consultation - $125 →
              </a>
              <div className="guarantee-note">
                15 minutes · Instant confirmation
                <br />
                Backed by the 400% Value Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
