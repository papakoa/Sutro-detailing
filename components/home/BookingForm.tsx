"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { addons, contact, pricingTiers, type PricingTier } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";
type VehicleSize = "sedan" | "large";

const inputClass =
  "rounded-sm border border-graphite-line bg-graphite px-4 py-3 text-sm text-warm-white placeholder:text-ash-dim/60 focus:outline focus:outline-2 focus:outline-leather-300";

const labelClass = "font-mono text-xs uppercase tracking-wide text-ash-dim";

const defaultAddonState = Object.fromEntries(
  addons.map((addon) => [addon.id, false])
) as Record<(typeof addons)[number]["id"], boolean>;

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>("sedan");
  const [tierId, setTierId] = useState<PricingTier["id"]>(pricingTiers[0].id);
  const [selectedAddons, setSelectedAddons] = useState(defaultAddonState);
  const [status, setStatus] = useState<Status>("idle");

  const selectedTier = pricingTiers.find((tier) => tier.id === tierId)!;
  const tierPrice =
    vehicleSize === "sedan" ? selectedTier.sedanPrice : selectedTier.largePrice;
  const serviceLabel = `${selectedTier.name} — $${tierPrice}`;

  const selectedAddonList = addons.filter((addon) => selectedAddons[addon.id]);
  const addonsTotal = selectedAddonList.reduce((sum, addon) => sum + addon.price, 0);
  const total = tierPrice + addonsTotal;

  function toggleAddon(id: (typeof addons)[number]["id"]) {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("submitting");

    const data = new FormData(formRef.current);
    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        formRef.current.reset();
        setVehicleSize("sedan");
        setTierId(pricingTiers[0].id);
        setSelectedAddons(defaultAddonState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="stitched flex flex-col gap-5 rounded-md border border-graphite-line bg-graphite p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="vehicle" className={labelClass}>
          Vehicle (year / make / model)
        </label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          placeholder="e.g. 2019 Honda Civic"
          required
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vehicle_size" className={labelClass}>
            Vehicle size
          </label>
          <select
            id="vehicle_size"
            name="vehicle_size"
            value={vehicleSize}
            onChange={(e) => setVehicleSize(e.target.value as VehicleSize)}
            className={inputClass}
          >
            <option value="sedan">Sedan / Small</option>
            <option value="large">SUV / XL / Truck</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <select
            id="service"
            value={tierId}
            onChange={(e) => setTierId(e.target.value as PricingTier["id"])}
            className={inputClass}
          >
            {pricingTiers.map((tier) => {
              const price = vehicleSize === "sedan" ? tier.sedanPrice : tier.largePrice;
              return (
                <option key={tier.id} value={tier.id}>
                  {tier.name} — ${price}
                </option>
              );
            })}
          </select>
          {/* Formspree field contract expects the visible label as the value, not the tier id. */}
          <input type="hidden" name="service" value={serviceLabel} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className={labelClass}>Add-ons</span>
        <div className="grid gap-3 sm:grid-cols-2">
          {addons.map((addon) => (
            <label
              key={addon.id}
              className="flex items-center gap-2 text-sm text-ash"
            >
              <input
                type="checkbox"
                name={`addon_${addon.id}`}
                value={`${addon.name} (+$${addon.price})`}
                checked={selectedAddons[addon.id]}
                onChange={() => toggleAddon(addon.id)}
                className="h-4 w-4"
              />
              {addon.name} (+${addon.price})
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="date" className={labelClass}>
            Preferred date
          </label>
          <input id="date" name="date" type="date" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="time" className={labelClass}>
            Preferred time
          </label>
          <input id="time" name="time" type="time" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className={labelClass}>
          Location / notes
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Address for the appointment, gate code, anything we should know"
          className={`${inputClass} min-h-[80px] resize-y`}
        />
      </div>

      <input type="hidden" name="_subject" value="New Sutro Detailing booking request" />
      <input type="hidden" name="estimated_total" value={`$${total}`} />

      {/* Live price recap — updates as size/service/add-ons change. */}
      <div className="rounded-md border border-leather-400/40 bg-graphite-2 p-5">
        <div className={`${labelClass} mb-3`}>Price breakdown</div>
        <div className="flex flex-col gap-2 text-sm text-ash">
          <div className="flex items-center justify-between">
            <span>
              {selectedTier.name}{" "}
              <span className="text-ash-dim">
                ({vehicleSize === "sedan" ? "Sedan / Small" : "SUV / XL / Truck"})
              </span>
            </span>
            <span className="font-mono">${tierPrice}</span>
          </div>
          <AnimatePresence initial={false}>
            {selectedAddonList.map((addon) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between overflow-hidden"
              >
                <span>{addon.name}</span>
                <span className="font-mono">+${addon.price}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-graphite-line pt-4">
          <span className="font-heading text-sm uppercase tracking-wide text-warm-white">
            Total
          </span>
          <motion.span
            key={total}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-2xl font-bold text-leather-200"
          >
            ${total}
          </motion.span>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-gradient-to-r from-leather-400 via-leather-200 to-leather-400 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-warm-white shadow-[0_0_22px_rgba(196,18,48,0.35)] transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send booking request"}
      </button>

      <div role="status" aria-live="polite">
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-sm border border-leather-300/50 bg-leather-500/10 px-4 py-3 text-sm text-warm-white"
            >
              Thanks! Your request is in — we&apos;ll text or email you
              shortly to confirm.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-sm border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-warm-white"
            >
              Something went wrong sending your request. Please call or text
              us directly at {contact.phone}.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
