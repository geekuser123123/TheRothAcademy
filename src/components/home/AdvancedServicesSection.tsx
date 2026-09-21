import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { advancedServices } from "@/data/home-content";

export function AdvancedServicesSection() {
  return (
    <section className="bg-r-gold py-20 text-r-bg">
      <div className="container-brand">
        <Eyebrow className="text-r-bg/70 before:bg-r-bg/70">Beyond the basics</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl text-r-bg">
          Big Ambition.
          <br />
          Deeper Thinking.
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {advancedServices.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-4 border-b border-r-bg/20 pb-4 transition-colors hover:border-r-bg"
              >
                <span className="text-xl">{item.label}</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
