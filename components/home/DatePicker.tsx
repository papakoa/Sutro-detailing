"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type DatePickerProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
};

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function DatePicker({ name, value, onChange, invalid }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(() => startOfMonth(today));

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthLabel = viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const isCurrentMonthView =
    year === today.getFullYear() && month === today.getMonth();

  function labelForDay(day: number) {
    return new Date(year, month, day).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function goToPrevMonth() {
    setViewDate((prev) => {
      const next = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      const floor = startOfMonth(today);
      return next < floor ? floor : next;
    });
  }

  function goToNextMonth() {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={clsx(
          "flex w-full items-center justify-between gap-2 rounded-sm border bg-graphite px-4 py-3 text-left text-sm focus:outline focus:outline-2 focus:outline-leather-300",
          invalid ? "border-red-400/60" : "border-graphite-line"
        )}
      >
        <span className={value ? "text-warm-white" : "text-ash-dim/60"}>
          {value || "Select a date"}
        </span>
        <CalendarIcon className="h-4 w-4 shrink-0 text-ash-dim" />
      </button>

      <input type="hidden" name={name} value={value} />

      {open && (
        <div className="absolute z-20 mt-2 w-72 max-w-[90vw] rounded-md border border-graphite-line bg-graphite p-4 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevMonth}
              disabled={isCurrentMonthView}
              aria-label="Previous month"
              className={clsx(
                "rounded-sm p-1 transition-colors",
                isCurrentMonthView
                  ? "cursor-not-allowed text-ash-dim/25"
                  : "text-ash-dim hover:text-warm-white"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs uppercase tracking-wide text-ash-dim">
              {monthLabel}
            </span>
            <button
              type="button"
              onClick={goToNextMonth}
              aria-label="Next month"
              className="rounded-sm p-1 text-ash-dim transition-colors hover:text-warm-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {WEEKDAYS.map((d, i) => (
              <div
                key={i}
                className="text-center font-mono text-[10px] text-ash-dim"
              >
                {d}
              </div>
            ))}
            {Array.from({ length: firstWeekday }).map((_, i) => (
              <div key={`pad-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const cellDate = new Date(year, month, day);
              const isPast = cellDate < today;
              const label = labelForDay(day);
              const selected = value === label;
              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(label);
                    setOpen(false);
                  }}
                  className={clsx(
                    "rounded-sm py-1.5 text-center text-xs transition-colors",
                    isPast
                      ? "cursor-not-allowed text-ash-dim/25"
                      : selected
                        ? "bg-leather-300 text-warm-white"
                        : "text-ash hover:bg-leather-500/25 hover:text-warm-white"
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
