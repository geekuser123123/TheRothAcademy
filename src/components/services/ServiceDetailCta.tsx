"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function ServiceDetailCta({ serviceTitle }: { serviceTitle: string }) {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-14">
      <div className="container-brand max-w-3xl">
        <p className="text-sm text-r-muted font-body normal-case">
          This is a starting point, not a diagnosis. Bring your actual facts to the team, and the appropriate
          professional will determine whether this fits, what work is needed, and who should handle it.
        </p>
        <button
          type="button"
          onClick={() => open("Advanced services", `I'd like to talk through: ${serviceTitle}.`)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
        >
          Talk through my situation
          <ArrowUpRight size={16} aria-hidden />
        </button>
      </div>
    </section>
  );
}
