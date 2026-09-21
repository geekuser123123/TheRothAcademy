import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { advancedServices } from "@/data/home-content";

export function AdvancedServicesSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-16 md:grid-cols-[1fr_1.05fr]">
        <div>
          <Eyebrow>For the Questions That Go Further</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl">
            Big Ambition.
            <br />
            <span className="text-r-gold">Deeper Thinking.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">
            A trust with a purpose. A development with several entities. A transaction where every
            layer matters. Bring the whole picture.
          </p>
          <Link
            href="/advanced-services"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-r-gold px-6 py-3 text-sm font-semibold text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Enter advanced services
            <ArrowUpRight size={18} aria-hidden />
          </Link>
          <p className="mt-4 text-xs text-r-muted/70 font-body normal-case">
            A retirement plan is not required for every engagement.
          </p>
        </div>

        <ul className="divide-y divide-r-line border-t border-r-line">
          {advancedServices.map((item) => (
            <li key={item.number}>
              <Link
                href={item.href}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-r-panel-2"
              >
                <span className="text-2xl font-heading text-r-gold">{item.number}</span>
                <div className="flex-1">
                  <h3 className="text-xl">{item.title}</h3>
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
    </section>
  );
}
