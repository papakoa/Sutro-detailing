import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { story } from "@/lib/data";

export function StorySection() {
  return (
    <section className="px-6 py-28 md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={story.heading} tag="Our story" />

        <Reveal className="max-w-[65ch] space-y-5 text-graphite/80">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
