# Add "Mission-Driven. Outcome-Focused." to the hero

## Goal
Add the phrase "Mission-Driven. Outcome-Focused." to the hero section so it reads as a signature line, without crowding the existing content.

## Placement
- Place it directly under the hero headline ("I develop targeted solutions. You focus on the work that matters."), as a short accent tagline above the descriptive paragraph.
- Keep it out of the navbar: the logo already pairs "Jordyn Seri, PMP" with nav links and the consult button, and adding text there would crowd it.

## Styling (HeroSection.tsx)
- Small, uppercase, letter-spaced line in the olive/lime accent color — consistent with the existing badge treatment.
- Fades in with the same Framer Motion stagger (delayed slightly after the headline) so it feels part of the existing entrance animation.
- Slightly tighten the gap between the headline and the paragraph so the hero keeps its current visual rhythm.
- No changes to the badge, paragraph copy, buttons, or any other section.

## Files touched
- src/components/HeroSection.tsx
