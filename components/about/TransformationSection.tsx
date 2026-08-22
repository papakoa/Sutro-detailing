import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const transformations = [
  {
    vehicle: "Audi SQ5",
    before: "/images/jobs/job-16.jpg",
    after: "/images/jobs/job-28.jpg",
  },
  {
    vehicle: "Ford Bronco",
    before: "/images/jobs/job-36.jpg",
    after: "/images/jobs/job-35.jpg",
  },
  {
    vehicle: "BMW M2 Competition",
    before: "/images/jobs/job-49.jpg",
    after: "/images/jobs/job-48.jpg",
  },
];

export function TransformationSection() {
  return (
    <section className="px-6 py-28 md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Before & after"
          tag="See where the money goes"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {transformations.map((t, i) => (
            <Reveal key={t.vehicle} delay={i * 0.1}>
              <div className="stitched overflow-hidden rounded-md border border-graphite-line">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={t.before}
                      alt={`${t.vehicle} — before detail`}
                      className="aspect-square w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-sm bg-graphite/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ash">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={t.after}
                      alt={`${t.vehicle} — after detail`}
                      className="aspect-square w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-sm bg-leather-400/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-warm-white">
                      After
                    </span>
                  </div>
                </div>
                <div className="bg-graphite p-4 text-center font-heading text-sm uppercase tracking-wide text-warm-white">
                  {t.vehicle}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
