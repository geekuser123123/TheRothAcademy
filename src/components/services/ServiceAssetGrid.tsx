import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder, type ImagePlaceholderVariant } from "@/components/ui/ImagePlaceholder";
import { assetClasses } from "@/data/home-content";

function imageExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

type AssetItem = {
  number: string;
  label: string;
  description: string;
  href?: string;
  image: string;
  placeholderVariant: ImagePlaceholderVariant;
};

export function ServiceAssetGrid({
  eyebrow,
  heading,
  intro,
  tagline,
  footnote,
  items = assetClasses,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  tagline?: string[];
  footnote?: string;
  items?: AssetItem[];
}) {
  return (
    <section className="border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="flex min-w-0 flex-col md:justify-between">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {heading.map((line, index) => (
                <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                  {line}
                </span>
              ))}
            </h2>
            {intro && <p className="mt-6 max-w-sm text-sm text-r-muted font-body normal-case">{intro}</p>}
            <span className="mt-6 block h-px w-12 bg-r-gold" aria-hidden />
          </div>

          {tagline && (
            <p className="mt-10 text-xs uppercase leading-relaxed tracking-[0.15em] text-r-muted/70 md:mt-16">
              {tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          )}
        </div>

        <div>
          <ul className="min-w-0 divide-y divide-r-line border-t border-r-line">
            {items.map((item) => {
              const hasRealImage = imageExists(item.image);
              const Row = (
                <div className="group flex items-center gap-4 py-5 sm:gap-6">
                  <span className="w-6 shrink-0 text-xs text-r-gold sm:w-8">{item.number}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl">{item.label}</h3>
                    <p className="mt-1 text-sm text-r-muted font-body normal-case">{item.description}</p>
                  </div>
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm border border-r-line sm:h-20 sm:w-40">
                    {hasRealImage ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <ImagePlaceholder
                        variant={item.placeholderVariant}
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                </div>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <Link href={item.href} className="block transition-colors hover:bg-r-panel-2">
                      {Row}
                    </Link>
                  ) : (
                    Row
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {footnote && (
        <div className="container-brand mt-10 border-t border-r-line pt-6">
          <p className="max-w-3xl text-xs text-r-muted/70 font-body normal-case">{footnote}</p>
        </div>
      )}
    </section>
  );
}
