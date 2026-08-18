"use client";

import clsx from "clsx";

type Size = "sedan" | "large";

export function SizeToggle({
  size,
  onChange,
}: {
  size: Size;
  onChange: (size: Size) => void;
}) {
  const options: { value: Size; label: string }[] = [
    { value: "sedan", label: "Sedan / Small" },
    { value: "large", label: "SUV / XL / Truck" },
  ];

  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={clsx(
            "rounded-md border px-6 py-3 font-mono text-sm uppercase tracking-wide transition-colors",
            size === option.value
              ? "border-graphite bg-graphite text-warm-white"
              : "border-graphite-line text-graphite hover:border-graphite"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
