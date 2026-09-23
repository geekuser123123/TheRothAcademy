"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type Chapter = { number: string; label: string; heading: string[]; paragraphs: string[] };

export function StoryChapters({ chapters }: { chapters: Chapter[] }) {
  const [activeNumber, setActiveNumber] = useState<string | undefined>(chapters[0]?.number);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const articles = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveNumber(visible[0].target.getAttribute("data-chapter") ?? undefined);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    articles.forEach((article) => observer.observe(article));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div ref={sectionRef} className="container-brand grid gap-12 md:grid-cols-[220px_1fr] md:gap-16 lg:gap-24">
        <nav aria-label="Story chapters" className="hidden md:sticky md:top-32 md:block md:self-start">
          <ul className="space-y-6 border-l border-r-line pl-6">
            {chapters.map((chapter) => {
              const isActive = chapter.number === activeNumber;
              return (
                <li key={chapter.number}>
                  <a
                    href={`#chapter-${chapter.number}`}
                    className={clsx(
                      "block transition-colors",
                      isActive ? "text-r-gold" : "text-r-muted hover:text-r-white",
                    )}
                  >
                    <span className="block font-heading text-3xl">{chapter.number}</span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.15em]">{chapter.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="min-w-0 divide-y divide-r-line">
          {chapters.map((chapter) => (
            <article
              key={chapter.number}
              id={`chapter-${chapter.number}`}
              data-chapter={chapter.number}
              className="scroll-mt-32 py-14 first:pt-0 md:py-20 md:first:pt-0"
            >
              <span className="block font-heading text-4xl text-r-gold md:hidden">{chapter.number}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-r-muted md:hidden">
                {chapter.label}
              </span>
              <h2 className="mt-4 text-3xl md:mt-0 md:text-5xl">
                {chapter.heading.map((line, index) => (
                  <span
                    key={line}
                    className={clsx("block", index === chapter.heading.length - 1 && "text-r-gold")}
                  >
                    {line}
                  </span>
                ))}
              </h2>
              {chapter.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-2xl text-sm text-r-muted font-body normal-case">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
