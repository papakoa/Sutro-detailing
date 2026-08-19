"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SizeToggle } from "./SizeToggle";
import { PackageCard } from "./PackageCard";
import { AddonsList } from "./AddonsList";
import { pricingTiers } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function PackagesSection() {
  const [size, setSize] = useState<"sedan" | "large">("sedan");

  return (
    <section className="px-6 py-28 md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Services & pricing"
          tag="Choose your level of clean"
        />

        <SizeToggle size={size} onChange={setSize} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div key={tier.id} variants={staggerItem}>
              <PackageCard tier={tier} size={size} />
            </motion.div>
          ))}
        </motion.div>

        <AddonsList />
      </div>
    </section>
  );
}
