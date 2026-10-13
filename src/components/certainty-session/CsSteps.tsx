const STEPS_STYLES = `
.cs-steps-section {
  background: #F5F6F8;
  padding: 56px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

.cs-steps-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
}

.cs-steps-header {
  text-align: center;
  margin-bottom: 48px;
}

.cs-steps-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.cs-steps-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.15;
  margin-bottom: 16px;
  text-transform: none;
}

.cs-steps-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin: 0 auto 22px;
}

.cs-steps-desc {
  font-size: 16px;
  line-height: 1.8;
  color: #6B7880;
  max-width: 560px;
  margin: 0 auto;
}

.cs-steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cs-step-card {
  background: #ffffff;
  border: 1px solid #E2E5E9;
  border-radius: 12px;
  padding: 32px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s, transform 0.25s;
}

.cs-step-card:hover {
  box-shadow: 0 16px 40px rgba(0,0,0,0.09);
  transform: translateY(-4px);
}

.cs-step-num {
  width: 44px;
  height: 44px;
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
  margin-bottom: 20px;
}

.cs-step-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #0C0C0C;
  margin-bottom: 10px;
  line-height: 1.25;
}

.cs-step-desc {
  font-size: 14px;
  line-height: 1.75;
  color: #8C959D;
}

.cs-steps-disclosure {
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid #E2E5E9;
  font-size: 12px;
  line-height: 1.7;
  color: #9AA3AA;
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

@media(max-width: 900px) {
  .cs-steps-grid {
    grid-template-columns: 1fr;
  }
}

@media(max-width: 640px) {
  .cs-steps-section { padding: 36px 0; }
  .cs-steps-container { padding: 0 20px; }
  .cs-step-card { padding: 26px 22px; }
}
`;

const STEPS = [
  {
    title: "Explain Your Concern",
    desc: "Discuss one specific transaction, investment structure, or compliance question directly with Tim Berry.",
  },
  {
    title: "Identify Potential Problems",
    desc: "Discuss the relevant requirements and identify issues that could need additional attention.",
  },
  {
    title: "Understand Your Next Steps",
    desc: "Get clearer direction about your situation and whether further research, documentation, or corrective action may be necessary.",
  },
];

export function CsSteps() {
  return (
    <section className="cs-steps-section">
      <style>{STEPS_STYLES}</style>
      <div className="cs-steps-container">
        <div className="cs-steps-header">
          <span className="cs-steps-eyebrow">The Process</span>
          <h2 className="cs-steps-title">What Happens During Your 15-Minute Session?</h2>
          <div className="cs-steps-divider" />
          <p className="cs-steps-desc">
            Bring your most important IRA or 401(k) question. We&apos;ll focus on that specific issue and help you
            understand the potential risks and next steps.
          </p>
        </div>

        <div className="cs-steps-grid">
          {STEPS.map((step, index) => (
            <div className="cs-step-card" key={step.title}>
              <div className="cs-step-num">{index + 1}</div>
              <div className="cs-step-title">{step.title}</div>
              <div className="cs-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        <p className="cs-steps-disclosure">
          This is a focused consultation addressing one primary concern, not a comprehensive audit of your entire
          retirement plan. More detailed services can be discussed separately when needed.
        </p>
      </div>
    </section>
  );
}
