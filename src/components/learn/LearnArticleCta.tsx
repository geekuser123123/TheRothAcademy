import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { planDestinations } from "@/data/site-config";

export function LearnArticleCta() {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-14">
      <div className="container-brand flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-lg">
          <p className="text-sm text-r-muted font-body normal-case">
            Have a question specific to your situation? General guides are a starting point: compare the two
            plans, or bring the team your facts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href={planDestinations.comparePlans}
            className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Compare Plans
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          <Link
            href={planDestinations.getHelp}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
