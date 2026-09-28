import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LegalPolicyList } from "@/components/legal/LegalPolicyList";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { termsHero, termsSections, legalContactBlock } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service & SMS Compliance",
  description: "Roth Academy's Terms of Service and SMS messaging compliance, including opt-out, support, and carrier information.",
};

export default function TermsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={termsHero.eyebrow}
        title={termsHero.title}
        goldLine={termsHero.goldLine}
        description={termsHero.description}
      />

      <LegalPolicyList sections={termsSections} contactBlock={legalContactBlock} />

      <ClosingStatement />
    </>
  );
}
