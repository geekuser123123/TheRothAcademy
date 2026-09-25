import { ArrowUpRight, Check } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsGuarantee() {
  const { guarantee } = rcsContent;

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-20 md:py-28">
      <div className="container-brand grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-8">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {guarantee.eyebrow}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-r-gold text-r-bg">
              <span className="text-lg font-bold leading-none">{guarantee.badge}</span>
              <span className="mt-0.5 text-[8px] font-semibold uppercase leading-none">{guarantee.badgeSub}</span>
            </span>
            <div>
              <h2 className="text-2xl text-r-white md:text-3xl">{guarantee.title}</h2>
              <p className="mt-1 text-xs text-r-muted font-body normal-case">{guarantee.subtitle}</p>
            </div>
          </div>

          <blockquote className="mt-6 border-l-2 border-r-gold/50 pl-4 text-sm leading-relaxed text-r-white font-body normal-case">
            &ldquo;{guarantee.quote}&rdquo;
          </blockquote>

          <ul className="mt-6 space-y-3">
            {guarantee.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-r-gold/15">
                  <Check size={11} className="text-r-gold" aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex gap-8 border-t border-r-line pt-6">
            {guarantee.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl text-r-gold">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-r-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="max-w-lg text-3xl text-r-white md:text-4xl">{guarantee.title2}</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-r-muted font-body normal-case">
            {guarantee.description}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-r-muted font-body normal-case">
            {guarantee.description2}
          </p>

          <ol className="mt-8 space-y-5">
            {guarantee.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-[11px] font-semibold text-r-gold">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-r-white font-body normal-case">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {guarantee.cta}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>
          <p className="mt-4 text-xs text-r-muted font-body normal-case">{guarantee.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
