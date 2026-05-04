## Goal

Make both "Schedule a Consult" buttons open the Koalendar calendar as a true in-page overlay popup (no navigation, no new tab) while keeping the lime-green styling.

## Why the current behavior navigates

The current buttons use `<a href="https://koalendar.com/e/meet-with-jordyn" data-koalendar-widget>`. Koalendar's `data-koalendar-widget` auto-binding sometimes doesn't intercept clicks on React-rendered anchors before the browser follows the `href`, which is why you're seeing a navigation. The reliable approach is to call Koalendar's JavaScript API directly: `Koalendar('open', { url: '...' })`.

## Approach

1. Add a small helper `src/lib/koalendar.ts` that wraps the Koalendar JS SDK:
   ```ts
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
   ```
   The fallback only fires if the script hasn't loaded yet (rare).

2. Update `src/components/HeroSection.tsx`:
   - Replace the `<Button asChild><a href=… data-koalendar-widget>` with a regular `<Button onClick={openKoalendar}>`.
   - Keep all classes (`rounded-full px-8 text-base gap-2 bg-olive border border-secondary-foreground`).

3. Update `src/components/Navbar.tsx` for both desktop and mobile consult buttons:
   - Replace the anchor-based markup with `<Button onClick={openKoalendar}>` (mobile also calls `setMobileOpen(false)`).
   - Keep `bg-olive` and other existing classes.

4. Leave `index.html` as-is — the Koalendar loader script added previously is exactly what `Koalendar('open', …)` needs.

### Files touched

- `src/lib/koalendar.ts` (new)
- `src/components/HeroSection.tsx`
- `src/components/Navbar.tsx`
