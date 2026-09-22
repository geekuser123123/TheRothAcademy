import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mainNav } from "@/data/site-config";
import { MobileMenu } from "@/components/layout/MobileMenu";

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
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-2 font-body text-[12px] font-medium normal-case text-r-muted"
            >
              Client Login
              <span className="rounded-full border border-r-line px-2 py-0.5 text-[10px] uppercase tracking-wide text-r-muted">
                Coming soon
              </span>
            </span>
            <span aria-hidden className="h-4 w-px bg-r-line" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-r-gold px-5 py-2.5 font-body text-[12px] font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
