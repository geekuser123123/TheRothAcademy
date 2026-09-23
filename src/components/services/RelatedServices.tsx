import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AdvancedService } from "@/data/advanced-services-content";

export function RelatedServices({
  categoryLabel,
  categoryHref,
  services,
}: {
  categoryLabel: string;
  categoryHref: string;
  services: AdvancedService[];
}) {
  if (services.length === 0) return null;

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Continue Exploring</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Connected <span className="text-r-gold">Possibilities.</span>
            </h2>
          </div>
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            Explore {categoryLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full w-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 text-left transition-colors hover:border-r-gold hover:bg-r-panel"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
                    {categoryLabel}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-4 text-xl leading-tight text-r-white">{service.title}</h3>
                <p className="mt-2 text-sm text-r-muted font-body normal-case">{service.description}</p>
                <div className="mt-auto flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.15em] text-r-muted">
                  <span>{service.badge}</span>
                  <span>{service.number}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
