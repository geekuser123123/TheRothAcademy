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
  serviceIraHero,
  serviceIraFoundation,
  serviceIraOverview,
  serviceIraProcess,
  serviceIraScenario,
  serviceIraFaq,
  serviceIraCrossLink,
} from "@/data/self-directed-ira-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA",
  description:
    "A self-directed IRA built for individual investors — Traditional, Roth, or SEP, with room for the assets you understand.",
};

export default function SelfDirectedIraPage() {
  return (
    <>
      <ServiceHero
        eyebrow={serviceIraHero.eyebrow}
        title={serviceIraHero.title}
        goldLine={serviceIraHero.goldLine}
        description={serviceIraHero.description}
        whoItsFor={serviceIraHero.whoItsFor}
        contactTopic="Self-Directed IRA"
        primaryCta={{ label: "Explore My IRA Options" }}
        secondaryCta={{ label: "Explore advanced services", href: "/advanced-services" }}
        imageSrc="/services/ira/hero.webp"
        summary={serviceIraHero.summary}
      />

      <ServiceProcess
        eyebrow={serviceIraFoundation.eyebrow}
        heading={serviceIraFoundation.heading}
        steps={serviceIraFoundation.steps}
        columns={3}
      />

      <ServiceOverview
        eyebrow={serviceIraOverview.eyebrow}
        heading={serviceIraOverview.heading}
        paragraphs={serviceIraOverview.paragraphs}
        features={serviceIraOverview.features}
        image={serviceIraOverview.image}
        imageAlt="Self-directed IRA account documents"
        reverse
      />

      <ServiceAssetGrid
        eyebrow="Inside The Account"
        heading={["What Your IRA", "Can Hold."]}
        intro="Use your self-directed IRA to invest in opportunities you already understand."
        tagline={["Same Principles.", "New Possibilities."]}
        footnote="Investment availability depends on the account, provider, and applicable rules. The academy does not recommend or custody investments."
      />

      <ServiceProcess
        eyebrow={serviceIraProcess.eyebrow}
        heading={serviceIraProcess.heading}
        intro={serviceIraProcess.intro}
        steps={serviceIraProcess.steps}
      />

      <ServiceScenario
        eyebrow={serviceIraScenario.eyebrow}
        heading={serviceIraScenario.heading}
        paragraphs={serviceIraScenario.paragraphs}
        note={serviceIraScenario.note}
        prepTitle={serviceIraScenario.prepTitle}
        prepItems={serviceIraScenario.prepItems}
        ctaLabel={serviceIraScenario.ctaLabel}
        contactTopic="Self-Directed IRA"
      />

      <ServiceFaq
        eyebrow={serviceIraFaq.eyebrow}
        heading={serviceIraFaq.heading}
        items={serviceIraFaq.items}
        sourceLink={serviceIraFaq.sourceLink}
      />

      <ServiceCrossLink
        label={serviceIraCrossLink.label}
        title={serviceIraCrossLink.title}
        href={serviceIraCrossLink.href}
      />

      <ClosingStatement />
    </>
  );
}
