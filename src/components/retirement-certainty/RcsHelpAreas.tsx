import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsHelpAreas() {
  const { helpAreas } = rcsContent;

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {helpAreas.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl text-r-white md:text-5xl">{helpAreas.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">{helpAreas.description}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {helpAreas.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/50 p-7"
            >
              <span className="text-3xl text-r-gold/40">{item.number}</span>
              <h3 className="mt-3 text-xl text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-r-muted font-body normal-case">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-r-line px-3 py-1 text-[10px] uppercase tracking-wide text-r-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-r-line pt-4 text-xs uppercase tracking-[0.1em] text-r-gold/80">
                Included in session
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 md:flex-row md:items-center">
          <div className="max-w-lg">
            <p className="text-base text-r-white font-body normal-case">{helpAreas.banner.title}</p>
            <p className="mt-2 text-sm text-r-muted font-body normal-case">{helpAreas.banner.description}</p>
          </div>
          <div className="flex shrink-0 gap-8">
            {helpAreas.banner.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl text-r-gold">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-r-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
