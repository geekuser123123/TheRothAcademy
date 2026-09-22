import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assetClasses } from "@/data/home-content";

export function AssetClassSection() {
  return (
    <section className="border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="flex min-w-0 flex-col md:justify-between">
          <div>
            <Eyebrow>Think Outside the Usual Menu</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Invest in the
              <br />
              <span className="text-r-gold">World You Know.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">
              Use your retirement accounts to invest in opportunities you understand — from real
              estate to private lending and beyond.
            </p>
            <span className="mt-6 block h-px w-12 bg-r-gold" aria-hidden />
          </div>

          <p className="mt-10 text-xs uppercase leading-relaxed tracking-[0.15em] text-r-muted/70 md:mt-16">
            Same Principles.
            <br />A Wider World.
          </p>
        </div>

        <div>
          <ul className="min-w-0 divide-y divide-r-line border-t border-r-line">
            {assetClasses.map((item) => {
              const Row = (
                <div className="group flex items-center gap-4 py-5 sm:gap-6">
                  <span className="w-6 shrink-0 text-xs text-r-gold sm:w-8">{item.number}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl">{item.label}</h3>
                    <p className="mt-1 text-sm text-r-muted font-body normal-case">{item.description}</p>
                  </div>
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm border border-r-line sm:h-20 sm:w-40">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <Link href={item.href} className="block transition-colors hover:bg-r-panel-2">
                      {Row}
                    </Link>
                  ) : (
                    Row
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="container-brand mt-10 border-t border-r-line pt-6">
        <p className="max-w-3xl text-xs text-r-muted/70 font-body normal-case">
          Investment availability depends on the account, provider, and applicable rules. The
          academy does not recommend or custody investments.
        </p>
      </div>
    </section>
  );
}
