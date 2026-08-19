"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE, fadeUp } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Always render the same element/props shape — `useReducedMotion()` is
  // `null` during SSR and on the client's first render (before Framer
  // Motion's effect resolves the real value), so branching to a plain
  // `<div>` here would render different markup than the client settles on
  // a moment later, producing a hydration mismatch. Only `transition`
  // (never serialized as a DOM attribute) is safe to vary by the value.
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: EASE, delay }
      }
    >
      {children}
    </motion.div>
  );
}
