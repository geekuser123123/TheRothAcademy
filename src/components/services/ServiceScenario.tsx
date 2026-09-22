"use client";

import { FileText, Check, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function ServiceScenario({
  eyebrow,
  heading,
  paragraphs,
  note,
  prepTitle,
  prepItems,
  ctaLabel,
  contactTopic,
}: {
  eyebrow: string;
  heading: string[];
  paragraphs: string[];
  note: string;
  prepTitle: string;
  prepItems: string[];
  ctaLabel: string;
  contactTopic?: string;
}) {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-20 md:py-28">
      <div className="container-brand grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="min-w-0">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>

          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}

          <p className="mt-6 text-xs text-r-muted/60 font-body normal-case">{note}</p>
        </div>

        <aside className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-7">
          <FileText size={24} className="text-r-gold" aria-hidden />
          <h3 className="mt-4 text-xl text-r-white">{prepTitle}</h3>
          <ul className="mt-5 space-y-3 border-t border-r-line pt-5">
            {prepItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                <Check size={16} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => open(contactTopic)}
            className="mt-7 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-gold/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-gold transition-colors hover:bg-r-gold hover:text-r-bg"
          >
            {ctaLabel}
            <ArrowUpRight size={16} aria-hidden />
          </button>
        </aside>
      </div>
    </section>
  );
}
