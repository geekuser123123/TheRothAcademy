import { HeroSection } from "@/components/home/HeroSection";
import { TwoWaysInSection } from "@/components/home/TwoWaysInSection";
import { AssetClassSection } from "@/components/home/AssetClassSection";
import { AdvancedServicesSection } from "@/components/home/AdvancedServicesSection";
import { StandardSection } from "@/components/home/StandardSection";
import { StoryTeaserSection } from "@/components/home/StoryTeaserSection";
import { LibrarySection } from "@/components/home/LibrarySection";
import { EventSection } from "@/components/home/EventSection";
import { ResourceSection } from "@/components/home/ResourceSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingStatement } from "@/components/home/ClosingStatement";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TwoWaysInSection />
      <AssetClassSection />
      <AdvancedServicesSection />
      <StandardSection />
      <StoryTeaserSection />
      <LibrarySection />
      <EventSection />
      <ResourceSection />
      <FaqSection />
      <ClosingStatement />
    </>
  );
}
