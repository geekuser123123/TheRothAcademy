"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function ServiceIntroBand({
  lines,
  cta,
  contactTopic,
}: {
  lines: string[];
  cta: string;
  contactTopic?: string;
}) {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-bg py-10">
      <div className="container-brand flex flex-wrap items-center justify-between gap-6">
        <p className="max-w-xl text-sm text-r-muted font-body normal-case">
          {lines.map((line, index) => (
            <span key={line}>
              {index === lines.length - 1 ? <strong className="text-r-white">{line}</strong> : line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <button
          type="button"
          onClick={() => open(contactTopic)}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
        >
          {cta}
          <ArrowUpRight size={16} aria-hidden />
        </button>
      </div>
    </section>
  );
}
