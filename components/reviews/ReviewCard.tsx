import { Star } from "lucide-react";
import type { Review } from "@/lib/data";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col rounded-md border border-graphite-line bg-graphite-2 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-leather-400/50">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-leather-200 text-leather-200" />
        ))}
      </div>
      <p className="flex-1 text-ash">&ldquo;{review.quote}&rdquo;</p>
      <div className="mt-6 font-mono text-xs uppercase tracking-widest text-ash-dim">
        {review.name} · {review.vehicle}
      </div>
    </div>
  );
}
