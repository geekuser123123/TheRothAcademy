import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { checklistItems } from "@/data/home-content";

export function ResourceSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid items-center gap-16 md:grid-cols-2">
        <div>
          <Eyebrow>Before the Next Conversation</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Come With
            <br />
            <span className="text-r-gold">Better Questions.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">
            A practical checklist for the people, accounts, documents, and decisions worth
            organizing before your next move.
          </p>
          <Link href="/learn" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-r-gold">
            Get the preparation checklist
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="rounded-sm border border-r-line bg-r-panel p-8">
          <FileText size={22} className="text-r-gold" aria-hidden />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
            Roth Academy Field Notes / 01
          </p>
          <h3 className="mt-2 text-2xl">The Next-Move Checklist.</h3>
          <ol className="mt-6 space-y-4">
            {checklistItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-sm text-r-muted font-body normal-case">
                <span className="font-heading text-r-gold">{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
