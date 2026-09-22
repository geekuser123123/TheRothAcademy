import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function EventSection() {
  return (
    <section className="border-b border-r-line bg-r-bg">
      <div className="flex flex-col bg-r-panel/50 lg:flex-row lg:items-stretch">
        <div className="relative h-56 w-full shrink-0 sm:h-80 lg:h-auto lg:w-[28rem]">
          <Image
            src="/events/dallas-skyline.jpg"
            alt="Dallas, Texas skyline at night"
            fill
            sizes="(min-width: 1024px) 448px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-8 p-8 md:px-12 md:py-10 lg:min-h-[22rem] lg:flex-row lg:items-center lg:justify-between lg:px-14 xl:px-20">
          <div className="min-w-0">
            <Eyebrow>Live Event</Eyebrow>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
              <span>October 2026</span>
              <span className="h-3 w-px bg-r-line" aria-hidden />
              <span>22–24</span>
              <span className="h-3 w-px bg-r-line" aria-hidden />
              <span>Dallas, Texas</span>
            </div>
            <h2 className="mt-4 text-3xl text-r-white sm:text-4xl md:text-5xl">
              Advanced 401(k) Planning Session
            </h2>
            <p className="mt-3 max-w-md text-base text-r-muted font-body normal-case">
              Real strategies. Deeper insights. A more independent tomorrow.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-[var(--radius-brand-control)] border border-r-gold/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-gold transition-colors hover:bg-r-gold hover:text-r-bg lg:self-auto"
          >
            Learn more
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
