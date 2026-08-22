import type { Metadata } from "next";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";

export const metadata: Metadata = {
  title: "Reviews — Sutro Detailing",
  description: "What clients say about Sutro Detailing, San Francisco Bay Area.",
};

export default function Reviews() {
  return <ReviewsSection />;
}
