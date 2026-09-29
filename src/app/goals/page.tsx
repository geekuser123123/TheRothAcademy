import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { InvestmentPossibilities } from "@/components/goals/InvestmentPossibilities";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { goalsHero, investmentPossibilities, investmentPossibilitiesFootnote } from "@/data/goals-content";

export const metadata: Metadata = {
  title: "What Would You Invest In?",
  description:
    "Real estate, private lending, precious metals, digital assets, stocks and bonds: see what a self-directed 401(k) or IRA can hold.",
};

export default function GoalsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={goalsHero.eyebrow}
        title={goalsHero.title}
        goldLine={goalsHero.goldLine}
        description={goalsHero.description}
      />

      <InvestmentPossibilities items={investmentPossibilities} footnote={investmentPossibilitiesFootnote} />

      <ClosingStatement />
    </>
  );
}
