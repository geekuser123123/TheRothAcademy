import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { libraryRows } from "@/data/home-content";

export function LibrarySection() {
  return (
    <section className="border-b border-r-line bg-r-stripe-1 py-16 md:py-24">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Ideas for a Brighter Tomorrow</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Know More.
              <br />
              <span className="text-r-gold">Move With Purpose.</span>
            </h2>
          </div>
          <Link href="/learn" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold">
            Explore the library
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <ul className="mt-12 divide-y divide-r-line border-t border-r-line">
          {libraryRows.map((row) => (
            <li key={row.title}>
              <Link href="/learn" className="group flex items-center gap-6 py-6 transition-colors hover:bg-r-panel-2">
                <span className="hidden text-xs text-r-gold sm:block">{row.number}</span>
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm border border-r-line">
                  <Image
                    src={row.image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{row.category}</p>
                  <h3 className="mt-1 text-xl">{row.title}</h3>
                  <p className="mt-1 text-sm text-r-muted font-body normal-case">
                    {row.link} — {row.meta}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="hidden shrink-0 text-r-gold transition-transform group-hover:translate-x-1 sm:block"
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
