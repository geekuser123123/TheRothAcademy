import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { advancedServiceCategories, allServiceCards } from "@/data/advanced-services-content";

const categoryLabelByKey = Object.fromEntries(
  advancedServiceCategories.map((category) => [category.key, category.cardLabel]),
);

export function LessonRelatedWork({ slugs }: { slugs: string[] }) {
  const cards = slugs
    .map((slug) => allServiceCards.find((card) => card.slug === slug))
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  if (cards.length === 0) return null;

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>From Knowledge To A Conversation</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Explore The <span className="text-r-gold">Related Work.</span>
        </h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <li key={card.slug}>
              <Link
                href={`/services/${card.slug}`}
                className="group flex h-full w-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 text-left transition-colors hover:border-r-gold hover:bg-r-panel"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
                    {categoryLabelByKey[card.category]}
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
                  <span>{card.badge}</span>
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
