import { SectionHeading } from "@/components/shared/SectionHeading";
import { BookingForm } from "./BookingForm";

export function BookingSection() {
  return (
    <section
      id="booking"
      className="leather-grain bg-graphite-2 px-6 py-28 text-warm-white md:px-[6vw] md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Book your detail"
          tag="We'll confirm by text or email"
          light
        />

        <BookingForm />
      </div>
    </section>
  );
}
