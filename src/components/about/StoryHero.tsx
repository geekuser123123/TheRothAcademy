import { ArrowDown } from "lucide-react";
import { clsx } from "clsx";

export function StoryHero({
  eyebrow,
  title,
  goldLine,
  lead,
  scrollCtaLabel,
  scrollCtaHref,
  videoSrc,
}: {
  eyebrow: string;
  title: string[];
  goldLine?: number;
  lead: string;
  scrollCtaLabel: string;
  scrollCtaHref: string;
  videoSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2">
      {videoSrc && (
        <>
          <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-r-bg/90" />
        </>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-0 h-full w-[60%] opacity-25 mix-blend-screen md:-right-[10%] md:w-[45%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(50px)",
        }}
      />

      <div className="container-brand relative pb-16 pt-40 md:pb-20 md:pt-48">
        <p
          className="flex items-center gap-3 font-semibold uppercase text-r-gold"
          style={{ fontSize: 11, letterSpacing: "0.14em" }}
        >
          <span className="h-px w-8 bg-r-gold" aria-hidden />
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl lg:text-8xl">
          {title.map((line, index) => (
            <span key={line} className={clsx("block", index === goldLine && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-6 border-t border-r-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm text-r-muted font-body normal-case">{lead}</p>
          <a
            href={scrollCtaHref}
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold"
          >
            {scrollCtaLabel}
            <ArrowDown size={14} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
