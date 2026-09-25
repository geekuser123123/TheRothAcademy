const FINAL_CTA_STYLES = `
.final-cta-section {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  padding: 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.fcs-bg-glow-1 {
  position: absolute;
  top: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(184,153,88,0.06) 0%, transparent 65%);
  pointer-events: none;
}

.fcs-bg-glow-2 {
  position: absolute;
  bottom: -150px; right: -150px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(12,12,12,0.4) 0%, transparent 65%);
  pointer-events: none;
}

.fcs-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.fcs-top {
  padding: 40px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.fcs-eyebrow {
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

.fcs-eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #B89958;
  animation: fcsPulse 2s infinite;
}

@keyframes fcsPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.fcs-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 24px;
}

.fcs-title em {
  color: #B89958;
  font-style: normal;
}

.fcs-desc {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(255,255,255,0.55);
  margin-bottom: 40px;
  max-width: 480px;
}

.fcs-btn-row {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.fcs-btn {
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

.fcs-btn:hover {
  background: #a3854c !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(184,153,88,0.5);
}

.fcs-btn-arrow { font-size: 18px; line-height: 1; }

.fcs-trust-row {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.fcs-trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: rgba(255,255,255,0.4);
}

.fcs-trust-icon {
  width: 18px;
  height: 18px;
  color: rgba(184,153,88,0.5);
}

.fcs-trust-sep {
  width: 1px;
  height: 14px;
  background: rgba(255,255,255,0.1);
}

.fcs-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fcs-quote-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 3px solid #B89958;
  border-radius: 0 14px 14px 0;
  padding: 32px 36px;
  position: relative;
}

.fcs-quote-mark {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 80px;
  color: rgba(184,153,88,0.12);
  line-height: 1;
  position: absolute;
  top: 12px;
  right: 24px;
}

.fcs-quote-text {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 18px;
  font-style: italic;
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  margin-bottom: 20px;
  position: relative;
}

.fcs-quote-attr {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
}

.fcs-stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  overflow: hidden;
}

.fcs-stat {
  padding: 22px 16px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.07);
  position: relative;
}

.fcs-stat:last-child { border-right: none; }

.fcs-stat::before {
  content: '';
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 32px; height: 2px;
  background: #B89958;
  opacity: 0;
  transition: opacity 0.2s;
}

.fcs-stat:hover::before { opacity: 1; }

.fcs-stat-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #B89958;
  line-height: 1;
  margin-bottom: 5px;
}

.fcs-stat-label {
  font-size: 10px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.4;
}

.fcs-bottom {
  margin-top: 64px;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.fcs-bottom-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.fcs-bottom-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(184,153,88,0.08);
  border: 1px solid rgba(184,153,88,0.15);
  border-radius: 8px;
  padding: 10px 16px;
}

.fcs-bottom-badge-seal {
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

.fcs-bottom-badge-pct {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 11px;
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1;
}

.fcs-bottom-badge-word {
  font-size: 6px;
  font-weight: 700;
  color: rgba(12,12,12,0.7);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.fcs-bottom-badge-text strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #B89958;
  margin-bottom: 2px;
}

.fcs-bottom-badge-text span {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  line-height: 1.4;
}

.fcs-bottom-closing {
  font-size: 13px;
  color: rgba(255,255,255,0.3);
  font-style: italic;
  max-width: 400px;
  line-height: 1.6;
}

.fcs-bottom-right {
  font-size: 12px;
  color: rgba(255,255,255,0.25);
  text-align: right;
  line-height: 1.6;
}

@media(max-width: 1024px) {
  .fcs-top { grid-template-columns: 1fr; gap: 48px; padding-top: 30px; }
  .fcs-right { max-width: 560px; }
  .fcs-bottom { flex-direction: column; align-items: flex-start; }
  .fcs-bottom-right { text-align: left; }
}

@media(max-width: 640px) {
  .fcs-container { padding: 0 28px; }
  .fcs-btn { padding: 16px 28px; font-size: 13px; }
  .fcs-stats-row { grid-template-columns: 1fr; }
  .fcs-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .fcs-stat:last-child { border-bottom: none; }
  .fcs-bottom-left { flex-direction: column; align-items: flex-start; }
  .fcs-bottom {
    margin: 0;
  }
}
`;

const TRUST_ITEMS = [
  {
    label: "15 focused minutes",
    icon: (
      <svg className="fcs-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Secure payment",
    icon: (
      <svg className="fcs-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: "Instant confirmation",
    icon: (
      <svg className="fcs-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.574 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "400% guarantee",
    icon: (
      <svg className="fcs-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const STATS = [
  { num: "25+", label: "Years of Specialist Experience" },
  { num: "$125", label: "Flat Consultation Fee" },
  { num: "400%", label: "Value Guarantee or Refund" },
];

export function RcsFinalCta() {
  return (
    <section className="final-cta-section">
      <style>{FINAL_CTA_STYLES}</style>
      <div className="fcs-bg-glow-1" />
      <div className="fcs-bg-glow-2" />

      <div className="fcs-container">
        <div className="fcs-top">
          <div className="fcs-left">
            <div className="fcs-eyebrow">
              <span className="fcs-eyebrow-dot" />
              Take the Next Step
            </div>
            <h2 className="fcs-title">
              Spend 15 Minutes Today.
              <br />
              <em>Sleep Better Tonight.</em>
            </h2>
            <p className="fcs-desc">
              The IRS doesn&apos;t care whether a prohibited transaction was accidental. When your retirement plan
              holds significant assets, certainty isn&apos;t a luxury it&apos;s a necessity. Get answers now, before
              uncertainty becomes a problem.
            </p>
            <div className="fcs-btn-row">
              <a href="#form" className="fcs-btn">
                Book My Consultation Now
                <span className="fcs-btn-arrow">→</span>
              </a>
            </div>
            <div className="fcs-trust-row">
              {TRUST_ITEMS.map((item, index) => (
                <div key={item.label} style={{ display: "contents" }}>
                  {index > 0 && <div className="fcs-trust-sep" />}
                  <div className="fcs-trust-item">
                    {item.icon}
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fcs-right">
            <div className="fcs-quote-card">
              <div className="fcs-quote-mark">&quot;</div>
              <div className="fcs-quote-text">
                &quot;The most expensive retirement mistake is often the one you do not know you have made. Get
                clarity before uncertainty becomes a problem.&quot;
              </div>
              <div className="fcs-quote-attr">— IRA Ideas LLC &nbsp;·&nbsp; 25+ Years of Specialist Experience</div>
            </div>

            <div className="fcs-stats-row">
              {STATS.map((stat) => (
                <div className="fcs-stat" key={stat.label}>
                  <div className="fcs-stat-num">{stat.num}</div>
                  <div className="fcs-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fcs-bottom">
          <div className="fcs-bottom-left">
            <div className="fcs-bottom-badge">
              <div className="fcs-bottom-badge-seal">
                <div className="fcs-bottom-badge-pct">400%</div>
                <div className="fcs-bottom-badge-word">Guar.</div>
              </div>
              <div className="fcs-bottom-badge-text">
                <strong>400% Value Guarantee</strong>
                <span>Full refund within 7 days if value isn&apos;t delivered.</span>
              </div>
            </div>
            <div className="fcs-bottom-closing">&quot;Confidence isn&apos;t built on hope. It&apos;s built on knowing.&quot;</div>
          </div>
          <div className="fcs-bottom-right">© 2026 THE ROTH ACADEMY. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
}
