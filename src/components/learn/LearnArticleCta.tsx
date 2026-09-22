"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

export function LearnArticleCta({ guideTitle }: { guideTitle: string }) {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-14">
      <div className="container-brand max-w-3xl">
        <p className="text-sm text-r-muted font-body normal-case">
          Have a question specific to your situation? General guides are a starting point — the team can talk
          through the facts that apply to you.
        </p>
        <button
          type="button"
          onClick={() => open("I am exploring my options", `I have a question after reading: ${guideTitle}.`)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
        >
          Talk through my situation
          <ArrowUpRight size={16} aria-hidden />
        </button>
      </div>
    </section>
  );
}
