"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useContactModal } from "@/components/contact/ContactModalProvider";
import { siteConfig } from "@/data/site-config";
import { contactOptions, contactCard } from "@/data/contact-content";

export function ContactOptionsSection() {
  const { open } = useContactModal();

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="min-w-0">
          <Eyebrow>Your Starting Point</Eyebrow>

          <ul className="mt-8 divide-y divide-r-line border-t border-r-line">
            {contactOptions.map((option) => (
              <li key={option.title}>
                <button
                  type="button"
                  onClick={() => open(option.topic)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:bg-r-panel-2"
                >
                  <div className="min-w-0">
                    <h2 className="text-2xl md:text-3xl">{option.title}</h2>
                    <p className="mt-1 text-sm text-r-muted font-body normal-case">{option.description}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-8">
          <Eyebrow>{contactCard.eyebrow}</Eyebrow>
          <h3 className="mt-4 text-3xl md:text-4xl">
            {contactCard.heading.map((line, index) => (
              <span key={line} className={index === contactCard.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h3>

          <div className="mt-8 space-y-5 border-t border-r-line pt-6">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-4 transition-colors hover:text-r-gold"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                <Phone size={18} aria-hidden />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-r-muted">
                  {contactCard.phoneLabel}
                </span>
                <span className="block text-lg text-r-white">{siteConfig.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 transition-colors hover:text-r-gold"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                <Mail size={18} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-r-muted">
                  {contactCard.emailLabel}
                </span>
                <span className="block truncate text-lg text-r-white">{siteConfig.email}</span>
              </span>
            </a>
          </div>

          <div className="mt-8 border-t border-r-line pt-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
              {contactCard.processLabel}
            </span>
            <p className="mt-2 text-sm text-r-muted font-body normal-case">{contactCard.processText}</p>
          </div>

          <Link
            href={contactCard.linkHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {contactCard.linkLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </aside>
      </div>
    </section>
  );
}
