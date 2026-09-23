import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { GoalDirectory } from "@/components/goals/GoalDirectory";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { goalsHero, goals } from "@/data/goals-content";

export const metadata: Metadata = {
  title: "What Would You Build?",
  description: "Connect a real-world goal with the retirement-plan knowledge and professional work behind it.",
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

      <GoalDirectory goals={goals} />

      <ClosingStatement />
    </>
  );
}
