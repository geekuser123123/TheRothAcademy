import { clsx } from "clsx";

export function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={clsx(
        "shrink-0 snap-start rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
        active
          ? "border-r-gold bg-r-gold/10 text-r-gold"
          : "border-r-line text-r-muted hover:border-r-gold/50 hover:text-r-white",
      )}
    >
      {children}
    </button>
  );
}
