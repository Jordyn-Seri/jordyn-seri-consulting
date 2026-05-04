## Goal

Replace the current "Schedule a Consult" behavior (which opens the internal `ContactFormDialog`) with the Koalendar popup widget, while keeping the existing lime-green button styling.

## Approach

Koalendar's widget script (`https://koalendar.com/assets/widget.js`) auto-binds to any element with the `data-koalendar-widget` attribute pointing at a Koalendar URL. When clicked, it opens an in-page popup overlay — no navigation away from the site.

We'll load the script once globally, and convert the existing buttons into anchor-style buttons that the widget hooks into. We will NOT remove the contact form modal/context yet (it's wired into other pieces, and this request only touches the consult buttons), but the buttons will no longer call `openContactForm`.

### Changes

**1. `index.html`** — Add the Koalendar loader scripts in `<head>` (or end of `<body>`):
```html
<script>window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};</script>
<script async src="https://koalendar.com/assets/widget.js"></script>
<script>Koalendar('init');</script>
```

**2. `src/components/HeroSection.tsx`** — Replace the `<Button onClick={openContactForm}>` with a Button rendered `asChild` wrapping an `<a>` that has the Koalendar attributes. Keep all existing classes (`rounded-full px-8 text-base gap-2 bg-olive border border-secondary-foreground`) so the lime-green styling is preserved. Remove the now-unused `useContactForm` import/call in this file.

```tsx
<Button asChild size="lg" className="rounded-full px-8 text-base gap-2 bg-olive border border-secondary-foreground">
  <a
    href="https://koalendar.com/e/meet-with-jordyn"
    data-koalendar-widget
    data-koa-type="link"
  >
    Schedule a Consult <ArrowRight size={18} />
  </a>
</Button>
```

**3. `src/components/Navbar.tsx`** — Same treatment for both the desktop and mobile "Schedule a Consult" buttons. Use `asChild` + `<a>` with the Koalendar data attributes, keep `bg-olive` classes intact. For the mobile one, also close the mobile menu via `onClick` on the anchor. Remove the `useContactForm` import/call from this file.

### Notes

- The Koalendar script is async and idempotent thanks to the `Koalendar.props` queue, so loading it once in `index.html` is safe.
- The internal `ContactFormDialog` and `ContactFormProvider` stay in place untouched (no other consumers exist today, but leaving them avoids scope creep — happy to remove them in a follow-up if you'd like).
- Lime-green styling is preserved by keeping the existing `bg-olive` Button classes; we are only swapping the click behavior, not the visual.

### Files touched

- `index.html`
- `src/components/HeroSection.tsx`
- `src/components/Navbar.tsx`
