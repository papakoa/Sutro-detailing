"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { jobPhotos } from "@/lib/data";

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? i : (i - 1 + jobPhotos.length) % jobPhotos.length));
      }
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % jobPhotos.length));
      }
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section className="leather-grain bg-graphite px-6 py-28 text-warm-white md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Recent work" tag="More from the field" light />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {jobPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 4) * 0.06}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block aspect-4/3 w-full overflow-hidden rounded-md"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left font-mono text-xs text-warm-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-6 top-6 text-ash transition-colors hover:text-warm-white"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + jobPhotos.length) % jobPhotos.length));
              }}
              aria-label="Previous"
              className="absolute left-4 text-ash transition-colors hover:text-warm-white md:left-8"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={jobPhotos[openIndex].src}
              alt={jobPhotos[openIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-md shadow-2xl"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % jobPhotos.length));
              }}
              aria-label="Next"
              className="absolute right-4 text-ash transition-colors hover:text-warm-white md:right-8"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-ash-dim"
              onClick={(e) => e.stopPropagation()}
            >
              {jobPhotos[openIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
