import { ArrowUpRight, Check } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsSolution() {
  const { solution } = rcsContent;

  return (
    <section className="border-b border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="min-w-0">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {solution.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-4xl text-r-white md:text-5xl">{solution.title}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-r-muted font-body normal-case">
            {solution.description}
          </p>

          <ol className="mt-10 space-y-8">
            {solution.steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-sm font-semibold text-r-gold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-r-gold">
              Topics Covered in This Session
            </p>
            <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {solution.topics.map((topic) => (
                <span key={topic} className="flex items-center gap-2 text-sm text-r-white font-body normal-case">
                  <Check size={14} className="shrink-0 text-r-gold" aria-hidden />
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:sticky md:top-28">
          <div className="relative overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-8 shadow-2xl shadow-black/50">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light"
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-r-gold">
              {solution.priceCard.label}
            </p>
            <p className="mt-3 text-2xl text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
              {solution.priceCard.title}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.1em] text-r-muted">{solution.priceCard.subtitle}</p>

            <div className="mt-6 flex items-end gap-2 border-t border-r-line pt-6">
              <span className="text-5xl text-r-gold">${solution.priceCard.price}</span>
              <span className="pb-1 text-xs uppercase tracking-[0.1em] text-r-muted">
                {solution.priceCard.priceNote}
              </span>
            </div>
            <p className="mt-1 text-xs text-r-muted font-body normal-case">{solution.priceCard.priceSub}</p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {solution.priceCard.pills.map((pill) => (
                <span key={pill} className="text-xs uppercase tracking-[0.1em] text-r-muted">
                  {pill}
                </span>
              ))}
            </div>

            <p className="mt-6 border-t border-r-line pt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-r-gold">
              {solution.priceCard.includesLabel}
            </p>
            <ul className="mt-4 space-y-3">
              {solution.priceCard.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-r-gold/15">
                    <Check size={11} className="text-r-gold" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#booking"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {solution.priceCard.cta}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>

          <div className="mt-6 flex items-start gap-4 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-5">
            <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-r-gold text-r-bg">
              <span className="text-[10px] font-bold leading-none">{solution.guarantee.badge}</span>
            </span>
            <div>
              <p className="text-sm font-semibold text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                {solution.guarantee.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-r-muted font-body normal-case">
                {solution.guarantee.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
