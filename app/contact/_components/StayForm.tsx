"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FormShell from "./FormShell";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, PillMulti, Counter, Checkbox } from "./fields";
import {
  villaBudgets,
  mustHaves as mustHavesData,
  howHeard,
  stayInterest,
} from "../_data/options";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  villa: string;
  dates: string;
  flexibility: string;
  adults: number;
  kids: number;
  kidsAges: string;
  bedrooms: number;
  services: string[];
  vision: string;
  budget: string;
  yachtBudget: string;
  howHeard: string;
  consent: boolean;
}

const EMPTY: Data = {
  name: "",
  email: "",
  phone: "",
  country: "",
  interest: "",
  villa: "",
  dates: "",
  flexibility: "",
  adults: 2,
  kids: 0,
  kidsAges: "",
  bedrooms: 2,
  services: [],
  vision: "",
  budget: "",
  yachtBudget: "",
  howHeard: "",
  consent: false,
};

const STORAGE_KEY = "eb-contact-stay";
const VISION_MIN = 60;

export default function StayForm() {
  const searchParams = useSearchParams();
  const villaSlug = searchParams.get("villa");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<Data>(() => ({ ...EMPTY, villa: villaSlug || "", interest: villaSlug ? "Villa" : "" }));
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData((d) => ({ ...d, ...JSON.parse(saved) }));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const update = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const canStep1 = !!data.name.trim() && /\S+@\S+\.\S+/.test(data.email);
  const canStep2 = !!data.interest && !!data.dates.trim();
  const showVillaBudget = data.interest === "Villa";
  const canStep3 =
    data.vision.trim().length >= VISION_MIN &&
    (showVillaBudget ? !!data.budget : !!data.yachtBudget.trim()) &&
    data.consent;

  const canProceed = step === 1 ? canStep1 : step === 2 ? canStep2 : canStep3;

  const buildSummary = () => {
    const lines = [
      `INQUIRY TYPE: Stay (${data.interest})${villaSlug ? ` — ${villaSlug}` : ""}`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      "STAY",
      `Interest: ${data.interest}`,
    ];
    if (data.villa) lines.push(`Villa of interest: ${data.villa}`);
    lines.push(
      `Dates: ${data.dates}${data.flexibility ? ` (flex: ${data.flexibility})` : ""}`,
      `Party: ${data.adults} adults, ${data.kids} kids${data.kids > 0 && data.kidsAges ? ` (ages: ${data.kidsAges})` : ""}`,
    );
    if (data.interest !== "Yacht") {
      lines.push(`Bedrooms min: ${data.bedrooms}`);
    }
    lines.push(`Services must-have: ${data.services.join(", ") || "(none flagged)"}`);
    lines.push(`Budget: ${showVillaBudget ? data.budget : data.yachtBudget}`);
    lines.push(
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
    const subject = encodeURIComponent(`New Stay inquiry — ${data.name}`);
    const body = encodeURIComponent(summary);
    window.open(`mailto:hello@emmabonnefous.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return <Confirmation summary={submittedSummary} />;
  }

  return (
    <FormShell
      typeLabel={`Villa or Yacht${villaSlug ? ` \u00b7 ${villaSlug}` : ""}`}
      step={step}
      stepKicker={step === 1 ? "Step 1" : step === 2 ? "Step 2" : "Step 3"}
      stepTitle={step === 1 ? "Who is staying." : step === 2 ? "The stay." : "Your vision."}
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
          <Field label="What are you looking for" required>
            <PillChoice options={stayInterest} value={data.interest} onChange={(v) => update("interest", v)} name="interest" />
          </Field>
          {villaSlug && (
            <Field label="Villa of interest" hint="Locked from your selection. Leave blank if you changed your mind.">
              <TextInput value={data.villa} onChange={(v) => update("villa", v)} placeholder="Villa slug" />
            </Field>
          )}
          <Field label="Travel dates" required hint="Exact dates or a window. Flexible is welcome.">
            <TextInput value={data.dates} onChange={(v) => update("dates", v)} placeholder="e.g. 12 to 22 July 2026" />
          </Field>
          <Field label="Flexibility on dates">
            <TextInput value={data.flexibility} onChange={(v) => update("flexibility", v)} placeholder="None, 1 week either side..." />
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
          {data.interest !== "Yacht" && (
            <Field label="Bedrooms (minimum)">
              <Counter value={data.bedrooms} onChange={(v) => update("bedrooms", v)} min={1} max={15} />
            </Field>
          )}
          <Field label="Services must-have" hint="Tick what matters. Optional.">
            <PillMulti options={mustHavesData} values={data.services} onChange={(v) => update("services", v)} />
          </Field>
        </>
      )}

      {step === 3 && (
        <>
          <Field label="Your vision" required hint={`In a few sentences, tell us the feel of the stay. (min ${VISION_MIN} characters)`}>
            <TextArea value={data.vision} onChange={(v) => update("vision", v)} placeholder="The occasion, the atmosphere, what matters to you..." rows={7} minLength={VISION_MIN} />
          </Field>
          {showVillaBudget ? (
            <Field label="Budget per night" required hint="Indicative. Villas start at \u20AC1,500 per night.">
              <PillChoice options={villaBudgets} value={data.budget} onChange={(v) => update("budget", v)} name="budget" />
            </Field>
          ) : (
            <Field label="Indicative budget" required hint="Total for the stay (EUR). Yacht charters on request.">
              <TextInput value={data.yachtBudget} onChange={(v) => update("yachtBudget", v)} placeholder="e.g. \u20AC40,000" />
            </Field>
          )}
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
