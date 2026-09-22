import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STORY_IMAGE = "/story/berry-family.webp";

export function StoryTeaserSection() {
  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-bg py-20 md:py-28">
      {/* Decorative background text — sits behind everything, purely
          atmospheric, never part of the layout flow. */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-heading uppercase leading-none text-r-white/[0.04]"
        style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}
      >
        Still Standing.
      </p>

      <div className="container-brand relative grid items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="relative mx-auto w-[65%] sm:w-[55%] md:mx-0 md:w-[75%]">
          {/* Gold corner accents — sit just outside the frame, on the
              wrapper, so the photo's own overflow-hidden never clips them. */}
          <span aria-hidden className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-r-gold/70" />
          <span aria-hidden className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-r-gold/70" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-2xl shadow-black/50">
            <Image
              src={STORY_IMAGE}
              alt="Tim and Kevin Berry"
              fill
              sizes="(min-width: 768px) 35vw, 55vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.85) 0%, rgba(9,10,11,0.15) 35%, transparent 55%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm font-semibold text-r-white">Tim &amp; Kevin Berry</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-r-gold">
                Two Generations. One Standard.
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <Eyebrow>The Family Behind the Standard</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Some Things
            <br />
            Are Worth
            <br />
            <span className="text-r-gold">Building Again.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">
            A father who kept going. A son who was watching. A company built to give hard-earned
            knowledge the follow-through it deserves.
          </p>

          <blockquote className="mt-8 max-w-md border-l-2 border-r-gold/50 pl-5">
            <p className="text-lg leading-snug text-r-white font-body normal-case">
              &ldquo;I didn&rsquo;t want to change my father. I wanted to build around him.&rdquo;
            </p>
            <footer className="mt-3 text-xs uppercase tracking-[0.15em] text-r-muted">
              Kevin Berry, Company Leadership
            </footer>
          </blockquote>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            Read the Berry story
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
