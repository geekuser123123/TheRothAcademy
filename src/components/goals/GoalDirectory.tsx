import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Goal } from "@/data/goals-content";

export function GoalDirectory({ goals }: { goals: Goal[] }) {
  return (
    <section className="border-b border-r-line bg-r-bg py-4 md:py-8">
      <div className="container-brand divide-y divide-r-line">
        {goals.map((goal) => (
          <Link
            key={goal.number}
            href={goal.href}
            className="group flex items-center gap-6 py-8 transition-colors hover:bg-r-panel/30 md:gap-10 md:py-10"
          >
            <span className="w-8 shrink-0 font-heading text-2xl text-r-gold md:w-12 md:text-3xl">
              {goal.number}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl md:text-4xl">{goal.title}</h2>
              <p className="mt-1 text-sm text-r-muted font-body normal-case">{goal.description}</p>
            </div>
            <ArrowUpRight
              size={26}
              className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
