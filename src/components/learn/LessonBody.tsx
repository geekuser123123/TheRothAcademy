import Link from "next/link";
import { ArrowUpRight, Check, Download, FileText } from "lucide-react";
import type { LearnGuide, LearnLesson } from "@/data/learn-content";

export function LessonBody({ guide, lesson }: { guide: LearnGuide; lesson: LearnLesson }) {
  const checklistHref = `/resources/${guide.slug}.txt`;
  const portalHref = `/dashboard/learn/${guide.slug}`;

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-muted">In This Guide</p>
          <nav className="mt-4">
            {lesson.chapters.map((chapter, index) => (
              <a
                key={chapter.heading}
                href={`#chapter-${index}`}
                className="flex items-start gap-3 border-b border-r-line/60 py-3 text-sm text-r-white transition-colors hover:text-r-gold"
              >
                <span className="font-heading text-r-gold">{String(index + 1).padStart(2, "0")}</span>
                {chapter.heading}
              </a>
            ))}
            <a
              href="#your-checklist"
              className="flex items-center gap-2 border-b border-r-line/60 py-3 text-sm text-r-white transition-colors hover:text-r-gold"
            >
              <FileText size={15} className="shrink-0 text-r-gold" aria-hidden />
              Your preparation checklist
            </a>
          </nav>
          <a
            href={checklistHref}
            download
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-r-gold"
          >
            <Download size={16} aria-hidden />
            Download checklist
          </a>
        </aside>

        <article className="min-w-0 max-w-2xl">
          {lesson.chapters.map((chapter, index) => (
            <section key={chapter.heading} id={`chapter-${index}`} className={index > 0 ? "mt-12" : undefined}>
              <span className="font-heading text-xl text-r-gold">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl md:text-3xl">{chapter.heading}</h2>
              <p className="mt-4 text-sm text-r-muted font-body normal-case">{chapter.paragraph}</p>
            </section>
          ))}

          <div
            id="your-checklist"
            className="mt-14 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
              Put The Knowledge To Work
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl">Your preparation checklist.</h2>
            <ul className="mt-6 space-y-3">
              {lesson.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                  <Check size={16} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={checklistHref}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-gold/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-gold transition-colors hover:bg-r-gold hover:text-r-bg"
            >
              Download the checklist
              <Download size={16} aria-hidden />
            </a>
          </div>

          <p className="mt-8 text-xs text-r-muted/60 font-body normal-case">
            This guide provides general education and preparation questions. Individual advice depends on current
            rules, the actual arrangement, and a separate professional engagement.
          </p>

          <div className="mt-10 border-t border-r-line pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-muted">Keep Your Progress</p>
            <h3 className="mt-3 text-2xl md:text-3xl">Make the next step yours.</h3>
            <p className="mt-3 max-w-xl text-sm text-r-muted font-body normal-case">
              Save learning progress, revisit the checklist, and connect your questions to your client workspace.
            </p>
            <Link
              href={portalHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              Open this guide in my portal
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
