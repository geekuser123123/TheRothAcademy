import type { Metadata } from "next";
import { StoryHero } from "@/components/about/StoryHero";
import { StoryIntro } from "@/components/about/StoryIntro";
import { StoryChapters } from "@/components/about/StoryChapters";
import { StoryStatementBand } from "@/components/about/StoryStatementBand";
import { StoryTeamSection } from "@/components/about/StoryTeamSection";
import { StoryClosingSection } from "@/components/about/StoryClosingSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  storyHero,
  storyIntro,
  storyChapters,
  storyStatement,
  storyTeam,
  storyValues,
  storyClosing,
} from "@/data/about-content";
import { standardSteps } from "@/data/home-content";

export const metadata: Metadata = {
  title: "About Roth Academy",
  description: "Our mission, our team, and how a self-directed 401(k) or IRA gets set up and funded.",
};

export default function AboutPage() {
  return (
    <>
      <StoryHero
        eyebrow={storyHero.eyebrow}
        title={storyHero.title}
        goldLine={storyHero.goldLine}
        lead={storyHero.lead}
        scrollCtaLabel={storyHero.scrollCtaLabel}
        scrollCtaHref={storyHero.scrollCtaHref}
        imageSrc="/about/hero-tim-kevin.webp"
        metadata={storyHero.metadata}
      />

      <StoryIntro
        byline={storyIntro.byline}
        portraitCaption={storyIntro.portraitCaption}
        kicker={storyIntro.kicker}
        heading={storyIntro.heading}
        lead={storyIntro.lead}
        pullQuote={storyIntro.pullQuote}
        paragraphs={storyIntro.paragraphs}
      />

      <StoryChapters chapters={storyChapters} />

      <StoryStatementBand
        kicker={storyStatement.kicker}
        heading={storyStatement.heading}
        paragraph={storyStatement.paragraph}
      />

      <StoryTeamSection
        kicker={storyTeam.kicker}
        heading={storyTeam.heading}
        paragraphs={storyTeam.paragraphs}
        roles={storyTeam.roles}
      />

      <ServiceProcess
        eyebrow={storyValues.eyebrow}
        heading={storyValues.heading}
        steps={storyValues.items}
        variant="cards"
        linkLabel={storyValues.linkLabel}
        linkHref={storyValues.linkHref}
      />

      <StoryClosingSection
        kicker={storyClosing.kicker}
        heading={storyClosing.heading}
        paragraphs={storyClosing.paragraphs}
        signatureName={storyClosing.signatureName}
        signatureRole={storyClosing.signatureRole}
      />

      <ServiceProcess
        eyebrow="From Interest To Funded Account"
        heading={["How A Plan", "Gets Set Up."]}
        steps={standardSteps}
        columns={3}
        linkLabel="See the full process"
        linkHref="/work-with-us"
      />

      <ClosingStatement ghostText="Next Move" />
    </>
  );
}
