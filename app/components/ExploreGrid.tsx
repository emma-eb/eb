"use client";

import { useMemo } from "react";
import type { MoodId, ContentType } from "../data/types";
import { catalogue, exploreTabs } from "../data/catalogue";

interface ExploreGridProps {
  mood: MoodId | null;
  tab: string;
  onTabChange: (tab: string) => void;
  /** Limit number of cards (for homepage preview) */
  limit?: number;
  /** Hide the tab bar */
  hideTabs?: boolean;
}

export default function ExploreGrid({
  mood,
  tab,
  onTabChange,
  limit,
  hideTabs,
}: ExploreGridProps) {
  const filtered = useMemo(() => {
    let items = catalogue;

    // Filter by mood
    if (mood) {
      items = items.filter((item) => item.moods.includes(mood));
    }

    // Filter by tab/type
    const activeTab = exploreTabs.find((t) => t.id === tab);
    if (activeTab?.type) {
      items = items.filter((item) => item.type === activeTab.type);
    }

    // Apply limit
    if (limit) {
      items = items.slice(0, limit);
    }

    return items;
  }, [mood, tab, limit]);

  return (
    <div>
      {/* Tab bar */}
      {!hideTabs && (
        <div className="flex items-center gap-1 mb-10 overflow-x-auto scrollbar-hide pb-2 border-b border-[#e8e4de]">
          {exploreTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              className={`
                font-body text-xs tracking-[0.15em] uppercase whitespace-nowrap px-5 py-3
                transition-colors relative
                ${tab === t.id
                  ? "text-[#1a1a1a]"
                  : "text-[#999] hover:text-[#666]"
                }
              `}
            >
              {t.label}
              {/* Active underline */}
              {tab === t.id && (
                <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#2e5a88]" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <p className="font-body text-sm text-[#999] text-center py-16">
          No items match your selection.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item) => (
            <ExploreCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Individual Card ─── */

import type { CatalogueItem } from "../data/types";

function ExploreCard({ item }: { item: CatalogueItem }) {
  return (
    <a
      href={item.cta.href}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e4de]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Tags overlay */}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-[0.15em] uppercase bg-white/90 text-[#1a1a1a] px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Gradient for readability */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text content */}
      <div className="mt-4">
        <h3 className="font-heading text-xl text-[#1a1a1a] leading-tight">
          {item.title}
        </h3>
        <p className="font-body text-xs text-[#999] mt-1 tracking-wide">
          {item.subtitle}
        </p>
        <p className="font-body text-sm text-[#666] mt-2 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* CTA */}
        <span className="inline-block font-body text-xs tracking-[0.15em] uppercase text-[#2e5a88] mt-3 border-b border-[#2e5a88]/30 pb-px group-hover:border-[#2e5a88] transition-colors">
          {item.cta.label} →
        </span>
      </div>
    </a>
  );
}
