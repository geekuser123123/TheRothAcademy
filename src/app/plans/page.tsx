import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PlansPairSection } from "@/components/plans/PlansPairSection";
import { PlansComparison } from "@/components/plans/PlansComparison";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { plansHero, existingPlanBanner, plansProcess, plansFaq } from "@/data/plans-content";
import { standardSteps, faqItems } from "@/data/home-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) & IRA Plans",
  description: "Explore two clear paths to self-directed retirement investing. Compare the starting points and request the right setup.",
};

export default function PlansPage() {
  return (
    <>
      <ServiceHero
        eyebrow={plansHero.eyebrow}
        title={plansHero.title}
        goldLine={plansHero.goldLine}
        description={plansHero.description}
      />

      <PlansPairSection />

      <PlansComparison />

      <SupportBanner
        heading={existingPlanBanner.heading}
        description={existingPlanBanner.description}
        cta={existingPlanBanner.cta}
        href={existingPlanBanner.href}
      />

      <ServiceProcess
        eyebrow={plansProcess.eyebrow}
        heading={plansProcess.heading}
        steps={standardSteps}
        columns={3}
      />

      <ServiceFaq eyebrow={plansFaq.eyebrow} heading={plansFaq.heading} items={faqItems.slice(0, 3)} />

      <ClosingStatement />
    </>
  );
}
