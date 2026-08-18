import { Reveal } from "@/components/shared/Reveal";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { SectionHeading } from "@/components/shared/SectionHeading";

const galleryItems: { src: string; alt: string; aspect: string }[] = [
  {
    src: "/images/gallery-01.jpg",
    alt: "Exterior detail, wet paint sheen close-up",
    aspect: "4/3",
  },
  {
    src: "/images/gallery-02.jpg",
    alt: "Interior detail, freshly vacuumed seats",
    aspect: "3/4",
  },
  {
    src: "/images/gallery-03.jpg",
    alt: "Wheel and tire detail close-up",
    aspect: "4/3",
  },
  {
    src: "/images/gallery-04.jpg",
    alt: "Dashboard and console detail",
    aspect: "4/3",
  },
  {
    src: "/images/gallery-05.jpg",
    alt: "Exterior wide shot of a completed job",
    aspect: "3/4",
  },
  {
    src: "/images/gallery-06.jpg",
    alt: "Hand wax application close-up",
    aspect: "4/3",
  },
];

export function GallerySection() {
  return (
    <section className="bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Recent work" tag="More from the field" light />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryItems.map((item, i) => (
            <Reveal key={item.alt} delay={(i % 3) * 0.08}>
              <PlaceholderImage
                alt={item.alt}
                aspect={item.aspect}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="rounded-md"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
