import type { Metadata } from "next";
import { RcsViewContentTracker } from "@/components/retirement-certainty/RcsViewContentTracker";
import { RcsBooking } from "@/components/retirement-certainty/RcsBooking";
import { CsHero } from "@/components/certainty-session/CsHero";
import { CsForYouIf } from "@/components/certainty-session/CsForYouIf";
import { CsSteps } from "@/components/certainty-session/CsSteps";
import { CsTestimonials } from "@/components/certainty-session/CsTestimonials";
import { CsFaq } from "@/components/certainty-session/CsFaq";
import { CsFinalCta } from "@/components/certainty-session/CsFinalCta";

export const metadata: Metadata = {
  title: "Self-Directed Certainty Session",
  description:
    "Book a focused 15-minute consultation with Self-Directed Retirement Plan Specialist Tim Berry. Get clarity on compliance, prohibited transactions, and your safest path forward, backed by a 400% Value Guarantee.",
  robots: { index: false, follow: false },
};

export default function CertaintySessionPage() {
  return (
    <>
      <RcsViewContentTracker />
      <CsHero />
      <CsForYouIf />
      <CsSteps />
      <RcsBooking
        titleOverride="Get Clarity on Your Most Important IRA or 401(k) Question"
        subtitleOverride="Book 15 focused minutes with Tim Berry for a flat $125. Select a time, enter your details, and complete your secure payment."
      />
      <CsTestimonials />
      <CsFaq />
      <CsFinalCta />
    </>
  );
}
