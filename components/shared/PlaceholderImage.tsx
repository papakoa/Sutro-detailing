import Image from "next/image";
import { ImageIcon } from "lucide-react";
import clsx from "clsx";

type PlaceholderImageProps = {
  /** Always required, even without a real photo yet — doubles as a shot brief. */
  alt: string;
  /** CSS aspect-ratio value, e.g. "16/9", "4/3", "1/1". Omit to fill the parent. */
  aspect?: string;
  src?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function PlaceholderImage({
  alt,
  aspect,
  src,
  priority,
  sizes = "100vw",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-gradient-to-br from-graphite-2 via-graphite to-graphite-2",
        className
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <ImageIcon
            className="h-8 w-8 text-platinum-dim opacity-40"
            strokeWidth={1.5}
          />
          <span className="max-w-[80%] text-center font-mono text-[10px] uppercase tracking-wide text-platinum-dim opacity-40">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
