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
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="relative min-w-0">
          <p
            aria-hidden
            className="min-w-0 select-none overflow-hidden leading-[0.85] text-transparent"
            style={{ WebkitTextStroke: "1px var(--color-r-line)", fontSize: "clamp(2.75rem, 9vw, 8rem)" }}
          >
            Still
            <br />
            Standing.
          </p>

          <div className="relative mt-8 aspect-[4/5] w-[65%] overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-2xl shadow-black/50 sm:w-[55%] md:w-[60%]">
            {hasRealImage ? (
              <Image
                src={STORY_IMAGE}
                alt="The Berry family"
                fill
                sizes="(min-width: 768px) 30vw, 55vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder variant="c" className="relative h-full w-full" />
            )}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.5), transparent 50%)" }}
            />
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
