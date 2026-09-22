import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ServiceProcess({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string;
  heading: string[];
  steps: { number: string; title: string; description: string }[];
}) {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-r-gold/40 pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{step.number}</span>
              <h3 className="mt-2 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-r-muted font-body normal-case">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
