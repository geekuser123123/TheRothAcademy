import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const STORY_IMAGE = "/story/berry-family.jpg";

function imageExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export function StoryTeaserSection() {
  const hasRealImage = imageExists(STORY_IMAGE);

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-bg py-20 md:py-28">
      {/* Decorative background text — sits behind everything, purely
          atmospheric, never part of the layout flow. */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center leading-none text-transparent"
        style={{
          WebkitTextStroke: "1px var(--color-r-line)",
          fontSize: "clamp(4rem, 14vw, 13rem)",
        }}
      >
        Still Standing.
      </p>

      <div className="container-brand relative grid items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-[65%] overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-2xl shadow-black/50 sm:w-[55%] md:mx-0 md:w-[75%]">
          {hasRealImage ? (
            <Image
              src={STORY_IMAGE}
              alt="The Berry family"
              fill
              sizes="(min-width: 768px) 35vw, 55vw"
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder variant="c" mark className="relative h-full w-full" />
          )}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.5), transparent 50%)" }}
          />
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
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            Read the Berry story
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
