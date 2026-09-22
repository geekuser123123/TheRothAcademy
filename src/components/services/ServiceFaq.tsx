import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function ServiceFaq({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string[];
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-r-bg py-20">
      <div className="container-brand max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h2>

        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
