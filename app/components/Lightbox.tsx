"use client";

import { useEffect, useRef, useState } from "react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const touchStartX = useRef<number | null>(null);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || index === null) return;
    setImgLoading(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, index, images.length, onClose, onNavigate]);

  if (!isOpen || index === null) return null;

  const current = images[index];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) onNavigate((index + 1) % images.length);
      else onNavigate((index - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}`}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close gallery"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 font-body text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-white/55 font-light">
        {index + 1} / {images.length}
      </div>

      {/* Previous button (desktop, also tap target on mobile) */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          aria-label="Previous image"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center text-white/55 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          aria-label="Next image"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center text-white/55 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center px-12 md:px-20 py-16 md:py-20"
        onClick={(e) => e.stopPropagation()}
      >
        {imgLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
          </div>
        )}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          onLoad={() => setImgLoading(false)}
          className="max-w-full max-h-full object-contain transition-opacity duration-300"
          style={{ opacity: imgLoading ? 0 : 1 }}
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10 text-center px-12 pointer-events-none">
        <p className="font-body text-[11px] md:text-[12px] text-white/55 font-light italic leading-[1.5] max-w-[640px] mx-auto">
          {current.alt}
        </p>
      </div>
    </div>
  );
}
