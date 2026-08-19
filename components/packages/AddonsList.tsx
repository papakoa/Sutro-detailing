import { addons } from "@/lib/data";

export function AddonsList() {
  return (
    <div className="mt-14 border-t border-graphite/15 pt-10">
      <h3 className="mb-5 font-mono text-sm uppercase tracking-wide text-ash-dim">
        Add-ons
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="flex items-center justify-between gap-4 rounded-md border border-graphite-line bg-graphite px-6 py-5 text-warm-white"
          >
            <span className="text-sm">
              {addon.name}
              {addon.note && (
                <span className="mt-1 block font-mono text-xs text-ash-dim">
                  {addon.note}
                </span>
              )}
            </span>
            <span className="whitespace-nowrap font-mono text-lg font-bold text-leather-200">
              +${addon.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
