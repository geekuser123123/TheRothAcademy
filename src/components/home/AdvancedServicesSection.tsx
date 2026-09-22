import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { advancedServices } from "@/data/home-content";

export function AdvancedServicesSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="min-w-0">
          <Eyebrow>Build a Stronger Tomorrow</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl">
            Big Ambition.
            <br />
            <span className="text-r-gold">Deeper Thinking.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">
            For more complex goals, our advanced services help you build a more resilient,
            tax-efficient future.
          </p>
          <Link
            href="/advanced-services"
            className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Explore advanced services
            <ArrowUpRight size={18} aria-hidden />
          </Link>
          <p className="mt-4 text-xs text-r-muted/70 font-body normal-case">
            A retirement plan is not required for every engagement.
          </p>

          <ul className="mt-10 divide-y divide-r-line border-t border-r-line">
            {advancedServices.map((item) => (
              <li key={item.number}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-6 py-5 transition-colors hover:bg-r-panel-2"
                >
                  <span className="text-xl font-heading text-r-gold">{item.number}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg">{item.title}</h3>
                    <p className="text-sm text-r-muted font-body normal-case">{item.description}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder variant="d" className="relative hidden min-h-[420px] rounded-[var(--radius-brand-card)] md:block" />
      </div>
    </section>
  );
}
