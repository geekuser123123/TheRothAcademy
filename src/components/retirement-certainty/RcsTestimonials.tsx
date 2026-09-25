import { ArrowUpRight, Star } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsTestimonials() {
  const { testimonials } = rcsContent;

  return (
    <section className="border-b border-r-line bg-r-panel py-20 md:py-28">
      <div className="container-brand">
        <div className="mx-auto max-w-xl text-center">
          <p
            className="flex items-center justify-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {testimonials.eyebrow}
            <span className="h-px w-8 bg-r-gold" aria-hidden />
          </p>
          <h2 className="mt-4 text-4xl text-r-white md:text-5xl">{testimonials.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">
            {testimonials.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name + item.context}
              className="flex flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-7"
            >
              <div className="flex gap-1 text-r-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-r-white font-body normal-case">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-r-line pt-4">
                <div>
                  <p className="text-sm font-semibold text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-r-muted font-body normal-case">{item.context}</p>
                </div>
                <span className="shrink-0 rounded-full border border-r-gold/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-r-gold">
                  {item.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {testimonials.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl text-r-gold">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-r-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="max-w-md text-lg text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
            &ldquo;{testimonials.quote}&rdquo;
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            {testimonials.cta}
            <ArrowUpRight size={18} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
