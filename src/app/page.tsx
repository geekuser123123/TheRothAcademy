import { HeroSection } from "@/components/home/HeroSection";
import { PathwaysSection } from "@/components/home/PathwaysSection";
import { AssetClassSection } from "@/components/home/AssetClassSection";
import { AdvancedServicesSection } from "@/components/home/AdvancedServicesSection";
import { StandardSection } from "@/components/home/StandardSection";
import { StoryTeaserSection } from "@/components/home/StoryTeaserSection";
import { LibrarySection } from "@/components/home/LibrarySection";
import { EventSection } from "@/components/home/EventSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingStatement } from "@/components/home/ClosingStatement";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PathwaysSection />
      <AssetClassSection />
      <AdvancedServicesSection />
      <StandardSection />
      <StoryTeaserSection />
      <LibrarySection />
      <EventSection />
      <FaqSection />
      <ClosingStatement />
    </>
  );
}
