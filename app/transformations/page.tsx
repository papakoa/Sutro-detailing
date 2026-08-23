import type { Metadata } from "next";
import { TransformationSection } from "@/components/transformations/TransformationSection";

export const metadata: Metadata = {
  title: "Transformations — Sutro Detailing",
  description:
    "Before and after photos from real Sutro Detailing jobs in the San Francisco Bay Area.",
};

export default function Transformations() {
  return <TransformationSection />;
}
