"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const STYLES = `
.sc-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(180deg, rgba(9,10,11,0.55) 0%, rgba(9,10,11,0.45) 45%, rgba(9,10,11,0.6) 100%),
    url('/gold-dust-hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: var(--font-inter), 'Inter', sans-serif;
  color: #1E1C19;
  padding: 40px 20px;
}
@media (max-width: 640px) {
  .sc-root { background-attachment: scroll; }
}
.sc-wordmark { text-align: center; margin-bottom: 28px; }
.sc-card {
  width: 100%;
  max-width: 520px;
  background: #FFFDF9;
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.35);
}
.sc-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}
.sc-h2 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 14px;
  color: #1E1C19;
}
.sc-sub { font-size: 14px; line-height: 1.6; color: #6b6558; margin-bottom: 24px; }
.sc-btn-primary {
  background: #B89958;
  color: #1E1C19;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  border-radius: 9px;
  padding: 14px 26px;
  text-decoration: none;
  display: inline-block;
}
`;

function SigningCompleteContent() {
  return (
    <div className="sc-root">
      <style>{STYLES}</style>
      <div className="sc-wordmark">
        <Link href="/">
          <Image src="/roth-logo.png" alt="Roth Academy" width={71} height={78} className="h-24 w-auto" priority />
        </Link>
      </div>
      <div className="sc-card">
        <div className="sc-eyebrow">Order Form Received</div>
        <h2 className="sc-h2">Thank You for Signing</h2>
        <p className="sc-sub">
          We&apos;ve received your completed order form. If a spouse or co-trustee also needs to sign, they&apos;ll
          receive their own secure email invitation separately -- nothing further is needed from you for that.
          We&apos;ll be in touch with next steps once everything is fully signed.
        </p>
        <p className="sc-sub">If you have any questions in the meantime, call us at {siteConfig.phone}.</p>
        <Link href="/" className="sc-btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default function SigningCompletePage() {
  return (
    <Suspense fallback={null}>
      <SigningCompleteContent />
    </Suspense>
  );
}
