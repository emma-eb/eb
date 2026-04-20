"use client";

import { ReactNode } from "react";

const labelClass =
  "font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#888]";
const inputClass =
  "w-full border-b border-[#e8e4de] bg-transparent py-3 font-body text-[16px] md:text-[15px] text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors";

interface FieldProps {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

export function Field({ label, required, hint, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <label className={labelClass}>
        {label}
        {required && <span className="text-[#2e5a88] ml-1">*</span>}
      </label>
      {children}
      {hint && (
        <p className="font-body text-[11px] md:text-[12px] text-[#1a1a1a]/45 leading-[1.5] font-light">
          {hint}
        </p>
      )}
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

export function TextInput({ value, onChange, placeholder, type = "text", autoComplete }: TextInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={inputClass}
    />
  );
}

interface TextAreaProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  minLength?: number;
}

export function TextArea({ value, onChange, placeholder, rows = 5, minLength }: TextAreaProps) {
  const count = value.length;
  return (
    <div className="flex flex-col gap-1.5">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${inputClass} resize-none border border-[#e8e4de] p-4 leading-[1.6] focus:border-[#1a1a1a]`}
      />
      {minLength && (
        <p className={`font-body text-[10px] md:text-[11px] ${count >= minLength ? "text-[#2e5a88]/70" : "text-[#1a1a1a]/35"} font-light text-right`}>
          {count < minLength ? `${minLength - count} characters to go` : "Thank you."}
        </p>
      )}
    </div>
  );
}

interface PillChoiceProps {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}

export function PillChoice({ options, value, onChange, name }: PillChoiceProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label key={opt} className="cursor-pointer group">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="peer sr-only"
          />
          <span className="inline-block font-body text-[11px] md:text-[12px] tracking-[0.1em] uppercase px-4 py-2.5 md:px-3.5 md:py-2 border border-[#e8e4de] text-[#666] peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] group-hover:border-[#1a1a1a] group-hover:text-[#1a1a1a] peer-checked:group-hover:bg-[#1a1a1a] peer-checked:group-hover:text-white transition-colors">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

interface PillMultiProps {
  options: readonly string[];
  values: string[];
  onChange: (values: string[]) => void;
}

export function PillMulti({ options, values, onChange }: PillMultiProps) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = values.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`inline-block font-body text-[11px] md:text-[12px] tracking-[0.1em] uppercase px-4 py-2.5 md:px-3.5 md:py-2 border transition-colors ${
              selected
                ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                : "border-[#e8e4de] text-[#666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

interface MoodGridProps {
  moods: readonly { id: string; label: string; desc: string }[];
  values: string[];
  onChange: (values: string[]) => void;
}

export function MoodGrid({ moods, values, onChange }: MoodGridProps) {
  const toggle = (id: string) => {
    if (values.includes(id)) {
      onChange(values.filter((v) => v !== id));
    } else {
      onChange([...values, id]);
    }
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
      {moods.map((m) => {
        const selected = values.includes(m.id);
        return (
          <button
            key={m.id}
            type="button"
            onClick={() => toggle(m.id)}
            className={`text-left p-3 md:p-4 border transition-colors ${
              selected
                ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                : "border-[#e8e4de] text-[#1a1a1a] hover:border-[#1a1a1a]"
            }`}
          >
            <div className={`font-body text-[12px] md:text-[13px] font-medium leading-tight mb-1 ${selected ? "text-white" : "text-[#1a1a1a]"}`}>
              {m.label}
            </div>
            <div className={`font-body text-[10px] md:text-[11px] leading-[1.4] font-light ${selected ? "text-white/70" : "text-[#1a1a1a]/50"}`}>
              {m.desc}
            </div>
          </button>
        );
      })}
    </div>
  );
}

interface DateRangeProps {
  start: string;
  end: string;
  onChange: (start: string, end: string) => void;
}

export function DateRange({ start, end, onChange }: DateRangeProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div className="flex flex-col gap-1.5">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#aaa]">From</span>
        <input
          type="date"
          value={start}
          onChange={(e) => onChange(e.target.value, end)}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#aaa]">To</span>
        <input
          type="date"
          value={end}
          onChange={(e) => onChange(start, e.target.value)}
          className={inputClass}
        />
      </div>
    </div>
  );
}

interface CounterProps {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

export function Counter({ value, onChange, min = 0, max = 50 }: CounterProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-10 h-10 border border-[#e8e4de] text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors font-body text-lg"
        aria-label="Decrease"
        disabled={value <= min}
      >
        &minus;
      </button>
      <span className="font-body text-[20px] md:text-[22px] text-[#1a1a1a] font-light min-w-[32px] text-center tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-10 h-10 border border-[#e8e4de] text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors font-body text-lg"
        aria-label="Increase"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}

interface CheckboxProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: ReactNode;
}

export function Checkbox({ checked, onChange, children }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span className="mt-0.5 w-4 h-4 border border-[#ccc] bg-white peer-checked:bg-[#1a1a1a] peer-checked:border-[#1a1a1a] flex items-center justify-center transition-colors flex-shrink-0">
        {checked && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.5 L4.5 8.5 L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="font-body text-[13px] md:text-[14px] text-[#1a1a1a]/70 leading-[1.6] font-light">
        {children}
      </span>
    </label>
  );
}
