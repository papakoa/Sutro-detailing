import { Hero } from "@/components/home/Hero";
import { PricingSection } from "@/components/home/PricingSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { BookingSection } from "@/components/home/BookingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PricingSection />
      <ReviewsSection />
      <BookingSection />
    </>
  );
}
