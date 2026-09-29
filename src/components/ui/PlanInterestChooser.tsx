"use client";

import { Building2, HelpCircle, User } from "lucide-react";
import { clsx } from "clsx";
import { planInterestOptions, type PlanInterestValue } from "@/data/start-content";

const planIcons = { "401k": Building2, ira: User, "help-me-choose": HelpCircle };
const planCardDescriptions: Record<PlanInterestValue, string> = {
  "401k": "For business owners.",
  ira: "For individual investors.",
  "help-me-choose": "Not sure yet? We'll help.",
};

export function PlanInterestChooser({
  value,
  onChange,
}: {
  value: PlanInterestValue;
  onChange: (value: PlanInterestValue) => void;
}) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">Plan Interest</span>
      <div role="radiogroup" aria-label="Plan interest" className="mt-3 grid gap-3 sm:grid-cols-3">
        {planInterestOptions.map((option) => {
          const Icon = planIcons[option.value];
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(option.value)}
              className={clsx(
                "flex flex-col items-start gap-3 rounded-[var(--radius-brand-control)] border p-4 text-left transition-colors",
                active
                  ? "border-r-gold bg-r-gold/10"
                  : "border-r-line bg-r-bg/40 hover:border-r-gold/50 hover:bg-r-bg/70",
              )}
            >
              <span
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-full border",
                  active ? "border-r-gold text-r-gold" : "border-r-line text-r-muted",
                )}
              >
                <Icon size={16} aria-hidden />
              </span>
              <span>
                <span className={clsx("block text-sm font-semibold", active ? "text-r-white" : "text-r-white/90")}>
                  {option.label}
                </span>
                <span className="mt-0.5 block text-xs text-r-muted font-body normal-case">
                  {planCardDescriptions[option.value]}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
