import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STORY_IMAGE = "/story/berry-family.webp";
const STORY_VIDEO = "/story/father-son.mp4";

export function StoryTeaserSection() {
  return (
    <section className="relative overflow-hidden border-b border-r-line py-20 md:py-28">
      {/* Father-son video — sets the mood behind the whole section */}
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={STORY_IMAGE}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src={STORY_VIDEO} type="video/mp4" />
      </video>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-r-bg/85" />

      <div className="container-brand relative grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line">
          <Image
            src={STORY_IMAGE}
            alt="Tim and Kevin Berry"
            fill
            sizes="(min-width: 768px) 35vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.85) 0%, rgba(9,10,11,0.15) 35%, transparent 55%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-sm font-semibold text-r-white">Tim &amp; Kevin Berry</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-r-gold">
              Two Generations. One Standard.
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <Eyebrow>The Family Behind the Standard</Eyebrow>
          <h2 className="mt-4 text-5xl md:text-7xl lg:text-8xl">
            Some Things Are Worth
            <br />
            <span className="text-r-gold">Building Again.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-r-muted font-body normal-case">
            A father who kept going. A son who was watching. A company built to give hard-earned
            knowledge the follow-through it deserves.
          </p>

          <blockquote className="mt-8 max-w-xl border-l-2 border-r-gold/50 pl-5">
            <p className="text-xl leading-snug text-r-white font-body normal-case">
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
