import type { Metadata } from "next";
import { Suspense } from "react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StartForm } from "@/components/start/StartForm";
import { startHero, startFlowSteps } from "@/data/start-content";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Tell us the basics and start your self-directed 401(k) or IRA setup.",
};

export default function StartPage() {
  return (
    <>
      <ServiceHero eyebrow={startHero.eyebrow} title={startHero.title} goldLine={startHero.goldLine} description={startHero.description} />

      <div className="border-b border-r-line bg-r-stripe-2 py-6">
        <div className="container-brand">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.12em] text-r-muted">
            {startFlowSteps.map((step, index) => (
              <li key={step.number} className="flex items-center gap-3">
                <span className={index === 0 ? "text-r-gold" : ""}>{step.title}</span>
                {index < startFlowSteps.length - 1 && <span aria-hidden className="text-r-line">/</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
        <div className="container-brand max-w-2xl">
          <Suspense fallback={null}>
            <StartForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
