import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function ServiceFaq({
  eyebrow,
  heading,
  items,
  sourceLink,
}: {
  eyebrow: string;
  heading: string[];
  items: { question: string; answer: string }[];
  sourceLink?: { label: string; href: string };
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

        {sourceLink && (
          <a
            href={sourceLink.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-r-muted transition-colors hover:text-r-gold"
          >
            {sourceLink.label}
            <ArrowUpRight size={14} aria-hidden />
          </a>
        )}
      </div>
    </section>
  );
}
