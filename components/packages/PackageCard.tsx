"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import clsx from "clsx";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Button } from "@/components/shared/Button";
import type { PricingTier } from "@/lib/data";

export function PackageCard({
  tier,
  size,
}: {
  tier: PricingTier;
  size: "sedan" | "large";
}) {
  const price = size === "sedan" ? tier.sedanPrice : tier.largePrice;
  const duration = size === "sedan" ? tier.sedanDuration : tier.largeDuration;
  const image = size === "sedan" ? tier.sedanImage : tier.largeImage;

  return (
    <div
      className={clsx(
        "stitched flex h-full flex-col overflow-hidden rounded-md border bg-graphite text-warm-white transition-all duration-300 hover:-translate-y-1.5",
        tier.featured
          ? "-translate-y-2.5 border-leather-300/60 shadow-[0_0_32px_rgba(196,18,48,0.22)]"
          : "border-graphite-line hover:border-leather-400/50"
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <PlaceholderImage
            alt={`${tier.name} detailing package — example of finished work`}
            aspect="4/3"
            src={image}
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-1 flex-col p-8">
        <div
          className={clsx(
            "font-mono text-xs uppercase tracking-widest",
            tier.featured ? "text-leather-200" : "text-ash-dim"
          )}
        >
          {tier.badge}
        </div>
        <h3 className="mt-1 text-2xl">{tier.name}</h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={size}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-4 mb-1 font-mono text-4xl font-bold"
          >
            ${price}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={size}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex items-center gap-1.5 font-mono text-xs text-ash-dim"
          >
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </motion.div>
        </AnimatePresence>

        <ul className="mb-8 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 border-t border-white/10 py-2.5 text-sm text-ash"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-leather-200" />
              {feature}
            </li>
          ))}
        </ul>

        <Button href="/#booking" variant={tier.featured ? "primary" : "ghost"}>
          Book {tier.name.toLowerCase()}
        </Button>
      </div>
    </div>
  );
}
