import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { assetClasses } from "@/data/home-content";

const variants = ["a", "b", "c", "d", "e"] as const;

export function AssetClassSection() {
  return (
    <section className="border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
        <div className="min-w-0">
          <Eyebrow>Invest Beyond Limits</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Invest in the
            <br />
            <span className="text-r-gold">World You Know.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">
            From real estate to private lending, a self-directed approach gives you the freedom to
            invest in what you understand — and what you believe in.
          </p>
          <p className="mt-6 text-xs text-r-muted/70 font-body normal-case">
            Investment availability depends on the account, provider, and applicable rules. The
            academy does not recommend or custody investments.
          </p>
        </div>

        <ul className="min-w-0 divide-y divide-r-line border-t border-r-line">
          {assetClasses.map((item, index) => {
            const Row = (
              <div className="flex items-center gap-5 py-5">
                <span className="text-xs text-r-gold">{item.number}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg">{item.label}</h3>
                  <p className="text-sm text-r-muted font-body normal-case">{item.description}</p>
                </div>
                <ImagePlaceholder
                  variant={variants[index % variants.length]}
                  className="h-14 w-20 shrink-0 rounded-sm"
                />
                {item.href && <ArrowUpRight size={18} className="shrink-0 text-r-gold" aria-hidden />}
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
    </section>
  );
}
