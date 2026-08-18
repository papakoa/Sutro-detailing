"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact, pricingTiers } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";
type VehicleSize = "sedan" | "large";

const inputClass =
  "rounded-sm border border-graphite-line bg-graphite px-4 py-3 text-sm text-warm-white placeholder:text-platinum-dim/60 focus:outline focus:outline-2 focus:outline-silver-300";

const labelClass = "font-mono text-xs uppercase tracking-wide text-platinum-dim";

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>("sedan");
  const [status, setStatus] = useState<Status>("idle");

  const serviceOptions = pricingTiers.map((tier) => {
    const price = vehicleSize === "sedan" ? tier.sedanPrice : tier.largePrice;
    const label = `${tier.name} — $${price}`;
    return { label, value: label };
  });

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
      className="flex flex-col gap-5 rounded-md border border-graphite-line bg-graphite p-8"
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
          <select id="service" name="service" className={inputClass}>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className={labelClass}>Add-ons</span>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-2 text-sm text-platinum">
            <input
              type="checkbox"
              name="addon_pet_hair"
              value="Pet hair removal (+$30)"
              className="h-4 w-4"
            />
            Pet hair removal (+$30)
          </label>
          <label className="flex items-center gap-2 text-sm text-platinum">
            <input
              type="checkbox"
              name="addon_heavy_soil"
              value="Heavy Soil / Extra Mess Fee (+$30)"
              className="h-4 w-4"
            />
            Heavy Soil / Extra Mess Fee (+$30)
          </label>
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-gradient-to-r from-silver-100 via-silver-300 to-silver-100 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-graphite transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
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
              className="rounded-sm border border-silver-300/50 bg-silver-500/10 px-4 py-3 text-sm text-warm-white"
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
