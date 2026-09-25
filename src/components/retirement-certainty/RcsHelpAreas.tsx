const FOCUS_STYLES = `
.focus-section {
  background: #fff;
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

.focus-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
}

.focus-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 56px;
  gap: 24px;
  flex-wrap: wrap;
}

.focus-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 12px;
}

.focus-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.15;
  margin-bottom: 14px;
  text-transform: none;
}

.focus-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
}

.focus-header-right {
  max-width: 380px;
}

.focus-header-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #8C959D;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.focus-card {
  background: #ffffff;
  border: 1px solid #E2E5E9;
  border-radius: 14px;
  padding: 32px 28px 28px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
}

.focus-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--card-color, #0C0C0C);
  opacity: 0;
  transition: opacity 0.25s;
}

.focus-card:hover {
  box-shadow: 0 16px 48px rgba(0,0,0,0.09);
  transform: translateY(-4px);
  border-color: transparent;
}

.focus-card:hover::before {
  opacity: 1;
}

.focus-card-1 { --card-color: #0C0C0C; }
.focus-card-2 { --card-color: #0C0C0C; }
.focus-card-3 { --card-color: #B89958; }
.focus-card-4 { --card-color: #0C0C0C; }

.fc-number {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 11px;
  font-weight: 700;
  color: #D0D5DA;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}

.fc-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: var(--icon-bg, rgba(12,12,12,0.08));
}

.focus-card-1 .fc-icon-wrap { background: rgba(12,12,12,0.08); }
.focus-card-2 .fc-icon-wrap { background: rgba(12,12,12,0.08); }
.focus-card-3 .fc-icon-wrap { background: rgba(184,153,88,0.1); }
.focus-card-4 .fc-icon-wrap { background: rgba(12,12,12,0.08); }

.fc-icon-wrap svg {
  width: 26px;
  height: 26px;
}

.focus-card-1 .fc-icon-wrap svg { color: #0C0C0C; }
.focus-card-2 .fc-icon-wrap svg { color: #0C0C0C; }
.focus-card-3 .fc-icon-wrap svg { color: #B89958; }
.focus-card-4 .fc-icon-wrap svg { color: #0C0C0C; }

.fc-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #0C0C0C;
  margin-bottom: 10px;
  line-height: 1.3;
}

.fc-desc {
  font-size: 13px;
  line-height: 1.75;
  color: #8C959D;
  margin-bottom: 24px;
}

.fc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 24px;
}

.fc-tag {
  background: #F5F6F8;
  border: 1px solid #E2E5E9;
  border-radius: 100px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 500;
  color: #5A6872;
}

.fc-footer {
  border-top: 1px solid #F0F2F4;
  padding-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fc-included {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: #0C0C0C;
}

.fc-included-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #B89958;
}

.fc-arrow {
  width: 30px;
  height: 30px;
  background: #F5F6F8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.focus-card:hover .fc-arrow {
  background: #B89958;
}

.fc-arrow svg {
  width: 14px;
  height: 14px;
  color: #8C959D;
  transition: color 0.2s;
}

.focus-card:hover .fc-arrow svg {
  color: #0C0C0C;
}

.focus-bottom {
  background: linear-gradient(135deg, #0C0C0C 0%, #1a1a1a 100%);
  border-radius: 14px;
  padding: 36px 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}

.focus-bottom::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(184,153,88,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.fb-left {
  position: relative;
}

.fb-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 6px;
  line-height: 1.3;
}

.fb-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  line-height: 1.6;
  max-width: 500px;
}

.fb-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
}

.fb-stat {
  text-align: center;
}

.fb-stat-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: #B89958;
  line-height: 1;
  margin-bottom: 4px;
}

.fb-stat-label {
  font-size: 10px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.fb-stat-sep {
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.1);
}

.fb-cta {
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
  padding: 15px 28px;
  border-radius: 7px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 6px 20px rgba(184,153,88,0.3);
  transition: background 0.2s, transform 0.15s;
  position: relative;
}

.fb-cta:hover {
  background: #a3854c !important;
  transform: translateY(-1px);
}

@media(max-width: 1100px) {
  .focus-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding: 20px 40px;
    margin: 0 -40px;
  }

  .focus-grid::-webkit-scrollbar {
    display: none;
  }

  .focus-card {
    flex: 0 0 75%;
    max-width: 380px;
    scroll-snap-align: center;
  }
}

@media(max-width: 768px) {
  .focus-header { flex-direction: column; align-items: flex-start; }
  .focus-header-right { max-width: 100%; }
  .focus-bottom { flex-direction: column; align-items: flex-start; }
  .fb-stats { flex-wrap: wrap; gap: 20px; }
}

@media(max-width: 640px) {
  .focus-container { padding: 0 20px; }
  .focus-section { padding: 30px 0; }
  .focus-bottom { padding: 28px 24px; }

  .focus-grid {
    padding: 20px 20px;
    margin: 0 -20px;
    margin-top: -60px !important;
  }

  .focus-card {
    flex: 0 0 85%;
  }
}
`;

