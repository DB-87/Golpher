---
name: day60-review
description: Run the Venture Lab decision gate on a business test — Scale, Iterate or Kill — from the user's real numbers. Use at day 30/60 of a test, or when the user asks "should I keep going with X?" or shares client/revenue figures.
---

# Day-60 decision gate

## Collect (ask in one short message if missing)
Per business: paying clients, monthly revenue, direct costs, hours per client per month, qualified conversations held, pilots run, churned clients.
If the Xero connector is available, offer to pull revenue and costs from it instead.

## Gate
- **Scale**: 3+ paying clients AND gross margin ≥ 60% AND ≤ 4 hrs/client/month.
- **Iterate 30 days**: 1–2 paying clients, or strong pilot results with weak conversion. Change niche or price, not the model.
- **Kill**: 0 paying clients after 100 qualified conversations.

## Output
1. A verdict per business with the deciding numbers.
2. One concrete next action each (who to hire, which niche to switch to, what to automate).
3. Update the business's report in `venture-lab/index.html`: add a `status` line to its `summary` (e.g. "Day 60: Scale — 4 clients, £1.9k MRR") and, if real numbers change the picture, adjust its `crit` scores and explain why in `econNote`.
4. Commit, push, republish the artifact. Reply in 3–5 lines.
