"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prefix = pathname === "/" ? "" : "/";
  const links = [
    { label: "Pricing", href: `${prefix}#pricing` },
    { label: "Reviews", href: `${prefix}#reviews` },
    { label: "About", href: "/about" },
  ];
  const bookingHref = `${prefix}#booking`;

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-graphite-line bg-graphite/95 py-3"
          : "border-graphite-line/60 bg-graphite/90 py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-[6vw]">
        <Link
          href="/"
          className="font-heading text-lg uppercase tracking-wide text-warm-white"
        >
          Sutro Detailing
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-platinum-dim transition-colors hover:text-warm-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={bookingHref}
            className="rounded-md bg-gradient-to-r from-silver-100 via-silver-300 to-silver-100 px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-widest text-graphite transition-transform hover:-translate-y-0.5"
          >
            Book now
          </Link>
        </nav>

        <button
          type="button"
          className="text-warm-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-graphite-line bg-graphite md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-mono text-sm uppercase tracking-widest text-platinum-dim hover:text-warm-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={bookingHref}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-gradient-to-r from-silver-100 via-silver-300 to-silver-100 px-5 py-3 text-center font-heading text-xs font-semibold uppercase tracking-widest text-graphite"
              >
                Book now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
