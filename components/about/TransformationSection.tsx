import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Pair = {
  angle: string;
  before: string;
  during?: string;
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
      {
        angle: "Exterior — side",
        before: "/images/jobs/job-16.jpg",
        during: "/images/jobs/job-26.jpg",
        after: "/images/jobs/job-28.jpg",
      },
      {
        angle: "Exterior — front",
        before: "/images/jobs/job-18.jpg",
        during: "/images/jobs/job-27.jpg",
        after: "/images/jobs/job-30.jpg",
      },
      {
        angle: "Interior — rear seats",
        before: "/images/jobs/job-20.jpg",
        after: "/images/jobs/job-21.jpg",
      },
    ],
  },
  {
    vehicle: "Ford Bronco",
    pairs: [
      {
        angle: "Trunk",
        before: "/images/jobs/job-36.jpg",
        after: "/images/jobs/job-35.jpg",
      },
      {
        angle: "Exterior — rear",
        before: "/images/jobs/job-34.jpg",
        after: "/images/jobs/job-42.jpg",
      },
      {
        angle: "Interior — front seats",
        before: "/images/jobs/job-43.jpg",
        after: "/images/jobs/job-37.jpg",
      },
      {
        angle: "Interior — rear seats",
        before: "/images/jobs/job-44.jpg",
        after: "/images/jobs/job-38.jpg",
      },
    ],
  },
  {
    vehicle: "BMW M2 Competition",
    pairs: [
      {
        angle: "Exterior — rear",
        before: "/images/jobs/job-49.jpg",
        after: "/images/jobs/job-48.jpg",
      },
      {
        angle: "Exterior — front",
        before: "/images/jobs/job-56.jpg",
        after: "/images/jobs/job-52.jpg",
      },
      {
        angle: "Trunk",
        before: "/images/jobs/job-53.jpg",
        after: "/images/jobs/job-51.jpg",
      },
    ],
  },
];

function TransformCard({ pair }: { pair: Pair }) {
  return (
    <div className="overflow-hidden rounded-md border border-graphite-line">
      <div className={`grid ${pair.during ? "grid-cols-3" : "grid-cols-2"}`}>
        <div className="relative">
          <img
            src={pair.before}
            alt={`${pair.angle} — before detail`}
            className="aspect-square w-full object-cover"
          />
          <span className="absolute left-1.5 top-1.5 rounded-sm bg-graphite/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-ash">
            Before
          </span>
        </div>
        {pair.during && (
          <div className="relative">
            <img
              src={pair.during}
              alt={`${pair.angle} — mid-wash`}
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-1.5 top-1.5 rounded-sm bg-graphite/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-ash">
              Foam
            </span>
          </div>
        )}
        <div className="relative">
          <img
            src={pair.after}
            alt={`${pair.angle} — after detail`}
            className="aspect-square w-full object-cover"
          />
          <span className="absolute left-1.5 top-1.5 rounded-sm bg-leather-400/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-warm-white">
            After
          </span>
        </div>
      </div>
      <div className="stitched bg-graphite-2 p-3 text-center font-mono text-[10px] uppercase tracking-wide text-ash-dim">
        {pair.angle}
      </div>
    </div>
  );
}

export function TransformationSection() {
  return (
    <section className="leather-grain bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Real time transformations"
          tag="See where the money goes"
          light
        />

        <div className="flex flex-col gap-16">
          {vehicleGroups.map((group) => (
            <div key={group.vehicle}>
              <h3 className="mb-6 font-heading text-xl uppercase tracking-wide text-warm-white">
                {group.vehicle}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.pairs.map((pair) => (
                  <Reveal key={pair.angle} delay={0.05}>
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
