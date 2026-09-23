import Image from "next/image";

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
    <section className="relative overflow-hidden border-b border-r-line bg-r-bg py-24 md:py-36">
      <Image
        aria-hidden
        src="/about/what-remained.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-r-bg/80" />

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-heading text-[22vw] leading-none text-r-white/[0.05]"
      >
        {kicker}
      </span>

      <div className="container-brand relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">{kicker}</p>
        <h2 className="mt-4 max-w-3xl text-4xl text-r-white md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-xl text-sm text-r-muted font-body normal-case">{paragraph}</p>
      </div>
    </section>
  );
}
