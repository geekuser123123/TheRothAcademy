import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function EventSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-12 md:py-16">
      <div className="container-brand">
        <div className="flex flex-col overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/50 md:flex-row md:items-stretch">
          <div className="relative h-48 w-full shrink-0 md:h-auto md:w-80">
            <Image
              src="/events/dallas-skyline.jpg"
              alt="Dallas, Texas skyline at night"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="min-w-0">
              <Eyebrow>Live Event</Eyebrow>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
                <span>October 2026</span>
                <span className="h-3 w-px bg-r-line" aria-hidden />
                <span>22–24</span>
                <span className="h-3 w-px bg-r-line" aria-hidden />
                <span>Dallas, Texas</span>
              </div>
              <h2 className="mt-3 text-2xl text-r-white sm:text-3xl md:text-4xl">
                Advanced 401(k) Planning Session
              </h2>
              <p className="mt-2 max-w-md text-sm text-r-muted font-body normal-case">
                Real strategies. Deeper insights. A more independent tomorrow.
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-[var(--radius-brand-control)] border border-r-gold/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-gold transition-colors hover:bg-r-gold hover:text-r-bg md:self-auto"
            >
              Learn more
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
