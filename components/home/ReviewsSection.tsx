"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What clients say"
          tag="Real jobs, real feedback"
          light
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div key={review.name} variants={staggerItem}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
