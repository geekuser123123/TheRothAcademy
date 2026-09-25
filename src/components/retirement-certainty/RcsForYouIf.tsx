import { ArrowUpRight } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsForYouIf() {
  const { forYouIf } = rcsContent;

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {forYouIf.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl text-r-white md:text-5xl">{forYouIf.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {forYouIf.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-r-gold">{card.tag}</p>
              <h3 className="mt-3 text-xl text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-r-muted font-body normal-case">
                {card.description}
              </p>
              <p className="mt-5 border-t border-r-line pt-4 text-xs uppercase tracking-[0.1em] text-r-gold/80">
                {card.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 md:flex-row md:items-center">
          <div>
            <p className="text-base text-r-white font-body normal-case">{forYouIf.banner.text}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-r-muted">{forYouIf.banner.meta}</p>
          </div>
          <a
            href="#booking"
            className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            {forYouIf.banner.cta}
            <ArrowUpRight size={18} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
