import { Reveal } from "@/components/shared/Reveal";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { team } from "@/lib/data";

export function TeamSection() {
  return (
    <section className="px-6 py-28 md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Who's behind the wheel" tag="Meet the team" />

        <div className="grid gap-10 sm:grid-cols-2">
          {team.map((member) => (
            <Reveal key={member.name}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* member.image documents the expected filename; wire it in as `src` once the real headshot exists in public/images/ */}
                <PlaceholderImage
                  alt={`Portrait of ${member.name}, Sutro Detailing co-founder`}
                  aspect="1/1"
                  sizes="192px"
                  className="w-40 shrink-0 rounded-md sm:w-48"
                />
                <div>
                  <h3 className="text-xl">{member.name}</h3>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-ash-dim">
                    {member.role}
                  </div>
                  <p className="mt-4 text-sm text-graphite/80">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
