"use client";

import { useEffect, useRef } from "react";

const TESTI_STYLES = `
.testi-section {
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.testi-section::before {
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

.testi-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.testi-header {
  text-align: center;
  margin-bottom: 56px;
}

.testi-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 14px;
}

.testi-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(30px, 3.5vw, 44px);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.15;
}

.testi-divider {
  width: 52px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
  margin: 0 auto 20px;
}

.testi-subtitle {
  font-size: 16px;
  color: rgba(255,255,255,0.45);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

.testi-slider-wrap {
  position: relative;
}

.testi-slider-viewport {
  overflow: hidden;
}

.testi-slider-track {
  display: flex;
  gap: 24px;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  align-items: stretch;
}

.testi-card {
  flex: 0 0 calc(33.333% - 16px);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 36px 32px 28px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.testi-card.testi-card-featured {
  background: rgba(184,153,88,0.07);
  border-color: rgba(184,153,88,0.25);
}

.testi-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}

.testi-stars {
  display: flex;
  gap: 3px;
}

.testi-star {
  color: #B89958;
  font-size: 15px;
  line-height: 1;
}

.testi-quote-icon {
  width: 32px;
  height: 32px;
  background: rgba(184,153,88,0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.testi-quote-icon svg {
  width: 16px;
  height: 16px;
  color: #B89958;
  opacity: 0.6;
}

.testi-text {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255,255,255,0.75);
  margin-bottom: 28px;
  flex-grow: 1;
  font-style: italic;
}

.testi-separator {
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin-bottom: 22px;
}

.testi-author-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.testi-avatar {
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

.testi-avatar svg {
  width: 22px;
  height: 22px;
  color: rgba(255,255,255,0.35);
}

.testi-name {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 3px;
  line-height: 1.2;
}

.testi-role {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.03em;
}

.testi-tag {
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

.testi-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 36px;
}

.testi-arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06) !important;
  border: 1px solid rgba(255,255,255,0.14) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
  flex-shrink: 0;
}

.testi-arrow:hover {
  background: #B89958 !important;
  border-color: #B89958 !important;
  transform: scale(1.06);
}

.testi-arrow:hover svg { color: #0C0C0C; }

.testi-arrow svg {
  width: 18px;
  height: 18px;
  color: rgba(255,255,255,0.65);
  transition: color 0.2s;
}

.testi-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.testi-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2) !important;
  cursor: pointer;
  transition: background 0.25s, width 0.3s;
  border: none !important;
  padding: 0;
}

.testi-dot.active {
  background: #B89958 !important;
  width: 24px;
  border-radius: 4px;
}

.testi-bottom-strip {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 28px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.tbs-left {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.tbs-stat { text-align: center; }

.tbs-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #B89958;
  line-height: 1;
  margin-bottom: 4px;
}

.tbs-label {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tbs-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.08);
}

.tbs-text {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 16px;
  font-style: italic;
  color: rgba(255,255,255,0.55);
  line-height: 1.6;
  max-width: 400px;
}

.tbs-cta {
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
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 6px 20px rgba(184,153,88,0.3);
  transition: background 0.2s, transform 0.15s;
}

.tbs-cta:hover {
  background: #a3854c !important;
  transform: translateY(-1px);
}

@media(max-width: 1024px) {
  .testi-card { flex: 0 0 calc(50% - 12px); }
}

@media(max-width: 640px) {
  .testi-container { padding: 0 20px; }
  .testi-section { padding: 30px 0; }
  .testi-card { flex: 0 0 100%; padding: 28px 22px 22px; }
  .testi-bottom-strip { padding: 24px; flex-direction: column; text-align: center; }
  .tbs-left { justify-content: center; }
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
    featured: false,
    quote:
      "Thanks very much for the thoughtful response. We are already more than pregnant with the structure, so really it is a matter of figuring out how best to minimize any risks at this juncture.",
    name: "Self-Directed IRA Investor",
    role: "Real Estate Structure Review",
    tag: "IRA",
  },
  {
    featured: true,
    quote:
      "Always an excellent experience working with you. The clarity I received gave me the confidence to move forward knowing my plan was fully compliant.",
    name: "Solo 401(k) Plan Holder",
    role: "Compliance Consultation",
    tag: "401(k)",
  },
  {
    featured: false,
    quote:
      "Thank you for spending the extra time with us. We definitely regret not knowing and having started our Roth's months ago, this was exactly the guidance we needed.",
    name: "Retirement Account Investor",
    role: "Roth IRA Structure Review",
    tag: "Roth",
  },
  {
    featured: false,
    quote:
      "Tim Berry is an attorney you need to work with! He is a good listener, accessible and respectful of your time. He has great knowledge with retirement planning and the many nuances involved. Tim is the whole package incredibly helpful. I highly recommend him.",
    name: "Verified Client",
    role: "Retirement Plan Consultation",
    tag: "Verified",
  },
  {
    featured: true,
    quote:
      "A man qualified to talk straight simple language to usually confused IRS agents. Not a 10-page response short, sweet, and to the point. Tim does not relent over $50k in penalties gone. And his fee is embarrassingly fair.",
    name: "Verified Client",
    role: "IRS Penalty Resolution",
    tag: "$50k+ Saved",
  },
  {
    featured: false,
    quote:
      "I was told: 'You ever hear of Batman living in a Batcave?' That's Tim, in a Batcave with IRS books all around him. He reads those books and he knows the law. He knows the law and it's huge.",
    name: "Verified Client",
    role: "IRS Compliance Review",
    tag: "IRS Expert",
  },
  {
    featured: false,
    quote:
      "My whole goal is to pay the taxes I owe but not a penny more. Using legal strategies, because there are smarter people who make more money and pay less taxes. The tools and tips you offer are going to be instrumental.",
    name: "Verified Client",
    role: "Tax Strategy Consultation",
    tag: "Tax Strategy",
  },
  {
    featured: true,
    quote:
      "Having access to this level of advanced information makes you feel lucky. Just knowing that we have access to it. I don't even think I can process yet just how powerful this has been.",
    name: "Verified Client",
    role: "Advanced Retirement Planning",
    tag: "Planning",
  },
];

export function RcsTestimonials() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const track = root.querySelector<HTMLElement>("#testiTrack");
    const dotsWrap = root.querySelector<HTMLElement>("#testiDots");
    const prevBtn = root.querySelector<HTMLButtonElement>("#testiPrev");
    const nextBtn = root.querySelector<HTMLButtonElement>("#testiNext");
    const viewport = root.querySelector<HTMLElement>(".testi-slider-viewport");
    if (!track || !dotsWrap || !prevBtn || !nextBtn || !viewport) return;

    const cards = track.querySelectorAll<HTMLElement>(".testi-card");
    const total = cards.length;
    let current = 0;
    let perPage = 3;
    const gap = 24;
    let autoTimer: ReturnType<typeof setInterval> | undefined;

    function pages() {
      return total - perPage + 1;
    }

    function cardWidth() {
      const vw = viewport!.offsetWidth;
      return (vw - gap * (perPage - 1)) / perPage;
    }

    function setWidths() {
      const cw = cardWidth();
      cards.forEach((c) => {
        c.style.flex = "0 0 " + cw + "px";
      });
      track!.style.gap = gap + "px";
    }

    function buildDots() {
      dotsWrap!.innerHTML = "";
      for (let i = 0; i < pages(); i++) {
        const d = document.createElement("button");
        d.className = "testi-dot" + (i === 0 ? " active" : "");
        d.setAttribute("aria-label", "Slide " + (i + 1));
        d.addEventListener("click", () => {
          stopAuto();
          goTo(i);
          startAuto();
        });
        dotsWrap!.appendChild(d);
      }
    }

    function goTo(idx: number) {
      current = Math.max(0, Math.min(idx, pages() - 1));
      const offset = current * (cardWidth() + gap);
      track!.style.transform = "translateX(-" + offset + "px)";
      dotsWrap!.querySelectorAll(".testi-dot").forEach((d, i) => {
        d.classList.toggle("active", i === current);
      });
    }

    function next() {
      goTo(current + 1 >= pages() ? 0 : current + 1);
    }
    function prev() {
      goTo(current - 1 < 0 ? pages() - 1 : current - 1);
    }

    function startAuto() {
      autoTimer = setInterval(next, 4500);
    }
    function stopAuto() {
      clearInterval(autoTimer);
    }

    function onNext() {
      stopAuto();
      next();
      startAuto();
    }
    function onPrev() {
      stopAuto();
      prev();
      startAuto();
    }

    nextBtn.addEventListener("click", onNext);
    prevBtn.addEventListener("click", onPrev);
    viewport.parentElement?.addEventListener("mouseenter", stopAuto);
    viewport.parentElement?.addEventListener("mouseleave", startAuto);

    function init() {
      perPage = window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
      setWidths();
      buildDots();
      goTo(0);
    }

    window.addEventListener("resize", init);
    init();
    startAuto();

    return () => {
      window.removeEventListener("resize", init);
      nextBtn.removeEventListener("click", onNext);
      prevBtn.removeEventListener("click", onPrev);
      viewport.parentElement?.removeEventListener("mouseenter", stopAuto);
      viewport.parentElement?.removeEventListener("mouseleave", startAuto);
      stopAuto();
    };
  }, []);

  return (
    <section className="testi-section">
      <style>{TESTI_STYLES}</style>
      <div className="testi-container" ref={rootRef}>
        <div className="testi-header">
          <span className="testi-eyebrow">Client Feedback</span>
          <h2 className="testi-title">What Investors Appreciate Most</h2>
          <div className="testi-divider" />
          <p className="testi-subtitle">
            Real feedback from self-directed retirement investors who got the clarity they needed.
          </p>
        </div>

        <div className="testi-slider-wrap">
          <div className="testi-slider-viewport">
            <div className="testi-slider-track" id="testiTrack">
              {TESTIMONIALS.map((t) => (
                <div className={"testi-card" + (t.featured ? " testi-card-featured" : "")} key={t.name + t.role}>
                  <div className="testi-top-row">
                    <div className="testi-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span className="testi-star" key={i}>
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="testi-quote-icon">{QUOTE_ICON}</div>
                  </div>
                  <div className="testi-text">&quot;{t.quote}&quot;</div>
                  <div className="testi-separator" />
                  <div className="testi-author-row">
                    <div className="testi-avatar">{AVATAR_ICON}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                    <div className="testi-tag">{t.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-controls">
            <button className="testi-arrow" id="testiPrev" aria-label="Previous" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="testi-dots" id="testiDots" />
            <button className="testi-arrow" id="testiNext" aria-label="Next" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="testi-bottom-strip">
          <div className="tbs-left">
            <div className="tbs-stat">
              <div className="tbs-num">25+</div>
              <div className="tbs-label">Years Experience</div>
            </div>
            <div className="tbs-divider" />
            <div className="tbs-stat">
              <div className="tbs-num">$125</div>
              <div className="tbs-label">Flat Fee</div>
            </div>
            <div className="tbs-divider" />
            <div className="tbs-stat">
              <div className="tbs-num">400%</div>
              <div className="tbs-label">Value Guarantee</div>
            </div>
            <div className="tbs-divider" />
            <div className="tbs-text">&quot;Confidence isn&apos;t built on hope. It&apos;s built on knowing.&quot;</div>
          </div>
          <a href="#form" className="tbs-cta">
            Book My Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
