"use client";

import { useEffect, useRef } from "react";

const WTIF_STYLES = `
.wtif-section {
  background: #fff;
  padding: 50px 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
}

@media(min-width: 901px) {
  .wtif-grid {
    perspective: 1200px;
  }

  .wtif-card {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
                transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
    will-change: transform, opacity;
  }

  .wtif-card.reveal-active {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .wtif-grid .wtif-card.reveal-active:nth-child(1) { transition-delay: 0.1s; }
  .wtif-grid .wtif-card.reveal-active:nth-child(2) { transition-delay: 0.25s; }
  .wtif-grid .wtif-card.reveal-active:nth-child(3) { transition-delay: 0.4s; }

  .wtif-card-img::after {
    content: '';
    position: absolute;
    top: 0; left: -150%; width: 50%; height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
    transform: skewX(-25deg);
  }

  .wtif-card.reveal-active .wtif-card-img::after {
    animation: shineSweep 0.8s ease-in-out forwards;
    animation-delay: 0.8s;
  }
}

@keyframes shineSweep {
  0% { left: -150%; }
  100% { left: 150%; }
}

.wtif-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
}

.wtif-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 24px;
  flex-wrap: wrap;
}

.wtif-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B89958;
  display: block;
  margin-bottom: 10px;
}

.wtif-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1.15;
  margin: 0 0 12px;
  text-transform: none;
}

.wtif-divider {
  width: 48px;
  height: 3px;
  background: #B89958;
  border-radius: 2px;
}

.wtif-cta-btn {
  display: inline-block;
  background: #B89958;
  color: #0C0C0C !important;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 4px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 18px rgba(184,153,88,0.3);
  transition: background 0.2s, transform 0.15s;
}

.wtif-cta-btn:hover {
  background: #a3854c !important;
  transform: translateY(-1px) !important;
}

.wtif-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.wtif-card {
  background: #ffffff;
  border: 1px solid #E2E5E9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: box-shadow 0.25s, transform 0.25s;
}

.wtif-card:hover {
  box-shadow: 0 16px 48px rgba(0,0,0,0.11);
  transform: translateY(-4px);
}

.wtif-card-img {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.wtif-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}

.wtif-card:hover .wtif-card-img img {
  transform: scale(1.04);
}

.wtif-card-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(12,12,12,0.45));
}

.wtif-img-tag {
  position: absolute;
  bottom: 14px;
  left: 14px;
  background: #B89958;
  color: #0C0C0C;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 3px;
}

.wtif-card-body {
  padding: 24px 24px 26px;
}

.wtif-card-title {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #0C0C0C;
  margin-bottom: 12px;
  line-height: 1.25;
}

.wtif-card-desc {
  font-size: 13px;
  line-height: 1.75;
  color: #8C959D;
  margin-bottom: 0;
}

.wtif-bottom {
  margin-top: 48px;
  background: linear-gradient(135deg, #0C0C0C 0%, #1a1a1a 100%);
  border-radius: 12px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.wtif-bottom-text {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 20px;
  color: #ffffff;
  line-height: 1.4;
  max-width: 560px;
}

.wtif-bottom-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.55);
  margin-top: 4px;
}

@media(max-width: 900px) {
  .wtif-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding: 20px 32px;
    margin: 0 -32px;
  }

  .wtif-grid::-webkit-scrollbar {
    display: none;
  }

  .wtif-card {
    flex: 0 0 85%;
    max-width: 400px;
    scroll-snap-align: center;
  }

  .wtif-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .wtif-header .wtif-cta-btn {
    width: 100%;
    text-align: center;
  }

  .wtif-bottom {
    flex-direction: column;
    text-align: center;
    padding: 32px 20px;
  }

  .wtif-bottom .wtif-cta-btn {
    width: 100%;
    text-align: center;
  }
}

@media(max-width: 600px) {
  .wtif-container { padding: 0 20px; }
  .wtif-section { padding: 30px 0; }

  .wtif-grid {
    margin-top: -30px !important;
    padding: 20px 20px;
    margin: 0 -20px;
  }
  .wtif-card {
    flex: 0 0 88%;
  }
  .wtif-bottom {
    margin-top: 10px;
  }
  .wtif-bottom-sub {
    margin-top: 12px;
  }
}
`;

const CARDS = [
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
    alt: "Person reviewing retirement account documents",
    tag: "Past Transaction",
    title: "Already Made an Investment?",
    desc: "You've already purchased real estate, made a private loan, or completed another transaction through your retirement account. Now you want to understand whether the transaction was structured correctly.",
  },
  {
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    alt: "Real estate investment property",
    tag: "Compliance Concern",
    title: "Concerned About Compliance?",
    desc: "You have a Self-Directed IRA, Solo 401(k), or Checkbook LLC and have a specific concern about prohibited transactions, related parties, plan structure, or IRS requirements.",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    alt: "Investor planning next investment strategy",
    tag: "Next Investment",
    title: "Planning Your Next Investment?",
    desc: "You're preparing to make another investment and want to discuss potential compliance concerns before completing the transaction.",
  },
];

export function CsForYouIf() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.innerWidth <= 900) return;

    const cards = root.querySelectorAll<HTMLElement>(".wtif-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wtif-section">
      <style>{WTIF_STYLES}</style>
      <div className="wtif-container" ref={rootRef}>
        <div className="wtif-header">
          <div>
            <span className="wtif-eyebrow">Who This Is For</span>
            <h2 className="wtif-title">This Is For You If…</h2>
            <div className="wtif-divider" />
          </div>
          <a href="#form" className="wtif-cta-btn">
            Book My $125 Session
          </a>
        </div>

        <div className="wtif-grid">
          {CARDS.map((card) => (
            <div className="wtif-card" key={card.title}>
              <div className="wtif-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.alt} />
                <div className="wtif-card-img-overlay" />
                <div className="wtif-img-tag">{card.tag}</div>
              </div>
              <div className="wtif-card-body">
                <div className="wtif-card-title">{card.title}</div>
                <div className="wtif-card-desc">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="wtif-bottom">
          <div>
            <div className="wtif-bottom-text">
              Whether you&apos;ve already completed a transaction or are planning your next one, one focused
              conversation can help you understand what deserves attention.
            </div>
            <div className="wtif-bottom-sub">15 minutes · $125 · Backed by our 400% Value Guarantee</div>
          </div>
          <a href="#form" className="wtif-cta-btn">
            Book My $125 Session
          </a>
        </div>
      </div>
    </section>
  );
}
