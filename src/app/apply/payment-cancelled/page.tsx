"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const STYLES = `
.pc-root {
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
  .pc-root { background-attachment: scroll; }
}
.pc-wordmark { text-align: center; margin-bottom: 28px; }
.pc-card {
  width: 100%;
  max-width: 520px;
  background: #FFFDF9;
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.35);
}
.pc-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}
.pc-h2 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 14px;
  color: #1E1C19;
}
.pc-sub { font-size: 14px; line-height: 1.6; color: #6b6558; margin-bottom: 24px; }
.pc-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.pc-btn-primary {
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
.pc-btn-secondary {
  background: none;
  color: #1E1C19;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: 1.5px solid #ECE5D6;
  border-radius: 9px;
  padding: 14px 26px;
  text-decoration: none;
  display: inline-block;
}
`;

function PaymentCancelledContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const resumeHref = id && token ? `/apply/resume?id=${id}&token=${token}` : "/apply";

  return (
    <div className="pc-root">
      <style>{STYLES}</style>
      <div className="pc-wordmark">
        <Link href="/">
          <Image src="/roth-logo.png" alt="Roth Academy" width={71} height={78} className="h-24 w-auto" priority />
        </Link>
      </div>
      <div className="pc-card">
        <div className="pc-eyebrow">Payment Cancelled</div>
        <h2 className="pc-h2">No Charge Was Made</h2>
        <p className="pc-sub">
          You cancelled checkout before completing payment. Nothing was charged, and your application is still
          saved, you can pick back up and try again whenever you&apos;re ready.
        </p>
        <div className="pc-actions">
          <Link href={resumeHref} className="pc-btn-primary">
            Return to My Application
          </Link>
          <a href={`tel:${siteConfig.phoneTel}`} className="pc-btn-secondary">
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCancelledPage() {
  return (
    <Suspense fallback={null}>
      <PaymentCancelledContent />
    </Suspense>
  );
}
