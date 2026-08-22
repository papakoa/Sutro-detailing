import { Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";

// lucide-react dropped its Instagram glyph; this is the outline shape
// (rounded square + lens circle + flash dot) drawn directly.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-graphite-line bg-graphite px-6 py-14 text-ash-dim md:px-[6vw]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-heading text-lg uppercase tracking-wide text-warm-white">
            Sutro Detailing
          </div>
          <p className="mt-3 max-w-xs text-sm">
            Mobile detailing that comes to you — San Francisco, Marin, San
            Mateo, and nearby areas.
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
            aria-label="Sutro Detailing on Instagram"
            className="flex items-center gap-2 transition-colors hover:text-warm-white"
          >
            <InstagramIcon className="h-4 w-4" /> {contact.instagramHandle}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-graphite-line pt-6 font-mono text-xs">
        © {new Date().getFullYear()} Sutro Detailing · {contact.area}
      </div>
    </footer>
  );
}
