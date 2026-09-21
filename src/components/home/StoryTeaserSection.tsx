import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function StoryTeaserSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid items-center gap-16 md:grid-cols-[1.12fr_1fr]">
        <p
          aria-hidden
          className="select-none text-7xl leading-[0.85] text-transparent md:text-9xl"
          style={{ WebkitTextStroke: "1px var(--color-r-line)" }}
        >
          Still
          <br />
          Standing.
        </p>

        <div>
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
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-r-gold">
            Read the Berry story
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
