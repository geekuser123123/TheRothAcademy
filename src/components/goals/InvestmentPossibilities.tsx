import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { planDestinations } from "@/data/site-config";
import type { InvestmentPossibility } from "@/data/goals-content";

export function InvestmentPossibilities({
  items,
  footnote,
}: {
  items: InvestmentPossibility[];
  footnote?: string;
}) {
  return (
    <>
      {items.map((item, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={item.id}
            id={item.id}
            className={clsx(
              "scroll-mt-24 border-b border-r-line py-20 md:py-28",
              index % 2 === 0 ? "bg-r-bg" : "bg-r-stripe-1",
            )}
          >
            <div className="container-brand grid items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
              <div className={clsx("min-w-0", reverse && "md:order-2")}>
                <Eyebrow>{item.number}</Eyebrow>
                <h2 className="mt-4 text-4xl md:text-6xl">{item.label}</h2>
                <p className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">{item.description}</p>
                <p className="mt-4 max-w-md border-t border-r-line pt-4 text-sm text-r-muted/80 font-body normal-case italic">
                  {item.example}
                </p>

                <Link
                  href={planDestinations.openPlan}
                  className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                >
                  Open a Plan
                  <ArrowUpRight size={18} aria-hidden />
                </Link>
              </div>

              <div
                className={clsx(
                  "relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-2xl shadow-black/50",
                  reverse && "md:order-1 md:mx-0",
                )}
              >
                <Image src={item.image} alt="" fill sizes="(min-width: 768px) 35vw, 90vw" className="object-cover" />
              </div>
            </div>
          </section>
        );
      })}

      {footnote && (
        <div className="border-b border-r-line bg-r-bg py-6">
          <div className="container-brand">
            <p className="max-w-3xl text-xs text-r-muted/70 font-body normal-case">{footnote}</p>
          </div>
        </div>
      )}
    </>
  );
}
