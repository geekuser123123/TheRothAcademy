import type { Metadata } from "next";
import { RcsHero } from "@/components/retirement-certainty/RcsHero";
import { RcsForYouIf } from "@/components/retirement-certainty/RcsForYouIf";
import { RcsSolution } from "@/components/retirement-certainty/RcsSolution";
import { RcsTestimonials } from "@/components/retirement-certainty/RcsTestimonials";
import { RcsHelpAreas } from "@/components/retirement-certainty/RcsHelpAreas";
import { RcsGuarantee } from "@/components/retirement-certainty/RcsGuarantee";
import { RcsBooking } from "@/components/retirement-certainty/RcsBooking";
import { RcsFaq } from "@/components/retirement-certainty/RcsFaq";
import { RcsFinalCta } from "@/components/retirement-certainty/RcsFinalCta";

export const metadata: Metadata = {
  title: "Retirement Certainty Session",
  description:
    "Book a focused 15-minute consultation with Self-Directed Retirement Plan Specialist Tim Berry. Get clarity on compliance, prohibited transactions, and your safest path forward — backed by a 400% Value Guarantee.",
  alternates: { canonical: "/retirement-certainty-session" },
};

export default function RetirementCertaintySessionPage() {
  return (
    <>
      <RcsHero />
      <RcsForYouIf />
      <RcsSolution />
      <RcsTestimonials />
      <RcsHelpAreas />
      <RcsGuarantee />
      <RcsBooking />
      <RcsFaq />
      <RcsFinalCta />
    </>
  );
}
