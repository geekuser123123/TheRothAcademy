import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StartChoices } from "@/components/start/StartChoices";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { startHero, startSupportBanner } from "@/data/start-content";

export const metadata: Metadata = {
  title: "Find Your Starting Point",
  description: "Choose a self-directed retirement plan or explore the advanced services relevant to your next move.",
};

export default function StartPage() {
  return (
    <>
      <ServiceHero
        eyebrow={startHero.eyebrow}
        title={startHero.title}
        goldLine={startHero.goldLine}
        description={startHero.description}
      />

      <StartChoices />

      <SupportBanner
        heading={startSupportBanner.heading}
        description={startSupportBanner.description}
        cta={startSupportBanner.cta}
      />

      <ClosingStatement />
    </>
  );
}
