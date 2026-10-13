"use client";

import { useState } from "react";

const FAQ_STYLES = `
.cs-faq-section {
  background: #F5F6F8;
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

.cs-faq-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
}

.cs-faq-inner {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 80px;
  align-items: start;
}

.cs-faq-left {
  position: sticky;
  top: 100px;
}

.cs-faq-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.cs-faq-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.2;
  margin-bottom: 14px;
  text-transform: none;
}

.cs-faq-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin-bottom: 24px;
}

.cs-faq-desc {
  font-size: 15px;
  line-height: 1.85;
  color: #6B7880;
  margin-bottom: 36px;
}

.cs-faq-contact-card {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  border-radius: 14px;
  padding: 28px 28px;
  position: relative;
  overflow: hidden;
}

.cs-faq-contact-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #B89958, rgba(184,153,88,0.2));
}

.cs-fcc-icon {
  width: 44px;
  height: 44px;
  background: rgba(184,153,88,0.12);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.cs-fcc-icon svg {
  width: 22px;
  height: 22px;
  color: #B89958;
}

.cs-fcc-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.3;
}

.cs-fcc-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  line-height: 1.65;
  margin-bottom: 20px;
}

.cs-fcc-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #B89958;
  color: #0C0C0C !important;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 22px;
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(184,153,88,0.3);
  transition: background 0.2s, transform 0.15s;
}

.cs-fcc-btn:hover {
  background: #a3854c !important;
  transform: translateY(-1px);
}

.cs-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #E2E5E9;
  border-radius: 14px;
  overflow: hidden;
}

.cs-faq-item {
  border-bottom: 1px solid #E2E5E9;
  background: #ffffff;
  transition: background 0.2s;
}

.cs-faq-item:last-child {
  border-bottom: none;
}

.cs-faq-item.open {
  background: #FAFBFC;
}

.cs-faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 28px;
  cursor: pointer;
  user-select: none;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
}

.cs-faq-q-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cs-faq-q-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 13px;
  font-weight: 700;
  color: #D0D5DA;
  min-width: 24px;
  line-height: 1;
}

.cs-faq-item.open .cs-faq-q-num {
  color: #B89958;
}

.cs-faq-q-text {
  font-size: 15px;
  font-weight: 600;
  color: #0C0C0C;
  line-height: 1.4;
}

.cs-faq-toggle {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background: #F0F2F4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.3s;
}

.cs-faq-item.open .cs-faq-toggle {
  background: #B89958;
  transform: rotate(45deg);
}

.cs-faq-toggle svg {
  width: 14px;
  height: 14px;
  color: #6B7880;
  transition: color 0.2s;
}

.cs-faq-item.open .cs-faq-toggle svg {
  color: #0C0C0C;
}

.cs-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
  padding: 0 28px 0 68px;
}

.cs-faq-item.open .cs-faq-answer {
  max-height: 300px;
  padding: 0 28px 22px 68px;
}

.cs-faq-answer-inner {
  font-size: 14px;
  line-height: 1.8;
  color: #6B7880;
  border-top: 1px solid #F0F2F4;
  padding-top: 16px;
}

.cs-faq-bottom {
  margin-top: 32px;
  background: #F5F6F8;
  border: 1px solid #E2E5E9;
  border-radius: 10px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.cs-faq-bottom-text {
  font-size: 14px;
  color: #6B7880;
  line-height: 1.5;
}

.cs-faq-bottom-text strong {
  color: #0C0C0C;
  display: block;
  margin-bottom: 2px;
}

.cs-faq-bottom-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #0C0C0C !important;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
}

.cs-faq-bottom-link:hover { color: #B89958 !important; }

@media(max-width: 1024px) {
  .cs-faq-inner { grid-template-columns: 1fr; gap: 48px; }
  .cs-faq-left { position: static; max-width: 560px; }
}

@media(max-width: 640px) {
  .cs-faq-container { padding: 0 20px; }
  .cs-faq-section { padding: 30px 0; }
  .cs-faq-question { padding: 18px 20px; }
  .cs-faq-answer { padding: 0 20px 0 56px; }
  .cs-faq-item.open .cs-faq-answer { padding: 0 20px 18px 56px; }
}
`;

const PLUS_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const FAQS = [
  {
    q: "Is 15 minutes enough time?",
    a: "The consultation is designed to focus on one specific question or transaction rather than review your entire retirement plan. Fifteen focused minutes can help identify concerns and clarify possible next steps. If more detailed work is needed, additional services can be discussed.",
  },
  {
    q: "Can we discuss a transaction I've already completed?",
    a: "Yes. Many investors have questions about real estate purchases, private loans, Checkbook LLC structures, or other transactions they've already completed. Bring your specific concern to the session.",
  },
  {
    q: "Does this include a complete review of my retirement plan?",
    a: "No. The $125 consultation focuses on one primary issue. A comprehensive document review, plan audit, or extensive corrective work is not included in the 15-minute appointment.",
  },
  {
    q: "What happens if I need additional assistance?",
    a: "If your situation requires further research, document review, or corrective action, Tim can explain possible next steps. Additional services can be discussed separately.",
  },
];

export function CsFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="cs-faq-section" id="faq">
      <style>{FAQ_STYLES}</style>
      <div className="cs-faq-container">
        <div className="cs-faq-inner">
          <div className="cs-faq-left">
            <span className="cs-faq-eyebrow">Common Questions</span>
            <h2 className="cs-faq-title">Everything You Need to Know Before Booking</h2>
            <div className="cs-faq-divider" />
            <p className="cs-faq-desc">
              Most questions are answered below. If you have something specific that isn&apos;t covered here, reach
              out directly and we&apos;ll get back to you promptly.
            </p>

            <div className="cs-faq-contact-card">
              <div className="cs-fcc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="cs-fcc-title">Still Have a Question?</div>
              <div className="cs-fcc-desc">
                If you&apos;re not sure whether this consultation is right for your situation, reach out before
                booking. We&apos;re happy to help you decide.
              </div>
              <a href="mailto:tim@iraideas.com" className="cs-fcc-btn">
                Email Us Directly →
              </a>
            </div>
          </div>

          <div className="cs-faq-right">
            <div className="cs-faq-list">
              {FAQS.map((item, index) => {
                const isOpen = index === openIndex;
                return (
                  <div className={"cs-faq-item" + (isOpen ? " open" : "")} key={item.q}>
                    <button
                      type="button"
                      className="cs-faq-question"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="cs-faq-q-left">
                        <div className="cs-faq-q-num">{String(index + 1).padStart(2, "0")}</div>
                        <div className="cs-faq-q-text">{item.q}</div>
                      </div>
                      <div className="cs-faq-toggle">{PLUS_ICON}</div>
                    </button>
                    <div className="cs-faq-answer">
                      <div className="cs-faq-answer-inner">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cs-faq-bottom">
              <div className="cs-faq-bottom-text">
                <strong>Don&apos;t see your question?</strong>
                Reach out directly and we&apos;ll be happy to help before you book.
              </div>
              <a href="mailto:tim@iraideas.com" className="cs-faq-bottom-link">
                tim@iraideas.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
