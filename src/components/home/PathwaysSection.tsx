import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pathways } from "@/data/home-content";

export function PathwaysSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-24">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Your Pathway</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl">Where Do You Start?</h2>
          </div>
          <p className="max-w-sm text-sm text-r-muted font-body normal-case">
            Four starting points. Pick the one that matches where you are today.
          </p>
        </div>

        <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {pathways.map((item) => {
            return (
              <li key={item.href} className="w-[78%] shrink-0 snap-center sm:w-[45%] md:w-auto">
                <Link
                  href={item.href}
                  className="group relative flex aspect-[3/4] h-full flex-col justify-between overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line p-6 transition-colors hover:border-r-gold"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 78vw"
                    className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(9,10,11,0.92) 0%, rgba(9,10,11,0.55) 45%, rgba(9,10,11,0.15) 75%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="text-2xl font-heading text-r-gold">{item.number}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-r-gold/50 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={16} aria-hidden />
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="text-2xl leading-tight text-r-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-r-muted font-body normal-case">{item.description}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-xs text-r-muted/60 font-body normal-case md:hidden">Swipe to see all four</p>
      </div>
    </section>
  );
}
