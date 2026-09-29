import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { contactHero, clientPortal } from "@/data/contact-content";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Have a Question Before Getting Started?",
  description: "Ask the team a plan question, get help choosing between a 401(k) and an IRA, or find your existing-client support contact.",
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

      <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
        <div className="container-brand max-w-2xl">
          <ContactForm />
        </div>
      </section>

      <section className="border-b border-r-line bg-r-stripe-2 py-14">
        <div className="container-brand max-w-2xl">
          <h2 className="text-2xl md:text-3xl">{clientPortal.heading}</h2>
          <p className="mt-2 text-sm text-r-muted font-body normal-case">{clientPortal.description}</p>
          <p className="mt-4 text-sm text-r-muted/80 font-body normal-case">{clientPortal.note}</p>
          <div className="mt-4 space-y-1 text-sm font-body normal-case">
            <a href={`mailto:${siteConfig.email}`} className="block text-r-gold hover:text-r-gold-light transition-colors">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneTel}`} className="block text-r-gold hover:text-r-gold-light transition-colors">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <ClosingStatement />
    </>
  );
}
