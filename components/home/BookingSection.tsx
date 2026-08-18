import { SectionHeading } from "@/components/shared/SectionHeading";
import { BookingForm } from "./BookingForm";
import { contact } from "@/lib/data";

export function BookingSection() {
  return (
    <section
      id="booking"
      className="bg-graphite-2 px-6 py-28 text-warm-white md:px-[6vw] md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Book your detail"
          tag="We'll confirm by text or email"
          light
        />

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="max-w-[38ch] text-platinum">
              Fill out the form and it submits straight to us — no account
              needed. We&apos;ll reply to confirm your time slot.
            </p>

            <dl className="mt-8 divide-y divide-graphite-line border-t border-graphite-line">
              <div className="flex gap-4 py-4">
                <dt className="min-w-[9ch] font-mono text-xs uppercase text-platinum-dim">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="hover:text-silver-200"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 py-4">
                <dt className="min-w-[9ch] font-mono text-xs uppercase text-platinum-dim">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-silver-200"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 py-4">
                <dt className="min-w-[9ch] font-mono text-xs uppercase text-platinum-dim">
                  Area
                </dt>
                <dd>{contact.area}</dd>
              </div>
            </dl>
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  );
}
