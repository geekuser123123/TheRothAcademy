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
    <section className="border-b border-r-line bg-r-stripe-2 pb-16 pt-40 md:pb-20 md:pt-48">
      <div className="container-brand max-w-3xl">
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
