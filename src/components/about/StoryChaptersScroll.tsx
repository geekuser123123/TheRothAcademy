"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type Chapter = { number: string; label: string; heading: string[]; paragraphs: string[] };

// Scroll distance dedicated to each chapter while it's pinned in view.
const VH_PER_CHAPTER = 80;

export function StoryChaptersScroll({ chapters }: { chapters: Chapter[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = triggerRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    triggerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [chapters.length]);

  function scrollToChapter(index: number) {
    triggerRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="border-b border-r-line bg-r-bg">
      <div className="container-brand relative" style={{ height: `${chapters.length * VH_PER_CHAPTER}vh` }}>
        {/* Invisible scroll-trigger zones, one per chapter, stacked down the section's full height */}
        {chapters.map((chapter, index) => (
          <div
            key={chapter.number}
            ref={(el) => {
              triggerRefs.current[index] = el;
            }}
            aria-hidden
            className="absolute inset-x-0"
            style={{ top: `${(index / chapters.length) * 100}%`, height: `${100 / chapters.length}%` }}
          />
        ))}

        {/* Pinned panel — stays in place while the active chapter swaps as you scroll */}
        <div
          data-active-chapter={activeIndex}
          className="sticky top-24 flex min-h-[75vh] flex-col justify-center gap-8 py-10 md:flex-row md:items-center md:gap-16"
        >
          <div className="flex shrink-0 gap-5 md:flex-col md:gap-7">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.number}
                type="button"
                onClick={() => scrollToChapter(index)}
                aria-current={index === activeIndex}
                className="text-left"
              >
                <span
                  className={clsx(
                    "block text-3xl font-heading transition-colors duration-300 md:text-4xl",
                    index === activeIndex ? "text-r-gold" : "text-r-line",
                  )}
                >
                  {chapter.number}
                </span>
                <span
                  className={clsx(
                    "mt-1 hidden text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 md:block",
                    index === activeIndex ? "text-r-gold" : "text-r-muted/50",
                  )}
                >
                  {chapter.label}
                </span>
              </button>
            ))}
          </div>

          <div className="relative min-h-[360px] flex-1 sm:min-h-[300px] md:min-h-[280px]">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.number}
                aria-hidden={index !== activeIndex}
                className={clsx(
                  "absolute inset-0 transition-all duration-500 ease-out",
                  index === activeIndex && "opacity-100 translate-y-0",
                  index < activeIndex && "-translate-y-3 opacity-0 pointer-events-none",
                  index > activeIndex && "translate-y-3 opacity-0 pointer-events-none",
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold md:hidden">
                  {chapter.label}
                </span>
                <h3 className="mt-2 text-3xl leading-[1.02] md:text-5xl">
                  {chapter.heading.map((line, lineIndex) => (
                    <span
                      key={line}
                      className={clsx("block", lineIndex === chapter.heading.length - 1 && "text-r-gold")}
                    >
                      {line}
                    </span>
                  ))}
                </h3>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-xl text-sm text-r-muted font-body normal-case">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
