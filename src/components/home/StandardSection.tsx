import Link from "next/link";
import { ArrowUpRight, ArrowRight, MessageCircle, FileText, Handshake } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { standardSteps } from "@/data/home-content";

const icons = [MessageCircle, FileText, Handshake];

export function StandardSection() {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The Roth Academy Standard</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
              Expertise Should
              <br />
              <span className="text-r-gold">Lead Somewhere.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-r-muted font-body normal-case">
            Useful knowledge. A defined engagement. People who follow through. That is how a
            serious idea becomes organized work.
          </p>
        </div>

        <ol className="mt-12 flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
          {standardSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li key={step.number} className="flex flex-1 items-start">
                <div className="flex flex-1 flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-8 transition-colors hover:border-r-gold/50 md:rounded-none md:border-y-0 md:border-r-0 md:bg-transparent md:p-0 md:px-10 md:first:pl-0 md:last:border-r-0">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm text-r-muted font-body normal-case">{step.description}</p>
                </div>

                {index < standardSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-14 hidden shrink-0 items-center px-2 text-r-gold/40 md:flex"
                  >
                    <ArrowRight size={20} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <Link
          href="/work-with-us"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
        >
          See how we work
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
