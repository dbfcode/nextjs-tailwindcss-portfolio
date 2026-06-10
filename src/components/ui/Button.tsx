"use client";

import Link from "next/link";
import { useSoundInteraction } from "@/hooks/useSoundInteraction";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40",
  secondary:
    "glass text-foreground hover:border-violet-500/50",
  ghost: "text-muted hover:text-foreground",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  className,
  children,
  external,
}: ButtonProps) {
  const { soundProps } = useSoundInteraction();

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
    variants[variant],
    className,
  );

  const handleClick = () => {
    soundProps.onClick();
    onClick?.();
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onMouseEnter={soundProps.onMouseEnter}
          onFocus={soundProps.onFocus}
          onClick={soundProps.onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        onMouseEnter={soundProps.onMouseEnter}
        onFocus={soundProps.onFocus}
        onClick={soundProps.onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={soundProps.onMouseEnter}
      onFocus={soundProps.onFocus}
      className={classes}
    >
      {children}
    </button>
  );
}
