import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { standardSteps } from "@/data/home-content";

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

        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {standardSteps.map((step) => (
            <li key={step.number}>
              <span className="text-2xl font-heading text-r-gold">{step.number}</span>
              <h3 className="mt-2 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-r-muted font-body normal-case">{step.description}</p>
            </li>
          ))}
        </ol>

        <Link
          href="/work-with-us"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-r-gold"
        >
          See how we work
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
