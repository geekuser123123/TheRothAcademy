import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function EventSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-12 md:py-16">
      <div className="container-brand flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <div className="shrink-0 rounded-sm border border-r-line px-5 py-4 text-center">
            <p className="text-xs uppercase tracking-[0.1em] text-r-muted">October 2026</p>
            <p className="text-3xl font-heading text-r-gold">22–24</p>
            <p className="text-xs uppercase tracking-[0.1em] text-r-muted">Dallas, Texas</p>
          </div>
          <div className="min-w-0">
            <Eyebrow>Step Into the Room</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Advanced 401(k) Planning Session.</h2>
            <p className="mt-3 max-w-md text-sm text-r-muted font-body normal-case">
              Focused time for substantial questions with Tim Berry.
            </p>
          </div>
        </div>

        <Link
          href="/events"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
        >
          Explore the event
          <ArrowUpRight size={18} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
