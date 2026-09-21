import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mainNav } from "@/data/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-r-line bg-r-bg">
      <div className="container-brand flex h-24 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/roth-logo.png"
            alt="Roth Academy"
            width={71}
            height={78}
            className="h-[78px] w-[71px] object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-[12px] font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 font-body text-[12px] font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
            >
              Client login
              <ArrowUpRight size={14} aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-r-gold px-5 py-2.5 font-body text-[12px] font-medium normal-case text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        {/* Mobile menu trigger placeholder — wire up once mobile nav is built */}
        <button className="lg:hidden text-r-white" aria-label="Open menu" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
