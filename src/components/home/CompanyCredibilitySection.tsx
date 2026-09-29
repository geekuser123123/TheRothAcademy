import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, Compass, LifeBuoy } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const credibilityPoints = [
  {
    title: "Setup Assistance",
    description: "Your team handles the paperwork and account details, start to finish.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear Next Steps",
    description: "You always know what happens next and what's needed from you.",
    icon: Compass,
  },
  {
    title: "Ongoing Client Resources",
    description: "Support, documentation, and the Tax Academy client experience continue after setup.",
    icon: LifeBuoy,
  },
];

export function CompanyCredibilitySection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <Eyebrow>A Team Behind Your Next Move</Eyebrow>
          <h2 className="mt-4 max-w-md text-4xl md:text-5xl">
            Real Help,
            <br />
            <span className="text-r-gold">From Setup to Funding.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">
            Roth Academy was built to give self-directed retirement planning the follow-through it
            deserves — a team that stays with you, not just a form to fill out.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            About Roth Academy
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="space-y-4">
          {credibilityPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex items-start gap-5 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 transition-colors hover:border-r-gold/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                  <Icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl">{point.title}</h3>
                  <p className="mt-1 text-sm text-r-muted font-body normal-case">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
