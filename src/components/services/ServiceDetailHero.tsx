"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function ServiceDetailHero({
  categoryLabel,
  categoryHref,
  title,
  description,
  intro,
  badgeLabel,
  serviceTitle,
}: {
  categoryLabel: string;
  categoryHref: string;
  title: string;
  description: string;
  intro: string;
  badgeLabel: string;
  serviceTitle: string;
}) {
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2 pb-16 pt-40 md:pb-20 md:pt-48">
      <Image
        aria-hidden
        src="/gold-dust-hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(9,10,11,0.96) 0%, rgba(9,10,11,0.88) 32%, rgba(9,10,11,0.55) 60%, rgba(9,10,11,0.75) 100%), linear-gradient(0deg, rgba(9,10,11,0.9) 0%, rgba(9,10,11,0.2) 35%, rgba(9,10,11,0.35) 100%)",
        }}
      />
      <div className="container-brand relative">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-r-muted font-body normal-case"
        >
          <Link href="/" className="transition-colors hover:text-r-gold">
            Home
          </Link>
          <ChevronRight size={12} aria-hidden />
          <Link href="/advanced-services" className="transition-colors hover:text-r-gold">
            Advanced services
          </Link>
          <ChevronRight size={12} aria-hidden />
          <Link href={categoryHref} className="transition-colors hover:text-r-gold">
            {categoryLabel}
          </Link>
        </nav>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p
              className="flex items-center gap-3 font-semibold uppercase text-r-gold"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              <span className="h-px w-8 bg-r-gold" aria-hidden />
              {categoryLabel}
            </p>

            <h1
              style={{
                marginTop: 35,
                fontSize: "clamp(76px, 10.8vw, 146px)",
                lineHeight: 0.9,
                letterSpacing: "-0.025em",
              }}
            >
              {title}
            </h1>

            <p className="mt-6 max-w-lg text-base text-r-muted font-body normal-case">{description}</p>
          </div>

          <span className="shrink-0 rounded-full border border-r-gold/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-r-gold">
            {badgeLabel}
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-r-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm text-r-muted font-body normal-case">{intro}</p>
          <button
            type="button"
            onClick={() => open("Advanced services", `I'd like to talk through: ${serviceTitle}.`)}
            className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Discuss this service
            <ArrowUpRight size={18} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
