"use client";
import { useEffect, useCallback, useRef } from "react";

function get_session_id(): string {
  if (typeof window === "undefined") return "";
  let sid = sessionStorage.getItem("hq_sid");
  if (!sid) {
    sid = crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("hq_sid", sid);
  }
  return sid;
}

export function track(event: string, page: string, label?: string, value?: string) {
  if (typeof window === "undefined") return;
  const body = {
    event,
    page,
    label: label || null,
    value: value || null,
    referrer: document.referrer || null,
    sessionId: get_session_id(),
  };
  // Fire and forget — never block navigation
  navigator.sendBeacon?.("/api/analytics/track", new Blob([JSON.stringify(body)], { type: "application/json" }))
    || fetch("/api/analytics/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(() => {});
}

export function useTrackPageView(page: string) {
  useEffect(() => {
    track("page_view", page);
  }, [page]);
}

export function useTrackScroll(page: string) {
  const maxScroll = useRef(0);
  useEffect(() => {
    const handler = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (pct > maxScroll.current && pct % 25 === 0) {
        maxScroll.current = pct;
        track("scroll", page, "depth", String(pct));
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [page]);
}

export function trackClick(label: string, page?: string) {
  track("click", page || window.location.pathname, label);
}

export function trackWhatsApp(source?: string) {
  track("whatsapp_open", window.location.pathname, source || "button");
}

export function trackReservationStart() {
  track("reservation_start", "/reservas", "started");
}

export function trackReservationStep(step: number, label?: string) {
  track("reservation_step", "/reservas", `step_${step}`, label);
}

export function trackReservationSend() {
  track("whatsapp_open", "/reservas", "reservation_confirm");
}
