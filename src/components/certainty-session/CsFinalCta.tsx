const FINAL_CTA_STYLES = `
.cs-final-cta-section {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  padding: 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.cs-fcs-bg-glow-1 {
  position: absolute;
  top: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(184,153,88,0.06) 0%, transparent 65%);
  pointer-events: none;
}

.cs-fcs-bg-glow-2 {
  position: absolute;
  bottom: -150px; right: -150px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(12,12,12,0.4) 0%, transparent 65%);
  pointer-events: none;
}

.cs-fcs-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.cs-fcs-top {
  padding: 56px 0 0;
  max-width: 640px;
}

.cs-fcs-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 20px;
}

.cs-fcs-eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #B89958;
  animation: csFcsPulse 2s infinite;
}

@keyframes csFcsPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.cs-fcs-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 24px;
  text-transform: none;
}

.cs-fcs-desc {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(255,255,255,0.55);
  margin-bottom: 36px;
  max-width: 480px;
}

.cs-fcs-btn-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 56px;
}

.cs-fcs-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #B89958 !important;
  color: #0C0C0C !important;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 18px 40px;
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(184,153,88,0.4);
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}

.cs-fcs-btn:hover {
  background: #a3854c !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(184,153,88,0.5);
}

.cs-fcs-btn-subtext {
  font-size: 12px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.02em;
}

.cs-fcs-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.cs-fcs-bottom-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cs-fcs-bottom-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(184,153,88,0.08);
  border: 1px solid rgba(184,153,88,0.15);
  border-radius: 8px;
  padding: 10px 16px;
}

.cs-fcs-bottom-badge-seal {
  width: 36px;
  height: 36px;
  background: #B89958;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cs-fcs-bottom-badge-pct {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 11px;
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1;
}

.cs-fcs-bottom-badge-word {
  font-size: 6px;
  font-weight: 700;
  color: rgba(12,12,12,0.7);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cs-fcs-bottom-badge-text strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #B89958;
  margin-bottom: 2px;
}

.cs-fcs-bottom-badge-text span {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  line-height: 1.4;
}

.cs-fcs-bottom-closing {
  font-size: 12px;
  color: rgba(255,255,255,0.3);
  max-width: 460px;
  line-height: 1.6;
}

.cs-fcs-bottom-right {
  font-size: 12px;
  color: rgba(255,255,255,0.25);
  text-align: right;
  line-height: 1.6;
}

@media(max-width: 1024px) {
  .cs-fcs-bottom { flex-direction: column; align-items: flex-start; }
  .cs-fcs-bottom-right { text-align: left; }
}

@media(max-width: 640px) {
  .cs-fcs-container { padding: 0 28px; }
  .cs-fcs-btn { padding: 16px 28px; font-size: 13px; }
  .cs-fcs-bottom-left { flex-direction: column; align-items: flex-start; }
}
`;

export function CsFinalCta() {
  return (
    <section className="cs-final-cta-section">
      <style>{FINAL_CTA_STYLES}</style>
      <div className="cs-fcs-bg-glow-1" />
      <div className="cs-fcs-bg-glow-2" />

      <div className="cs-fcs-container">
        <div className="cs-fcs-top">
          <div className="cs-fcs-eyebrow">
            <span className="cs-fcs-eyebrow-dot" />
            Take the Next Step
          </div>
          <h2 className="cs-fcs-title">Get a Clearer Path Forward in 15 Minutes.</h2>
          <p className="cs-fcs-desc">
            If you&apos;ve been questioning whether a retirement account transaction was handled correctly, now is
            the time to ask. Discuss your concern directly with Tim Berry and understand what may need attention.
          </p>
          <div className="cs-fcs-btn-row">
            <a href="#form" className="cs-fcs-btn">
              Book My $125 Session
            </a>
            <div className="cs-fcs-btn-subtext">15 Minutes | $125 | Secure Booking</div>
          </div>
        </div>

        <div className="cs-fcs-bottom">
          <div className="cs-fcs-bottom-left">
            <div className="cs-fcs-bottom-badge">
              <div className="cs-fcs-bottom-badge-seal">
                <div className="cs-fcs-bottom-badge-pct">400%</div>
                <div className="cs-fcs-bottom-badge-word">Guar.</div>
              </div>
              <div className="cs-fcs-bottom-badge-text">
                <strong>400% Value Guarantee</strong>
                <span>Full refund within 7 days if value isn&apos;t delivered.</span>
              </div>
            </div>
            <div className="cs-fcs-bottom-closing">
              Consultations are for plan administration purposes and are not legal advice; no attorney-client
              relationship is formed.
            </div>
          </div>
          <div className="cs-fcs-bottom-right">© 2026 THE ROTH ACADEMY. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
}