const ARROW_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CARDS = [
  {
    cls: "focus-card-1",
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Self-Directed IRA Compliance",
    desc: "Guidance on prohibited transactions, asset titling, related-party rules, and whether your IRA structure meets IRS requirements.",
    tags: ["Prohibited Transactions", "Asset Titling", "Related-Party Rules"],
  },
  {
    cls: "focus-card-2",
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Solo 401(k) Plan Review",
    desc: "Review of Solo 401(k) compliance, contribution rules, checkbook LLC structures, and plan documentation or correction needs.",
    tags: ["Contribution Rules", "Checkbook LLC", "Plan Corrections"],
  },
  {
    cls: "focus-card-3",
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Real Estate & Private Lending",
    desc: "Review of real estate investments, private loans, asset titling, and related-party transaction concerns within retirement accounts.",
    tags: ["Property Transactions", "Private Loans", "Asset Titling"],
  },
  {
    cls: "focus-card-4",
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    title: "Corrective Action Planning",
    desc: "Review of past transactions, identification of potential mistakes, and a clear discussion of correction options available to you.",
    tags: ["Past Transactions", "Error Correction", "Risk Mitigation"],
  },
];

export function RcsHelpAreas() {
  return (
    <section className="focus-section" id="focus">
      <style>{FOCUS_STYLES}</style>
      <div className="focus-container">
        <div className="focus-header">
          <div className="focus-header-left">
            <span className="focus-eyebrow">Areas of Focus</span>
            <h2 className="focus-title">What We Can Help You With</h2>
            <div className="focus-divider" />
          </div>
          <div className="focus-header-right">
            <p className="focus-header-desc">
              In just 15 focused minutes, receive guidance on the specific issues that matter most to self-directed
              retirement investors.
            </p>
          </div>
        </div>

        <div className="focus-grid">
          {CARDS.map((card) => (
            <div className={"focus-card " + card.cls} key={card.title}>
              <div className="fc-number">{card.number}</div>
              <div className="fc-icon-wrap">{card.icon}</div>
              <div className="fc-title">{card.title}</div>
              <div className="fc-desc">{card.desc}</div>
              <div className="fc-tags">
                {card.tags.map((tag) => (
                  <span className="fc-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="fc-footer">
                <div className="fc-included">
                  <span className="fc-included-dot" />
                  Included in session
                </div>
                <div className="fc-arrow">{ARROW_ICON}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="focus-bottom">
          <div className="fb-left">
            <div className="fb-title">All four areas are covered in a single 15-minute session.</div>
            <div className="fb-sub">
              Bring your most pressing question and walk away with clarity, direction, and a path forward, backed by
              more than 25 years of specialist experience.
            </div>
          </div>
          <div className="fb-stats">
            <div className="fb-stat">
              <div className="fb-stat-num">15</div>
              <div className="fb-stat-label">Minutes</div>
            </div>
            <div className="fb-stat-sep" />
            <div className="fb-stat">
              <div className="fb-stat-num">$125</div>
              <div className="fb-stat-label">Flat Fee</div>
            </div>
            <div className="fb-stat-sep" />
            <div className="fb-stat">
              <div className="fb-stat-num">400%</div>
              <div className="fb-stat-label">Guarantee</div>
            </div>
          </div>
          <a href="#form" className="fb-cta">
            Book My Consultation Now →
          </a>
        </div>
      </div>
    </section>
  );
}
