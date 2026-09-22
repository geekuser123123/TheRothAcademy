import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceAssetGrid } from "@/components/services/ServiceAssetGrid";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  serviceIraHero,
  serviceIraOverview,
  serviceIraProcess,
  serviceIraFaq,
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
      />

      <ServiceOverview
        eyebrow={serviceIraOverview.eyebrow}
        heading={serviceIraOverview.heading}
        paragraphs={serviceIraOverview.paragraphs}
        features={serviceIraOverview.features}
        image={serviceIraOverview.image}
        imageAlt="Self-directed IRA account documents"
        placeholderVariant={serviceIraOverview.placeholderVariant}
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
        steps={serviceIraProcess.steps}
      />

      <ServiceFaq eyebrow={serviceIraFaq.eyebrow} heading={serviceIraFaq.heading} items={serviceIraFaq.items} />

      <ClosingStatement />
    </>
  );
}
