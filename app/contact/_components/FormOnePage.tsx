"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface FormOnePageProps {
  typeLabel: string;
  title: string;
  intro: string;
  onSubmit: () => void;
  canSubmit: boolean;
  missing?: string[];
  isSubmitting?: boolean;
  children: ReactNode;
}

export default function FormOnePage({
  typeLabel,
  title,
  intro,
  onSubmit,
  canSubmit,
  missing = [],
  isSubmitting,
  children,
}: FormOnePageProps) {
  return (
    <section className="bg-[#fcf7f1] min-h-[calc(100dvh-80px)] pb-24 md:pb-32">
      {/* Header */}
      <div className="px-5 md:px-10 pt-10 md:pt-16">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/contact"
            aria-label="Back to intent selection"
            className="group inline-flex items-center gap-2 font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors mb-8 md:mb-10"
          >
            <span className="text-[15px] leading-none inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1">&larr;</span>
            All intents
          </Link>
          <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-4">
            {typeLabel}
          </p>
          <h1 className="font-body text-[32px] md:text-[52px] text-[#2e5a88] leading-[1.05] font-normal mb-6">
            {title}
          </h1>
          <p className="font-body text-[15px] md:text-[17px] text-[#1a1a1a]/70 leading-[1.7] font-light max-w-[560px]">
            {intro}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="px-5 md:px-10 mt-14 md:mt-20">
        <div className="max-w-[760px] mx-auto flex flex-col">{children}</div>
      </div>

      {/* Submit */}
      <div className="px-5 md:px-10 mt-16 md:mt-20">
        <div className="max-w-[760px] mx-auto">
          <button
            type="button"
            onClick={onSubmit}
            disabled={!canSubmit || isSubmitting}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white bg-[#1a1a1a] px-8 md:px-10 py-4 md:py-5 hover:bg-[#2e5a88] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a]"
          >
            {isSubmitting ? "Sending..." : "Share your vision"}
            {!isSubmitting && <span>&rarr;</span>}
          </button>
          {!canSubmit && missing.length > 0 && (
            <p className="mt-4 font-body text-[11px] md:text-[12px] text-[#1a1a1a]/55 italic font-light leading-[1.6]">
              Still needed to send: {missing.join(", ")}.
            </p>
          )}
          {!canSubmit && missing.length === 0 && (
            <p className="mt-4 font-body text-[11px] md:text-[12px] text-[#1a1a1a]/45 italic font-light">
              Fill the required fields to send.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

interface SectionProps {
  num?: string;
  title: string;
  children: ReactNode;
}

export function Section({ num, title, children }: SectionProps) {
  return (
    <div className="border-t border-[#1a1a1a]/10 pt-10 md:pt-14 pb-2 md:pb-4 first:border-t-0 first:pt-0">
      <div className="mb-8 md:mb-10">
        {num && (
          <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 mb-3">
            {num}
          </p>
        )}
        <h2 className="font-body text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.2] font-normal">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
}
