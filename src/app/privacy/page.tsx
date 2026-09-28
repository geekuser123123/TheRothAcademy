import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LegalPolicyList } from "@/components/legal/LegalPolicyList";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { privacyHero, privacySections, legalContactBlock } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Roth Academy collects, uses, and protects your information across our website, scheduling forms, and SMS program.",
};

export default function PrivacyPage() {
  return (
    <>
      <ServiceHero
        eyebrow={privacyHero.eyebrow}
        title={privacyHero.title}
        goldLine={privacyHero.goldLine}
        description={privacyHero.description}
      />

      <LegalPolicyList sections={privacySections} contactBlock={legalContactBlock} />

      <ClosingStatement />
    </>
  );
}
