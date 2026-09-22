import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ContactOptionsSection } from "@/components/contact/ContactOptionsSection";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { contactHero, clientBanner } from "@/data/contact-content";

export const metadata: Metadata = {
  title: "Contact the Team",
  description: "Tell the Roth Academy team what you want to accomplish. Begin with a clear objective and the right next step.",
};

export default function ContactPage() {
  return (
    <>
      <ServiceHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        goldLine={contactHero.goldLine}
        description={contactHero.description}
      />

      <ContactOptionsSection />

      <SupportBanner
        heading={clientBanner.heading}
        description={clientBanner.description}
        cta={clientBanner.cta}
        href={clientBanner.href}
        variant="outline"
      />

      <ClosingStatement />
    </>
  );
}
