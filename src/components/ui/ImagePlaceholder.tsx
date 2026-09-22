import { clsx } from "clsx";
import Image from "next/image";

export type ImagePlaceholderVariant = "a" | "b" | "c" | "d" | "e";

/**
 * PLACEHOLDER — no licensed photography is available in this repo yet.
 * Renders an abstract, gold-lit gradient crop instead of a stock photo
 * (per design direction: no crypto coins, stock charts, cash piles, or
 * cliché finance photography, and no fabricated photos of people).
 * Replace with real, licensed, or approved imagery — swap the <Image>
 * usage in the parent component, this component can then be removed.
 *
 * `mark`: shows a faint centered brand mark so the box reads as a
 * deliberate placeholder rather than a blank/broken image. Use it for
 * larger, more prominent placeholders (e.g. a portrait-style photo
 * slot) — leave it off for small row thumbnails where it would just
 * look cluttered.
 */
export function ImagePlaceholder({
  variant = "a",
  mark = false,
  className,
}: {
  variant?: ImagePlaceholderVariant;
  mark?: boolean;
  className?: string;
}) {
  const gradients: Record<string, string> = {
    a: "linear-gradient(100deg, #2a2d32 0%, #6b5738 60%, #a3844f 100%)",
    b: "linear-gradient(100deg, #23262b 0%, #7a6440 55%, #c6a466 100%)",
    c: "linear-gradient(100deg, #1b1d20 0%, #6b5738 50%, #8f7040 100%)",
    d: "linear-gradient(100deg, #2a2d32 0%, #8a7040 55%, #c6a466 100%)",
    e: "linear-gradient(100deg, #23262b 0%, #9c8250 50%, #e4c98f 100%)",
  };

  return (
    <div
      aria-hidden
      className={clsx("overflow-hidden bg-r-panel-2", className)}
      style={{ backgroundImage: gradients[variant] }}
    >
      {mark && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/roth-logo.png" alt="" width={56} height={62} className="h-14 w-auto opacity-20" />
        </div>
      )}
      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.35), transparent 60%)" }} />
    </div>
  );
}
