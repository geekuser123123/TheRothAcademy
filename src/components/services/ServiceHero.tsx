"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { useContactModal } from "@/components/contact/ContactModalProvider";

// href navigates normally; omit it to open the shared contact modal instead.
type Cta = { label: string; href?: string };

export function ServiceHero({
  eyebrow,
  title,
  goldLine,
  description,
  whoItsFor,
  contactTopic,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string[];
  goldLine?: number;
  description: string;
  whoItsFor?: string;
  contactTopic?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2">
      {/* Abstract gold arc — echoes the homepage hero at a quieter scale */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-0 h-full w-[60%] opacity-25 mix-blend-screen md:-right-[10%] md:w-[45%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(50px)",
        }}
      />

      <div className="container-brand relative pb-16 pt-40 md:pb-20 md:pt-48">
        <p
          className="flex items-center gap-3 font-semibold uppercase text-r-gold"
          style={{ fontSize: 11, letterSpacing: "0.14em" }}
        >
          <span className="h-px w-8 bg-r-gold" aria-hidden />
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl lg:text-8xl">
          {title.map((line, index) => (
            <span key={line} className={clsx("block", index === goldLine && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-lg text-base text-r-muted font-body normal-case">{description}</p>
        {whoItsFor && (
          <p className="mt-3 max-w-lg text-sm text-r-muted/70 font-body normal-case">{whoItsFor}</p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {primaryCta && (primaryCta.href ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
              >
                {primaryCta.label}
                <ArrowUpRight size={18} aria-hidden />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => open(contactTopic)}
                className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
              >
                {primaryCta.label}
                <ArrowUpRight size={18} aria-hidden />
              </button>
            ))}
            {secondaryCta && (secondaryCta.href ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-line/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
              >
                {secondaryCta.label}
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => open(contactTopic)}
                className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-line/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
              >
                {secondaryCta.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
