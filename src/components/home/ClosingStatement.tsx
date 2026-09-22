"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

const words = ["Discipline", "Today", "Freedom", "Tomorrow"];

export function ClosingStatement() {
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden border-t border-r-line bg-r-bg py-20 md:py-28">
      {/* Abstract gold arc — echoes the service-page hero at a quieter scale */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-0 h-full w-[55%] opacity-20 mix-blend-screen md:-right-[5%] md:w-[40%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-brand relative grid gap-10 md:grid-cols-[1fr_1fr_auto] md:items-center md:gap-12">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">
            A More Independent Tomorrow
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl">
            Make It <span className="text-r-gold">Count.</span>
          </h2>
        </div>

        <div className="min-w-0">
          <p className="max-w-sm text-sm text-r-muted font-body normal-case">
            Your goals deserve more than a standard plan. Let&apos;s explore what&apos;s possible —
            together.
          </p>
          <button
            type="button"
            onClick={() => open()}
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Let&apos;s talk
            <ArrowUpRight size={18} aria-hidden />
          </button>
        </div>

        <div className="hidden shrink-0 md:block">
          <span className="mb-3 block h-px w-8 bg-r-gold" aria-hidden />
          <ul className="space-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
            {words.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
