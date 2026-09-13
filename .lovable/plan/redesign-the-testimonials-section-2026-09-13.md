## Redesign the Testimonials section

Make the "What Others Say" section look cooler and more cohesive with the rest of the site while keeping all current behavior.

### Design direction (locked from your picks)
- **Background:** dark midnight (`bg-background`, #111827) so the section matches the surrounding dark theme instead of the current teal block.
- **Cards:** glassmorphism — translucent dark card (`bg-card/40` or similar), `backdrop-blur-xl`, thin `border-primary/20`, lime quote mark and active accents.
- **Layout:** stacked horizontal carousel. Cards sit in a row, the active card is centered/full, adjacent cards peek at the edges, and the row snaps to each card. Keep the previous/next arrows and dot indicators below.
- **Typography:** Inter everywhere, no serifs. Quote text stays large and readable; drop the justified/italic wall-of-text feel for a cleaner left-aligned or centered quote.

### What changes
In `src/components/TestimonialsSection.tsx` only:

1. **Section background**
   - Replace `bg-secondary` with `bg-background`.
   - Add a subtle gradient accent behind the carousel using the site's accent colors (lime → teal → cyan), similar to the gradient line in the Experience section — e.g. large blurred radial orbs or a soft linear wash — so the dark section isn't flat.
   - Keep transitions crisp; no heavy dividers that look like a separate band.

2. **Card styling**
   - Convert the single absolute card into a horizontally scrollable/snap row of glass cards.
   - Each card: `bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 sm:p-12 shadow-lg`.
   - Large lime quote icon (`Quote` from lucide-react) at top, but more subtle (e.g. `text-primary/30`).
   - Name and role centered or left-aligned with lime role text.

3. **Layout / carousel**
   - Render all testimonials in a flex row with `overflow-x-auto snap-x snap-mandatory` and hide the scrollbar.
   - Each card is `flex-shrink-0 w-full md:w-[85%] lg:w-[70%]` so neighboring cards peek in on larger screens.
   - Center the active card using scroll-snap.
   - Keep the existing previous/next buttons; make them scroll the container by one card width instead of swapping React state.
   - Keep dot indicators; clicking a dot scrolls to that card.

4. **Preserve existing behavior**
   - 18-second auto-advance timer (pause while user is interacting/hovering optional but preferred).
   - Swipe/drag to change slides.
   - Direction-aware slide animation (backward motion aligns visually).
   - Static section/card height so content doesn't resize between slides.
   - `aria-label`s and keyboard focus remain intact.

5. **Responsive**
   - Mobile: full-width cards, swipe is primary navigation.
   - Desktop: peeking adjacent cards, arrows and dots still visible.

### Out of scope
- No new dependencies.
- No changes to testimonial copy or timing.
- No changes to other sections or the navbar.
