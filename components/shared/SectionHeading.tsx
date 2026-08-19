import clsx from "clsx";

type SectionHeadingProps = {
  title: string;
  tag?: string;
  /** Set on dark-background sections so the divider reads correctly. */
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  tag,
  light,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-14 flex flex-wrap items-end justify-between gap-8 border-b pb-6",
        light ? "border-white/10" : "border-graphite/15",
        className
      )}
    >
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)]">{title}</h2>
      {tag && (
        <span className="font-mono text-xs uppercase tracking-widest text-ash-dim">
          {tag}
        </span>
      )}
    </div>
  );
}
