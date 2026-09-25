"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { CreditCard, Check, Clock, ShieldCheck } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

// Live integration — already wired to production Square + n8n. Do not change
// these values without updating the matching n8n workflows / Square location.
const SQUARE_APP_ID = "sq0idp-4OS6ecwpn_dBVt1dqsH_Jg";
const SQUARE_LOCATION_ID = "98TH9CWGZ97N7";
const N8N_SLOTS_WEBHOOK = "https://n8n.coreautomations.org/webhook/get-slots";
const N8N_BOOKING_WEBHOOK = "https://n8n.coreautomations.org/webhook/7778d431-5e8d-434e-8c02-9385fa22552f";

const AVAILABLE_DAYS = [1, 2, 4]; // Mon, Tue, Thu
const WORK_START_HOUR = 9;
const WORK_START_MIN = 30;
const WORK_END_HOUR = 15;
const WORK_END_MIN = 0;
const SLOT_DURATION = 15;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

declare global {
  interface Window {
    Square?: {
      payments: (appId: string, locationId: string) => {
        card: () => Promise<{
          attach: (selector: string) => Promise<void>;
          tokenize: () => Promise<{ status: string; token?: string; errors?: { code?: string; message?: string }[] }>;
        }>;
      };
    };
  }
}

type SquareCard = {
  attach: (selector: string) => Promise<void>;
  tokenize: () => Promise<{ status: string; token?: string; errors?: { code?: string; message?: string }[] }>;
};

type BookingState = {
  currentMonth: number;
  currentYear: number;
  selectedDate: Date | null;
  selectedSlot: string | null;
  currentStep: number;
};

