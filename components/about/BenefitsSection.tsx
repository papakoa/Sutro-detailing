import { Car, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { benefits } from "@/lib/data";

const icons = [ShieldCheck, Car, Sparkles];

export function BenefitsSection() {
  return (
    <section className="bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Why detailing matters" tag="More than a wash" light />

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={benefit.title} delay={i * 0.1}>
                <div className="h-full rounded-md border border-graphite-line bg-graphite-2 p-8">
                  <Icon className="h-6 w-6 text-leather-200" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-ash">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
