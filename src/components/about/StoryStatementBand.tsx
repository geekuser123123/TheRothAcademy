export function StoryStatementBand({
  kicker,
  heading,
  paragraph,
}: {
  kicker: string;
  heading: string[];
  paragraph: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-gold py-16 md:py-20">
      <div className="container-brand">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-bg/70">{kicker}</p>
        <h2 className="mt-4 max-w-3xl text-4xl text-r-bg md:text-6xl">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-xl text-sm text-r-bg/80 font-body normal-case">{paragraph}</p>
      </div>
    </section>
  );
}
