import { ArrowUpRight, ChevronDown } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

export function RcsFaq() {
  const { faq } = rcsContent;

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div>
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {faq.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl text-r-white md:text-5xl">{faq.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">{faq.description}</p>

          <div className="mt-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/50 p-7">
            <h3 className="text-lg text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
              {faq.stillHaveAQuestion.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">
              {faq.stillHaveAQuestion.description}
            </p>
            <a
              href={`mailto:${faq.stillHaveAQuestion.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {faq.stillHaveAQuestion.cta}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>

        <div className="divide-y divide-r-line border-t border-r-line">
          {faq.items.map((item, index) => (
            <details key={item.question} className="group py-5" {...(index === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base text-r-white normal-case marker:content-none" style={{ fontFamily: "var(--font-body)" }}>
                <span className="flex items-baseline gap-4">
                  <span className="text-xs text-r-gold">{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-r-gold transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 pl-8 text-sm leading-relaxed text-r-muted font-body normal-case">{item.answer}</p>
            </details>
          ))}

          <div className="pt-6">
            <p className="text-sm text-r-white font-body normal-case">Don&apos;t see your question?</p>
            <p className="mt-1 text-sm text-r-muted font-body normal-case">
              Reach out directly and we&apos;ll be happy to help before you book.
            </p>
            <a
              href={`mailto:${faq.stillHaveAQuestion.email}`}
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-r-gold hover:text-r-gold-light"
            >
              {faq.stillHaveAQuestion.email}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