export function RcsBooking() {
  const { solution } = rcsContent;
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<SquareCard | null>(null);
  const squareInitRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = <T extends Element>(sel: string) => root.querySelector<T>(sel);
    const qAll = <T extends Element>(sel: string) => root.querySelectorAll<T>(sel);

    const state: BookingState = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null,
      selectedSlot: null,
      currentStep: 1,
    };

    function chicagoSlotToUTC(year: number, month: number, day: number, hour24: number, minute: number) {
      let guess = new Date(Date.UTC(year, month, day, hour24, minute));
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      for (let i = 0; i < 2; i++) {
        const parts = fmt.formatToParts(guess).reduce<Record<string, string>>((a, p) => {
          a[p.type] = p.value;
          return a;
        }, {});
        const gotHour = Number(parts.hour) % 24;
        const diffMinutes = hour24 * 60 + minute - (gotHour * 60 + Number(parts.minute));
        guess = new Date(guess.getTime() + diffMinutes * 60000);
      }
      return guess;
    }

    function parseSlotLabel(label: string) {
      const m = label.match(/(\d+):(\d+)\s*(AM|PM)/i)!;
      let hour = parseInt(m[1], 10);
      const minute = parseInt(m[2], 10);
      const ampm = m[3].toUpperCase();
      if (ampm === "PM" && hour !== 12) hour += 12;
      if (ampm === "AM" && hour === 12) hour = 0;
      return { hour, minute };
    }

    function minutesToTime(m: number) {
      const h = Math.floor(m / 60);
      const min = m % 60;
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      return h12 + ":" + (min < 10 ? "0" + min : min) + " " + ampm;
    }

    function generateSlots() {
      const slots: string[] = [];
      const startMin = WORK_START_HOUR * 60 + WORK_START_MIN;
      const endMin = WORK_END_HOUR * 60 + WORK_END_MIN;
      for (let m = startMin; m < endMin; m += SLOT_DURATION) {
        slots.push(minutesToTime(m));
      }
      return slots;
    }

    function renderCalendar() {
      const title = q<HTMLElement>("#calMonthTitle");
      const grid = q<HTMLElement>("#calGrid");
      if (!title || !grid) return;
      title.textContent = MONTH_NAMES[state.currentMonth] + " " + state.currentYear;
      grid.innerHTML = "";
      DAY_NAMES.forEach((d) => {
        const el = document.createElement("div");
        el.className = "flex items-center justify-center py-2 text-[11px] font-semibold uppercase tracking-wide text-r-muted";
        el.textContent = d;
        grid.appendChild(el);
      });
      const now = new Date();
      const cstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
      const today = new Date(cstTime.getFullYear(), cstTime.getMonth(), cstTime.getDate());
      const firstDay = new Date(state.currentYear, state.currentMonth, 1).getDay();
      const daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
      for (let i = 0; i < firstDay; i++) {
        const el = document.createElement("div");
        grid.appendChild(el);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(state.currentYear, state.currentMonth, day);
        const el = document.createElement("div");
        el.textContent = String(day);
        const isPast = date <= today;
        const isAvailable = AVAILABLE_DAYS.indexOf(date.getDay()) !== -1;
        const isToday = date.getTime() === today.getTime();
        const isSelected = !!state.selectedDate && date.toDateString() === state.selectedDate.toDateString();
        const base = "flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-colors";
        if (isPast || !isAvailable) {
          el.className = base + " cursor-not-allowed text-r-muted/30";
        } else {
          el.className =
            base +
            " cursor-pointer text-r-white hover:bg-r-gold/15 hover:border hover:border-r-gold/40 border border-transparent" +
            (isToday ? " border-r-gold text-r-gold font-semibold" : "") +
            (isSelected ? " !bg-r-gold !border-r-gold !text-r-bg font-semibold" : "");
          el.addEventListener("click", () => selectDate(date));
        }
        grid.appendChild(el);
      }
    }

    function selectDate(date: Date) {
      state.selectedDate = date;
      state.selectedSlot = null;
      const nextBtn = q<HTMLButtonElement>("#btn-next-1");
      if (nextBtn) nextBtn.disabled = true;
      renderCalendar();
      fetchSlots(date);
    }

    function displaySlots(slots: (string | { label: string })[], container: HTMLElement) {
      container.innerHTML = "";
      if (!slots || !slots.length) {
        const msg = document.createElement("div");
        msg.className =
          "rounded-lg border border-dashed border-r-line bg-r-panel/40 p-6 text-center text-sm text-r-muted";
        msg.textContent =
          "No available slots for this date. Tim is available Monday, Tuesday and Thursday 9:30 AM - 3:00 PM CST. Please select another date.";
        container.appendChild(msg);
        return;
      }
      const grid = document.createElement("div");
      grid.className = "grid grid-cols-2 gap-2.5 sm:grid-cols-4";
      slots.forEach((slot) => {
        const label = typeof slot === "object" ? slot.label : slot;
        const el = document.createElement("div");
        el.className =
          "cursor-pointer rounded-lg border border-r-line bg-r-bg px-2 py-2.5 text-center text-sm font-semibold text-r-white transition-colors hover:border-r-gold hover:bg-r-gold/10";
        el.textContent = label;
        el.addEventListener("click", () => {
          qAll<HTMLElement>(".rcs-slot").forEach((s) => {
            s.className =
              "rcs-slot cursor-pointer rounded-lg border border-r-line bg-r-bg px-2 py-2.5 text-center text-sm font-semibold text-r-white transition-colors hover:border-r-gold hover:bg-r-gold/10";
          });
          el.className =
            "rcs-slot cursor-pointer rounded-lg border border-r-gold bg-r-gold px-2 py-2.5 text-center text-sm font-semibold text-r-bg transition-colors";
          state.selectedSlot = label;
          const nextBtn = q<HTMLButtonElement>("#btn-next-1");
          if (nextBtn) nextBtn.disabled = false;
        });
        el.classList.add("rcs-slot");
        grid.appendChild(el);
      });
      container.appendChild(grid);
    }

    function fetchSlots(date: Date) {
      const container = q<HTMLElement>("#slotsContent");
      if (!container) return;
      container.innerHTML =
        '<div class="flex items-center justify-center gap-3 py-6 text-sm text-r-muted"><span class="h-4 w-4 animate-spin rounded-full border-2 border-r-line border-t-r-gold"></span> Checking availability...</div>';

      const dayStart = chicagoSlotToUTC(date.getFullYear(), date.getMonth(), date.getDate(), WORK_START_HOUR, WORK_START_MIN);
      const dayEnd = chicagoSlotToUTC(date.getFullYear(), date.getMonth(), date.getDate(), WORK_END_HOUR, WORK_END_MIN);

      fetch(N8N_SLOTS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_time: dayStart.toISOString(),
          to_time: dayEnd.toISOString(),
          timezone: "America/Chicago",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const slots = data.availableSlots || data.slots || generateSlots();
          displaySlots(slots, container);
        })
        .catch(() => {
          displaySlots(generateSlots(), container);
        });
    }

    function updateStepDateTimeSummary() {
      if (state.selectedDate && state.selectedSlot) {
        const dateStr = state.selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        const dt = dateStr + " at " + state.selectedSlot + " CST";
        const sd = q<HTMLElement>("#summaryDateTime");
        if (sd) sd.textContent = dt;
        const pd = q<HTMLElement>("#paymentDateTime");
        if (pd) pd.textContent = dt;
      }
    }

    function goToStep(step: number) {
      if (step === 2 && (!state.selectedDate || !state.selectedSlot)) return;

      if ((step === 2 || step === 3) && state.selectedDate && state.selectedSlot) {
        updateStepDateTimeSummary();
      }

      if (step === 3) {
        const fields = ["firstName", "lastName", "email", "phone", "accountType", "primaryConcern", "description"];
        let valid = true;
        fields.forEach((id) => {
          const el = q<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("#" + id);
          if (!el || !el.value.trim()) {
            valid = false;
            if (el) el.style.borderColor = "#e53e3e";
          } else if (el) {
            el.style.borderColor = "";
          }
        });
        if (!valid) {
          alert("Please fill in all required fields.");
          return;
        }
      }

      qAll<HTMLElement>(".rcs-panel").forEach((p) => {
        p.style.display = "none";
      });
      const panel = q<HTMLElement>("#panel-" + step);
      if (panel) panel.style.display = "block";

      for (let i = 1; i <= 3; i++) {
        const ind = q<HTMLElement>("#step-ind-" + i);
        const num = q<HTMLElement>("#step-num-" + i);
        const line = q<HTMLElement>("#step-line-" + i);
        if (!ind) continue;
        const activeClasses = "border-r-gold bg-r-gold text-r-bg";
        const completedClasses = "border-r-gold bg-r-gold text-r-bg";
        const idleClasses = "border-r-line bg-r-bg text-r-muted";
        if (num) {
          num.className =
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors " +
            (i < step ? completedClasses : i === step ? activeClasses : idleClasses);
          num.textContent = i < step ? "✓" : String(i);
        }
        const label = ind.querySelector<HTMLElement>(".rcs-step-label");
        if (label) {
          label.className =
            "text-xs font-semibold transition-colors " + (i <= step ? "text-r-white" : "text-r-muted");
        }
        if (line) {
          line.className = "mx-3 h-0.5 flex-1 transition-colors " + (i < step ? "bg-r-gold" : "bg-r-line");
        }
      }
      state.currentStep = step;
    }

    function showDoubleBookError() {
      const errEl = q<HTMLElement>("#paymentError");
      const btn = q<HTMLButtonElement>("#paymentBtn");
      if (errEl) {
        errEl.innerHTML =
          '<strong>This time slot was just booked by someone else.</strong><br>Please go back and select a different time. Your card was <strong>not charged</strong>.<br><br><button type="button" id="rcsGoBackToSlots" class="mt-2 rounded-md bg-r-gold px-4 py-2 text-xs font-bold text-r-bg">← Pick a Different Time</button>';
        errEl.style.display = "block";
        const goBackBtn = errEl.querySelector<HTMLButtonElement>("#rcsGoBackToSlots");
        goBackBtn?.addEventListener("click", goBackToSlots);
      }
      if (btn) btn.style.display = "none";
    }

    function goBackToSlots() {
      const errEl = q<HTMLElement>("#paymentError");
      if (errEl) {
        errEl.style.display = "none";
        errEl.innerHTML = "";
      }
      state.selectedSlot = null;
      const nextBtn = q<HTMLButtonElement>("#btn-next-1");
      if (nextBtn) nextBtn.disabled = true;
      const slotsContent = q<HTMLElement>("#slotsContent");
      if (slotsContent) {
        slotsContent.innerHTML =
          '<div class="rounded-lg border border-dashed border-r-line bg-r-panel/40 p-8 text-center text-sm text-r-muted">Please select a date to see available time slots</div>';
      }
      goToStep(1);
    }

    function showSuccess(data: { customer_details: { first_name: string; last_name: string; email: string } }) {
      qAll<HTMLElement>(".rcs-panel").forEach((p) => {
        p.style.display = "none";
      });
      const stepsBar = q<HTMLElement>("#stepsBar");
      if (stepsBar) stepsBar.style.display = "none";
      const success = q<HTMLElement>("#successScreen");
      if (success) success.style.display = "block";
      const dateStr = state.selectedDate
        ? state.selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
        : "";
      const sd = q<HTMLElement>("#successDate");
      if (sd) sd.textContent = dateStr + " at " + state.selectedSlot + " CST";
      const sn = q<HTMLElement>("#successName");
      if (sn) sn.textContent = data.customer_details.first_name + " " + data.customer_details.last_name;
      const se = q<HTMLElement>("#successEmail");
      if (se) se.textContent = data.customer_details.email;
    }

    function handleError(message?: string) {
      const btn = q<HTMLButtonElement>("#paymentBtn");
      const loading = q<HTMLElement>("#paymentLoading");
      const errEl = q<HTMLElement>("#paymentError");
      if (loading) loading.style.display = "none";
      if (btn) btn.style.display = "flex";
      if (errEl) {
        errEl.textContent = message || "Payment failed. Please try again.";
        errEl.style.display = "block";
      }
    }

    function processPayment() {
      const btn = q<HTMLButtonElement>("#paymentBtn");
      const loading = q<HTMLElement>("#paymentLoading");
      const errEl = q<HTMLElement>("#paymentError");

      if (btn) btn.style.display = "none";
      if (loading) loading.style.display = "flex";
      if (errEl) errEl.style.display = "none";

      const slotTime = state.selectedSlot
        ? parseSlotLabel(state.selectedSlot)
        : { hour: WORK_START_HOUR, minute: WORK_START_MIN };
      const slotStartUTC = state.selectedDate
        ? chicagoSlotToUTC(state.selectedDate.getFullYear(), state.selectedDate.getMonth(), state.selectedDate.getDate(), slotTime.hour, slotTime.minute)
        : null;
      const slotEndUTC = slotStartUTC ? new Date(slotStartUTC.getTime() + SLOT_DURATION * 60000) : null;

      const bookingData: { from_time: string; to_time: string; timezone: string; customer_details: Record<string, unknown> } = {
        from_time: slotStartUTC ? slotStartUTC.toISOString() : "",
        to_time: slotEndUTC ? slotEndUTC.toISOString() : "",
        timezone: "America/Chicago",
        customer_details: {
          first_name: (q<HTMLInputElement>("#firstName"))?.value ?? "",
          last_name: (q<HTMLInputElement>("#lastName"))?.value ?? "",
          email: (q<HTMLInputElement>("#email"))?.value ?? "",
          phone: (q<HTMLInputElement>("#phone"))?.value ?? "",
          account_type: (q<HTMLSelectElement>("#accountType"))?.value ?? "",
          primary_concern: (q<HTMLSelectElement>("#primaryConcern"))?.value ?? "",
          description: (q<HTMLTextAreaElement>("#description"))?.value ?? "",
          selected_slot: state.selectedSlot,
          amount: 12500,
        },
      };

      const card = cardRef.current;
      if (!card) {
        handleError("Payment form is still loading. Please wait a moment and try again.");
        return;
      }

      card
        .tokenize()
        .then((result) => {
          if (result.status === "OK") {
            bookingData.customer_details.payment_token = result.token;
            bookingData.customer_details.payment_method = "square_card";
            return fetch(N8N_BOOKING_WEBHOOK, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(bookingData),
            });
          } else {
            const rawError = result.errors && result.errors.length ? result.errors[0] : {};
            const errorCode = rawError.code || "";
            const friendlyErrors: Record<string, string> = {
              CARD_DECLINED: "Your card was declined. Please try a different card.",
              INSUFFICIENT_FUNDS: "Insufficient funds. Please try a different card.",
              INVALID_NUMBER: "Invalid card number. Please check your card details.",
              INVALID_EXPIRATION: "Your card has expired. Please try a different card.",
              INVALID_SECURITY_CODE: "Invalid security code (CVV). Please check and try again.",
              INVALID_POSTAL_CODE: "Invalid postal code. Please check your billing address.",
              CARD_NOT_SUPPORTED: "This card type is not supported. Please try Visa, Mastercard, or Amex.",
              BAD_EXPIRY: "Invalid expiration date. Please check your card.",
              CVV_FAILURE: "Card security code did not match. Please try again.",
              ADDRESS_VERIFICATION_FAILURE: "Billing address did not match. Please check your details.",
              GENERIC_DECLINE: "Your card was declined. Please contact your bank or try a different card.",
            };
            const errorMsg = friendlyErrors[errorCode] || rawError.message || "Card validation failed. Please check your details and try again.";
            throw new Error(errorMsg);
          }
        })
        .then((res) => {
          if (!res) return;
          if (!res.ok) throw new Error("Server error (" + res.status + "). Please try again.");
          return res.json();
        })
        .then((data) => {
          if (!data) return;
          if (data.success === true || data.status === "success" || data.confirmed === true) {
            if (loading) loading.style.display = "none";
            showSuccess(bookingData as unknown as { customer_details: { first_name: string; last_name: string; email: string } });
          } else {
            const isDoubleBook =
              data.error_code === "SLOT_UNAVAILABLE" ||
              (data.message &&
                (data.message.toLowerCase().indexOf("slot") !== -1 ||
                  data.message.toLowerCase().indexOf("booked") !== -1 ||
                  data.message.toLowerCase().indexOf("unavailable") !== -1 ||
                  data.message.toLowerCase().indexOf("taken") !== -1));
            if (isDoubleBook) {
              if (loading) loading.style.display = "none";
              showDoubleBookError();
            } else {
              throw new Error(data.message || data.error || "Booking could not be confirmed. Please try again.");
            }
          }
        })
        .catch((err: Error) => {
          handleError(err.message || "Something went wrong. Please try again or contact us at tim@iraideas.com.");
        });
    }

    // Nav button wiring
    const prevBtn = q<HTMLButtonElement>("#rcsCalPrev");
    const nextMonthBtn = q<HTMLButtonElement>("#rcsCalNext");
    prevBtn?.addEventListener("click", () => {
      state.currentMonth -= 1;
      if (state.currentMonth < 0) {
        state.currentMonth = 11;
        state.currentYear -= 1;
      }
      renderCalendar();
    });
    nextMonthBtn?.addEventListener("click", () => {
      state.currentMonth += 1;
      if (state.currentMonth > 11) {
        state.currentMonth = 0;
        state.currentYear += 1;
      }
      renderCalendar();
    });

    q<HTMLButtonElement>("#btn-next-1")?.addEventListener("click", () => goToStep(2));
    q<HTMLButtonElement>("#rcsBackTo1")?.addEventListener("click", () => goToStep(1));
    q<HTMLButtonElement>("#rcsNextTo3")?.addEventListener("click", () => goToStep(3));
    q<HTMLButtonElement>("#rcsBackTo2")?.addEventListener("click", () => goToStep(2));
    q<HTMLButtonElement>("#paymentBtn")?.addEventListener("click", processPayment);

    qAll<HTMLElement>(".rcs-panel").forEach((p) => {
      p.style.display = "none";
    });
    const firstPanel = q<HTMLElement>("#panel-1");
    if (firstPanel) firstPanel.style.display = "block";

    renderCalendar();

    async function initializeSquare() {
      if (squareInitRef.current) return;
      if (!window.Square) return;
      squareInitRef.current = true;
      try {
        const payments = window.Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID);
        const card = await payments.card();
        await card.attach("#card-container");
        cardRef.current = card;
      } catch (e) {
        console.error("Square init failed:", e);
        squareInitRef.current = false;
      }
    }

    // In case the Square SDK script already finished loading before this effect ran.
    initializeSquare();
    window.addEventListener("rcs-square-loaded", initializeSquare);

    return () => {
      window.removeEventListener("rcs-square-loaded", initializeSquare);
    };
  }, []);

  return (
    <section id="booking" className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <Script
        src="https://web.squarecdn.com/v1/square.js"
        strategy="afterInteractive"
        onLoad={() => window.dispatchEvent(new Event("rcs-square-loaded"))}
      />
      <div className="container-brand">
        <div className="mx-auto max-w-xl text-center">
          <p
            className="flex items-center justify-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            Reserve Your Session
          </p>
          <h2 className="mt-4 text-4xl text-r-white md:text-5xl">Book Your Retirement Certainty Session</h2>
          <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">
            Select a date and time, fill in your details, and complete your secure $125 payment.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-xs uppercase tracking-[0.12em] text-r-muted">15 focused minutes</span>
            <span className="text-xs uppercase tracking-[0.12em] text-r-muted">Secure payment</span>
            <span className="text-xs uppercase tracking-[0.12em] text-r-muted">Instant confirmation</span>
            <span className="text-xs uppercase tracking-[0.12em] text-r-muted">400% guarantee</span>
          </div>
        </div>

        <div ref={rootRef} className="mt-14 grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
          <div className="flex flex-col gap-4 md:contents lg:flex md:grid md:grid-cols-1">
            <div className="relative overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-7">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-r-muted">Session Fee</p>
              <p className="mt-2 text-5xl text-r-gold">${solution.priceCard.price}</p>
              <p className="mt-1 text-xs text-r-muted font-body normal-case">15-Minute Expert Consultation</p>
              <div className="mt-6 space-y-3 border-t border-r-line pt-6">
                {["Review your compliance concern", "Identify compliance risks", "Clarify applicable IRS rules", "Determine safest path forward", "Discuss corrective actions"].map(
                  (feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-r-white font-body normal-case">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-r-gold/15">
                        <Check size={11} className="text-r-gold" aria-hidden />
                      </span>
                      {feat}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-4">
              <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-r-gold text-r-bg">
                <span className="text-[10px] font-bold leading-none">400%</span>
              </span>
              <div>
                <p className="text-sm font-semibold text-r-white normal-case" style={{ fontFamily: "var(--font-body)" }}>
                  400% Value Guarantee
                </p>
                <p className="mt-1 text-xs text-r-muted font-body normal-case">
                  Contact us within 7 days for a full refund if value isn&apos;t delivered.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40">
            <div className="flex items-center justify-between border-b border-r-line bg-r-stripe-1 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-r-gold" />
                <span className="text-sm font-semibold text-r-white">
                  Retirement Certainty Session — ${solution.priceCard.price}
                </span>
              </div>
              <div className="hidden items-center gap-1.5 text-xs text-r-muted sm:flex">
                <ShieldCheck size={14} className="text-r-gold" aria-hidden />
                Secure &amp; Encrypted
              </div>
            </div>

            <div id="stepsBar" className="flex items-center border-b border-r-line px-6 py-4 sm:px-8">
              {[
                { id: 1, label: "Date & Time" },
                { id: 2, label: "Your Details" },
                { id: 3, label: "Payment" },
              ].map((step, idx) => (
                <div key={step.id} className="flex flex-1 items-center last:flex-none">
                  <div id={`step-ind-${step.id}`} className="flex items-center gap-2">
                    <span
                      id={`step-num-${step.id}`}
                      className={
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors " +
                        (step.id === 1 ? "border-r-gold bg-r-gold text-r-bg" : "border-r-line bg-r-bg text-r-muted")
                      }
                    >
                      {step.id}
                    </span>
                    <span className={"rcs-step-label text-xs font-semibold transition-colors " + (step.id === 1 ? "text-r-white" : "text-r-muted")}>
                      {step.label}
                    </span>
                  </div>
                  {idx < 2 && <span id={`step-line-${step.id}`} className="mx-3 h-0.5 flex-1 bg-r-line transition-colors" />}
                </div>
              ))}
            </div>

            {/* Step 1 — Date & Time */}
            <div id="panel-1" className="rcs-panel p-6 sm:p-8">
              <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-r-gold">
                Pick a Date <span className="h-px flex-1 bg-r-line" aria-hidden />
              </p>
              <div className="mb-4 flex items-center justify-between">
                <button
                  type="button"
                  id="rcsCalPrev"
                  aria-label="Previous month"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-r-line bg-r-bg text-r-white transition-colors hover:border-r-gold hover:bg-r-gold hover:text-r-bg"
                >
                  ←
                </button>
                <div id="calMonthTitle" className="text-lg font-semibold text-r-white" />
                <button
                  type="button"
                  id="rcsCalNext"
                  aria-label="Next month"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-r-line bg-r-bg text-r-white transition-colors hover:border-r-gold hover:bg-r-gold hover:text-r-bg"
                >
                  →
                </button>
              </div>
              <div id="calGrid" className="mb-7 grid grid-cols-7 gap-1" />

              <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-bold text-r-white">Available Times</p>
                <span className="flex items-center gap-1.5 rounded border border-r-line bg-r-bg px-2.5 py-1 text-[11px] font-medium text-r-muted">
                  <Clock size={12} aria-hidden /> Central Standard Time (CST)
                </span>
              </div>
              <div id="slotsContent" className="mb-7">
                <div className="rounded-lg border border-dashed border-r-line bg-r-panel/40 p-8 text-center text-sm text-r-muted">
                  Please select a date to see available time slots
                </div>
              </div>

              <div className="flex items-center justify-end border-t border-r-line pt-6">
                <button
                  type="button"
                  id="btn-next-1"
                  disabled
                  className="rounded-[var(--radius-brand-control)] bg-r-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:cursor-not-allowed disabled:bg-r-line disabled:text-r-muted"
                >
                  Continue to Details →
                </button>
              </div>
            </div>

            {/* Step 2 — Details */}
            <div id="panel-2" className="rcs-panel p-6 sm:p-8">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-brand-control)] border border-r-gold/25 bg-r-gold/[0.06] p-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-r-muted">Date &amp; Time</p>
                  <p id="summaryDateTime" className="mt-1 text-sm font-semibold text-r-white">
                    —
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-r-muted">Consultant</p>
                  <p className="mt-1 text-sm font-semibold text-r-white">Tim Berry</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-r-muted">Total</p>
                  <p className="mt-1 text-2xl text-r-gold">${solution.priceCard.price}</p>
                </div>
              </div>

              <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-r-gold">
                Your Details <span className="h-px flex-1 bg-r-line" aria-hidden />
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="firstName" label="First Name" type="text" />
                <Field id="lastName" label="Last Name" type="text" />
                <Field id="email" label="Email Address" type="email" />
                <Field id="phone" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
                <SelectField
                  id="accountType"
                  label="Type of Account"
                  placeholder="Select account type"
                  options={[
                    ["self-directed-ira", "Self-Directed IRA"],
                    ["solo-401k", "Solo 401(k)"],
                    ["both", "Both IRA & 401(k)"],
                    ["not-sure", "Not Sure Yet"],
                  ]}
                />
                <SelectField
                  id="primaryConcern"
                  label="Primary Concern"
                  placeholder="Select your concern"
                  options={[
                    ["prohibited-transaction", "Prohibited Transaction"],
                    ["real-estate", "Real Estate Transaction"],
                    ["private-lending", "Private Lending"],
                    ["checkbook-llc", "Checkbook LLC"],
                    ["general-compliance", "General Compliance"],
                    ["pre-investment", "Pre-Investment Question"],
                    ["other", "Other"],
                  ]}
                />
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                <label htmlFor="description" className="text-xs font-bold text-r-white">
                  Brief Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  className="w-full resize-y rounded-[var(--radius-brand-control)] border border-r-line bg-r-bg px-3.5 py-2.5 text-sm text-r-white outline-none transition-colors focus:border-r-gold"
                />
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-r-line pt-6">
                <button
                  type="button"
                  id="rcsBackTo1"
                  className="rounded-[var(--radius-brand-control)] border border-r-line px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  id="rcsNextTo3"
                  className="rounded-[var(--radius-brand-control)] bg-r-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>

            {/* Step 3 — Payment */}
            <div id="panel-3" className="rcs-panel p-6 sm:p-8">
              <div className="mb-6 rounded-[var(--radius-brand-control)] border border-r-gold/25 bg-r-gold/[0.06] p-5">
                <Row label="Retirement Certainty Session (15 min)" value={`$${solution.priceCard.price}.00`} />
                <Row label="Consultant" value="Tim Berry" />
                <Row label="Date & Time" value={<span id="paymentDateTime">—</span>} />
                <Row label="Total Due Today" value={`$${solution.priceCard.price}.00`} bold />
              </div>

              <div
                id="paymentError"
                style={{ display: "none" }}
                className="mb-4 rounded-[var(--radius-brand-control)] border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              />

              <p className="mb-3 flex items-center gap-2 text-sm font-bold text-r-white">
                <CreditCard size={16} className="text-r-gold" aria-hidden />
                Payment Information
              </p>

              <div className="mb-5 overflow-hidden rounded-[var(--radius-brand-control)] border border-r-line">
                <div className="flex items-center justify-between border-b border-r-line bg-r-bg px-4 py-3">
                  <span className="text-xs font-semibold text-r-muted">Powered by Square</span>
                  <div className="flex gap-1.5">
                    {["VISA", "MC", "AMEX"].map((c) => (
                      <span key={c} className="rounded border border-r-line px-2 py-1 text-[9px] font-bold text-r-muted">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-r-panel/40 p-4">
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-r-muted">Card Details</p>
                  <div id="card-container" className="mb-3 min-h-[89px] rounded-[var(--radius-brand-control)] border border-r-line bg-white p-3" />
                  <p className="flex items-center gap-1.5 text-[11px] text-r-muted">
                    <ShieldCheck size={12} className="text-r-gold" aria-hidden />
                    256-bit SSL encryption · PCI DSS compliant · Card details never stored
                  </p>
                </div>
              </div>

              <div id="paymentLoading" style={{ display: "none" }} className="mb-4 flex items-center justify-center gap-3 py-5 text-sm text-r-muted">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-r-line border-t-r-gold" />
                Processing your payment securely...
              </div>

              <div className="flex items-center justify-between border-t border-r-line pt-6">
                <button
                  type="button"
                  id="rcsBackTo2"
                  className="rounded-[var(--radius-brand-control)] border border-r-line px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  id="paymentBtn"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                >
                  <ShieldCheck size={16} aria-hidden />
                  Pay ${solution.priceCard.price} &amp; Confirm Booking
                </button>
              </div>
            </div>

            {/* Success */}
            <div id="successScreen" style={{ display: "none" }} className="p-10 text-center sm:p-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-r-gold/15">
                <Check size={30} className="text-r-gold" aria-hidden />
              </div>
              <h3 className="text-2xl text-r-white">Booking Confirmed!</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-r-muted font-body normal-case">
                Your Retirement Certainty Session with Tim Berry has been booked and payment received. A confirmation
                email is on its way.
              </p>
              <div className="mx-auto mt-7 inline-block min-w-[280px] rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 text-left">
                <SuccessRow label="Date & Time (CST)"><span id="successDate">—</span></SuccessRow>
                <SuccessRow label="Self-Directed Retirement Specialist">Tim Berry</SuccessRow>
                <SuccessRow label={<>Confirmation sent to <span id="successEmail">—</span></>}><span id="successName">—</span></SuccessRow>
                <SuccessRow label="Via Square" last>${solution.priceCard.price}.00 Paid</SuccessRow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-bold text-r-white">
        {label} <span className="text-red-400">*</span>
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-[var(--radius-brand-control)] border border-r-line bg-r-bg px-3.5 py-2.5 text-sm text-r-white outline-none transition-colors focus:border-r-gold"
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  placeholder,
  options,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: [string, string][];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-bold text-r-white">
        {label} <span className="text-red-400">*</span>
      </label>
      <select
        id={id}
        required
        defaultValue=""
        className="w-full cursor-pointer rounded-[var(--radius-brand-control)] border border-r-line bg-r-bg px-3.5 py-2.5 text-sm text-r-white outline-none transition-colors focus:border-r-gold"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(([value, label2]) => (
          <option key={value} value={value}>
            {label2}
          </option>
        ))}
      </select>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: React.ReactNode; bold?: boolean }) {
  return (
    <div
      className={
        "flex items-center justify-between gap-3 py-1.5 text-sm " +
        (bold ? "mt-2 border-t border-r-line pt-3 font-bold text-r-white" : "text-r-white/80")
      }
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function SuccessRow({
  label,
  children,
  last,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={"flex items-center gap-3 text-sm text-r-white " + (last ? "" : "mb-3")}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-r-gold/15">
        <Check size={14} className="text-r-gold" aria-hidden />
      </span>
      <span>
        <strong className="font-semibold">{children}</strong>
        <br />
        <span className="text-xs text-r-muted">{label}</span>
      </span>
    </div>
  );
}
