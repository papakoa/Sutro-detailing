import type { Transition, Variants } from "framer-motion";

export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

// No transition baked into the variant itself — a variant-level transition
// would take precedence over the caller's `transition` prop and silently
// swallow any per-instance `delay`, so duration/ease/delay are always
// supplied by the component using this variant (see Reveal.tsx).
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const SHEEN_TRANSITION: Transition = {
  duration: 2.2,
  delay: 0.3,
  ease: "easeOut",
};
