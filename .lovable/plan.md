## Plan: Add "Consulting Firms" to Who I Help

Add a fourth card to `src/components/WhoIHelpSection.tsx` representing consulting firms that serve startups, clinics, and community orgs.

### Changes

In `src/components/WhoIHelpSection.tsx`:

1. Add a new icon import from `lucide-react` — `Briefcase` (fits a consulting firm).
2. Append a 4th entry to the `cards` array:
   - **icon:** `Briefcase`
   - **title:** "Consulting Firms"
   - **description:** "Partner as a contract resource to extend your team's capacity across startup, clinic, and community-org engagements."
3. Update the grid to fit 4 cards on wide screens: change `grid md:grid-cols-3` → `grid md:grid-cols-2 lg:grid-cols-4`, and bump `max-w-5xl` → `max-w-6xl` so cards don't get cramped.

No other files affected.
