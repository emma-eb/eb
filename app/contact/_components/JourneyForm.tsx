"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FormShell from "./FormShell";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, PillMulti, MoodGrid, Counter, Checkbox } from "./fields";
import {
  journeyBudgets,
  moods as moodsData,
  mustHaves as mustHavesData,
  accommodationStyles,
  paces,
  lengths,
  howHeard,
} from "../_data/options";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  dates: string;
  flexibility: string;
  adults: number;
  kids: number;
  kidsAges: string;
  length: string;
  moods: string[];
  pace: string;
  accommodation: string;
  mustHaves: string[];
  personalization: string;
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
  dates: "",
  flexibility: "",
  adults: 2,
  kids: 0,
  kidsAges: "",
  length: "",
  moods: [],
  pace: "",
  accommodation: "",
  mustHaves: [],
  personalization: "",
  vision: "",
  budget: "",
  howHeard: "",
  consent: false,
};

const STORAGE_KEY = "eb-contact-journey";
const VISION_MIN = 60;

export default function JourneyForm() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get("journey");
  const isScratch = !journeySlug;
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
  const canStep2 = isScratch
    ? !!data.dates.trim() && !!data.length && data.moods.length > 0 && !!data.accommodation
    : !!data.dates.trim();
  const canStep3 = data.vision.trim().length >= VISION_MIN && !!data.budget && data.consent;

  const canProceed = step === 1 ? canStep1 : step === 2 ? canStep2 : canStep3;

  const buildSummary = () => {
    const lines = [
      `INQUIRY TYPE: Private Journey${isScratch ? " — From scratch" : ` — ${journeySlug}`}`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      "JOURNEY",
      `Dates: ${data.dates}${data.flexibility ? ` (flex: ${data.flexibility})` : ""}`,
      `Party: ${data.adults} adults, ${data.kids} kids${data.kids > 0 && data.kidsAges ? ` (ages: ${data.kidsAges})` : ""}`,
    ];
    if (isScratch) {
      lines.push(
        `Length: ${data.length}`,
        `Moods: ${data.moods.map((id) => moodsData.find((m) => m.id === id)?.label || id).join(", ")}`,
        `Pace: ${data.pace || "(not specified)"}`,
        `Accommodation: ${data.accommodation}`,
        `Must-haves: ${data.mustHaves.join(", ") || "(none flagged)"}`,
      );
    } else {
      lines.push(`Personalization: ${data.personalization || "(none)"}`);
    }
    lines.push(
      "",
      `Budget band: ${data.budget}`,
      "",
      "VISION",
      data.vision,
      "",
      `Source: ${data.howHeard || "(not specified)"}`,
      `RGPD consent: ${data.consent ? "accepted" : "not accepted"}`,
    );
    return lines.join("\n");
  };

  const handleSubmit = () => {
    const summary = buildSummary();
    setSubmittedSummary(summary);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    const subject = encodeURIComponent(`New Journey inquiry — ${data.name}`);
    const body = encodeURIComponent(summary);
    window.open(`mailto:hello@emmabonnefous.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return <Confirmation summary={submittedSummary} />;
  }

  return (
    <FormShell
      typeLabel={isScratch ? "Private Journey \u00b7 From scratch" : `Private Journey \u00b7 ${journeySlug}`}
      step={step}
      stepKicker={step === 1 ? "Step 1" : step === 2 ? "Step 2" : "Step 3"}
      stepTitle={step === 1 ? "Who is traveling." : step === 2 ? "The journey." : "Your vision."}
      onBack={step > 1 ? () => setStep((s) => Math.max(1, (s - 1) as 1 | 2 | 3) as 1 | 2 | 3) : undefined}
      onNext={step < 3 ? () => setStep((s) => Math.min(3, (s + 1) as 1 | 2 | 3) as 1 | 2 | 3) : undefined}
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

      {step === 2 && isScratch && (
        <>
          <Field label="Travel dates" required hint="Exact dates or a window. Flexible is welcome.">
            <TextInput value={data.dates} onChange={(v) => update("dates", v)} placeholder="e.g. Early June 2026, or 12 to 22 June" />
          </Field>
          <Field label="Flexibility on dates">
            <TextInput value={data.flexibility} onChange={(v) => update("flexibility", v)} placeholder="None, 1 week either side, open..." />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Adults">
              <Counter value={data.adults} onChange={(v) => update("adults", v)} min={1} max={30} />
            </Field>
            <Field label="Kids">
              <Counter value={data.kids} onChange={(v) => update("kids", v)} min={0} max={15} />
            </Field>
          </div>
          {data.kids > 0 && (
            <Field label="Kids' ages">
              <TextInput value={data.kidsAges} onChange={(v) => update("kidsAges", v)} placeholder="e.g. 4, 7, 11" />
            </Field>
          )}
          <Field label="Length" required>
            <PillChoice options={lengths} value={data.length} onChange={(v) => update("length", v)} name="length" />
          </Field>
          <Field label="Moods" required hint="Pick as many as resonate. We design around them.">
            <MoodGrid moods={moodsData} values={data.moods} onChange={(v) => update("moods", v)} />
          </Field>
          <Field label="Pace">
            <PillChoice options={paces} value={data.pace} onChange={(v) => update("pace", v)} name="pace" />
          </Field>
          <Field label="Accommodation style" required>
            <PillChoice options={accommodationStyles} value={data.accommodation} onChange={(v) => update("accommodation", v)} name="accommodation" />
          </Field>
          <Field label="Must-haves" hint="Optional, but specific needs help us plan.">
            <PillMulti options={mustHavesData} values={data.mustHaves} onChange={(v) => update("mustHaves", v)} />
          </Field>
        </>
      )}

      {step === 2 && !isScratch && (
        <>
          <Field label="Travel dates" required hint="Exact dates or a window. Flexible is welcome.">
            <TextInput value={data.dates} onChange={(v) => update("dates", v)} placeholder="e.g. Early June 2026, or 12 to 22 June" />
          </Field>
          <Field label="Flexibility on dates">
            <TextInput value={data.flexibility} onChange={(v) => update("flexibility", v)} placeholder="None, 1 week either side, open..." />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Adults">
              <Counter value={data.adults} onChange={(v) => update("adults", v)} min={1} max={30} />
            </Field>
            <Field label="Kids">
              <Counter value={data.kids} onChange={(v) => update("kids", v)} min={0} max={15} />
            </Field>
          </div>
          {data.kids > 0 && (
            <Field label="Kids' ages">
              <TextInput value={data.kidsAges} onChange={(v) => update("kidsAges", v)} placeholder="e.g. 4, 7, 11" />
            </Field>
          )}
          <Field label="Must-haves">
            <PillMulti options={mustHavesData} values={data.mustHaves} onChange={(v) => update("mustHaves", v)} />
          </Field>
          <Field label="Personalization requests" hint="Anything you want to adjust from the published route.">
            <TextArea value={data.personalization} onChange={(v) => update("personalization", v)} placeholder="Extensions, substitutions, specific wishes..." rows={5} />
          </Field>
        </>
      )}

      {step === 3 && (
        <>
          <Field label="Your vision" required hint={`In a few sentences, tell us who you are and what you dream of. (min ${VISION_MIN} characters)`}>
            <TextArea value={data.vision} onChange={(v) => update("vision", v)} placeholder="What matters to you, who this journey is for, anything else we should know..." rows={7} minLength={VISION_MIN} />
          </Field>
          <Field label="Budget band" required hint="Indicative. Helps us propose the right scale.">
            <PillChoice options={journeyBudgets} value={data.budget} onChange={(v) => update("budget", v)} name="budget" />
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
