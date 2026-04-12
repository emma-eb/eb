"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    text: "What brings you\nto Greece?",
    options: [
      { label: "A private journey", sub: "Islands, villas, bespoke itineraries", value: "journey" },
      { label: "A celebration", sub: "Proposal, wedding, or milestone", value: "celebration" },
      { label: "A brand or content trip", sub: "Production, influencer, press", value: "brand" },
    ],
  },
  {
    text: "Who is travelling?",
    options: [
      { label: "Just the two of us", sub: "Or solo", value: "couple" },
      { label: "Family or small group", sub: "Up to 10 people", value: "group" },
      { label: "A larger gathering", sub: "Events, retreats, celebrations", value: "large" },
    ],
  },
  {
    text: "When are you\nthinking of going?",
    options: [
      { label: "This season", sub: "Ready to move forward", value: "soon" },
      { label: "In the next year", sub: "Time to plan properly", value: "year" },
      { label: "Still exploring", sub: "No rush, just dreaming", value: "exploring" },
    ],
  },
];

function getDestination(answers: string[]): string {
  const [why, who] = answers;
  if (why === "brand") return "/influencer-production";
  if (why === "celebration" || who === "large") return "/experiences";
  return "/journeys";
}

interface Props {
  onClose: () => void;
}

export default function JourneyQuiz({ onClose }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSelect = (value: string) => {
    if (selected) return;
    setSelected(value);
    const newAnswers = [...answers, value];

    setTimeout(() => {
      if (step === questions.length - 1) {
        setPhase("out");
        setTimeout(() => {
          router.push(getDestination(newAnswers));
          onClose();
        }, 400);
      } else {
        setPhase("out");
        setTimeout(() => {
          setAnswers(newAnswers);
          setStep(step + 1);
          setSelected(null);
          setPhase("in");
        }, 350);
      }
    }, 300);
  };

  const handleBack = () => {
    if (selected) return;
    setPhase("out");
    setTimeout(() => {
      setAnswers(answers.slice(0, -1));
      setStep(step - 1);
      setSelected(null);
      setPhase("in");
    }, 300);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const q = questions[step];
  const progressPct = (step / questions.length) * 100;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-[#111] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10">
        <div
          className="h-full bg-[#a7d1c9] transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-7">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/20">
          {step + 1}&nbsp;/&nbsp;{questions.length}
        </p>
        <button
          onClick={handleClose}
          className="font-body text-xs tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors"
        >
          Close
        </button>
      </div>

      {/* Question + options */}
      <div
        className={`flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-36 transition-all duration-350 ${
          phase === "out" ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <h2 className="font-heading text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.95] text-white mb-14 whitespace-pre-line">
          {q.text}
        </h2>

        <div className="flex flex-col gap-3 max-w-2xl">
          {q.options.map((opt) => {
            const isSelected = selected === opt.value;
            const isDimmed = selected && !isSelected;
            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`group text-left px-8 py-6 border transition-all duration-200 ${
                  isSelected
                    ? "border-white bg-white/10"
                    : isDimmed
                    ? "border-white/8 opacity-40"
                    : "border-white/15 hover:border-white/45 hover:bg-white/5"
                }`}
              >
                <p className={`font-heading text-2xl md:text-3xl leading-tight mb-1 transition-colors ${
                  isSelected ? "text-white" : "text-white group-hover:text-white"
                }`}>
                  {opt.label}
                </p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-white/35 group-hover:text-white/55 transition-colors">
                  {opt.sub}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Back */}
      <div className="px-8 md:px-20 pb-10 h-12 flex items-center">
        {step > 0 && !selected && (
          <button
            onClick={handleBack}
            className="font-body text-xs tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
