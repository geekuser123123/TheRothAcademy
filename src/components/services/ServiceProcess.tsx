import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

const gridColsClasses = {
  3: "sm:grid-cols-3 md:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

export function ServiceProcess({
  eyebrow,
  heading,
  steps,
  columns = 4,
  note,
  linkLabel,
  linkHref,
}: {
  eyebrow: string;
  heading: string[];
  steps: { number: string; title: string; description: string }[];
  columns?: 3 | 4;
  note?: string;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h2>

        <ol className={clsx("mt-12 grid gap-8 md:gap-6", gridColsClasses[columns])}>
          {steps.map((step) => (
            <li key={step.number} className="border-t border-r-gold/40 pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{step.number}</span>
              <h3 className="mt-2 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-r-muted font-body normal-case">{step.description}</p>
            </li>
          ))}
        </ol>

        {note && <p className="mt-10 max-w-3xl text-xs text-r-muted/70 font-body normal-case">{note}</p>}

        {linkLabel && linkHref && (
          <Link
            href={linkHref}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {linkLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        )}
      </div>
    </section>
  );
}
