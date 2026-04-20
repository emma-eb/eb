"use client";

import { useState } from "react";

export default function Confirmation({ summary }: { summary?: string }) {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <section className="bg-[#fcf7f1] min-h-[calc(100dvh-80px)] flex items-center justify-center px-6 py-20 md:py-28">
      <div className="max-w-[620px] mx-auto text-center">
        <div className="w-10 h-[2px] bg-[#2e5a88] mx-auto mb-8" />
        <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-5">
          Received with thanks
        </p>
        <h1 className="font-body text-[28px] md:text-[42px] text-[#2e5a88] leading-[1.1] font-normal mb-8">
          Your brief is with Emma.
        </h1>
        <p className="font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 leading-[1.7] font-light max-w-[480px] mx-auto">
          You will hear back from us shortly.
        </p>
        <p className="font-body text-[13px] md:text-[14px] text-[#1a1a1a]/60 mt-10 italic font-light">
          &mdash; eb.
        </p>

        {summary && (
          <div className="mt-12 md:mt-16">
            <button
              type="button"
              onClick={() => setShowSummary((v) => !v)}
              className="group inline-flex items-center gap-2 font-body text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors min-h-[44px] px-2"
            >
              {showSummary ? "Hide my brief" : "View my brief"}
              <span className={`inline-block transition-transform duration-300 ease-out ${showSummary ? "rotate-180" : ""}`}>
                &darr;
              </span>
            </button>
            {showSummary && (
              <div className="bg-white border border-[#e8e4de] p-6 md:p-8 text-left mt-6 max-w-[560px] mx-auto">
                <pre className="whitespace-pre-wrap font-body text-[12px] md:text-[13px] text-[#1a1a1a]/75 leading-[1.7] font-light">
                  {summary}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
