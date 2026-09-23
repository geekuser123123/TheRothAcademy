import { ArrowDown } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";

export function StoryHero({
  eyebrow,
  title,
  goldLine,
  lead,
  scrollCtaLabel,
  scrollCtaHref,
  videoSrc,
  imageSrc,
  metadata,
}: {
  eyebrow: string;
  title: string[];
  goldLine?: number;
  lead: string;
  scrollCtaLabel: string;
  scrollCtaHref: string;
  videoSrc?: string;
  imageSrc?: string;
  metadata?: { name: string; role: string };
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

      {!videoSrc && imageSrc && (
        <>
          <Image
            aria-hidden
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover object-top"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-r-bg/80" />
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

        <h1
          className="max-w-3xl"
          style={{
            marginTop: 35,
            fontSize: "clamp(76px, 10.8vw, 146px)",
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
          }}
        >
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

        {metadata && (
          <div className="mt-10 border-t border-r-line pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-white">{metadata.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-r-muted">{metadata.role}</p>
          </div>
        )}
      </div>
    </section>
  );
}
