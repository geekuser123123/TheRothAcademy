"use client";

import { useRef, useState } from "react";
import type { PlanId } from "@/data/apply-content";
import { getApplicationSections, type ApplicationField, type ApplicationSection } from "@/data/application-content";

const STYLES = `
.aw-card { color: #1E1C19; }
.aw-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}
.aw-h2 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 6px;
  color: #1E1C19;
}
.aw-sub { font-size: 14px; line-height: 1.6; color: #6b6558; margin-bottom: 24px; }
.aw-save-status { font-size: 11px; color: #8a8376; text-align: right; margin-bottom: 10px; min-height: 14px; }
.aw-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
.aw-field label { font-size: 12.5px; font-weight: 700; color: #1E1C19; }
.aw-field .aw-helper { font-size: 12px; color: #8a8376; margin-top: -2px; }
.aw-field input, .aw-field select, .aw-field textarea {
  border: 1.5px solid #E3DCCC;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 15px;
  font-family: inherit;
  color: #1E1C19;
  background: #FFFDF9;
  outline: none;
  transition: border-color 0.15s;
}
.aw-field input:focus, .aw-field select:focus, .aw-field textarea:focus { border-color: #B89958; }
.aw-field textarea { resize: vertical; min-height: 80px; }
.aw-radio-group { display: flex; gap: 10px; flex-wrap: wrap; }
.aw-radio-choice {
  border: 1.5px solid #ECE5D6;
  border-radius: 9px;
  padding: 10px 18px;
  cursor: pointer;
  background: #FFFDF9;
  font-size: 13.5px;
  font-weight: 600;
  color: #1E1C19;
  transition: border-color 0.15s, background 0.15s;
}
.aw-radio-choice.selected { border-color: #B89958; background: rgba(184,153,88,0.1); }
.aw-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.aw-btn-back { background: none; border: none; color: #6b6558; font-size: 13.5px; font-weight: 700; cursor: pointer; padding: 10px 4px; }
.aw-btn-primary {
  background: #B89958;
  color: #1E1C19;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  border-radius: 9px;
  padding: 14px 30px;
  cursor: pointer;
  transition: background 0.15s;
}
.aw-btn-primary:hover { background: #cbad71; }
.aw-section-dots { display: flex; gap: 6px; margin-bottom: 18px; }
.aw-section-dot { width: 8px; height: 8px; border-radius: 50%; background: #ECE5D6; }
.aw-section-dot.active { background: #B89958; }
.aw-section-dot.done { background: #D8CEB5; }
.aw-complete-box {
  background: #FBF7EF;
  border: 1px solid #ECE5D6;
  border-left: 3px solid #B89958;
  border-radius: 10px;
  padding: 18px 20px;
  font-size: 14px;
  color: #1E1C19;
  line-height: 1.6;
}
`;

type Props = { applicationId: string; resumeToken: string; plan: PlanId };

