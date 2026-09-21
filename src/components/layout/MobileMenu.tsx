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
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-24 bottom-0 z-30 overflow-y-auto border-t border-r-line bg-r-bg">
          <nav className="container-brand flex flex-col gap-1 py-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-r-line py-4 font-body text-base font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-1 font-body text-base font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
            >
              Client login
              <ArrowUpRight size={16} aria-hidden />
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-r-gold px-6 py-3 font-body text-sm font-semibold normal-case text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
