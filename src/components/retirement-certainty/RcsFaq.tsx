"use client";

import { useState } from "react";

const FAQ_STYLES = `
.faq-section {
  background: #F5F6F8;
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

.faq-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
}

.faq-inner {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 80px;
  align-items: start;
}

.faq-left {
  position: sticky;
  top: 100px;
}

.faq-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.faq-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.2;
  margin-bottom: 14px;
}

.faq-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin-bottom: 24px;
}

.faq-desc {
  font-size: 15px;
  line-height: 1.85;
  color: #6B7880;
  margin-bottom: 36px;
}

.faq-contact-card {
  background: linear-gradient(150deg, #0C0C0C 0%, #1a1a1a 100%);
  border-radius: 14px;
  padding: 28px 28px;
  position: relative;
  overflow: hidden;
}

.faq-contact-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #B89958, rgba(184,153,88,0.2));
}

.fcc-icon {
  width: 44px;
  height: 44px;
  background: rgba(184,153,88,0.12);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.fcc-icon svg {
  width: 22px;
  height: 22px;
  color: #B89958;
}

.fcc-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.3;
}

.fcc-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  line-height: 1.65;
  margin-bottom: 20px;
}

.fcc-btn {
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

.fcc-btn:hover {
  background: #a3854c !important;
  transform: translateY(-1px);
}

.faq-categories {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #E2E5E9;
  border-radius: 14px;
  overflow: hidden;
}

.faq-item {
  border-bottom: 1px solid #E2E5E9;
  background: #ffffff;
  transition: background 0.2s;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item.open {
  background: #FAFBFC;
}

.faq-question {
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

.faq-q-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.faq-q-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 13px;
  font-weight: 700;
  color: #D0D5DA;
  min-width: 24px;
  line-height: 1;
}

.faq-item.open .faq-q-num {
  color: #B89958;
}

.faq-q-text {
  font-size: 15px;
  font-weight: 600;
  color: #0C0C0C;
  line-height: 1.4;
}

.faq-item.open .faq-q-text {
  color: #0C0C0C;
}

.faq-toggle {
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

.faq-item.open .faq-toggle {
  background: #B89958;
  transform: rotate(45deg);
}

.faq-toggle svg {
  width: 14px;
  height: 14px;
  color: #6B7880;
  transition: color 0.2s;
}

.faq-item.open .faq-toggle svg {
  color: #0C0C0C;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
  padding: 0 28px 0 68px;
}

.faq-item.open .faq-answer {
  max-height: 300px;
  padding: 0 28px 22px 68px;
}

.faq-answer-inner {
  font-size: 14px;
  line-height: 1.8;
  color: #6B7880;
  border-top: 1px solid #F0F2F4;
  padding-top: 16px;
}

.faq-bottom {
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

.faq-bottom-text {
  font-size: 14px;
  color: #6B7880;
  line-height: 1.5;
}

.faq-bottom-text strong {
  color: #0C0C0C;
  display: block;
  margin-bottom: 2px;
}

.faq-bottom-link {
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

.faq-bottom-link:hover { color: #B89958 !important; }

@media(max-width: 1024px) {
  .faq-inner { grid-template-columns: 1fr; gap: 48px; }
  .faq-left { position: static; max-width: 560px; }
}

@media(max-width: 640px) {
  .faq-container { padding: 0 20px; }
  .faq-section { padding: 30px 0; }
  .faq-question { padding: 18px 20px; }
  .faq-answer { padding: 0 20px 0 56px; }
  .faq-item.open .faq-answer { padding: 0 20px 18px 56px; }
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
    q: "Is 15 minutes really enough time?",
    a: "Most investors need clarity regarding one specific issue. Fifteen focused minutes is often enough to identify concerns, answer questions, and determine appropriate next steps. If a more detailed review is needed, additional services can be discussed.",
  },
  {
    q: "Can past transactions be reviewed?",
    a: "Yes. Many consultations involve reviewing prior actions and determining whether corrective measures should be considered. It's never too late to get clarity on something that has already occurred.",
  },
  {
    q: "Is this only for Self-Directed IRAs?",
    a: "No. This consultation is available for both Self-Directed IRAs and Self-Directed 401(k)s, including Solo 401(k) plans. Checkbook LLC structures, real estate investments, and private lending transactions within either account type can also be discussed.",
  },
  {
    q: "What if I haven't made an investment yet?",
    a: "This is actually the ideal time to ask questions before completing a transaction. Getting clarity before you invest is the most effective way to avoid costly mistakes and ensure the transaction is structured correctly from the start.",
  },
  {
    q: "Can you review Checkbook LLC situations?",
    a: "Yes. Checkbook LLC compliance, structure, and related-party concerns are among the most commonly discussed topics during consultations. Whether your LLC is new or has been operating for years, these issues can be reviewed during your session.",
  },
  {
    q: "Can you review real estate and private lending?",
    a: "Yes. Both real estate transactions and private lending through retirement accounts can be reviewed during your session, including asset titling questions, related-party concerns, and whether past transactions were structured correctly.",
  },
  {
    q: "What if I need more help after the session?",
    a: "If further assistance is required beyond the 15 minutes, additional services can be discussed at the conclusion of your consultation. The Retirement Certainty Session is often the first step toward a more complete review when needed.",
  },
  {
    q: "Why is the consultation only $125?",
    a: "Our goal is to make professional guidance accessible before small issues become larger problems. Many investors simply need clarity on one specific question or transaction. This focused session is designed to provide exactly that quickly and affordably.",
  },
];

export function RcsFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <style>{FAQ_STYLES}</style>
      <div className="faq-container">
        <div className="faq-inner">
          <div className="faq-left">
            <span className="faq-eyebrow">Common Questions</span>
            <h2 className="faq-title">Everything You Need to Know Before Booking</h2>
            <div className="faq-divider" />
            <p className="faq-desc">
              Most questions are answered below. If you have something specific that isn&apos;t covered here, reach
              out directly and we&apos;ll get back to you promptly.
            </p>

            <div className="faq-contact-card">
              <div className="fcc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="fcc-title">Still Have a Question?</div>
              <div className="fcc-desc">
                If you&apos;re not sure whether this consultation is right for your situation, reach out before
                booking. We&apos;re happy to help you decide.
              </div>
              <a href="mailto:tim@iraideas.com" className="fcc-btn">
                Email Us Directly →
              </a>
            </div>
          </div>

          <div className="faq-right">
            <div className="faq-list" id="faqList">
              {FAQS.map((item, index) => {
                const isOpen = index === openIndex;
                return (
                  <div className={"faq-item" + (isOpen ? " open" : "")} key={item.q}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-q-left">
                        <div className="faq-q-num">{String(index + 1).padStart(2, "0")}</div>
                        <div className="faq-q-text">{item.q}</div>
                      </div>
                      <div className="faq-toggle">{PLUS_ICON}</div>
                    </button>
                    <div className="faq-answer">
                      <div className="faq-answer-inner">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="faq-bottom">
              <div className="faq-bottom-text">
                <strong>Don&apos;t see your question?</strong>
                Reach out directly and we&apos;ll be happy to help before you book.
              </div>
              <a href="mailto:tim@iraideas.com" className="faq-bottom-link">
                tim@iraideas.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
