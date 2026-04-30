"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FormOnePage, { Section } from "./FormOnePage";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, PillMulti, Counter, Checkbox, DateRange, Select } from "./fields";
import {
  villaBudgets,
  mustHaves as mustHavesData,
  howHeard,
  stayInterest,
  flexibilityOptions,
  countries,
} from "../_data/options";
import { villaDetails } from "../../data/villa-details";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  villa: string;
  startDate: string;
  endDate: string;
  flexibility: string;
  adults: number;
  kids: number;
  kidsAges: string;
  bedrooms: number;
  services: string[];
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
  interest: "",
  villa: "",
  startDate: "",
  endDate: "",
  flexibility: "",
  adults: 2,
  kids: 0,
  kidsAges: "",
  bedrooms: 2,
  services: [],
  vision: "",
  budget: "",
  howHeard: "",
  consent: false,
};

const STORAGE_KEY = "eb-contact-stay";

export default function StayForm() {
  const searchParams = useSearchParams();
  const villaSlug = searchParams.get("villa");
  const stayPreset = searchParams.get("stay");
  const isYachtPreselected = stayPreset === "yacht" && !villaSlug;
  const [data, setData] = useState<Data>(() => ({
    ...EMPTY,
    villa: villaSlug || "",
    interest: villaSlug ? "Villa" : isYachtPreselected ? "Yacht" : "",
  }));
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((d) => ({
          ...d,
          ...parsed,
          // URL params always win over saved state
          ...(villaSlug ? { villa: villaSlug, interest: "Villa" } : {}),
          ...(isYachtPreselected ? { villa: "", interest: "Yacht", services: [] } : {}),
        }));
      }
    } catch {}
  }, [villaSlug, isYachtPreselected]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const update = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const isYacht = data.interest === "Yacht";
  const preselectedVilla = villaSlug ? villaDetails[villaSlug] : null;
  const showVillaBudget = (data.interest === "Villa" || data.interest === "Both") && !preselectedVilla;
  const showYachtNote = data.interest === "Yacht" || data.interest === "Both";

  const missing: string[] = [];
  if (!data.name.trim()) missing.push("your name");
  if (!/\S+@\S+\.\S+/.test(data.email)) missing.push("a valid email");
  if (!data.interest) missing.push("villa or yacht");
  if (!data.startDate || !data.endDate) missing.push(isYacht ? "charter dates" : "travel dates");
  if (showVillaBudget && !data.budget) missing.push("a villa budget");
  if (!data.consent) missing.push("consent");
  const canSubmit = missing.length === 0;

  const buildSummary = () => {
    const lines = [
      `INQUIRY TYPE: ${isYacht ? "Charter" : "Stay"} (${data.interest})${villaSlug ? ` - ${villaSlug}` : ""}`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      isYacht ? "CHARTER" : "STAY",
      `Interest: ${data.interest}`,
    ];
    if (data.villa) lines.push(`Villa of interest: ${data.villa}`);
    lines.push(
      `Dates: ${data.startDate} to ${data.endDate}${data.flexibility ? ` (flex: ${data.flexibility})` : ""}`,
      `Party: ${data.adults} ${isYacht ? "guests" : "adults"}, ${data.kids} ${isYacht ? "children" : "kids"}${data.kids > 0 && data.kidsAges ? ` (ages: ${data.kidsAges})` : ""}`,
    );
    if (!isYacht) lines.push(`Bedrooms min: ${data.bedrooms}`);
    if (!isYacht) lines.push(`Services must-have: ${data.services.join(", ") || "(none flagged)"}`);
    if (showVillaBudget) lines.push(`Villa budget per night: ${data.budget}`);
    if (showYachtNote) lines.push(`Yacht: on request (quoted individually)`);
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

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitError(null);
    setSubmitting(true);
    const summary = buildSummary();
    try {
      const res = await fetch("/api/contact-stay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setSubmitError("We could not send your enquiry. Please try again or email hello@emmabonnefous.com.");
        return;
      }
      setSubmittedSummary(summary);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <Confirmation summary={submittedSummary} />;
  }

  return (
    <FormOnePage
      typeLabel={
        preselectedVilla
          ? `Enquiry \u00b7 ${preselectedVilla.name}`
          : isYachtPreselected
            ? "Charter Enquiry \u00b7 BESTIA"
            : "Villa or Yacht"
      }
      title={
        preselectedVilla
          ? "About this villa."
          : isYachtPreselected
            ? "A week aboard BESTIA."
            : "A place to land."
      }
      intro={
        preselectedVilla
          ? "Tell us your dates and your party. We come back with availability and the next steps."
          : isYachtPreselected
            ? "Tell us your dates, your guests, and what the week should feel like. We come back with a proposed itinerary and a tailored quote."
            : "Villas we know in person. Yacht on request. Tell us how you want to live the week, we propose the right address."
      }
      submitLabel={preselectedVilla || isYachtPreselected ? "Send my enquiry" : "Start the conversation"}
      onSubmit={handleSubmit}
      canSubmit={canSubmit}
      missing={missing}
      isSubmitting={submitting}
      currentType="stay"
      submitError={submitError}
    >
      <Section num="01" title={isYacht ? "The principal guest." : "Who is staying."}>
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
            <TextInput value={data.phone} onChange={(v) => update("phone", v)} placeholder="Your phone number" type="tel" autoComplete="tel" />
          </Field>
          <Field label="Country of residence">
            <Select value={data.country} onChange={(v) => update("country", v)} options={countries} placeholder="Select country" />
          </Field>
        </div>
      </Section>

      <Section num="02" title={isYacht ? "The charter." : "The stay."}>
        {!preselectedVilla && !isYachtPreselected && (
          <Field label="What are you looking for" required>
            <PillChoice options={stayInterest} value={data.interest} onChange={(v) => update("interest", v)} name="interest" />
          </Field>
        )}
        {isYachtPreselected && (
          <Field label="Charter">
            <div className="bg-white border border-[#e8e4de] px-4 py-3 md:px-5 md:py-4">
              <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/80">
                BESTIA · Sanlorenzo SP110
              </p>
              <p className="mt-1.5 font-body text-[12px] md:text-[13px] text-[#1a1a1a]/55 leading-[1.5] font-light">
                The only SP110 in charter, worldwide. 33 metres, four cabins, eight guests, crew of five. Athens-based, quoted individually.
              </p>
            </div>
          </Field>
        )}
        {preselectedVilla && (
          <Field label="Villa of interest">
            <div className="bg-white border border-[#e8e4de] px-4 py-3">
              <span className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/80">
                {preselectedVilla.name}
              </span>
            </div>
          </Field>
        )}
        <Field label={isYacht ? "Charter dates" : "Travel dates"} required>
          <DateRange start={data.startDate} end={data.endDate} onChange={(s, e) => { update("startDate", s); update("endDate", e); }} />
        </Field>
        <Field label="Flexibility">
          <PillChoice options={flexibilityOptions} value={data.flexibility} onChange={(v) => update("flexibility", v)} name="flexibility" />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label={isYacht ? "Guests" : "Adults"}>
            <Counter value={data.adults} onChange={(v) => update("adults", v)} min={1} max={isYacht ? 8 : 30} />
          </Field>
          <Field label="Children">
            <Counter value={data.kids} onChange={(v) => update("kids", v)} min={0} max={isYacht ? 8 : 15} />
          </Field>
        </div>
        {data.kids > 0 && (
          <Field label="Children's ages">
            <TextInput value={data.kidsAges} onChange={(v) => update("kidsAges", v)} placeholder="e.g. 4, 7, 11" />
          </Field>
        )}
        {!isYacht && !preselectedVilla && (
          <Field label="Bedrooms (minimum)">
            <Counter value={data.bedrooms} onChange={(v) => update("bedrooms", v)} min={1} max={15} />
          </Field>
        )}
        {!isYacht && (
          <Field label="Services must-have" hint="Optional. Tick what matters.">
            <PillMulti options={mustHavesData} values={data.services} onChange={(v) => update("services", v)} />
          </Field>
        )}
      </Section>

      <Section num="03" title={preselectedVilla ? "Anything else." : isYacht ? "The week, in your words." : "Your vision."}>
        <Field
          label={preselectedVilla ? "Tell us anything we should know" : isYacht ? "Tell us about the week" : "In a few sentences"}
          hint={
            preselectedVilla
              ? "Optional. The occasion, who's coming, anything that helps us prepare."
              : isYacht
                ? "Optional. The occasion, the atmosphere, the people aboard, dietary preferences, water-toy requests."
                : "Optional. The occasion, the atmosphere, what matters, anything that helps us prepare."
          }
        >
          <TextArea
            value={data.vision}
            onChange={(v) => update("vision", v)}
            placeholder={
              preselectedVilla
                ? "Add any details about your party or what would make this stay right..."
                : isYacht
                  ? "Who's coming, the occasion, the atmosphere on board, dietary preferences, water-toy requests, anything that shapes the week..."
                  : "What you're looking for, who's coming, what would make it right..."
            }
            rows={7}
          />
        </Field>
        {showVillaBudget && (
          <Field label="Villa budget per night" required hint="Indicative. Villas start at €1,000 per night.">
            <PillChoice options={villaBudgets} value={data.budget} onChange={(v) => update("budget", v)} name="budget" />
          </Field>
        )}
        {preselectedVilla && (
          <div className="bg-white border border-[#e8e4de] p-5 md:p-6">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/40 mb-2">
              {preselectedVilla.name}
            </p>
            <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/70 leading-[1.7] font-light">
              {preselectedVilla.keyFacts.priceFrom}. Final dates and rates confirmed at inquiry.
            </p>
          </div>
        )}
        {showYachtNote && !isYachtPreselected && (
          <div className="bg-white border border-[#e8e4de] p-5 md:p-6">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/40 mb-2">
              Yacht
            </p>
            <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/70 leading-[1.7] font-light">
              Yacht charters are quoted individually. Share your party and dates, we come back with a proposal.
            </p>
          </div>
        )}
        <Field label="How did you find us">
          <PillChoice options={howHeard} value={data.howHeard} onChange={(v) => update("howHeard", v)} name="howHeard" />
        </Field>
        <div className="pt-2">
          <Checkbox checked={data.consent} onChange={(v) => update("consent", v)}>
            I agree to be contacted by the eb. team about this inquiry. My details are governed by our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#2e5a88] transition-colors">
              privacy policy
            </Link>
            .
          </Checkbox>
        </div>
      </Section>
    </FormOnePage>
  );
}
