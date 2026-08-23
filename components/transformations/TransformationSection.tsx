import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Pair = {
  before: string;
  after: string;
};

type VehicleGroup = {
  vehicle: string;
  pairs: Pair[];
};

const vehicleGroups: VehicleGroup[] = [
  {
    vehicle: "Audi SQ5",
    pairs: [
      { before: "/images/jobs/job-16.jpg", after: "/images/jobs/job-28.jpg" },
      { before: "/images/jobs/job-18.jpg", after: "/images/jobs/job-30.jpg" },
      { before: "/images/jobs/job-20.jpg", after: "/images/jobs/job-21.jpg" },
      { before: "/images/jobs/job-15.jpg", after: "/images/jobs/job-29.jpg" },
    ],
  },
  {
    vehicle: "Ford Bronco",
    pairs: [
      { before: "/images/jobs/job-36.jpg", after: "/images/jobs/job-35.jpg" },
      { before: "/images/jobs/job-34.jpg", after: "/images/jobs/job-42.jpg" },
      { before: "/images/jobs/job-43.jpg", after: "/images/jobs/job-37.jpg" },
      { before: "/images/jobs/job-44.jpg", after: "/images/jobs/job-38.jpg" },
    ],
  },
  {
    vehicle: "BMW M2 Competition",
    pairs: [
      { before: "/images/jobs/job-49.jpg", after: "/images/jobs/job-48.jpg" },
      { before: "/images/jobs/job-56.jpg", after: "/images/jobs/job-52.jpg" },
      { before: "/images/jobs/job-53.jpg", after: "/images/jobs/job-51.jpg" },
      { before: "/images/jobs/bmw-m2-before-2.png", after: "/images/jobs/job-47.jpg" },
    ],
  },
];

function TransformCard({ pair }: { pair: Pair }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="relative overflow-hidden rounded-md border border-graphite-line">
        <img
          src={pair.before}
          alt="Before detail"
          className="aspect-[4/3] w-full object-cover"
        />
        <span className="absolute left-2 top-2 rounded-sm bg-graphite/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ash">
          Before
        </span>
      </div>
      <div className="relative overflow-hidden rounded-md border border-graphite-line">
        <img
          src={pair.after}
          alt="After detail"
          className="aspect-[4/3] w-full object-cover"
        />
        <span className="absolute left-2 top-2 rounded-sm bg-leather-400/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-warm-white">
          After
        </span>
      </div>
    </div>
  );
}

export function TransformationSection() {
  return (
    <section className="leather-grain bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Real transformations"
          tag="See where the money goes"
          light
        />

        <div className="flex flex-col gap-20">
          {vehicleGroups.map((group) => (
            <div key={group.vehicle}>
              <h3 className="mb-6 font-heading text-2xl uppercase tracking-wide text-warm-white">
                {group.vehicle}
              </h3>
              <div className="grid gap-8 lg:grid-cols-2">
                {group.pairs.map((pair, i) => (
                  <Reveal key={pair.before} delay={0.05 * i}>
                    <TransformCard pair={pair} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
