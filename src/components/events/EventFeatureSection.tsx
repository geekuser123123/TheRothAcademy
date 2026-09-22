"use client";

import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useContactModal } from "@/components/contact/ContactModalProvider";
import { featuredEvent } from "@/data/events-content";

const factIcons = { calendar: CalendarDays, "map-pin": MapPin, users: Users };

export function EventFeatureSection() {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        {/* Poster card — an original graphic treatment, not a stock event flyer */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel p-8 shadow-2xl shadow-black/50">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[30%] -top-[20%] h-[70%] w-[70%] rounded-full opacity-25 mix-blend-screen"
            style={{
              background:
                "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-r-muted">
            <span>{featuredEvent.venueTag}</span>
            <span className="rounded-full border border-r-line px-2.5 py-1 text-r-gold">
              {featuredEvent.applicationTag}
            </span>
          </div>

          <h2 className="relative mt-8 text-5xl leading-[0.95] md:text-6xl">
            {featuredEvent.posterTitle.map((line, index) => (
              <span
                key={line}
                className={clsx("block", index >= featuredEvent.posterGoldFrom && "text-r-gold")}
              >
                {line}
              </span>
            ))}
          </h2>

          <div className="relative mt-10 flex items-end justify-between border-t border-r-line pt-6">
            <div>
              <span className="text-5xl text-r-white">{featuredEvent.dateShort}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-r-muted">
                {featuredEvent.dateMonth}
              </span>
            </div>
            <div className="text-right">
              <span className="block text-xs uppercase tracking-[0.15em] text-r-muted">{featuredEvent.location}</span>
              <span className="mt-1 block text-sm text-r-white font-body normal-case">{featuredEvent.host}</span>
            </div>
          </div>
        </div>

        {/* Details column */}
        <div className="min-w-0">
          <Eyebrow>{featuredEvent.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {featuredEvent.heading.map((line, index) => (
              <span key={line} className={clsx("block", index === featuredEvent.heading.length - 1 && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">{featuredEvent.description}</p>

          <ul className="mt-8 space-y-3 border-t border-r-line pt-8">
            {featuredEvent.facts.map((fact) => {
              const Icon = factIcons[fact.icon];
              return (
                <li key={fact.label} className="flex items-center gap-3 text-sm text-r-white font-body normal-case">
                  <Icon size={18} className="shrink-0 text-r-gold" aria-hidden />
                  {fact.label}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 border-t border-r-line pt-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-muted">
              {featuredEvent.priceLabel}
            </span>
            <span className="mt-1 block text-4xl text-r-gold">{featuredEvent.price}</span>
          </div>

          <p className="mt-6 max-w-md text-xs text-r-muted/70 font-body normal-case">{featuredEvent.finePrint}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={featuredEvent.applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {featuredEvent.applyLabel}
              <ArrowUpRight size={18} aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => open("Events & workshops", "I have a question about the Advanced 401(k) Planning Session.")}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              {featuredEvent.questionLabel}
              <ArrowRight size={16} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
