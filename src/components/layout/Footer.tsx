import Link from "next/link";
import { siteConfig, footerNav, legalNav } from "@/data/site-config";

export function Footer() {
  const columns = [footerNav.startHere, footerNav.academy, footerNav.nextStep];

  return (
    <footer className="border-t border-r-line bg-r-bg">
      <div className="container-brand py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-heading tracking-wide">{siteConfig.name}</p>
            <p className="mt-4 max-w-xs text-sm text-r-muted font-body normal-case">
              Self-directed retirement.
              <br />
              Advanced thinking.
              <br />
              A team behind your next move.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-r-gold font-body normal-case">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-r-muted hover:text-r-white transition-colors font-body normal-case"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {column === footerNav.nextStep && (
                <div className="mt-4 space-y-1 text-sm text-r-muted font-body normal-case">
                  <a href={`mailto:${siteConfig.email}`} className="block hover:text-r-white transition-colors">
                    {siteConfig.email}
                  </a>
                  <a href={`tel:${siteConfig.phoneTel}`} className="block hover:text-r-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-r-line pt-8 text-xs text-r-muted font-body normal-case md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-r-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-[11px] leading-relaxed text-r-muted/70 font-body normal-case">
          {siteConfig.disclaimer}
        </p>
      </div>
    </footer>
  );
}
