import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LearnArticleCta } from "@/components/learn/LearnArticleCta";
import { learnGuides, learnLevels } from "@/data/learn-content";

const badgeByLevel = Object.fromEntries(learnLevels.map((level) => [level.key, level.badge]));

export function generateStaticParams() {
  return learnGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps<"/learn/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = learnGuides.find((item) => item.slug === slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description };
}

export default async function LearnGuidePage({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const guide = learnGuides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return (
    <>
      <section className="border-b border-r-line bg-r-stripe-2 py-16 pt-40 md:py-20 md:pt-48">
        <div className="container-brand max-w-3xl">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-r-muted transition-colors hover:text-r-gold"
          >
            <ArrowLeft size={14} aria-hidden />
            Back to the library
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-2xl font-heading text-r-gold">{guide.number}</span>
            <span
              className={clsx(
                "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
                guide.level === "advanced" ? "border-r-line text-r-muted" : "border-r-gold/40 text-r-gold",
              )}
            >
              {badgeByLevel[guide.level]}
            </span>
          </div>

          <Eyebrow className="mt-4">{guide.kicker}</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl">{guide.title}</h1>

          <span className="mt-6 flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-r-muted">
            <Clock size={14} aria-hidden />
            {guide.minutes} min read
          </span>
        </div>
      </section>

      <article className="border-b border-r-line bg-r-bg py-16 md:py-20">
        <div className="container-brand max-w-3xl">
          {guide.body.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-base leading-relaxed text-r-muted font-body normal-case last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <LearnArticleCta guideTitle={guide.title} />

      <section className="bg-r-bg py-16">
        <div className="container-brand max-w-3xl">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to the library
          </Link>
        </div>
      </section>
    </>
  );
}
