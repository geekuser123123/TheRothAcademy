import Link from "next/link";
import { ArrowUpRight, MessageCircle, FileText, Handshake } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { standardSteps } from "@/data/home-content";

const icons = [MessageCircle, FileText, Handshake];

export function StandardSection() {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>The Roth Academy Standard</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          Expertise Should
          <br />
          <span className="text-r-gold">Lead Somewhere.</span>
        </h2>
        <p className="mt-6 max-w-xl text-sm text-r-muted font-body normal-case">
          Useful knowledge. A defined engagement. People who follow through. That is how a serious
          idea becomes organized work.
        </p>

        {/* Icon row with connecting lines — its own flex row so every icon and
            connector shares one alignment context (avoids fragile independent
            margin-based positioning between siblings). */}
        <div className="mt-14 hidden items-center md:flex">
          {standardSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.number} className="flex flex-1 items-center last:flex-none">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                  <Icon size={22} aria-hidden />
                </span>
                {index < standardSteps.length - 1 && (
                  <span aria-hidden className="mx-4 h-px flex-1 bg-r-gold/25" />
                )}
              </div>
            );
          })}
        </div>

        <ol className="mt-8 grid gap-8 md:mt-6 md:grid-cols-3 md:gap-10">
          {standardSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li key={step.number}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-r-gold/40 text-r-gold md:hidden">
                  <Icon size={22} aria-hidden />
                </span>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.15em] text-r-gold md:mt-0">
                  {step.number}
                </span>
                <h3 className="mt-2 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-r-muted font-body normal-case">{step.description}</p>
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
