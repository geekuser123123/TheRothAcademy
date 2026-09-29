import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ServicePricing({
  eyebrow,
  heading,
  intro,
  included,
  price,
  note,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  included: string[];
  price: string;
  note?: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-20 md:py-28">
      <div className="container-brand grid gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="min-w-0">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
          {intro && <p className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">{intro}</p>}

          <ul className="mt-8 space-y-3 border-t border-r-line pt-8">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                <Check size={16} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative flex h-full flex-col justify-center overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-8 shadow-2xl shadow-black/50 md:p-10">
          <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">Pricing</p>

          <div className="mt-6 border-t border-r-line pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">Whole Package</p>
            <p className="mt-1 text-4xl text-r-gold">{price}</p>
          </div>

          {note && (
            <p className="relative mt-8 border-t border-r-line pt-6 text-xs text-r-muted/70 font-body normal-case">
              {note}
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
