import { clsx } from "clsx";

type Chapter = { number: string; label: string; heading: string[]; paragraphs: string[] };

export function StoryChapters({ chapters }: { chapters: Chapter[] }) {
  return (
    <section className="border-b border-r-line bg-r-bg">
      <div className="container-brand divide-y divide-r-line">
        {chapters.map((chapter) => (
          <article key={chapter.number} className="grid gap-6 py-14 md:grid-cols-[0.25fr_0.75fr] md:gap-16 md:py-20">
            <div>
              <span className="block text-4xl font-heading text-r-gold md:text-5xl">{chapter.number}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-r-muted">{chapter.label}</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
