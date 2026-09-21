import Link from "next/link";
import { House, Landmark, Coins, Bitcoin, ChartNoAxesCombined, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assetClasses } from "@/data/home-content";

const icons = {
  house: House,
  landmark: Landmark,
  coins: Coins,
  bitcoin: Bitcoin,
  "chart-no-axes-combined": ChartNoAxesCombined,
};

export function AssetClassSection() {
  return (
    <section className="border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand grid gap-16 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Eyebrow>Think Outside the Usual Menu</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Invest in the
            <br />
            <span className="text-r-gold">World You Know.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">
            Explore the assets you are interested in, then review the account rules, provider
            capabilities, and work involved.
          </p>
        </div>

        <div>
          <ul className="divide-y divide-r-line border-t border-r-line">
            {assetClasses.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];
              const Row = (
                <div className="flex items-center gap-4 py-5">
                  <Icon size={22} className="shrink-0 text-r-gold" aria-hidden />
                  <div className="flex-1">
                    <h3 className="text-lg">{item.label}</h3>
                    <p className="text-sm text-r-muted font-body normal-case">{item.description}</p>
                  </div>
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
          <p className="mt-6 text-xs text-r-muted/70 font-body normal-case">
            Investment availability depends on the account, provider, and applicable rules. The
            academy does not recommend or custody investments.
          </p>
        </div>
      </div>
    </section>
  );
}
