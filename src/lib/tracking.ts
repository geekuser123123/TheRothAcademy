// Meta Pixel + attribution capture for the Roth Academy site.
// Server-side Conversions API calls (Lead / InitiateCheckout / Purchase) are
// sent from n8n using the same event IDs generated here, so browser and
// server events deduplicate in Meta instead of double-counting.

export const META_PIXEL_ID = "1657851702606065";

const STORAGE_KEYS = {
  visitorId: "ra_visitor_id",
  firstTouch: "ra_first_touch",
  lastTouch: "ra_last_touch",
} as const;

const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "campaign_id",
  "adset_id",
  "ad_id",
  "placement",
  "site_source_name",
] as const;

export type TouchAttribution = {
  landing_url: string;
  referrer: string;
  fbclid: string;
  timestamp: string;
} & Record<(typeof UTM_PARAM_KEYS)[number], string>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : "";
}

function readCurrentTouch(): TouchAttribution {
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get("fbclid") ?? "";

  const utms = UTM_PARAM_KEYS.reduce((acc, key) => {
    acc[key] = params.get(key) ?? "";
    return acc;
  }, {} as Record<(typeof UTM_PARAM_KEYS)[number], string>);

  return {
    landing_url: window.location.href,
    referrer: document.referrer || "",
    fbclid,
    timestamp: new Date().toISOString(),
    ...utms,
  };
}

// Builds Meta's documented _fbc cookie format (fb.1.<timestamp>.<fbclid>) when
// the Pixel hasn't already set one but a fresh fbclid is present in the URL.
function ensureFbc(fbclid: string): string {
  const existing = getCookie("_fbc");
  if (existing) return existing;
  if (!fbclid) return "";
  const constructed = `fb.1.${Date.now()}.${fbclid}`;
  try {
    document.cookie = `_fbc=${constructed}; path=/; max-age=${60 * 60 * 24 * 90}`;
  } catch {
    // Cookie write can fail in locked-down environments; safe to ignore.
  }
  return constructed;
}

function getOrCreateVisitorId(): string {
  try {
    const existing = localStorage.getItem(STORAGE_KEYS.visitorId);
    if (existing) return existing;
    const id = generateEventId();
    localStorage.setItem(STORAGE_KEYS.visitorId, id);
    return id;
  } catch {
    return generateEventId();
  }
}

// Call once on every page load. Writes last-touch every time, but only
// writes first-touch if it has never been set for this visitor.
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const current = readCurrentTouch();
    localStorage.setItem(STORAGE_KEYS.lastTouch, JSON.stringify(current));

    // First-touch is write-once: record it on the very first visit, even a
    // direct one with no UTMs, and never overwrite it afterward.
    if (!localStorage.getItem(STORAGE_KEYS.firstTouch)) {
      localStorage.setItem(STORAGE_KEYS.firstTouch, JSON.stringify(current));
    }

    ensureFbc(current.fbclid);
    getOrCreateVisitorId();
  } catch {
    // localStorage can throw in private browsing / blocked storage — tracking
    // degrades gracefully rather than breaking the page.
  }
}

export type AttributionSnapshot = {
  visitor_id: string;
  fbp: string;
  fbc: string;
  first_touch: TouchAttribution | null;
  last_touch: TouchAttribution | null;
};

// Reads back everything captured so far, for attaching to the booking
// payload sent to n8n (which forwards it into the internal attribution
// record and the server-side Conversions API calls).
export function getAttributionSnapshot(): AttributionSnapshot {
  if (typeof window === "undefined") {
    return { visitor_id: "", fbp: "", fbc: "", first_touch: null, last_touch: null };
  }
  try {
    const firstTouchRaw = localStorage.getItem(STORAGE_KEYS.firstTouch);
    const lastTouchRaw = localStorage.getItem(STORAGE_KEYS.lastTouch);
    return {
      visitor_id: localStorage.getItem(STORAGE_KEYS.visitorId) ?? "",
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      first_touch: firstTouchRaw ? (JSON.parse(firstTouchRaw) as TouchAttribution) : null,
      last_touch: lastTouchRaw ? (JSON.parse(lastTouchRaw) as TouchAttribution) : null,
    };
  } catch {
    return { visitor_id: "", fbp: "", fbc: "", first_touch: null, last_touch: null };
  }
}

// Fires a Meta Pixel event. Pass the same eventId used for the matching
// server-side Conversions API call so Meta deduplicates the pair.
export function trackPixelEvent(eventName: string, params?: Record<string, unknown>, eventId?: string): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (eventId) {
    window.fbq("track", eventName, params ?? {}, { eventID: eventId });
  } else {
    window.fbq("track", eventName, params ?? {});
  }
}

// GA4 wrapper. Safe no-op until a Measurement ID is installed — call sites
// don't need to change once GA4 is added.
export function trackGA4Event(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params ?? {});
}
