import Link from "next/link";
import { clsx } from "clsx";
import { BookOpen, ArrowUpRight, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { libraryCards } from "@/data/home-content";

export function LibrarySection() {
  return (
    <section className="border-b border-r-line bg-r-stripe-1 py-16 md:py-24">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The Knowledge Library</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Know More.
              <br />
              <span className="text-r-gold">Move With Purpose.</span>
            </h2>
          </div>
          <Link href="/learn" className="inline-flex items-center gap-2 text-sm font-semibold text-r-gold">
            Explore the library
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {libraryCards.map((card) => (
            <Link
              key={card.title}
              href="/learn"
              className={clsx(
                "flex flex-col justify-between gap-8 rounded-sm border p-8 transition-colors",
                card.highlight
                  ? "border-r-gold bg-r-gold text-r-bg"
                  : "border-r-line bg-r-panel hover:border-r-gold",
              )}
            >
              <div>
                <BookOpen size={22} className={card.highlight ? "text-r-bg" : "text-r-gold"} aria-hidden />
                <p
                  className={clsx(
                    "mt-4 text-xs font-semibold uppercase tracking-[0.15em]",
                    card.highlight ? "text-r-bg/70" : "text-r-gold",
                  )}
                >
                  {card.category}
                </p>
                <h3 className={clsx("mt-2 text-2xl", card.highlight ? "text-r-bg" : undefined)}>
                  {card.title}
                </h3>
              </div>

              <div>
                <p
                  className={clsx(
                    "text-xs font-body normal-case",
                    card.highlight ? "text-r-bg/70" : "text-r-muted",
                  )}
                >
                  {card.meta}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold font-body normal-case">
                  {card.link}
                  <ArrowUpRight size={16} aria-hidden />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