function visibleFields(section: ApplicationSection, values: Record<string, string>) {
  return section.fields.filter((f) => !f.showIf || f.showIf(values));
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: ApplicationField;
  value: string;
  onChange: (v: string) => void;
}) {
  if (field.type === "radio" && field.options) {
    return (
      <div className="aw-radio-group">
        {field.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`aw-radio-choice${value === opt.value ? " selected" : ""}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }
  if (field.type === "select" && field.options) {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select...</option>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
  if (field.type === "textarea") {
    return <textarea value={value} onChange={(e) => onChange(e.target.value)} />;
  }
  const inputType = field.type === "ssn" ? "password" : field.type === "date" ? "date" : field.type;
  return (
    <input
      type={inputType === "text" ? "text" : inputType}
      value={value}
      placeholder={field.placeholder}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={field.type === "ssn" ? "off" : undefined}
    />
  );
}

export function ApplicationWizard({ applicationId, resumeToken, plan }: Props) {
  const sections = getApplicationSections(plan);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionData, setSectionData] = useState<Record<string, Record<string, string>>>({});
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [complete, setComplete] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSave = useRef<{ sectionId: string; fieldId: string; value: string } | null>(null);

  const section = sections[sectionIndex];
  const values = sectionData[section.id] ?? {};

  function save(sectionId: string, fieldId: string, value: string) {
    setSaveStatus("saving");
    const isSsn = sectionId === "personal_info" && fieldId === "ssn";
    const payload = isSsn
      ? { token: resumeToken, section: "ssn", data: { ssn: value } }
      : { token: resumeToken, section: sectionId, data: { [fieldId]: value }, currentSection: sectionId };
    return fetch(`/api/applications/${applicationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => setSaveStatus("saved"))
      .catch(() => setSaveStatus("idle"));
  }

  function setValue(fieldId: string, value: string) {
    const sectionId = section.id;
    setSectionData((prev) => ({ ...prev, [sectionId]: { ...(prev[sectionId] ?? {}), [fieldId]: value } }));
    pendingSave.current = { sectionId, fieldId, value };
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      pendingSave.current = null;
      save(sectionId, fieldId, value);
    }, 700);
  }

  // Navigating away (section change, or Finish) can land within the 700ms
  // debounce window of the last keystroke — flush it immediately so nothing
  // typed right before "Continue"/"Finish" is silently dropped.
  function flushPending() {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    if (pendingSave.current) {
      const { sectionId, fieldId, value } = pendingSave.current;
      pendingSave.current = null;
      return save(sectionId, fieldId, value);
    }
    return Promise.resolve();
  }

  function validateSection() {
    return visibleFields(section, values).every((f) => !f.required || (values[f.id] ?? "").trim() !== "");
  }

  async function next() {
    if (!validateSection()) {
      alert("Please fill in all required fields.");
      return;
    }
    if (sectionIndex + 1 < sections.length) {
      await flushPending();
      setSectionIndex(sectionIndex + 1);
      return;
    }

    setFinishing(true);
    await flushPending();
    try {
      await fetch(`/api/applications/${applicationId}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: resumeToken }),
      });
    } catch {
      // Autosaved data already lives in D1 either way; this call only
      // notifies GHL, so a network failure here isn't destructive.
    }
    setFinishing(false);
    setComplete(true);
  }

  function back() {
    if (sectionIndex > 0) setSectionIndex(sectionIndex - 1);
  }

  if (complete) {
    return (
      <div className="aw-card">
        <style>{STYLES}</style>
        <div className="aw-eyebrow">Application Saved</div>
        <h2 className="aw-h2">That&apos;s Everything We Need For Now</h2>
        <p className="aw-sub">
          Your answers are saved. Review, optional upgrades, and secure payment are the next part of this
          application, which is still being finalized.
        </p>
        <div className="aw-complete-box">
          A specialist can also take it from here right away if you&apos;d rather not wait — just book a Retirement
          Certainty Session and mention you&apos;ve already started your application online.
        </div>
      </div>
    );
  }

  return (
    <div className="aw-card">
      <style>{STYLES}</style>
      <div className="aw-section-dots">
        {sections.map((s, i) => (
          <div key={s.id} className={`aw-section-dot${i === sectionIndex ? " active" : i < sectionIndex ? " done" : ""}`} />
        ))}
      </div>
      <div className="aw-eyebrow">
        Section {sectionIndex + 1} of {sections.length}
      </div>
      <h2 className="aw-h2">{section.title}</h2>
      {section.subtitle && <p className="aw-sub">{section.subtitle}</p>}

      <div className="aw-save-status">
        {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved" : ""}
      </div>

      {visibleFields(section, values).map((field) => (
        <div className="aw-field" key={field.id}>
          <label htmlFor={field.id}>
            {field.label}
            {field.required ? " *" : ""}
          </label>
          {field.helper && <div className="aw-helper">{field.helper}</div>}
          <FieldInput field={field} value={values[field.id] ?? ""} onChange={(v) => setValue(field.id, v)} />
        </div>
      ))}

      <div className="aw-nav-row">
        <button type="button" className="aw-btn-back" onClick={back} disabled={sectionIndex === 0 || finishing}>
          ← Back
        </button>
        <button type="button" className="aw-btn-primary" onClick={next} disabled={finishing}>
          {sectionIndex + 1 < sections.length ? "Continue →" : finishing ? "Finishing..." : "Finish"}
        </button>
      </div>
    </div>
  );
}
