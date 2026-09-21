import Link from "next/link";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "gold" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-r-gold text-r-bg hover:bg-r-gold-light",
  outline: "border border-r-line text-r-white hover:border-r-gold hover:text-r-gold",
};

const baseClasses =
  "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide font-body normal-case transition-colors rounded-sm";

type ButtonAsLink = { href: string } & ComponentPropsWithoutRef<typeof Link>;
type ButtonAsButton = { href?: undefined } & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "gold",
  className,
  children,
  ...props
}: (ButtonAsLink | ButtonAsButton) & { variant?: ButtonVariant }) {
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link className={classes} {...(props as ButtonAsLink)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
