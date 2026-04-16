"use client";

import { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to Beehiiv / Mailchimp / Resend when service is chosen
    console.log("Newsletter signup:", email);
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20 pb-10 md:pb-12">
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
          <p className="font-body text-[14px] text-white italic text-center md:text-right">
            Thank you. First letter coming soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-4 md:gap-6 w-full md:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              className="flex-1 md:w-72 bg-transparent border-b border-white/30 focus:border-white outline-none py-2 font-body text-[16px] text-white placeholder:text-white/40 transition-colors duration-300"
            />
            <button
              type="submit"
              className="font-body text-[13px] font-medium text-white uppercase tracking-wider border-b border-white pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap py-2 cursor-pointer"
            >
              Join &rarr;
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
