"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ReviewCard } from "./ReviewCard";
import { reviews, reviewSummary } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function ReviewsSection() {
  return (
    <section className="leather-grain bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What clients say"
          tag="Real jobs, real feedback"
          light
        />

        <div className="-mt-10 mb-14 flex items-center gap-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-leather-200 text-leather-200" />
            ))}
          </div>
          <span className="font-mono text-lg font-bold text-warm-white">
            {reviewSummary.average.toFixed(1)}
          </span>
          <span className="font-mono text-sm text-ash-dim">
            perfect rating on Google
          </span>
        </div>

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
