import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Landmark, Layers, BookOpen, Compass } from "lucide-react";
import { heroCapabilities } from "@/data/home-content";

const icons = { landmark: Landmark, layers: Layers, "book-open": BookOpen, compass: Compass };

export function HeroSection() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden border-b border-r-line md:min-h-[690px]">
        <Image
          src="/gold-texture.jpg"
          alt=""
          aria-hidden
          fill
          priority
          className="pointer-events-none object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(9,10,11,0.28), rgba(9,10,11,0.6))" }}
        />

        <div className="container-brand relative w-full py-10 md:py-16">
          <div
            className="flex flex-wrap justify-between gap-5"
            style={{ marginBottom: 40, fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="font-semibold uppercase text-[#b8b6b0]">
              Self-Directed Retirement &amp; Advanced Planning
            </span>
            <span className="font-semibold uppercase text-r-gold">The Roth Academy</span>
          </div>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h1
              className="text-r-white"
              style={{
                fontSize: "clamp(58px, 14.8vw, 205px)",
                fontWeight: 500,
                lineHeight: 0.89,
                letterSpacing: "-0.025em",
              }}
            >
              <span className="block whitespace-nowrap">Own Your</span>
              <em
                className="block whitespace-nowrap not-italic bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(115deg, #f0d797, #a3844f 95%)" }}
              >
                Next Move.
              </em>
            </h1>

            <div className="flex flex-col pt-4 md:max-w-[230px] md:pt-[45px]">
              <span className="mb-6 block h-[60px] w-px bg-r-gold" aria-hidden />
              <p className="text-[17px] leading-[1.7] text-[#d4d1ca] font-body normal-case">
                You built the ambition.
                <br />
                Give it a bigger field to play on.
              </p>
              <span className="mt-[26px] block text-[10px] font-semibold uppercase tracking-[0.12em] text-r-gold">
                Your Future. Your Direction.
              </span>
            </div>
          </div>

          <div className="mt-10 border-t border-r-line pt-8">
            <p className="max-w-md text-base text-r-muted font-body normal-case">
              Self-directed 401(k)s. Self-directed IRAs.
              <br />
              Advanced planning for what comes after.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 rounded-sm bg-r-gold px-6 py-3 text-sm font-semibold text-r-bg transition-colors hover:bg-r-gold-light"
              >
                Find my plan
                <ArrowUpRight size={18} aria-hidden />
              </Link>
              <Link
                href="/advanced-services"
                className="text-sm font-semibold text-r-white transition-colors hover:text-r-gold"
              >
                Explore advanced services
              </Link>
            </div>
          </div>

          <Link
            href="/#your-plan"
            className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted transition-colors hover:text-r-gold"
          >
            <ArrowDown size={16} aria-hidden />
            The Possibilities Start Here
          </Link>
        </div>
      </section>

      <div className="border-b border-r-line bg-r-bg">
        <div className="container-brand flex flex-wrap items-center justify-between gap-6 py-6">
          {heroCapabilities.map((item) => {
            const Icon = icons[item.icon];
            return (
              <span
                key={item.label}
                className="flex items-center gap-2 text-sm text-r-muted font-body normal-case"
              >
                <Icon size={18} className="text-r-gold" aria-hidden />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
