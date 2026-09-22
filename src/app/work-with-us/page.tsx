import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WorkProcessSteps } from "@/components/work/WorkProcessSteps";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { EngagementChoice } from "@/components/work/EngagementChoice";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { workHero, workSteps, workEngagementBasics, workEngagementChoices } from "@/data/work-with-us-content";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Learn how your inquiry becomes a defined engagement with an assigned professional, clear deliverables, and a planned finish.",
};

export default function WorkWithUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={workHero.eyebrow}
        title={workHero.title}
        goldLine={workHero.goldLine}
        description={workHero.description}
        contactTopic="I am exploring my options"
        primaryCta={{ label: "Start a conversation" }}
      />

      <WorkProcessSteps steps={workSteps} />

      <ServiceProcess
        eyebrow={workEngagementBasics.eyebrow}
        heading={workEngagementBasics.heading}
        steps={workEngagementBasics.items}
        columns={3}
      />

      <EngagementChoice choices={workEngagementChoices} />

      <ClosingStatement />
    </>
  );
}
