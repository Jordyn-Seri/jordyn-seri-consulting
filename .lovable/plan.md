## Problem
On mobile, the page scrolls horizontally and the "Healthcare from Every Angle" section appears slightly cut off on the left.

## Root cause
In `src/components/ExperienceMapSection.tsx`, the `MobileTimeline` icon uses:
```
className="absolute -left-10 ..."
style={{ transform: "translateX(-50%)" }}
```
That places the icon ~60px to the left of the timeline column. Combined with the section's `px-4` (16px) container padding, the icon overflows the viewport by ~44px on the smallest phones, creating page-wide horizontal scroll.

## Fix
Edit `src/components/ExperienceMapSection.tsx` only:

1. Rework `MobileTimeline` so the icon sits inside the column instead of overflowing left:
   - Container: change `pl-10` → `pl-14` (room for the icon column).
   - Vertical line: keep at `left-5` (centered under the icon).
   - Icon: replace `absolute -left-10 top-0 ... translateX(-50%)` with `absolute left-0 top-0 -translate-x-1/2 ml-5` so the icon centers on the line at `left:5` without crossing the section's left edge.
   - Drop the now-unused `style={{ transform }}` (use Tailwind `-translate-x-1/2`).

2. Belt-and-suspenders: add `overflow-x-clip` to the `<section>` wrapper in `ExperienceMapSection` so any future stray overflow inside this section can't bleed out and cause page-level horizontal scrolling.

No other files change. No new dependencies. Desktop layout is untouched.
