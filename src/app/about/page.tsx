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

export const metadata: Metadata = {
  title: "Our Story",
  description: "A father who rebuilt. A son who was watching. The family story and the standard behind Roth Academy.",
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

      <ClosingStatement ghostText="Next Move" />
    </>
  );
}
