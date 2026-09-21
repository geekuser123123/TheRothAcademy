"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { mainNav } from "@/data/site-config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="text-r-white"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        type="button"
        onClick={() => setOpen(true)}
      >
        <Menu size={26} aria-hidden />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto border-l border-r-line bg-r-bg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-start justify-between p-6">
          <div>
            <p className="text-lg font-heading tracking-wide text-r-gold">Roth Academy</p>
            <p className="mt-1 text-xs text-r-muted font-body normal-case">Choose your next move.</p>
          </div>
          <button
            className="text-r-white"
            aria-label="Close menu"
            type="button"
            onClick={() => setOpen(false)}
          >
            <X size={22} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 border-t border-r-line px-6">
          {mainNav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between gap-4 border-b border-r-line px-0 py-[18px]"
            >
              <span className="flex items-center gap-4">
                <span className="text-xs text-r-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-heading text-[30px] text-r-white">{item.label}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <div className="p-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-r-gold px-6 py-3 font-body text-sm font-semibold normal-case text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Start a conversation
            <ArrowUpRight size={16} aria-hidden />
          </Link>

          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="font-body text-sm font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
            >
              Client login
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-body text-sm font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
