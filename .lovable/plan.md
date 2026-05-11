## Goal
When the user navigates backward (swipe right, prev arrow, or clicking a previous dot), the testimonial card should slide in from the left and exit to the right — mirroring the existing forward animation, which slides in from the right and exits to the left.

## Current behavior
In `src/components/TestimonialsSection.tsx`, the `motion.div` always uses:
- `initial={{ x: 40 }}` (enters from right)
- `exit={{ x: -40 }}` (exits to left)

So backward navigation looks identical to forward navigation, which feels wrong.

## Approach
Track the navigation direction and feed it into the animation variants.

### Changes to `src/components/TestimonialsSection.tsx`
1. Add a `direction` state (`1` for forward, `-1` for backward), default `1`.
2. Update `next()`, `prev()`, the auto-advance `setTimeout`, the dot click handler, and the swipe `onDragEnd` to set `direction` before changing `current`:
   - next / auto-advance / swipe-left / dot index greater than current → `1`
   - prev / swipe-right / dot index less than current → `-1`
3. Wrap `AnimatePresence` with `mode="wait"` (already set) and `custom={direction}`.
4. Convert the inline `initial`/`animate`/`exit` into `variants` that read `custom`:
   - `enter: (dir) => ({ opacity: 0, x: dir * 40 })`
   - `center: { opacity: 1, x: 0 }`
   - `exit: (dir) => ({ opacity: 0, x: dir * -40 })`
5. Pass `custom={direction}` to the `motion.div` as well so the variants resolve correctly on enter and exit.

No other files change. No new dependencies.
