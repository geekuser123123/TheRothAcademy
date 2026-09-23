import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceDirectory } from "@/components/services/ServiceDirectory";
import { ServiceStatement } from "@/components/services/ServiceStatement";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  serviceDirectoryHero,
  allServiceCards,
  advancedServiceCategories,
  advancedServicesApproach,
} from "@/data/advanced-services-content";

export const metadata: Metadata = {
  title: "The Service Directory",
  description: "Explore self-directed 401(k)s, IRAs, and the full Roth Academy advanced service library.",
};

export default function ServicesDirectoryPage() {
  return (
    <>
      <ServiceHero
        eyebrow={serviceDirectoryHero.eyebrow}
        title={serviceDirectoryHero.title}
        goldLine={serviceDirectoryHero.goldLine}
        description={serviceDirectoryHero.description}
        stats={serviceDirectoryHero.stats}
      />

      <ServiceDirectory
        eyebrow="Find Your Direction"
        heading="A Deeper Bench Of Possibilities."
        services={allServiceCards}
        categories={advancedServiceCategories}
      />

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
