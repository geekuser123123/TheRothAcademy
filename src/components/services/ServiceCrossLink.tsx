import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCrossLink({ label, title, href }: { label: string; title: string; href: string }) {
  return (
    <section className="border-b border-r-line bg-r-bg">
      <div className="container-brand flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">{label}</span>
        <Link
          href={href}
          className="group flex items-center gap-3 text-3xl text-r-white transition-colors hover:text-r-gold md:text-4xl"
        >
          {title}
          <ArrowUpRight
            size={28}
            className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
