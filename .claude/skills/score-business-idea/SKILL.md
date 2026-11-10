---
name: score-business-idea
description: Research and score a new AI / agentic business model for the UK market and add it to the Venture Lab dashboard. Use when the user names a business idea, a YouTube/podcast source (Koerner, Isenberg, Calum Johnson, Codie Sanchez etc.) or asks "is X viable in the UK?".
---

# Score a business idea

## Rules (from the user)
- Research budget: keep to ~9% of weekly usage per day unless told otherwise. Aim for 4–8 `standard` web searches per idea; batch them in one turn.
- Score under 50 = **Not viable**. Stop researching: record a one-line reason only.
- Score 75+ = **Investigate**. Do the full report.
- Messages to the user: short. Output lives in the dashboard.

## Rubric (each criterion 0–10, × weight, sum to 100)
| Key | Criterion | Weight |
|---|---|---|
| demand | UK demand | 20 |
| comp | Competition gap (10 = empty market) | 15 |
| margin | Profit margin | 20 |
| speed | Speed to first £ / payback | 15 |
| cost | Low startup cost | 10 |
| auto | Automation level | 10 |
| reg | UK regulatory fit (PECR, UK GDPR, DMCC Act, AML, FCA, sector rules) | 10 |

## Where to look
Start with the creators in the `RADAR` array in `venture-lab/index.html` (AI startup ideas, automation builders, boring-business/acquisition, UK lens). Unscored candidates live in `QUEUE`; remove an idea from `QUEUE` once it is scored.

## Research checklist
1. Source idea: what the creator actually proposed (episode title / summary).
2. UK market size and demand signals (ONS, gov.uk, trade bodies).
3. UK competitors and their published prices.
4. Unit economics: price, costs per client, net — worked example.
5. UK rules that apply (ICO/PECR, AML supervision, CMA/DMCC, FCA, Ofcom).
6. 3–5 exploitable niches with a one-line reason each.
Treat vendor-blog figures as indicative and say so.

## Add to the dashboard
Edit `venture-lab/index.html`, append an object to `IDEAS` with the same shape as existing entries:
`id, name, color (unused hue), crit{}, tagline, inspo, stats{Startup,Price,Margin,"First £",Payback}, summary, market[], competition[], econ[[label,value]] (first row = heading, last = net), econNote, pros[], cons[], reg, niches[[name,why]], pipeline[], workflow[[step,detail,when]], stack[]`.
For <50 ideas use only `id, name, color, crit, tagline, why`.
Add new sources to the `src` list in `method()`. Scores are computed automatically.

Then commit, push, and republish the artifact from the same file path. Reply with the score, verdict and one-line reason.
