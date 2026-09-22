import { clsx } from "clsx";

/**
 * PLACEHOLDER — no licensed photography is available in this repo yet.
 * Renders an abstract, gold-lit gradient crop instead of a stock photo
 * (per design direction: no crypto coins, stock charts, cash piles, or
 * cliché finance photography, and no fabricated photos of people).
 * Replace with real, licensed, or approved imagery — swap the <Image>
 * usage in the parent component, this component can then be removed.
 */
export function ImagePlaceholder({
  variant = "a",
  className,
}: {
  variant?: "a" | "b" | "c" | "d" | "e";
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
      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.35), transparent 60%)" }} />
    </div>
  );
}
