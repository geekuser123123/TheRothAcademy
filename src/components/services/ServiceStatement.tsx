import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ServiceStatement({
  eyebrow,
  heading,
  paragraphs,
  linkLabel,
  linkHref,
}: {
  eyebrow: string;
  heading: string[];
  paragraphs: string[];
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="min-w-0">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-0 mb-4 text-sm text-r-muted font-body normal-case last:mb-0">
              {paragraph}
            </p>
          ))}
          {linkLabel && linkHref && (
            <Link
              href={linkHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              {linkLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
