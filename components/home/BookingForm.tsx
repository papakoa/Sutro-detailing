"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import clsx from "clsx";
import { addons, contact, services, type Addon, type ServiceOption } from "@/lib/data";
import { DatePicker } from "./DatePicker";

type Status = "idle" | "submitting" | "success" | "error";
type VehicleSize = "sedan" | "large";
type ServiceId = ServiceOption["id"];
type AddonId = Addon["id"];

type CarBooking = {
  uid: string;
  size: VehicleSize;
  services: Record<ServiceId, boolean>;
  addons: Record<AddonId, boolean>;
};

function createCar(uid: string): CarBooking {
  return {
    uid,
    size: "sedan",
    services: Object.fromEntries(services.map((s) => [s.id, false])) as Record<
      ServiceId,
      boolean
    >,
    addons: Object.fromEntries(addons.map((a) => [a.id, false])) as Record<
      AddonId,
      boolean
    >,
  };
}

type DateTimeEntry = {
  uid: string;
  date: string;
};

function carSubtotal(car: CarBooking): number {
  const serviceTotal = services.reduce((sum, s) => {
    if (!car.services[s.id]) return sum;
    return sum + (car.size === "sedan" ? s.sedanPrice : s.largePrice);
  }, 0);
  const addonTotal = addons.reduce(
    (sum, a) => sum + (car.addons[a.id] ? a.price : 0),
    0
  );
  return serviceTotal + addonTotal;
}

const inputClass =
  "rounded-sm border border-graphite-line bg-graphite px-4 py-3 text-sm text-warm-white placeholder:text-ash-dim/60 focus:outline focus:outline-2 focus:outline-leather-300";

