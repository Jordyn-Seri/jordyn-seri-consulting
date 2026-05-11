## Goal
Allow users on mobile (and touch devices) to swipe left/right on the testimonial card to navigate between testimonials, in addition to the existing arrow buttons and auto-advance.

## Approach
Update `src/components/TestimonialsSection.tsx` to handle touch gestures on the testimonial card using framer-motion's built-in `drag` support (already a project dependency, v11.18.2). This avoids adding new libraries and stays consistent with the existing animation stack.

### Changes to `src/components/TestimonialsSection.tsx`
1. Add `drag="x"`, `dragConstraints={{ left: 0, right: 0 }}`, and `dragElastic={0.2}` to the existing `motion.div` testimonial card.
2. Add an `onDragEnd` handler that reads the swipe offset/velocity:
   - Swipe left (offset < -50px or velocity < -300) → call `next()`
   - Swipe right (offset > 50px or velocity > 300) → call `prev()`
3. Add `touch-pan-y` class so vertical page scrolling still works while horizontal swipes are captured.
4. Add `cursor-grab active:cursor-grabbing` for desktop affordance (subtle, optional).

### Behavior preserved
- Arrow buttons still work.
- Dot indicators still work.
- 18-second auto-advance timer still resets on each manual change (since `useEffect` depends on `current`, and `next()`/`prev()` update `current`).
- Animation direction (slide in from right / out to left) remains unchanged.

### No changes needed
- No new dependencies.
- No changes to other components or styling tokens.
