"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const bookButtonClasses =
  "rounded-md bg-gradient-to-r from-leather-400 via-leather-200 to-leather-400 font-heading font-semibold uppercase tracking-widest text-warm-white shadow-[0_0_18px_rgba(196,18,48,0.35)] transition-transform hover:-translate-y-0.5";

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

  const links = [
    { label: "Price Breakdown", href: "/price-breakdown" },
    { label: "Transformations", href: "/transformations" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
  ];
  const bookingHref = pathname === "/" ? "#booking" : "/#booking";

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-graphite-line bg-graphite/95 py-3"
          : "border-graphite-line/60 bg-graphite/90 py-5"
      )}
    >
      <div className="flex items-center justify-between px-6 md:px-10">
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
              className="font-mono text-xs uppercase tracking-widest text-ash-dim transition-colors hover:text-warm-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href={bookingHref} className={clsx(bookButtonClasses, "px-5 py-2.5 text-xs")}>
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
                  className="py-3 font-mono text-sm uppercase tracking-widest text-ash-dim hover:text-warm-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={bookingHref}
                onClick={() => setOpen(false)}
                className={clsx(bookButtonClasses, "mt-2 px-5 py-3 text-center text-xs")}
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
