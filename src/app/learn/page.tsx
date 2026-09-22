import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LearnDirectory } from "@/components/learn/LearnDirectory";
import { LearnSupportBanner } from "@/components/learn/LearnSupportBanner";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { learnHero, learnSupportBanner } from "@/data/learn-content";

export const metadata: Metadata = {
  title: "The Knowledge Library",
  description:
    "Learn the questions behind self-directed retirement plans, real estate, Roth strategies, trusts, and advanced planning.",
};

export default function LearnPage() {
  return (
    <>
      <ServiceHero
        eyebrow={learnHero.eyebrow}
        title={learnHero.title}
        goldLine={learnHero.goldLine}
        description={learnHero.description}
      />

      <LearnDirectory />

      <LearnSupportBanner
        heading={learnSupportBanner.heading}
        description={learnSupportBanner.description}
        cta={learnSupportBanner.cta}
      />

      <ClosingStatement />
    </>
  );
}
