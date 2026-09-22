import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/home-content";

export function FaqSection() {
  return (
    <section className="bg-r-bg py-20">
      <div className="container-brand max-w-3xl">
        <Eyebrow>Before your next move</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Good Questions.
          <br />
          <span className="text-r-gold">Clear Answers.</span>
        </h2>

        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
