import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { startChoices } from "@/data/start-content";

export function StartChoices() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-6 md:grid-cols-3">
        {startChoices.map((choice) => (
          <Link
            key={choice.href}
            href={choice.href}
            className="group flex min-h-[220px] flex-col justify-between rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-8 transition-colors hover:border-r-gold hover:bg-r-panel"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-3xl font-heading text-r-gold">{choice.number}</span>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden
              />
            </div>
            <div className="mt-10">
              <h2 className="text-2xl leading-snug text-r-white">{choice.title}</h2>
              <p className="mt-3 text-sm text-r-muted font-body normal-case">{choice.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