const labelClass = "font-mono text-xs uppercase tracking-wide text-ash-dim";

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const nextCarNumber = useRef(1);
  const nextDateNumber = useRef(1);
  const [cars, setCars] = useState<CarBooking[]>([createCar("car-0")]);
  const [dateEntries, setDateEntries] = useState<DateTimeEntry[]>([
    { uid: "dt-0", date: "" },
  ]);
  const [dateError, setDateError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const grandTotal = cars.reduce((sum, car) => sum + carSubtotal(car), 0);

  function addCar() {
    const uid = `car-${nextCarNumber.current++}`;
    setCars((prev) => [...prev, createCar(uid)]);
  }

  function removeCar(uid: string) {
    setCars((prev) => (prev.length > 1 ? prev.filter((c) => c.uid !== uid) : prev));
  }

  function updateCarSize(uid: string, size: VehicleSize) {
    setCars((prev) => prev.map((c) => (c.uid === uid ? { ...c, size } : c)));
  }

  function toggleService(uid: string, serviceId: ServiceId) {
    setCars((prev) =>
      prev.map((c) =>
        c.uid === uid
          ? { ...c, services: { ...c.services, [serviceId]: !c.services[serviceId] } }
          : c
      )
    );
  }

  function toggleAddon(uid: string, addonId: AddonId) {
    setCars((prev) =>
      prev.map((c) =>
        c.uid === uid ? { ...c, addons: { ...c.addons, [addonId]: !c.addons[addonId] } } : c
      )
    );
  }

  function addDateEntry() {
    const uid = `dt-${nextDateNumber.current++}`;
    setDateEntries((prev) => [...prev, { uid, date: "" }]);
  }

  function removeDateEntry(uid: string) {
    setDateEntries((prev) => (prev.length > 1 ? prev.filter((d) => d.uid !== uid) : prev));
  }

  function updateDateEntry(uid: string, date: string) {
    setDateEntries((prev) => prev.map((d) => (d.uid === uid ? { ...d, date } : d)));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    if (!dateEntries[0].date) {
      setDateError(true);
      return;
    }
    setDateError(false);
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
        nextCarNumber.current = 1;
        nextDateNumber.current = 1;
        setCars([createCar("car-0")]);
        setDateEntries([{ uid: "dt-0", date: "" }]);
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

      <AnimatePresence initial={false}>
        {cars.map((car, index) => (
          <motion.div
            key={car.uid}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="stitched rounded-md border border-graphite-line bg-graphite-2 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-heading text-sm uppercase tracking-wide text-warm-white">
                  Car {index + 1}
                </span>
                {cars.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCar(car.uid)}
                    aria-label={`Remove car ${index + 1}`}
                    className="text-ash-dim transition-colors hover:text-leather-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="mb-4 flex flex-col gap-1.5">
                <label htmlFor={`${car.uid}-vehicle`} className={labelClass}>
                  Vehicle (year / make / model)
                </label>
                <input
                  id={`${car.uid}-vehicle`}
                  name={`car_${index + 1}_vehicle`}
                  type="text"
                  placeholder="e.g. 2019 Honda Civic"
                  required
                  className={inputClass}
                />
              </div>

              <div className="mb-4 flex flex-col gap-1.5">
                <label htmlFor={`${car.uid}-size`} className={labelClass}>
                  Vehicle size
                </label>
                <select
                  id={`${car.uid}-size`}
                  name={`car_${index + 1}_vehicle_size`}
                  value={car.size}
                  onChange={(e) => updateCarSize(car.uid, e.target.value as VehicleSize)}
                  className={inputClass}
                >
                  <option value="sedan">Sedan / Small</option>
                  <option value="large">SUV / XL / Truck</option>
                </select>
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <span className={labelClass}>
                  Services{" "}
                  <span className="normal-case text-ash-dim/70">
                    (pick any combination)
                  </span>
                </span>
                <div className="grid gap-2 sm:grid-cols-3">
                  {services.map((service) => {
                    const price =
                      car.size === "sedan" ? service.sedanPrice : service.largePrice;
                    const checked = car.services[service.id];
                    return (
                      <label
                        key={service.id}
                        className={clsx(
                          "flex cursor-pointer items-center justify-between gap-2 rounded-md border px-3 py-2.5 text-sm transition-colors",
                          checked
                            ? "border-leather-300 bg-leather-500/15 text-warm-white"
                            : "border-graphite-line text-ash hover:border-leather-400/50"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name={`car_${index + 1}_${service.id}`}
                            value={`${service.name} — $${price}`}
                            checked={checked}
                            onChange={() => toggleService(car.uid, service.id)}
                            className="h-4 w-4"
                          />
                          {service.name}
                        </span>
                        <span className="font-mono text-xs text-ash-dim">${price}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className={labelClass}>Add-ons</span>
                <div className="grid gap-2 sm:grid-cols-2">
                  {addons.map((addon) => {
                    const checked = car.addons[addon.id];
                    return (
                      <label
                        key={addon.id}
                        className="flex items-center gap-2 text-sm text-ash"
                      >
                        <input
                          type="checkbox"
                          name={`car_${index + 1}_addon_${addon.id}`}
                          value={`${addon.name} (+$${addon.price})`}
                          checked={checked}
                          onChange={() => toggleAddon(car.uid, addon.id)}
                          className="h-4 w-4"
                        />
                        {addon.name} (+${addon.price})
                      </label>
                    );
                  })}
                </div>
              </div>

              {cars.length > 1 && (
                <div className="mt-4 flex items-center justify-between border-t border-graphite-line pt-3 text-sm">
                  <span className="text-ash-dim">Car {index + 1} subtotal</span>
                  <span className="font-mono font-bold text-leather-200">
                    ${carSubtotal(car)}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button
        type="button"
        onClick={addCar}
        className="flex items-center justify-center gap-2 rounded-md border border-dashed border-leather-400/50 px-4 py-3 font-mono text-xs uppercase tracking-widest text-ash-dim transition-colors hover:border-leather-300 hover:text-warm-white"
      >
        <Plus className="h-4 w-4" /> Add another car
      </button>

      <div className="flex flex-col gap-3">
        <span className={labelClass}>
          Preferred date &amp; time{" "}
          <span className="normal-case text-ash-dim/70">
            (add more if you&apos;re flexible)
          </span>
        </span>

        <AnimatePresence initial={false}>
          {dateEntries.map((entry, index) => (
            <motion.div
              key={entry.uid}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-end gap-3">
                <div className="grid flex-1 gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-ash-dim/70">
                      Date{dateEntries.length > 1 ? ` — option ${index + 1}` : ""}
                    </span>
                    <DatePicker
                      name={`preferred_date_${index + 1}`}
                      value={entry.date}
                      onChange={(date) => {
                        updateDateEntry(entry.uid, date);
                        if (index === 0 && date) setDateError(false);
                      }}
                      invalid={index === 0 && dateError}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-ash-dim/70">
                      Time
                    </span>
                    <input
                      name={`preferred_time_${index + 1}`}
                      type="time"
                      className={inputClass}
                    />
                  </div>
                </div>
                {dateEntries.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDateEntry(entry.uid)}
                    aria-label={`Remove date option ${index + 1}`}
                    className="mb-2.5 text-ash-dim transition-colors hover:text-leather-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {dateError && (
          <p className="text-xs text-red-400">
            Please select at least one preferred date.
          </p>
        )}

        <button
          type="button"
          onClick={addDateEntry}
          className="flex items-center justify-center gap-2 rounded-md border border-dashed border-leather-400/50 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-ash-dim transition-colors hover:border-leather-300 hover:text-warm-white"
        >
          <Plus className="h-4 w-4" /> Add another date/time
        </button>
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
      <input type="hidden" name="estimated_total" value={`$${grandTotal}`} />

      {/* Live price recap — updates as cars/services/add-ons change. */}
      <div className="rounded-md border border-leather-400/40 bg-graphite-2 p-5">
        <div className={`${labelClass} mb-3`}>Price breakdown</div>

        {grandTotal === 0 ? (
          <p className="text-sm text-ash-dim">
            Select at least one service to see pricing.
          </p>
        ) : (
          <div className="flex flex-col gap-3 text-sm text-ash">
            {cars.map((car, index) => {
              const selectedServices = services.filter((s) => car.services[s.id]);
              const selectedAddons = addons.filter((a) => car.addons[a.id]);
              if (selectedServices.length === 0 && selectedAddons.length === 0) {
                return null;
              }
              return (
                <div
                  key={car.uid}
                  className={
                    cars.length > 1
                      ? "border-b border-graphite-line pb-3 last:border-b-0 last:pb-0"
                      : undefined
                  }
                >
                  {cars.length > 1 && (
                    <div className="mb-1.5 font-mono text-xs uppercase tracking-wide text-ash-dim">
                      Car {index + 1}
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    {selectedServices.map((s) => (
                      <div key={s.id} className="flex items-center justify-between">
                        <span>
                          {s.name}{" "}
                          <span className="text-ash-dim">
                            ({car.size === "sedan" ? "Sedan/Small" : "SUV/XL/Truck"})
                          </span>
                        </span>
                        <span className="font-mono">
                          ${car.size === "sedan" ? s.sedanPrice : s.largePrice}
                        </span>
                      </div>
                    ))}
                    {selectedAddons.map((a) => (
                      <div key={a.id} className="flex items-center justify-between">
                        <span>{a.name}</span>
                        <span className="font-mono">+${a.price}</span>
                      </div>
                    ))}
                  </div>
                  {cars.length > 1 && (
                    <div className="mt-1.5 flex items-center justify-between text-xs text-ash-dim">
                      <span>Subtotal</span>
                      <span className="font-mono">${carSubtotal(car)}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-graphite-line pt-4">
          <span className="font-heading text-sm uppercase tracking-wide text-warm-white">
            Total
          </span>
          <motion.span
            key={grandTotal}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-2xl font-bold text-leather-200"
          >
            ${grandTotal}
          </motion.span>
        </div>
      </div>

      <p className="text-center font-mono text-xs uppercase tracking-wide text-leather-200">
        We accept cash, checks, Venmo or Zelle
      </p>

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
