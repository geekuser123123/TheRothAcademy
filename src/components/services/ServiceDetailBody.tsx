"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Check, CornerDownRight, FileText } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useContactModal } from "@/components/contact/ContactModalProvider";
import type { AdvancedService, ServiceDetail } from "@/data/advanced-services-content";

export function ServiceDetailBody({ service, detail }: { service: AdvancedService; detail: ServiceDetail }) {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-20">
        <article className="min-w-0 space-y-16">
          <div>
            <Eyebrow>The Opportunity, In Context</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">The Opportunity Is Only The Beginning.</h2>
            <div className="mt-6 border-l-2 border-r-gold pl-6">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
                A Starting Point For
              </span>
              <p className="mt-2 text-sm text-r-muted font-body normal-case">{detail.audience}</p>
            </div>
          </div>

          <div>
            <Eyebrow>The Substance Behind The Service</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">What We Work Through.</h2>
            <p className="mt-4 max-w-2xl text-sm text-r-muted font-body normal-case">{detail.workIntro}</p>
            <ol className="mt-8 space-y-6 border-t border-r-line pt-8">
              {detail.workSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="font-heading text-2xl text-r-gold">{String(index + 1).padStart(2, "0")}</span>
                  <p className="pt-1 text-sm text-r-white font-body normal-case">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
              Inside The Strategy / An Illustrative Situation
            </p>
            <h3 className="mt-4 text-2xl md:text-3xl">
              {detail.example.heading.map((line, index) => (
                <span
                  key={line}
                  className={clsx("block", index === detail.example.heading.length - 1 && "text-r-gold")}
                >
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-4 text-sm text-r-white font-body normal-case">{detail.example.scenario}</p>
            <div className="mt-4 flex items-start gap-3 border-t border-r-line pt-4">
              <CornerDownRight size={18} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
              <p className="text-sm text-r-muted font-body normal-case">{detail.example.approach}</p>
            </div>
            <p className="mt-4 text-xs text-r-muted/60 font-body normal-case">{detail.example.disclaimer}</p>
          </div>

          <div>
            <Eyebrow>The Details That Matter</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">Look At The Connections.</h2>
            <ul className="mt-6 space-y-3">
              {detail.considerations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                  <Check size={16} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-xs text-r-muted/70 font-body normal-case">{detail.considerationsNote}</p>
          </div>

          <div>
            <Eyebrow>The Bigger Picture</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">Questions Worth Bringing.</h2>
            <ul className="mt-6 space-y-3">
              {detail.questions.map((question) => (
                <li key={question} className="text-sm text-r-white font-body normal-case">
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm text-r-muted font-body normal-case">{detail.questionsNote}</p>
          </div>
        </article>

        <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-7 shadow-xl shadow-black/40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">Your Next Move</p>
            <h3 className="mt-4 text-2xl">
              {detail.nextMove.heading.map((line, index) => (
                <span
                  key={line}
                  className={clsx("block", index === detail.nextMove.heading.length - 1 && "text-r-gold")}
                >
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-3 text-sm text-r-muted font-body normal-case">{detail.nextMove.paragraph}</p>
            <button
              type="button"
              onClick={() => open("Advanced services", `I'd like to talk through: ${service.title}.`)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {detail.nextMove.ctaLabel}
              <ArrowUpRight size={16} aria-hidden />
            </button>

            <ul className="mt-6 space-y-2 border-t border-r-line pt-6">
              {detail.nextMove.details.map((item) => (
                <li key={item} className="text-xs uppercase tracking-[0.1em] text-r-muted">
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/work-with-us"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-r-gold"
            >
              See how we work
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7">
            <FileText size={22} className="text-r-gold" aria-hidden />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-r-white">What To Prepare</p>
            <ul className="mt-4 space-y-2">
              {detail.prepare.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                  <Check size={15} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-r-muted/70 font-body normal-case">{detail.prepareNote}</p>
          </div>

          {detail.relatedGuideHref && (
            <Link
              href={detail.relatedGuideHref}
              className="group block rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 transition-colors hover:border-r-gold"
            >
              <BookOpen size={22} className="text-r-gold" aria-hidden />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
                Know The Questions
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="text-lg text-r-white">Read the related guide.</p>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                />
              </div>
            </Link>
          )}
        </aside>
      </div>
    </section>
  );
}
