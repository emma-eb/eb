"use client";

import { useEffect, useState } from "react";
import FormShell from "./FormShell";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, Counter, Checkbox } from "./fields";
import { occasionTypes, howHeard, styles } from "../_data/options";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  occasion: string;
  otherOccasion: string;
  date: string;
  guests: number;
  location: string;
  style: string;
  vision: string;
  budget: string;
  howHeard: string;
  consent: boolean;
}

const EMPTY: Data = {
  name: "",
  email: "",
  phone: "",
  country: "",
  occasion: "",
  otherOccasion: "",
  date: "",
  guests: 2,
  location: "",
  style: "",
  vision: "",
  budget: "",
  howHeard: "",
  consent: false,
};

const locations = [
  "Athens",
  "Athens Riviera",
  "Cyclades",
  "Dodecanese",
  "Peloponnese",
  "Ionian",
  "Open to suggestions",
];

const STORAGE_KEY = "eb-contact-occasion";
const VISION_MIN = 60;

export default function OccasionForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<Data>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData({ ...EMPTY, ...JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const update = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const canStep1 = !!data.name.trim() && /\S+@\S+\.\S+/.test(data.email);
  const canStep2 = !!data.occasion && !!data.date.trim();
  const canStep3 = data.vision.trim().length >= VISION_MIN && !!data.budget.trim() && data.consent;

  const canProceed = step === 1 ? canStep1 : step === 2 ? canStep2 : canStep3;

  const buildSummary = () => {
    const occasion = data.occasion === "Other" && data.otherOccasion ? data.otherOccasion : data.occasion;
    return [
      `INQUIRY TYPE: Occasion`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      "OCCASION",
      `Type: ${occasion}`,
      `Date: ${data.date}`,
      `Guests: ${data.guests}`,
      `Location preference: ${data.location || "(not specified)"}`,
      `Style: ${data.style || "(not specified)"}`,
      `Indicative budget: ${data.budget}`,
      "",
      "VISION",
      data.vision,
      "",
      `Source: ${data.howHeard || "(not specified)"}`,
      `RGPD consent: ${data.consent ? "accepted" : "not accepted"}`,
    ].join("\n");
  };

  const handleSubmit = () => {
    const summary = buildSummary();
    setSubmittedSummary(summary);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    const subject = encodeURIComponent(`New Occasion inquiry — ${data.name}`);
    const body = encodeURIComponent(summary);
    window.open(`mailto:hello@emmabonnefous.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return <Confirmation summary={submittedSummary} />;
  }

  return (
    <FormShell
      typeLabel="Occasion"
      step={step}
      stepKicker={step === 1 ? "Step 1" : step === 2 ? "Step 2" : "Step 3"}
      stepTitle={step === 1 ? "Who is celebrating." : step === 2 ? "The moment." : "Your vision."}
      onBack={step > 1 ? () => setStep((s) => Math.max(1, (s - 1)) as 1 | 2 | 3) : undefined}
      onNext={step < 3 ? () => setStep((s) => Math.min(3, (s + 1)) as 1 | 2 | 3) : undefined}
      onSubmit={handleSubmit}
      canProceed={canProceed}
    >
      {step === 1 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Full name" required>
              <TextInput value={data.name} onChange={(v) => update("name", v)} placeholder="Your name" autoComplete="name" />
            </Field>
            <Field label="Email" required>
              <TextInput value={data.email} onChange={(v) => update("email", v)} placeholder="you@domain.com" type="email" autoComplete="email" />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Phone" hint="Helpful for quick follow-up">
              <TextInput value={data.phone} onChange={(v) => update("phone", v)} placeholder="+33 6 12 34 56 78" type="tel" autoComplete="tel" />
            </Field>
            <Field label="Country of residence">
              <TextInput value={data.country} onChange={(v) => update("country", v)} placeholder="France, USA, India..." autoComplete="country-name" />
            </Field>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <Field label="Type of occasion" required>
            <PillChoice options={occasionTypes} value={data.occasion} onChange={(v) => update("occasion", v)} name="occasion" />
          </Field>
          {data.occasion === "Other" && (
            <Field label="Tell us more">
              <TextInput value={data.otherOccasion} onChange={(v) => update("otherOccasion", v)} placeholder="The nature of the moment" />
            </Field>
          )}
          <Field label="Date" required hint="Exact date or a window.">
            <TextInput value={data.date} onChange={(v) => update("date", v)} placeholder="e.g. 18 August 2026, or late August" />
          </Field>
          <Field label="Number of guests">
            <Counter value={data.guests} onChange={(v) => update("guests", v)} min={1} max={200} />
          </Field>
          <Field label="Location preference">
            <PillChoice options={locations} value={data.location} onChange={(v) => update("location", v)} name="location" />
          </Field>
          <Field label="Style">
            <PillChoice options={styles} value={data.style} onChange={(v) => update("style", v)} name="style" />
          </Field>
        </>
      )}

      {step === 3 && (
        <>
          <Field label="Your vision" required hint={`The occasion, the feel, anything that matters. (min ${VISION_MIN} characters)`}>
            <TextArea value={data.vision} onChange={(v) => update("vision", v)} placeholder="The feel of the moment, who it is for, what it should leave behind..." rows={7} minLength={VISION_MIN} />
          </Field>
          <Field label="Indicative budget" required hint="Approximate total for the occasion (EUR). On request tier welcome.">
            <TextInput value={data.budget} onChange={(v) => update("budget", v)} placeholder="e.g. \u20AC15,000 or discuss privately" />
          </Field>
          <Field label="How did you find us">
            <PillChoice options={howHeard} value={data.howHeard} onChange={(v) => update("howHeard", v)} name="howHeard" />
          </Field>
          <div className="pt-2">
            <Checkbox checked={data.consent} onChange={(v) => update("consent", v)}>
              I agree to be contacted by the eb. team about this inquiry. My details remain private and are never shared with third parties without my consent.
            </Checkbox>
          </div>
        </>
      )}
    </FormShell>
  );
}
