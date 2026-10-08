"use client";

import { useEffect } from "react";
import { generateEventId, trackPixelEvent } from "@/lib/tracking";

export function RcsViewContentTracker() {
  useEffect(() => {
    trackPixelEvent(
      "ViewContent",
      { content_name: "Self-Directed Certainty Session", content_type: "product", value: 0.5, currency: "USD" },
      generateEventId()
    );
  }, []);

  return null;
}
