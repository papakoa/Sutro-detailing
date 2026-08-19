import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantClasses = {
  primary:
    "bg-gradient-to-r from-leather-400 via-leather-200 to-leather-400 text-warm-white shadow-[0_0_22px_rgba(196,18,48,0.35)] hover:brightness-110",
  ghost:
    "border border-ash-dim text-warm-white hover:border-warm-white",
};

const sizeClasses = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-md font-heading font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
