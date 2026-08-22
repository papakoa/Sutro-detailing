import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Transformation = {
  vehicle: string;
  angle: string;
  before: string;
  during?: string;
  after: string;
};

const transformations: Transformation[] = [
  // Audi SQ5
  {
    vehicle: "Audi SQ5",
    angle: "Exterior — side",
    before: "/images/jobs/job-16.jpg",
    during: "/images/jobs/job-26.jpg",
    after: "/images/jobs/job-28.jpg",
  },
  {
    vehicle: "Audi SQ5",
    angle: "Exterior — front",
    before: "/images/jobs/job-18.jpg",
    during: "/images/jobs/job-27.jpg",
    after: "/images/jobs/job-30.jpg",
  },
  {
    vehicle: "Audi SQ5",
    angle: "Interior — rear seats",
    before: "/images/jobs/job-20.jpg",
    after: "/images/jobs/job-21.jpg",
  },
  // Ford Bronco
  {
    vehicle: "Ford Bronco",
    angle: "Trunk",
    before: "/images/jobs/job-36.jpg",
    after: "/images/jobs/job-35.jpg",
  },
  {
    vehicle: "Ford Bronco",
    angle: "Exterior — rear",
    before: "/images/jobs/job-34.jpg",
    after: "/images/jobs/job-42.jpg",
  },
  {
    vehicle: "Ford Bronco",
    angle: "Interior — front seats",
    before: "/images/jobs/job-43.jpg",
    after: "/images/jobs/job-37.jpg",
  },
  {
    vehicle: "Ford Bronco",
    angle: "Interior — rear seats",
    before: "/images/jobs/job-44.jpg",
    after: "/images/jobs/job-38.jpg",
  },
  // BMW M2 Competition
  {
    vehicle: "BMW M2 Competition",
    angle: "Exterior — rear",
    before: "/images/jobs/job-49.jpg",
    after: "/images/jobs/job-48.jpg",
  },
  {
    vehicle: "BMW M2 Competition",
    angle: "Exterior — front",
    before: "/images/jobs/job-56.jpg",
    after: "/images/jobs/job-52.jpg",
  },
  {
    vehicle: "BMW M2 Competition",
    angle: "Trunk",
    before: "/images/jobs/job-53.jpg",
    after: "/images/jobs/job-51.jpg",
  },
];

export function TransformationSection() {
  return (
    <section className="leather-grain bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Real time transformations"
          tag="See where the money goes"
          light
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((t, i) => (
            <Reveal key={`${t.vehicle}-${t.angle}`} delay={(i % 3) * 0.08}>
              <div className="overflow-hidden rounded-md border border-graphite-line">
                <div
                  className={`grid ${t.during ? "grid-cols-3" : "grid-cols-2"}`}
                >
                  <div className="relative">
                    <img
                      src={t.before}
                      alt={`${t.vehicle} ${t.angle} — before detail`}
                      className="aspect-square w-full object-cover"
                    />
                    <span className="absolute left-1.5 top-1.5 rounded-sm bg-graphite/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-ash">
                      Before
                    </span>
                  </div>
                  {t.during && (
                    <div className="relative">
                      <img
                        src={t.during}
                        alt={`${t.vehicle} ${t.angle} — mid-wash`}
                        className="aspect-square w-full object-cover"
                      />
                      <span className="absolute left-1.5 top-1.5 rounded-sm bg-graphite/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-ash">
                        Foam
                      </span>
                    </div>
                  )}
                  <div className="relative">
                    <img
                      src={t.after}
                      alt={`${t.vehicle} ${t.angle} — after detail`}
                      className="aspect-square w-full object-cover"
                    />
                    <span className="absolute left-1.5 top-1.5 rounded-sm bg-leather-400/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-warm-white">
                      After
                    </span>
                  </div>
                </div>
                <div className="stitched bg-graphite-2 p-4 text-center">
                  <div className="font-heading text-sm uppercase tracking-wide text-warm-white">
                    {t.vehicle}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ash-dim">
                    {t.angle}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
