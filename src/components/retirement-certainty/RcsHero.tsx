import { ArrowUpRight } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsHero() {
  const { hero } = rcsContent;

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-1/2 h-[140%] w-[65%] -translate-y-1/2 rounded-full opacity-30 mix-blend-screen md:-right-[5%] md:w-[50%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(50px)",
        }}
      />

      <div className="container-brand relative grid gap-14 pb-16 pt-40 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-24 md:pt-48">
        <div className="min-w-0">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1
            className="max-w-2xl"
            style={{
              marginTop: 24,
              fontSize: "clamp(40px, 6vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
            }}
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-lg text-base text-r-muted font-body normal-case">{hero.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {hero.cta}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.tags.map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-[0.15em] text-r-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="relative rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-8 shadow-2xl shadow-black/50">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-[var(--radius-brand-card)] bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light"
          />
          <div className="flex items-center gap-4 border-b border-r-line pb-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-r-gold/40 bg-r-bg text-lg font-semibold text-r-gold">
              TB
            </span>
            <div>
              <p className="text-lg text-r-white">{hero.specialist.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-r-muted">{hero.specialist.title}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl text-r-gold">{stat.value}</p>
                <p className="mt-1 text-xs text-r-muted font-body normal-case">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
