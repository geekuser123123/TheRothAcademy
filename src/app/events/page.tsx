import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { EventFeatureSection } from "@/components/events/EventFeatureSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { eventsHero, eventJourney, eventsSupportBanner } from "@/data/events-content";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description: "Explore focused workshops and the Dallas Advanced 401(k) Planning Session with Tim Berry.",
};

export default function EventsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={eventsHero.eyebrow}
        title={eventsHero.title}
        goldLine={eventsHero.goldLine}
        description={eventsHero.description}
      />

      <EventFeatureSection />

      <ServiceProcess
        eyebrow={eventJourney.eyebrow}
        heading={eventJourney.heading}
        steps={eventJourney.steps}
        columns={3}
        note={eventJourney.note}
      />

      <SupportBanner
        heading={eventsSupportBanner.heading}
        description={eventsSupportBanner.description}
        cta={eventsSupportBanner.cta}
        contactTopic="Events & workshops"
        variant="outline"
      />

      <ClosingStatement />
    </>
  );
}
