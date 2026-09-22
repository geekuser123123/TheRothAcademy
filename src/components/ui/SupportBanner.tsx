"use client";

import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function SupportBanner({
  heading,
  description,
  cta,
  contactTopic = "I am exploring my options",
  variant = "link",
}: {
  heading: string;
  description: string;
  cta: string;
  contactTopic?: string;
  variant?: "link" | "outline";
}) {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-14">
      <div className="container-brand flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-lg">
          <h3 className="text-2xl md:text-3xl">{heading}</h3>
          <p className="mt-2 text-sm text-r-muted font-body normal-case">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => open(contactTopic)}
          className={clsx(
            "inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors",
            variant === "outline"
              ? "rounded-[var(--radius-brand-control)] border border-r-line px-6 py-3 text-r-white hover:border-r-gold hover:text-r-gold"
              : "text-r-gold",
          )}
        >
          {cta}
          <ArrowUpRight size={16} aria-hidden />
        </button>
      </div>
    </section>
  );
}
