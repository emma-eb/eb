"use client";

import { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError("Something went wrong. Please try again or email hello@emmabonnefous.com.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-4 md:pt-16 pb-8 md:pb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div className="text-center md:text-left">
          <p className="font-body text-[11px] font-medium text-white uppercase tracking-[0.15em]">
            From Athens
          </p>
          <p className="font-body text-[14px] text-white/60 mt-1">
            A letter from Greece, every season.
          </p>
        </div>

        {submitted ? (
          <p className="font-body text-[14px] text-white text-center md:text-right">
            Thank you. First letter coming soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 w-full md:w-auto"
          >
            <div className="flex items-center gap-6 md:gap-8 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                disabled={submitting}
                className="flex-1 md:w-72 bg-transparent border-b border-white/30 focus:border-white outline-none py-2 font-body text-[16px] text-white placeholder:text-white/40 transition-colors duration-300 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={submitting}
                className="font-body text-[13px] font-medium text-white uppercase tracking-wider border-b border-white pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap py-2 px-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Join →"}
              </button>
            </div>
            {error && (
              <p className="font-body text-[12px] text-white/80 text-center md:text-right">{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
