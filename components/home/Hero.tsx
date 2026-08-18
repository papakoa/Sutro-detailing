"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Button } from "@/components/shared/Button";
import { contact } from "@/lib/data";
import { SHEEN_TRANSITION } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Ranges stay fixed regardless of reduced-motion — at scrollYProgress 0
  // (initial mount) every range below resolves to the same starting value,
  // so branching them on `prefersReducedMotion` (null during SSR, a real
  // boolean on the client) would only affect scroll-driven values, not the
  // hydrated markup. The sheen transition below needs the same treatment
  // for its *shape*, since that one does show up in the initial DOM.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-graphite"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <PlaceholderImage
          alt="Freshly detailed car, exterior shot, parked in a San Francisco driveway"
          priority
          sizes="100vw"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-graphite/20" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-6 pb-20 pt-32 md:px-[6vw]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-platinum-dim">
            <span className="h-2 w-2 rounded-full bg-silver-300" />
            Mobile detailing · San Francisco
          </div>

          <motion.h1
            initial={{ backgroundPosition: "180% 0" }}
            animate={{ backgroundPosition: "-40% 0" }}
            transition={prefersReducedMotion ? { duration: 0 } : SHEEN_TRANSITION}
            style={{ backgroundSize: "250% 100%" }}
            className="max-w-[14ch] bg-gradient-to-r from-warm-white via-silver-100 to-warm-white bg-clip-text text-[clamp(2.6rem,8vw,6rem)] font-bold leading-[0.98] text-transparent"
          >
            Get it showroom clean, in your driveway.
          </motion.h1>

          <p className="mt-6 max-w-[42ch] text-lg text-platinum">
            We come to you, anywhere in San Francisco. Book a detail in under
            a minute.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#booking" variant="primary" size="lg">
              Book an appointment
            </Button>
            <Button href={`tel:${contact.phoneHref}`} variant="ghost" size="lg">
              Call / Text {contact.phone}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
