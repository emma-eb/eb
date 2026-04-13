"use client";

import { useRef, useState, useEffect } from "react";
import type { MoodId } from "../data/types";
import { moods } from "../data/catalogue";

interface MoodCardsProps {
  selected: MoodId | null;
  onSelect: (id: MoodId | null) => void;
  /** Compact mode for homepage (smaller cards) */
  compact?: boolean;
}

export default function MoodCards({ selected, onSelect, compact }: MoodCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const cardH = compact ? "h-[240px] md:h-[300px]" : "h-[320px] md:h-[420px]";
  const cardW = compact ? "w-[160px] md:w-[200px]" : "w-[200px] md:w-[260px]";

  return (
    <div className="relative group">
      {/* Scroll shadow indicators */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      )}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      )}

      {/* Arrow buttons — desktop only */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white/90 border border-[#e8e4de] rounded-full shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#1a1a1a" strokeWidth="1.5" /></svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white/90 border border-[#e8e4de] rounded-full shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#1a1a1a" strokeWidth="1.5" /></svg>
        </button>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-8 md:px-16 pb-4 -mx-8 md:-mx-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {moods.map((mood) => {
          const active = selected === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => onSelect(active ? null : mood.id)}
              className={`
                relative flex-shrink-0 ${cardW} ${cardH} rounded-sm overflow-hidden snap-start
                transition-all duration-300 ease-out
                ${active
                  ? "ring-2 ring-[#2e5a88] ring-offset-2 scale-[1.02]"
                  : "hover:scale-[1.01] hover:shadow-lg"
                }
              `}
            >
              {/* Background image */}
              <img
                src={mood.image}
                alt={mood.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                style={{ transform: active ? "scale(1.05)" : "scale(1)" }}
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
                <h3 className={`font-heading ${compact ? "text-lg" : "text-xl md:text-2xl"} text-white leading-tight`}>
                  {mood.name}
                </h3>
                <p className={`font-body ${compact ? "text-[10px]" : "text-xs"} text-white/60 mt-1 tracking-wide`}>
                  {mood.subtitle}
                </p>
              </div>

              {/* Active indicator dot */}
              {active && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
