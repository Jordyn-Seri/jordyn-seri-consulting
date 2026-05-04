// Helper to open the Koalendar booking page as an in-page overlay popup
// (uses the Koalendar JS SDK loaded in index.html)
declare global {
  interface Window {
    Koalendar?: (action: string, options?: Record<string, unknown>) => void;
  }
}

export const KOALENDAR_URL = "https://koalendar.com/e/meet-with-jordyn";

export const openKoalendar = (e?: { preventDefault?: () => void }) => {
  e?.preventDefault?.();
  if (typeof window !== "undefined" && typeof window.Koalendar === "function") {
    window.Koalendar("open", { url: KOALENDAR_URL });
  } else {
    window.open(KOALENDAR_URL, "_blank", "noopener,noreferrer");
  }
};
