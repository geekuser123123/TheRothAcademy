import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Choice = { eyebrow: string; heading: string[]; description: string };

export function EngagementChoice({ choices }: { choices: Choice[] }) {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand grid gap-10 md:grid-cols-2 md:gap-16">
        {choices.map((choice) => (
          <div key={choice.eyebrow}>
            <Eyebrow>{choice.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">
              {choice.heading.map((line, index) => (
                <span key={line} className={clsx("block", index === choice.heading.length - 1 && "text-r-gold")}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-sm text-sm text-r-muted font-body normal-case">{choice.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
