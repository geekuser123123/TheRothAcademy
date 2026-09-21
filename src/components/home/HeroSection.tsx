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

        <div className="container-brand relative py-10 md:py-16">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
            <span>Self-Directed Retirement &amp; Advanced Planning</span>
            <span>The Roth Academy</span>
          </div>

          <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <h1 className="text-6xl font-bold md:text-8xl">
              Own Your
              <br />
              <em className="not-italic text-r-gold">Next Move.</em>
            </h1>

            <div className="flex items-center gap-4 md:max-w-xs">
              <span className="h-16 w-px shrink-0 bg-r-line" aria-hidden />
              <p className="text-base font-body normal-case text-r-white">
                You built the ambition.
                <br />
                Give it a bigger field to play on.
                <br />
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
                  Your Future. Your Direction.
                </span>
              </p>
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
