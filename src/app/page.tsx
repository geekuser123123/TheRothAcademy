import { HeroSection } from "@/components/home/HeroSection";
import { AssetClassSection } from "@/components/home/AssetClassSection";
import { PathwaysSection } from "@/components/home/PathwaysSection";
import { StandardSection } from "@/components/home/StandardSection";
import { CompanyCredibilitySection } from "@/components/home/CompanyCredibilitySection";
import { LibrarySection } from "@/components/home/LibrarySection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingStatement } from "@/components/home/ClosingStatement";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AssetClassSection />
      <PathwaysSection />
      <StandardSection />
      <CompanyCredibilitySection />
      <LibrarySection />
      <FaqSection />
      <ClosingStatement heading="Ready to Put Your Retirement Plans in Motion?" />
    </>
  );
}
