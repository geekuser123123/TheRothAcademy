"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Search } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FilterPill } from "@/components/ui/FilterPill";
import {
  advancedServiceCategories,
  advancedServices,
  type ServiceCategoryKey,
} from "@/data/advanced-services-content";

const categoryKeys = advancedServiceCategories.map((category) => category.key);

const cardLabelByCategory = Object.fromEntries(
  advancedServiceCategories.map((category) => [category.key, category.cardLabel]),
) as Record<ServiceCategoryKey, string>;

function parseFilterParam(value: string | null): ServiceCategoryKey[] {
  if (!value) return [];
  return value
    .split(",")
    .map((key) => key.trim())
    .filter((key): key is ServiceCategoryKey => (categoryKeys as string[]).includes(key));
}

function AdvancedServicesDirectoryContent() {
  const searchParams = useSearchParams();
  // Lazy initializer: the URL's ?filter= sets the starting selection once, on
  // mount. Further changes come only from the pills, not from re-reading the URL.
  const [activeFilters, setActiveFilters] = useState<Set<ServiceCategoryKey>>(
    () => new Set(parseFilterParam(searchParams.get("filter"))),
  );
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return advancedServices.filter((service) => {
      if (activeFilters.size > 0 && !activeFilters.has(service.category)) return false;
      if (!normalizedQuery) return true;
      const cardLabel = cardLabelByCategory[service.category].toLowerCase();
      return (
        service.title.toLowerCase().includes(normalizedQuery) ||
        service.description.toLowerCase().includes(normalizedQuery) ||
        cardLabel.includes(normalizedQuery)
      );
    });
  }, [activeFilters, query]);

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Find Your Direction</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">A Deeper Bench Of Possibilities.</h2>
          </div>

          <label className="relative w-full max-w-xs">
            <span className="sr-only">Search a service or strategy</span>
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-r-muted" aria-hidden />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a service or strategy"
              className="w-full rounded-sm border border-r-line bg-r-panel py-2.5 pl-10 pr-4 text-sm text-r-white font-body normal-case placeholder:text-r-muted/60 transition-colors focus:border-r-gold focus:outline-none"
            />
          </label>
        </div>

        <div
          role="tablist"
          aria-label="Filter services by category"
          className="mt-8 flex snap-x gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <FilterPill active={activeFilters.size === 0} onClick={() => setActiveFilters(new Set())}>
            All services
          </FilterPill>
          {advancedServiceCategories.map((category) => (
            <FilterPill
              key={category.key}
              active={activeFilters.has(category.key)}
              onClick={() => setActiveFilters(new Set([category.key]))}
            >
              {category.tabLabel}
            </FilterPill>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-r-muted">
          <span>Explore the full range</span>
          <span>
            {filteredServices.length} service{filteredServices.length === 1 ? "" : "s"}
          </span>
        </div>

        {filteredServices.length > 0 ? (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <li key={service.number}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full w-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 text-left transition-colors hover:border-r-gold hover:bg-r-panel"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
                      {cardLabelByCategory[service.category]}
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
        ) : (
          <p className="mt-12 text-sm text-r-muted font-body normal-case">
            No services match &quot;{query}&quot;. Try a different term, or{" "}
            <button type="button" onClick={() => setQuery("")} className="text-r-gold underline underline-offset-2">
              clear your search
            </button>
            .
          </p>
        )}
      </div>
    </section>
  );
}

export function AdvancedServicesDirectory() {
  return (
    <Suspense fallback={null}>
      <AdvancedServicesDirectoryContent />
    </Suspense>
  );
}
