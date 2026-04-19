"use client";

import Link from "next/link";

export default function Confirmation({ summary }: { summary?: string }) {
  return (
    <section className="bg-[#fcf7f1] min-h-[calc(100dvh-80px)] flex items-center justify-center px-6 py-20 md:py-28">
      <div className="max-w-[620px] mx-auto text-center">
        <div className="w-10 h-[2px] bg-[#2e5a88] mx-auto mb-8" />
        <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-5">
          Received with thanks
        </p>
        <h1 className="font-body text-[28px] md:text-[42px] text-[#2e5a88] leading-[1.1] font-normal mb-8" data-delay="80">
          Your brief is with Emma.
        </h1>
        <p className="font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 leading-[1.7] font-light max-w-[480px] mx-auto mb-8" data-delay="160">
          You will hear back from us within 48 hours. Every inquiry is read, personally.
        </p>
        {summary && (
          <div className="bg-white border border-[#e8e4de] p-6 md:p-8 text-left mt-6 max-w-[560px] mx-auto" data-delay="220">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/40 mb-3">
              A copy of your brief
            </p>
            <pre className="whitespace-pre-wrap font-body text-[12px] md:text-[13px] text-[#1a1a1a]/75 leading-[1.7] font-light">
              {summary}
            </pre>
          </div>
        )}
        <p className="font-body text-[13px] md:text-[14px] text-[#1a1a1a]/60 mt-10 italic font-light" data-delay="280">
          &mdash; eb.
        </p>
        <div className="mt-12 md:mt-16" data-delay="340">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-body text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors"
          >
            <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1">&larr;</span>
            Back to the studio
          </Link>
        </div>
      </div>
    </section>
  );
}
