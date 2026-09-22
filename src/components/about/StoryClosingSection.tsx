import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function StoryClosingSection({
  kicker,
  heading,
  paragraphs,
  signatureName,
  signatureRole,
}: {
  kicker: string;
  heading: string[];
  paragraphs: string[];
  signatureName: string;
  signatureRole: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand max-w-3xl">
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h2>

        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-6 text-sm text-r-muted font-body normal-case">
            {paragraph}
          </p>
        ))}

        <div className="mt-10 border-t border-r-line pt-6">
          <p className="font-heading text-2xl uppercase tracking-wide text-r-white">{signatureName}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-r-gold">{signatureRole}</p>
        </div>
      </div>
    </section>
  );
}
