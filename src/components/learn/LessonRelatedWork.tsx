import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { planDestinations } from "@/data/site-config";

const cards = [
  {
    label: "Business Owners",
    title: "Self-Directed 401(k)",
    description: "Build a retirement plan around your business.",
    href: "/services/self-directed-401k",
  },
  {
    label: "Individual Investors",
    title: "Self-Directed IRA",
    description: "Move your retirement savings beyond the usual menu.",
    href: "/services/self-directed-ira",
  },
  {
    label: "Not Sure Yet?",
    title: "Ask a Question",
    description: "Tell the team about your situation and get a straight answer.",
    href: planDestinations.getHelp,
  },
];

export function LessonRelatedWork() {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>From Knowledge To A Plan</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Put It <span className="text-r-gold">To Work.</span>
        </h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group flex h-full w-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 text-left transition-colors hover:border-r-gold hover:bg-r-panel"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
                    {card.label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-4 text-xl leading-tight text-r-white">{card.title}</h3>
                <p className="mt-2 text-sm text-r-muted font-body normal-case">{card.description}</p>
                <div className="mt-auto flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.15em] text-r-muted">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
