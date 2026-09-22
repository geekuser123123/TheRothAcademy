"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function ClosingStatement() {
  const { open } = useContactModal();

  return (
    <section className="border-t border-r-line bg-r-bg py-20">
      <div className="container-brand flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">
            The next move is yours.
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl">
            Make It <span className="text-r-gold">Count.</span>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => open()}
          className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
        >
          Let&apos;s talk
          <ArrowUpRight size={18} aria-hidden />
        </button>
      </div>
    </section>
  );
}
