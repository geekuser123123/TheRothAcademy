import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { plansPanels } from "@/data/plans-content";

export function PlansPairSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-20">
      <div className="container-brand grid gap-6 md:grid-cols-2">
        {plansPanels.map((panel) => {
          const isGold = panel.variant === "gold";
          return (
            <Link
              key={panel.href}
              href={panel.href}
              className={clsx(
                "group flex flex-col justify-between rounded-[var(--radius-brand-card)] border p-8 transition-colors md:p-10",
                isGold
                  ? "border-r-gold bg-r-gold text-r-bg hover:bg-r-gold-light"
                  : "border-r-line bg-r-panel text-r-white hover:border-r-gold",
              )}
            >
              <div>
                <span
                  className={clsx(
                    "text-[11px] font-semibold uppercase tracking-[0.15em]",
                    isGold ? "text-r-bg/70" : "text-r-gold",
                  )}
                >
                  {panel.number}
                </span>

                <div className="mt-6 flex items-baseline gap-3">
                  <span
                    className={clsx(
                      "text-xs font-semibold uppercase tracking-[0.15em]",
                      isGold ? "text-r-bg/70" : "text-r-muted",
                    )}
                  >
                    {panel.label}
                  </span>
                </div>
                <h3 className="text-6xl md:text-7xl">{panel.type}</h3>

                <p
                  className={clsx(
                    "mt-6 max-w-sm text-sm font-body normal-case",
                    isGold ? "text-r-bg/80" : "text-r-muted",
                  )}
                >
                  {panel.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {panel.tags.map((tag) => (
                    <span
                      key={tag}
                      className={clsx(
                        "rounded-full border px-3 py-1 text-[11px] uppercase tracking-wide",
                        isGold ? "border-r-bg/30 text-r-bg/80" : "border-r-line text-r-muted",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={clsx(
                  "mt-10 flex items-center gap-2 border-t pt-6 text-sm font-semibold uppercase tracking-wide",
                  isGold ? "border-r-bg/20" : "border-r-line",
                )}
              >
                {panel.linkLabel}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
