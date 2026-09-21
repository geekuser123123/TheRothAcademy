import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assetClasses } from "@/data/home-content";

export function AssetClassSection() {
  return (
    <section className="bg-r-panel py-20">
      <div className="container-brand">
        <Eyebrow>What this opens up</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Invest in the
          <br />
          <span className="text-r-gold">World You Know.</span>
        </h2>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-r-line bg-r-line sm:grid-cols-2 lg:grid-cols-4">
          {assetClasses.map((item) => (
            <li key={item.label} className="bg-r-panel">
              <Link
                href={item.href}
                className="flex h-full items-center justify-between gap-4 p-6 transition-colors hover:bg-r-panel-2"
              >
                <span className="text-lg">{item.label}</span>
                <span aria-hidden className="text-r-gold">
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
