"use client";

import Link from "next/link";

interface FormShellProps {
  typeLabel: string;
  step: 1 | 2 | 3;
  totalSteps?: number;
  stepTitle: string;
  stepKicker?: string;
  onBack?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  canProceed: boolean;
  isSubmitting?: boolean;
  children: React.ReactNode;
}

export default function FormShell({
  typeLabel,
  step,
  totalSteps = 3,
  stepTitle,
  stepKicker,
  onBack,
  onNext,
  onSubmit,
  canProceed,
  isSubmitting,
  children,
}: FormShellProps) {
  const dots = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <section className="bg-[#fcf7f1] min-h-[calc(100dvh-80px)] py-10 md:py-20 px-5 md:px-10">
      <div className="max-w-[720px] mx-auto">
        {/* Top bar: back + type label + progress */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="flex items-center gap-4">
            {step === 1 ? (
              <Link
                href="/contact"
                aria-label="Back to intent selection"
                className="group inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                <span className="text-[18px] leading-none inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1">&larr;</span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={onBack}
                aria-label="Previous step"
                className="group inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                <span className="text-[18px] leading-none inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1">&larr;</span>
              </button>
            )}
            <span className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/40">
              {typeLabel}
            </span>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {dots.map((d) => (
              <span
                key={d}
                className={`h-[6px] rounded-full transition-all duration-500 ${
                  d === step
                    ? "w-5 bg-[#2e5a88]"
                    : d < step
                    ? "w-[6px] bg-[#2e5a88]/60"
                    : "w-[6px] bg-[#1a1a1a]/15"
                }`}
                aria-hidden
              />
            ))}
            <span className="ml-2 font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/40">
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        {/* Step title */}
        <div className="mb-10 md:mb-14">
          {stepKicker && (
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-3">
              {stepKicker}
            </p>
          )}
          <h1 className="font-body text-[28px] md:text-[42px] text-[#2e5a88] leading-[1.1] font-normal">
            {stepTitle}
          </h1>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-8">{children}</div>

        {/* Bottom nav */}
        <div className="mt-12 md:mt-16 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 font-body text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors py-3"
            >
              <span>&larr;</span>
              Back
            </button>
          ) : (
            <span />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={onNext}
              disabled={!canProceed}
              className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white bg-[#1a1a1a] px-7 md:px-9 py-3.5 md:py-4 hover:bg-[#2e5a88] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a]"
            >
              Next step
              <span>&rarr;</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canProceed || isSubmitting}
              className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white bg-[#1a1a1a] px-7 md:px-9 py-3.5 md:py-4 hover:bg-[#2e5a88] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a]"
            >
              {isSubmitting ? "Sending..." : "Send the brief"}
              {!isSubmitting && <span>&rarr;</span>}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
