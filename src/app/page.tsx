import { HeroSection } from "@/components/home/HeroSection";
import { TwoWaysInSection } from "@/components/home/TwoWaysInSection";
import { AssetClassSection } from "@/components/home/AssetClassSection";
import { AdvancedServicesSection } from "@/components/home/AdvancedServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingStatement } from "@/components/home/ClosingStatement";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TwoWaysInSection />
      <AssetClassSection />
      <AdvancedServicesSection />

      {/*
        TODO: source content missing for these homepage sections — need a
        screenshot to capture real body copy before building them:
          - "Expertise Should Lead Somewhere."
          - "Know More. Move With Purpose."
          - "Advanced 401(k) Planning Session."
          - "Come With Better Questions."
      */}

      <ProcessSection />
      <FaqSection />
      <ClosingStatement />
    </>
  );
}
