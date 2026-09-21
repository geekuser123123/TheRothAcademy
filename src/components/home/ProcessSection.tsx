import { Eyebrow } from "@/components/ui/Eyebrow";
import { processSteps } from "@/data/home-content";

export function ProcessSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20">
      <div className="container-brand">
        <Eyebrow>The setup journey</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Some Things Are
          <br />
          <span className="text-r-gold">Worth Building Again.</span>
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="text-r-gold text-2xl font-heading">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-r-muted font-body normal-case">{step.example}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
