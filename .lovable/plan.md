## Goal
Stop the testimonial card from resizing as the user switches between slides. The container should reserve enough vertical space for the longest testimonial so all slides occupy the same height.

## Current behavior
In `src/components/TestimonialsSection.tsx`, the `motion.div` card sizes itself to whatever testimonial is currently rendered. Because testimonials vary in length (Charles Moore and Tamar Sapir are long; Alexander Wise is short), the card visibly grows and shrinks during transitions.

## Approach
Reserve a minimum height on the card's wrapper so it always matches the tallest testimonial. Use a responsive `min-h` that scales with breakpoint to avoid wasted whitespace on mobile.

### Changes to `src/components/TestimonialsSection.tsx`
1. On the `<div className="relative">` wrapper that contains the `AnimatePresence`, add `min-h-[...]` classes (responsive: smaller on mobile where the text wraps more). Approximate values: `min-h-[520px] sm:min-h-[460px] lg:min-h-[420px]`.
2. Make the inner `motion.div` card stretch to fill: add `h-full` and use flex column with `justify-center` so short testimonials stay vertically centered inside the reserved space.
3. Wrap the card in an absolutely-positioned layer (`absolute inset-0`) so the AnimatePresence transitions don't push the dot/arrow controls — the wrapper keeps the reserved height while the card swaps inside it.

### Result
- Card height is constant across all slides.
- Short testimonials are centered in the reserved space; long ones still fit.
- Arrow buttons and dots stay in a fixed position below the card.

No other files change. No new dependencies.
