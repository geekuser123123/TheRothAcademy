import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { twoWaysCards } from "@/data/home-content";

export function TwoWaysInSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Your Foundation</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Two Ways In.
              <br />
              <span className="text-r-gold">A World Beyond.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-r-muted font-body normal-case">
              A first rental. A private investment. A different vision for retirement. Start with
              the account that fits your situation.
            </p>
            <Link
              href="/services"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-r-gold"
            >
              Compare the starting points
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {twoWaysCards.map((card) => (
            <div key={card.href} className="rounded-sm border border-r-line bg-r-panel p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
                {card.step}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
                {card.kicker}
              </p>
              <h3 className="text-4xl">{card.title}</h3>
              <p className="mt-4 text-sm text-r-muted font-body normal-case">{card.description}</p>

              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-r-muted font-body normal-case">
                {card.tags.map((tag) => (
                  <li key={tag} className="before:mr-2 before:content-['—']">
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-r-gold"
              >
                {card.cta}
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-r-muted font-body normal-case">
          <span>Already have a plan? Let&apos;s make the next step clearer.</span>
          <Link href="/services/existing-plan-support" className="font-semibold text-r-gold">
            Explore plan support
          </Link>
        </div>
      </div>
    </section>
  );
}
