"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/portfolio";
import { useSoundInteraction } from "@/hooks/useSoundInteraction";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { soundProps, playClick } = useSoundInteraction();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight gradient-text"
          {...soundProps}
        >
          DF
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-white/10 text-foreground"
                  : "text-muted hover:text-foreground",
              )}
              {...soundProps}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white md:inline-flex"
          {...soundProps}
        >
          Contrate-me
        </Link>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => {
            playClick();
            setOpen(!open);
          }}
          onMouseEnter={soundProps.onMouseEnter}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 px-4 py-4 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                soundProps.onClick();
                setOpen(false);
              }}
              onMouseEnter={soundProps.onMouseEnter}
              onFocus={soundProps.onFocus}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm",
                pathname === item.href
                  ? "bg-white/10 text-foreground"
                  : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
