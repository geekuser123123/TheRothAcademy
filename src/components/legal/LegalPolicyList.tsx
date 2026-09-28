import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LegalArticle = {
  groupLabel?: string;
  heading: string;
  body: string[];
};

export function LegalPolicyList({
  sections,
  contactBlock,
}: {
  sections: LegalArticle[];
  contactBlock: { name: string; phone: string; email: string; url: string; address: string };
}) {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand max-w-3xl">
        <ol className="space-y-10">
          {sections.map((section, index) => (
            <li key={section.heading}>
              {section.groupLabel && (
                <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">
                  <span className="h-px w-8 bg-r-gold" aria-hidden />
                  {section.groupLabel}
                </p>
              )}
              <div className="grid gap-3 border-t border-r-line pt-6 sm:grid-cols-[64px_1fr] sm:gap-8">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl">{section.heading}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="max-w-2xl text-sm leading-relaxed text-r-muted font-body normal-case">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-t border-r-line pt-8">
          <p className="text-sm text-r-muted font-body normal-case">
            {contactBlock.name}
            <br />
            {contactBlock.address}
            <br />
            <a href={`tel:${contactBlock.phone.replace(/[^\d+]/g, "")}`} className="hover:text-r-white transition-colors">
              {contactBlock.phone}
            </a>
            {" · "}
            <a href={`mailto:${contactBlock.email}`} className="hover:text-r-white transition-colors">
              {contactBlock.email}
            </a>
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            Contact the team
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
