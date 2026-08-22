"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-graphite"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <PlaceholderImage
          alt="BMW 4 Series after a full detail, driveway shine"
          src="/images/jobs/blackbmw.png"
          priority
          sizes="100vw"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/40 to-graphite/80" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.h1
          initial={{ backgroundPosition: "180% 0" }}
          animate={{ backgroundPosition: "-40% 0" }}
          transition={prefersReducedMotion ? { duration: 0 } : SHEEN_TRANSITION}
          style={{ backgroundSize: "250% 100%" }}
          className="bg-gradient-to-r from-warm-white via-leather-100 to-warm-white bg-clip-text text-[clamp(2.8rem,10vw,7rem)] font-bold leading-none tracking-wide text-transparent"
        >
          SUTRO
          <br />
          DETAILING
        </motion.h1>
        <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-ash">
          <span className="h-px w-8 bg-leather-300" />
          Mobile detailing · San Francisco Bay Area
          <span className="h-px w-8 bg-leather-300" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-ash" />
        </motion.div>
      </motion.div>
    </section>
  );
}
