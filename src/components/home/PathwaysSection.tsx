import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pathways } from "@/data/home-content";

export function PathwaysSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-24">
      <div className="container-brand">
        <Eyebrow>Your Pathway</Eyebrow>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between gap-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 transition-colors hover:border-r-gold"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-heading text-r-gold">{item.number}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-xl leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-r-muted font-body normal-case">{item.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
