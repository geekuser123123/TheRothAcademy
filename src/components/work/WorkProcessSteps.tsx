import { Check } from "lucide-react";

type Step = { number: string; kicker: string; title: string; description: string };

export function WorkProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand divide-y divide-r-line border-t border-r-line">
        {steps.map((step) => (
          <article
            key={step.number}
            className="grid items-start gap-4 py-10 md:grid-cols-[auto_1fr_auto] md:gap-10"
          >
            <span className="text-3xl font-heading text-r-gold md:text-4xl">{step.number}</span>

            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{step.kicker}</span>
              <h2 className="mt-2 text-2xl md:text-3xl">{step.title}</h2>
              <p className="mt-3 max-w-2xl text-sm text-r-muted font-body normal-case">{step.description}</p>
            </div>

            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-r-gold md:mt-1"
            >
              <Check size={16} aria-hidden />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
