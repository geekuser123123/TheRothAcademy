import Link from "next/link";
import { mainNav, siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-r-line bg-r-bg/95 backdrop-blur">
      <div className="container-brand flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-heading tracking-wide">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-r-white/90 hover:text-r-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/dashboard" className="text-sm font-medium text-r-white/90 hover:text-r-gold transition-colors">
            Client login
          </Link>
          <Button href="/contact">Let&apos;s talk</Button>
        </div>

        {/* Mobile menu trigger placeholder — wire up once mobile nav is built */}
        <button
          className="lg:hidden text-r-white"
          aria-label="Open menu"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
