import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const STYLES = `
.re-root {
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
  .re-root { background-attachment: scroll; }
}
.re-wordmark { text-align: center; margin-bottom: 28px; }
.re-card {
  width: 100%;
  max-width: 520px;
  background: #FFFDF9;
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.35);
}
.re-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}
.re-h2 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 14px;
  color: #1E1C19;
}
.re-sub { font-size: 14px; line-height: 1.6; color: #6b6558; margin-bottom: 24px; }
.re-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.re-btn-primary {
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
.re-btn-secondary {
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

export function ResumeError({ message }: { message: string }) {
  return (
    <div className="re-root">
      <style>{STYLES}</style>
      <div className="re-wordmark">
        <Link href="/">
          <Image src="/roth-logo.png" alt="Roth Academy" width={71} height={78} className="h-24 w-auto" priority />
        </Link>
      </div>
      <div className="re-card">
        <div className="re-eyebrow">Resume Application</div>
        <h2 className="re-h2">We Couldn&apos;t Open That Link</h2>
        <p className="re-sub">{message}</p>
        <div className="re-actions">
          <Link href="/apply" className="re-btn-primary">
            Start a New Application
          </Link>
          <a href={`tel:${siteConfig.phoneTel}`} className="re-btn-secondary">
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
