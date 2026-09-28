"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Standalone ad-landing pages render without the site header/footer/nav.
// They also keep their own phone/SMS-consent booking forms, so the GHL
// chat widget (which must never share a page with a phone-collecting
// form, per GHL's A2P compliance checklist) is excluded here too.
const STANDALONE_PATHS = ["/retirement-certainty-session"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (STANDALONE_PATHS.includes(pathname)) {
    return <div id="main-content">{children}</div>;
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6aba41af50fc24ace6052961"
        data-source="WEB_USER"
        strategy="lazyOnload"
      />
    </>
  );
}
