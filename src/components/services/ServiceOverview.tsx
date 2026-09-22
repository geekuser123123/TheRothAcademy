import fs from "fs";
import path from "path";
import Image from "next/image";
import { Check } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder, type ImagePlaceholderVariant } from "@/components/ui/ImagePlaceholder";

function imageExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export function ServiceOverview({
  eyebrow,
  heading,
  paragraphs,
  features,
  image,
  imageAlt = "",
  placeholderVariant = "a",
  reverse = false,
}: {
  eyebrow: string;
  heading: string[];
  paragraphs: string[];
  features: string[];
  image: string;
  imageAlt?: string;
  placeholderVariant?: ImagePlaceholderVariant;
  reverse?: boolean;
}) {
  const hasRealImage = imageExists(image);

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className={clsx("min-w-0", reverse && "md:order-2")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>

          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-md text-sm text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 space-y-3 border-t border-r-line pt-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-r-white font-body normal-case">
                <Check size={16} className="mt-0.5 shrink-0 text-r-gold" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={clsx(
            "relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-2xl shadow-black/50",
            reverse && "md:order-1 md:mx-0",
          )}
        >
          {hasRealImage ? (
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 35vw, 90vw" className="object-cover" />
          ) : (
            <ImagePlaceholder variant={placeholderVariant} mark className="relative h-full w-full" />
          )}
        </div>
      </div>
    </section>
  );
}
