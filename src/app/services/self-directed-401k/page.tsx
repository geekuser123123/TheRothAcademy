import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceAssetGrid } from "@/components/services/ServiceAssetGrid";
import { ServiceScenario } from "@/components/services/ServiceScenario";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  service401kHero,
  service401kFoundation,
  service401kOverview,
  service401kProcess,
  service401kScenario,
  service401kFaq,
  service401kCrossLink,
} from "@/data/self-directed-401k-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k)",
  description:
    "A self-directed 401(k) built for business owners — higher contribution limits, checkbook control, and room for the assets you understand.",
};

export default function SelfDirected401kPage() {
  return (
    <>
      <ServiceHero
        eyebrow={service401kHero.eyebrow}
        title={service401kHero.title}
        goldLine={service401kHero.goldLine}
        description={service401kHero.description}
        whoItsFor={service401kHero.whoItsFor}
        contactTopic="Self-Directed 401(k)"
        primaryCta={{ label: "Start My 401(k) Conversation" }}
        secondaryCta={{ label: "Explore advanced services", href: "/advanced-services" }}
        imageSrc="/services/401k/hero.webp"
        summary={service401kHero.summary}
      />

      <ServiceProcess
        eyebrow={service401kFoundation.eyebrow}
        heading={service401kFoundation.heading}
        steps={service401kFoundation.steps}
        columns={3}
      />

      <ServiceOverview
        eyebrow={service401kOverview.eyebrow}
        heading={service401kOverview.heading}
        paragraphs={service401kOverview.paragraphs}
        features={service401kOverview.features}
        image={service401kOverview.image}
        imageAlt="Self-directed 401(k) plan documents"
      />

      <ServiceAssetGrid
        eyebrow="Inside The Plan"
        heading={["What Your Plan", "Can Hold."]}
        intro="Use your self-directed 401(k) to invest in opportunities you already understand."
        tagline={["One Account.", "Many Markets."]}
        footnote="Investment availability depends on the account, provider, and applicable rules. The academy does not recommend or custody investments."
      />

      <ServiceProcess
        eyebrow={service401kProcess.eyebrow}
        heading={service401kProcess.heading}
        intro={service401kProcess.intro}
        steps={service401kProcess.steps}
      />

      <ServiceScenario
        eyebrow={service401kScenario.eyebrow}
        heading={service401kScenario.heading}
        paragraphs={service401kScenario.paragraphs}
        note={service401kScenario.note}
        prepTitle={service401kScenario.prepTitle}
        prepItems={service401kScenario.prepItems}
        ctaLabel={service401kScenario.ctaLabel}
        contactTopic="Self-Directed 401(k)"
      />

      <ServiceFaq
        eyebrow={service401kFaq.eyebrow}
        heading={service401kFaq.heading}
        items={service401kFaq.items}
        sourceLink={service401kFaq.sourceLink}
      />

      <ServiceCrossLink
        label={service401kCrossLink.label}
        title={service401kCrossLink.title}
        href={service401kCrossLink.href}
      />

      <ClosingStatement />
    </>
  );
}
