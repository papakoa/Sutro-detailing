import Link from "next/link";
import { AtSign, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-graphite-line bg-graphite px-6 py-14 text-ash-dim md:px-[6vw]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-heading text-lg uppercase tracking-wide text-warm-white">
            Sutro Detailing
          </div>
          <p className="mt-3 max-w-xs text-sm">
            Mobile detailing that comes to you, anywhere in San Francisco.
          </p>
        </div>

        <div className="flex flex-col gap-2 font-mono text-sm">
          <a
            href={`tel:${contact.phoneHref}`}
            className="flex items-center gap-2 transition-colors hover:text-warm-white"
          >
            <Phone className="h-4 w-4" /> {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 transition-colors hover:text-warm-white"
          >
            <Mail className="h-4 w-4" /> {contact.email}
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-warm-white"
          >
            <AtSign className="h-4 w-4" /> {contact.instagramHandle}
          </a>
        </div>

        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <Link href="/" className="transition-colors hover:text-warm-white">
            Home
          </Link>
          <Link
            href="/packages"
            className="transition-colors hover:text-warm-white"
          >
            Packages
          </Link>
          <Link
            href="/reviews"
            className="transition-colors hover:text-warm-white"
          >
            Reviews
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-warm-white"
          >
            About
          </Link>
          <Link
            href="/#booking"
            className="transition-colors hover:text-warm-white"
          >
            Book now
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-graphite-line pt-6 font-mono text-xs">
        © {new Date().getFullYear()} Sutro Detailing · {contact.area}
      </div>
    </footer>
  );
}
