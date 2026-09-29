"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { FilterPill } from "@/components/ui/FilterPill";
import { getPageLabel } from "@/lib/page-label";
import { planInterestOptions, type PlanInterestValue } from "@/data/start-content";

const inputClasses =
  "mt-2 block w-full rounded-sm border border-r-line bg-r-bg px-4 py-3 text-sm text-r-white font-body normal-case placeholder:text-r-muted/50 transition-colors focus:border-r-gold focus:outline-none";
const labelClasses = "text-xs font-semibold uppercase tracking-[0.15em] text-r-muted";

type Status = "idle" | "submitting" | "success" | "error" | "missing-contact";

export function ContactForm() {
  const pathname = usePathname();
  const [planInterest, setPlanInterest] = useState<PlanInterestValue>("help-me-choose");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;

    if (!email?.trim() && !phone?.trim()) {
      setStatus("missing-contact");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email,
          phone,
          interest: planInterest,
          message: data.get("question"),
          page: getPageLabel(pathname),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-6">
        <h2 className="text-3xl text-r-gold">Question Received.</h2>
        <p className="mt-4 max-w-md text-sm text-r-muted font-body normal-case">
          Thank you — the team will review your question and follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <label className="block" htmlFor="contact-form-name">
        <span className={labelClasses}>Name</span>
        <input id="contact-form-name" name="name" type="text" required autoComplete="name" className={inputClasses} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor="contact-form-email">
          <span className={labelClasses}>Email</span>
          <input id="contact-form-email" name="email" type="email" autoComplete="email" className={inputClasses} />
        </label>
        <label className="block" htmlFor="contact-form-phone">
          <span className={labelClasses}>Phone</span>
          <input id="contact-form-phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </label>
      </div>
      {status === "missing-contact" && (
        <p className="text-sm text-r-gold-light" role="alert">
          Please provide an email or a phone number so the team can reach you.
        </p>
      )}

      <div>
        <span className={labelClasses}>Plan Interest</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {planInterestOptions.map((option) => (
            <FilterPill
              key={option.value}
              active={planInterest === option.value}
              onClick={() => setPlanInterest(option.value)}
            >
              {option.label}
            </FilterPill>
          ))}
        </div>
      </div>

      <label className="block" htmlFor="contact-form-question">
        <span className={labelClasses}>Your Question</span>
        <textarea
          id="contact-form-question"
          name="question"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-r-gold-light" role="alert">
          Something went wrong sending your question. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send My Question"}
        {status !== "submitting" && <ArrowUpRight size={16} aria-hidden />}
      </button>
    </form>
  );
}
