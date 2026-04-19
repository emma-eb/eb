"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import type { MoodId } from "../data/types";
import { moods, catalogue } from "../data/catalogue";

interface DiscoveryFlowProps {
  initialMood?: MoodId | null;
}

export default function DiscoveryFlow({ initialMood }: DiscoveryFlowProps) {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(initialMood ?? null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showResults, setShowResults] = useState(!!initialMood);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = selectedMood
    ? catalogue.filter((item) => item.moods.includes(selectedMood))
    : [];

  const currentMoodData = selectedMood ? moods.find((m) => m.id === selectedMood) : null;

  const handleSelect = (id: MoodId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedMood(id);

    setTimeout(() => {
      setShowResults(true);
      setIsTransitioning(false);
    }, 600);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 900);
  };

  const handleBack = () => {
    setShowResults(false);
    setTimeout(() => {
      setSelectedMood(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  };

  const handleCardClick = (href: string) => {
    if (href && href !== "#") {
      router.push(href);
    }
  };

  /* ─── NO MOOD SELECTED — Show grid ─── */
  if (!selectedMood) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {moods.map((mood, i) => (
          <button
            key={mood.id}
            onClick={() => handleSelect(mood.id)}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm animate-fade-in cursor-pointer"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <img
              src={mood.image}
              alt={mood.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-[#2e5a88]/0 group-hover:bg-[#2e5a88]/10 transition-colors duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-left">
              <h3 className="font-heading text-xl md:text-2xl text-white leading-tight">
                {mood.name}
              </h3>
              <p className="font-body text-[10px] md:text-xs text-white/50 mt-1.5 tracking-wide leading-relaxed">
                {mood.subtitle}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 border border-white/40 px-4 py-2 group-hover:bg-white group-hover:border-white transition-all duration-300">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white group-hover:text-[#1a1a1a] transition-colors duration-300">
                  Explore
                </span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-white group-hover:text-[#1a1a1a] transition-colors duration-300">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  /* ─── MOOD SELECTED — Cinematic hero + results ─── */
  return (
    <div>
      {/* ── Cinematic Hero ── */}
      <div
        className={`
          relative overflow-hidden rounded-sm transition-all duration-700 ease-out
          ${showResults ? "h-[50vh] md:h-[60vh]" : "h-[70vh] md:h-[80vh]"}
        `}
      >
        <img
          src={currentMoodData?.image}
          alt={currentMoodData?.name}
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 z-10 flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          All moods
        </button>

        {/* Mood title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mb-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {results.length} experience{results.length > 1 ? "s" : ""}
          </p>
          <h2 className="font-heading text-[clamp(3rem,10vw,8rem)] leading-[0.85] text-white animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            {currentMoodData?.name}
          </h2>
          <p className="font-body text-sm md:text-base text-white/50 mt-4 max-w-md animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            {currentMoodData?.subtitle}
          </p>
        </div>

        {/* Scroll indicator */}
        {showResults && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/30">
              <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        )}
      </div>

      {/* ── Results Grid ── */}
      <div
        ref={resultsRef}
        className={`
          mt-12 md:mt-16 transition-all duration-500
          ${showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {results.map((item, i) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.cta.href)}
              className="group block animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${600 + i * 100}ms`, animationFillMode: "both" }}
            >
              {/* Card image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e4de]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="font-body text-[10px] tracking-[0.15em] uppercase bg-white/90 backdrop-blur-sm text-[#1a1a1a] px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA always visible */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase bg-white/90 backdrop-blur-sm text-[#1a1a1a] px-5 py-2.5 group-hover:bg-white transition-colors duration-300">
                    {item.cta.label}
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Card text */}
              <div className="mt-4">
                <h3 className="font-heading text-xl md:text-2xl text-[#1a1a1a] leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-[#999] mt-1.5 tracking-wide">
                  {item.subtitle}
                </p>
                <p className="font-body text-sm text-[#666] mt-2 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="h-px bg-[#e8e4de] mb-12" />
          <p className="font-body text-sm text-[#888] mb-2">
            Nothing here that fits?
          </p>
          <p className="font-body text-xs text-[#bbb] mb-8">
            Every journey can be designed from scratch.
          </p>
          <a
            href="/contact?type=journey"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
