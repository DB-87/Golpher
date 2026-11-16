---
name: prospect-audit
description: Build a targeted UK prospect list for a Venture Lab business (niche + town) and generate a short personalised audit per prospect for outreach. Use in the Pilot phase or when the user says "find me clients / leads / prospects for <business>".
---

# Prospect list + personalised audit

## Inputs
Ask only if missing: business model (from `venture-lab/index.html` IDEAS), niche, town/region, number of prospects (default 25).

## Steps
1. Find businesses in the niche + town via web search (Google Maps listings, directories, trade bodies). Capture: name, website, phone, Google rating, review count, obvious gaps.
2. Score each prospect 1–5 for fit to the chosen model:
   - Reactivation: established 3+ yrs, booking-based, active social but quiet recently.
   - Reviews: rating < 4.6 or fewer reviews than the top 3 local competitors.
   - MTD: landlords / sole traders, no accountant listed, new to MTD threshold.
   - Receptionist: single-operator trade, mobile number only, no out-of-hours cover.
3. For the top prospects write a 5-line audit: one observed fact, the cost of the gap, the fix, a proof point, a soft call to action.
4. Save to `venture-lab/prospects/<model>-<town>-<yyyy-mm-dd>.csv` (columns: name, website, phone, rating, reviews, fit, gap, audit).

## Compliance
- Only use publicly listed business contact details.
- PECR: cold email to limited companies is fine with an opt-out; sole traders/partnerships need consent — flag them as "call, don't email".
- Never invent reviews, figures or case studies.

Keep the user-facing reply to the file path and the top 5 prospects.
