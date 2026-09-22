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
    a: "linear-gradient(135deg, #1b1d20 0%, #15171a 45%, #8f7040 100%)",
    b: "linear-gradient(150deg, #15171a 0%, #1b1d20 55%, #c6a466 130%)",
    c: "linear-gradient(115deg, #090a0b 0%, #1b1d20 50%, #8f7040 115%)",
    d: "linear-gradient(160deg, #1b1d20 0%, #090a0b 60%, #c6a466 140%)",
    e: "linear-gradient(140deg, #15171a 0%, #1b1d20 40%, #e4c98f 150%)",
  };

  return (
    <div
      aria-hidden
      className={clsx("relative overflow-hidden bg-r-panel-2", className)}
      style={{ backgroundImage: gradients[variant] }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.35), transparent 60%)" }} />
    </div>
  );
}
