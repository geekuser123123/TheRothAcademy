import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LearnDirectory } from "@/components/learn/LearnDirectory";
import { SupportBanner } from "@/components/ui/SupportBanner";
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
        imageSrc="/gold-dust-hero.jpg"
      />

      <LearnDirectory />

      <SupportBanner
        heading={learnSupportBanner.heading}
        description={learnSupportBanner.description}
        cta={learnSupportBanner.cta}
      />

      <ClosingStatement />
    </>
  );
}
