import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceIntroBand } from "@/components/services/ServiceIntroBand";
import { AdvancedServicesDirectory } from "@/components/services/AdvancedServicesDirectory";
import { ServiceStatement } from "@/components/services/ServiceStatement";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { advancedServicesHero, advancedServicesIntro, advancedServicesApproach } from "@/data/advanced-services-content";

export const metadata: Metadata = {
  title: "Advanced Services",
  description: "Explore CRTs, trusts, preferred LLCs, real estate structures, Roth planning, and complex transaction review.",
};

export default function AdvancedServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={advancedServicesHero.eyebrow}
        title={advancedServicesHero.title}
        goldLine={advancedServicesHero.goldLine}
        description={advancedServicesHero.description}
        stats={advancedServicesHero.stats}
        contactTopic="Advanced services"
        primaryCta={{ label: "Talk Through My Situation" }}
        imageSrc="/advanced-services/hero.webp"
      />

      <ServiceIntroBand
        lines={advancedServicesIntro.lines}
        cta={advancedServicesIntro.cta}
        contactTopic="Advanced services"
      />

      <AdvancedServicesDirectory />

      <ServiceStatement
        eyebrow={advancedServicesApproach.eyebrow}
        heading={advancedServicesApproach.heading}
        paragraphs={advancedServicesApproach.paragraphs}
        linkLabel={advancedServicesApproach.linkLabel}
        linkHref={advancedServicesApproach.linkHref}
      />

      <ClosingStatement />
    </>
  );
}
