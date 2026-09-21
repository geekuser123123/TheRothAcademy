import { clsx } from "clsx";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={clsx(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-r-gold before:h-px before:w-6 before:bg-r-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}
