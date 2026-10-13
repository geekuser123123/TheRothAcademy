const TESTI_STYLES = `
.cs-testi-section {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.cs-testi-section::before {
  content: '';
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(184,153,88,0.05) 0%, transparent 70%);
  pointer-events: none;
}

.cs-testi-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.cs-testi-header {
  text-align: center;
  margin-bottom: 56px;
}

.cs-testi-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.cs-testi-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(30px, 3.5vw, 44px);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.15;
  text-transform: none;
}

.cs-testi-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin: 0 auto 20px;
}

.cs-testi-subtitle {
  font-size: 16px;
  color: rgba(255,255,255,0.45);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

.cs-testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cs-testi-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 36px 32px 28px;
  display: flex;
  flex-direction: column;
}

.cs-testi-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}

.cs-testi-stars {
  display: flex;
  gap: 3px;
}

.cs-testi-star {
  color: #B89958;
  font-size: 15px;
  line-height: 1;
}

.cs-testi-quote-icon {
  width: 32px;
  height: 32px;
  background: rgba(184,153,88,0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cs-testi-quote-icon svg {
  width: 16px;
  height: 16px;
  color: #B89958;
  opacity: 0.6;
}

.cs-testi-text {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255,255,255,0.75);
  margin-bottom: 28px;
  flex-grow: 1;
  font-style: italic;
}

.cs-testi-separator {
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin-bottom: 22px;
}

.cs-testi-author-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.cs-testi-avatar {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cs-testi-avatar svg {
  width: 22px;
  height: 22px;
  color: rgba(255,255,255,0.35);
}

.cs-testi-name {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 3px;
  line-height: 1.2;
}

.cs-testi-role {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.03em;
}

.cs-testi-tag {
  display: inline-block;
  background: rgba(184,153,88,0.12);
  border: 1px solid rgba(184,153,88,0.2);
  border-radius: 4px;
  padding: 3px 10px;
  font-size: 10px;
  font-weight: 600;
  color: #B89958;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-left: auto;
  align-self: center;
  white-space: nowrap;
}

@media(max-width: 1024px) {
  .cs-testi-grid { grid-template-columns: 1fr; }
}

@media(max-width: 640px) {
  .cs-testi-container { padding: 0 20px; }
  .cs-testi-section { padding: 30px 0; }
  .cs-testi-card { padding: 28px 22px 22px; }
}
`;

const QUOTE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const AVATAR_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TESTIMONIALS = [
  {
    quote:
      "Always an excellent experience working with you. The clarity I received gave me the confidence to move forward knowing my plan was fully compliant.",
    name: "Solo 401(k) Plan Holder",
    role: "Compliance Consultation",
    tag: "401(k)",
  },
  {
    quote:
      "Thank you for spending the extra time with us. We definitely regret not knowing and having started our Roth's months ago, this was exactly the guidance we needed.",
    name: "Retirement Account Investor",
    role: "Roth IRA Structure Review",
    tag: "Roth",
  },
  {
    quote:
      "Tim Berry is an attorney you need to work with! He is a good listener, accessible and respectful of your time. He has great knowledge with retirement planning and the many nuances involved. Tim is the whole package incredibly helpful. I highly recommend him.",
    name: "Verified Client",
    role: "Retirement Plan Consultation",
    tag: "Verified",
  },
];

export function CsTestimonials() {
  return (
    <section className="cs-testi-section">
      <style>{TESTI_STYLES}</style>
      <div className="cs-testi-container">
        <div className="cs-testi-header">
          <span className="cs-testi-eyebrow">Client Feedback</span>
          <h2 className="cs-testi-title">What Investors Are Saying</h2>
          <div className="cs-testi-divider" />
          <p className="cs-testi-subtitle">
            Hear from investors who have worked with Tim Berry on retirement planning and compliance concerns.
          </p>
        </div>

        <div className="cs-testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="cs-testi-card" key={t.name + t.role}>
              <div className="cs-testi-top-row">
                <div className="cs-testi-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span className="cs-testi-star" key={i}>
                      ★
                    </span>
                  ))}
                </div>
                <div className="cs-testi-quote-icon">{QUOTE_ICON}</div>
              </div>
              <div className="cs-testi-text">&quot;{t.quote}&quot;</div>
              <div className="cs-testi-separator" />
              <div className="cs-testi-author-row">
                <div className="cs-testi-avatar">{AVATAR_ICON}</div>
                <div>
                  <div className="cs-testi-name">{t.name}</div>
                  <div className="cs-testi-role">{t.role}</div>
                </div>
                <div className="cs-testi-tag">{t.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
