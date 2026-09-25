import { ArrowUpRight } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsFinalCta() {
  const { finalCta } = rcsContent;

  return (
    <section className="bg-r-stripe-1">
      <div className="container-brand py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="flex items-center justify-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {finalCta.eyebrow}
            <span className="h-px w-8 bg-r-gold" aria-hidden />
          </p>
          <h2 className="mt-4 text-4xl text-r-white md:text-5xl">
            {finalCta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-r-muted font-body normal-case">{finalCta.description}</p>

          <a
            href="#booking"
            className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            {finalCta.cta}
            <ArrowUpRight size={18} aria-hidden />
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {finalCta.pills.map((pill) => (
              <span key={pill} className="text-xs uppercase tracking-[0.12em] text-r-muted">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg text-r-white normal-case md:text-xl" style={{ fontFamily: "var(--font-body)" }}>
            &ldquo;{finalCta.quote}&rdquo;
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-r-muted">{finalCta.quoteAttribution}</p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {finalCta.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl text-r-gold">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-r-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-r-line">
        <div className="container-brand flex flex-col items-center gap-4 py-10 text-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-r-gold text-r-bg">
              <span className="text-[10px] font-bold leading-none">{finalCta.footerGuarantee.badge}</span>
              <span className="text-[6px] font-semibold uppercase leading-none">
                {finalCta.footerGuarantee.badgeSub}
              </span>
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                {finalCta.footerGuarantee.title}
              </p>
              <p className="text-xs text-r-muted font-body normal-case">{finalCta.footerGuarantee.description}</p>
            </div>
          </div>
          <p className="text-xs text-r-muted/70 font-body normal-case">{finalCta.footerGuarantee.quote}</p>
          <p className="text-xs text-r-muted/50 font-body normal-case">{finalCta.copyright}</p>
        </div>
      </div>
    </section>
  );
}
