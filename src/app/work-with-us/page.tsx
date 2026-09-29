import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WorkProcessSteps } from "@/components/work/WorkProcessSteps";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { workHero, workSteps, workEngagementBasics } from "@/data/work-with-us-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how your plan selection becomes a signed-up, set-up, and funded self-directed account.",
};

export default function WorkWithUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={workHero.eyebrow}
        title={workHero.title}
        goldLine={workHero.goldLine}
        description={workHero.description}
        primaryCta={{ label: "Open a Plan", href: planDestinations.openPlan }}
        secondaryCta={{ label: "Ask a Question", href: planDestinations.getHelp }}
      />

      <WorkProcessSteps steps={workSteps} />

      <ServiceProcess
        eyebrow={workEngagementBasics.eyebrow}
        heading={workEngagementBasics.heading}
        steps={workEngagementBasics.items}
        columns={3}
      />

      <ClosingStatement />
    </>
  );
}
