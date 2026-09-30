import type { Metadata } from "next";
import { RcsHero } from "@/components/retirement-certainty/RcsHero";
import { RcsViewContentTracker } from "@/components/retirement-certainty/RcsViewContentTracker";
import { RcsForYouIf } from "@/components/retirement-certainty/RcsForYouIf";
import { RcsSolution } from "@/components/retirement-certainty/RcsSolution";
import { RcsTestimonials } from "@/components/retirement-certainty/RcsTestimonials";
import { RcsHelpAreas } from "@/components/retirement-certainty/RcsHelpAreas";
import { RcsGuarantee } from "@/components/retirement-certainty/RcsGuarantee";
import { RcsBooking } from "@/components/retirement-certainty/RcsBooking";
import { RcsFaq } from "@/components/retirement-certainty/RcsFaq";
import { RcsFinalCta } from "@/components/retirement-certainty/RcsFinalCta";

export const metadata: Metadata = {
  title: "Self-Directed Certainty Session",
  description:
    "Book a focused 15-minute consultation with Self-Directed Retirement Plan Specialist Tim Berry. Get clarity on compliance, prohibited transactions, and your safest path forward, backed by a 250% Value Guarantee.",
  alternates: { canonical: "/self-directed-certainty-session" },
};

export default function SelfDirectedCertaintySessionPage() {
  return (
    <>
      <RcsViewContentTracker />
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
