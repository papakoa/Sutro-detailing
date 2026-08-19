import type { Metadata } from "next";
import { PackagesSection } from "@/components/packages/PackagesSection";

export const metadata: Metadata = {
  title: "Packages — Sutro Detailing",
  description:
    "Detailing packages and add-ons for Sutro Detailing, San Francisco.",
};

export default function Packages() {
  return <PackagesSection />;
}
