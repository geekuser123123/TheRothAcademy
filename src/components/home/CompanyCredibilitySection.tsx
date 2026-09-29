import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, Compass, LifeBuoy } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const credibilityPoints = [
  {
    number: "01",
    title: "Setup Assistance",
    description: "Your team handles the paperwork and account details, start to finish.",
  },
  {
    number: "02",
    title: "Clear Next Steps",
    description: "You always know what happens next and what's needed from you.",
  },
  {
    number: "03",
    title: "Ongoing Client Resources",
    description: "Support, documentation, and the Tax Academy client experience continue after setup.",
  },
];

const icons = [ClipboardCheck, Compass, LifeBuoy];

export function CompanyCredibilitySection() {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>A Team Behind Your Next Move</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          Real Help,
          <br />
          <span className="text-r-gold">From Setup to Funding.</span>
        </h2>
        <p className="mt-6 max-w-xl text-sm text-r-muted font-body normal-case">
          Roth Academy was built to give self-directed retirement planning the follow-through it
          deserves — a team that stays with you, not just a form to fill out.
        </p>

        <div className="mt-14 hidden items-center md:flex">
          {credibilityPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <div key={point.number} className="flex flex-1 items-center last:flex-none">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                  <Icon size={22} aria-hidden />
                </span>
                {index < credibilityPoints.length - 1 && (
                  <span aria-hidden className="mx-4 h-px flex-1 bg-r-gold/25" />
                )}
              </div>
            );
          })}
        </div>

        <ol className="mt-8 grid gap-8 md:mt-6 md:grid-cols-3 md:gap-10">
          {credibilityPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <li key={point.number}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-r-gold/40 text-r-gold md:hidden">
                  <Icon size={22} aria-hidden />
                </span>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.15em] text-r-gold md:mt-0">
                  {point.number}
                </span>
                <h3 className="mt-2 text-2xl">{point.title}</h3>
                <p className="mt-3 text-sm text-r-muted font-body normal-case">{point.description}</p>
              </li>
            );
          })}
        </ol>

        <Link
          href="/about"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
        >
          About Roth Academy
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
