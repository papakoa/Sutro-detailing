import type { Metadata } from "next";
import { PackagesSection } from "@/components/packages/PackagesSection";

export const metadata: Metadata = {
  title: "Price Breakdown — Sutro Detailing",
  description:
    "Detailing packages and add-ons for Sutro Detailing, San Francisco Bay Area.",
};

export default function PriceBreakdown() {
  return <PackagesSection />;
}
