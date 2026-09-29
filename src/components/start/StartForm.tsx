"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { FilterPill } from "@/components/ui/FilterPill";
import { getPageLabel } from "@/lib/page-label";
import { planInterestOptions, type PlanInterestValue } from "@/data/start-content";

const inputClasses =
  "mt-2 block w-full rounded-sm border border-r-line bg-r-bg px-4 py-3 text-sm text-r-white font-body normal-case placeholder:text-r-muted/50 transition-colors focus:border-r-gold focus:outline-none";
const labelClasses = "text-xs font-semibold uppercase tracking-[0.15em] text-r-muted";

type Status = "idle" | "submitting" | "success" | "error";

function isPlanInterest(value: string | null): value is PlanInterestValue {
  return planInterestOptions.some((option) => option.value === value);
}

export function StartForm() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialPlan = searchParams.get("plan");
  const [planInterest, setPlanInterest] = useState<PlanInterestValue>(
    isPlanInterest(initialPlan) ? initialPlan : "help-me-choose",
  );
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (isPlanInterest(initialPlan)) setPlanInterest(initialPlan);
  }, [initialPlan]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          state: data.get("state"),
          planInterest,
          businessOwnership: planInterest === "401k" ? data.get("businessOwnership") : undefined,
          employeeInfo: planInterest === "401k" ? data.get("employeeInfo") : undefined,
          existingAccountType: data.get("existingAccountType"),
          intendedInvestments: data.get("intendedInvestments"),
          timeline: data.get("timeline"),
          message: data.get("question"),
          page: getPageLabel(pathname),
          campaignSource: searchParams.get("utm_source") || "Direct",
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
      <div className="py-10 text-center">
        <h2 className="text-3xl text-r-gold">Request Received.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-r-muted font-body normal-case">
          We received your request. Our team will help confirm the right plan and guide you through the next
          steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor="start-name">
          <span className={labelClasses}>Name</span>
          <input id="start-name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </label>
        <label className="block" htmlFor="start-email">
          <span className={labelClasses}>Email</span>
          <input id="start-email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor="start-phone">
          <span className={labelClasses}>Phone</span>
          <input id="start-phone" name="phone" type="tel" required autoComplete="tel" className={inputClasses} />
        </label>
        <label className="block" htmlFor="start-state">
          <span className={labelClasses}>State</span>
          <input
            id="start-state"
            name="state"
            type="text"
            required
            placeholder="e.g. Texas"
            className={inputClasses}
          />
        </label>
      </div>

      {planInterest === "401k" && (
        <div className={clsx("grid gap-5 sm:grid-cols-2 border-t border-r-line pt-8")}>
          <label className="block" htmlFor="start-business-ownership">
            <span className={labelClasses}>Business Ownership</span>
            <input
              id="start-business-ownership"
              name="businessOwnership"
              type="text"
              placeholder="Sole proprietor, partnership, corporation..."
              className={inputClasses}
            />
          </label>
          <label className="block" htmlFor="start-employee-info">
            <span className={labelClasses}>Employees</span>
            <input
              id="start-employee-info"
              name="employeeInfo"
              type="text"
              placeholder="Any full-time employees besides you or a spouse?"
              className={inputClasses}
            />
          </label>
        </div>
      )}

      <div className="grid gap-5 border-t border-r-line pt-8 sm:grid-cols-2">
        <label className="block" htmlFor="start-existing-account">
          <span className={labelClasses}>
            Existing Retirement Account <span className="normal-case text-r-muted/60">(optional)</span>
          </span>
          <input
            id="start-existing-account"
            name="existingAccountType"
            type="text"
            placeholder="401(k), IRA, none..."
            className={inputClasses}
          />
        </label>
        <label className="block" htmlFor="start-timeline">
          <span className={labelClasses}>
            Timeline <span className="normal-case text-r-muted/60">(optional)</span>
          </span>
          <input
            id="start-timeline"
            name="timeline"
            type="text"
            placeholder="e.g. Within a month"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="block" htmlFor="start-investments">
        <span className={labelClasses}>
          Intended Investments <span className="normal-case text-r-muted/60">(optional)</span>
        </span>
        <input
          id="start-investments"
          name="intendedInvestments"
          type="text"
          placeholder="Real estate, private lending, precious metals..."
          className={inputClasses}
        />
      </label>

      <label className="block" htmlFor="start-question">
        <span className={labelClasses}>
          A Question For The Team <span className="normal-case text-r-muted/60">(optional)</span>
        </span>
        <textarea id="start-question" name="question" rows={3} className={`${inputClasses} resize-none`} />
      </label>

      {status === "error" && (
        <p className="text-sm text-r-gold-light" role="alert">
          Something went wrong sending your request. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Start My Setup"}
        {status !== "submitting" && <ArrowUpRight size={16} aria-hidden />}
      </button>
    </form>
  );
}
