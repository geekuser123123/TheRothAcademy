import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronRight, Clock } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function LessonHero({
  levelLabel,
  kicker,
  title,
  minutes,
  intro,
}: {
  levelLabel: string;
  kicker: string;
  title: string;
  minutes: number;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2 pb-16 pt-40 md:pb-20 md:pt-48">
      <Image
        aria-hidden
        src="/gold-dust-hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(9,10,11,0.96) 0%, rgba(9,10,11,0.88) 32%, rgba(9,10,11,0.55) 60%, rgba(9,10,11,0.75) 100%), linear-gradient(0deg, rgba(9,10,11,0.9) 0%, rgba(9,10,11,0.2) 35%, rgba(9,10,11,0.35) 100%)",
        }}
      />
      <div className="container-brand relative max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-r-muted font-body normal-case"
        >
          <Link href="/" className="transition-colors hover:text-r-gold">
            Home
          </Link>
          <ChevronRight size={12} aria-hidden />
          <Link href="/learn" className="transition-colors hover:text-r-gold">
            Knowledge library
          </Link>
          <ChevronRight size={12} aria-hidden />
          <span>{kicker}</span>
        </nav>

        <Eyebrow className="mt-6">{`${levelLabel} / ${kicker}`}</Eyebrow>

        <h1
          style={{
            marginTop: 35,
            fontSize: "clamp(76px, 10.8vw, 146px)",
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.15em] text-r-muted">
          <span className="flex items-center gap-1.5">
            <Clock size={14} aria-hidden />
            {minutes} min read
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} aria-hidden />
            Roth Academy field notes
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-base text-r-muted font-body normal-case">{intro}</p>
      </div>
    </section>
  );
}
