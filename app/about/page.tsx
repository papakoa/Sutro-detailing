import type { Metadata } from "next";
import { TeamSection } from "@/components/about/TeamSection";
import { BenefitsSection } from "@/components/about/BenefitsSection";
import { TransformationSection } from "@/components/about/TransformationSection";
import { StorySection } from "@/components/about/StorySection";
import { GallerySection } from "@/components/about/GallerySection";

export const metadata: Metadata = {
  title: "About — Sutro Detailing",
  description:
    "Meet the team behind Sutro Detailing and see more of our work in the San Francisco Bay Area.",
};

export default function About() {
  return (
    <>
      <TeamSection />
      <BenefitsSection />
      <TransformationSection />
      <StorySection />
      <GallerySection />
    </>
  );
}
