---
name: daily-venture-run
description: The automated daily Venture Lab run. Scans the Research Radar sources for new ideas, scores the next queued idea, logs a Daily Report on the dashboard, pushes and republishes. Use when a scheduled routine fires or the user says "run today's venture research".
---

# Daily Venture Lab run

## Budget (user rule)
Stay within ~9% of weekly usage for the whole run: at most 8 `standard` web searches, and score **one** idea per day (two only if the first scores under 50 and stops early). Ideas under 50 get a one-line reason, no more research.

## Steps
1. **Repo**: work in the Golpher repo. Branch: `claude/ai-business-research-dashboard-2igb8y`. If its PR (#18) is merged, restart the branch from `main` (`git fetch origin main && git checkout -B <branch> origin/main`) and keep it for daily commits.
2. **Radar scan (≤3 searches)**: check the sources in the `RADAR` array in `venture-lab/index.html` (Greg Isenberg, Chris Koerner, My First Million, Starter Story, Dan Koe, Liam Ottley, Nick Saraev, Nate Herk, KVK Automates, Authority Hacker, Codie Sanchez, Nick Huber, Acquiring Minds, JackQuisitions, Alex Hormozi, Calum Johnson, Diary of a CEO, UK trade press) for episodes from the last 7 days with a new AI / agentic business model. Add genuinely new ideas to `QUEUE` (no duplicates of `IDEAS` or `QUEUE`).
3. **Score (≤5 searches)**: take the first `QUEUE` item and follow the `score-business-idea` skill: add it to `IDEAS`, remove it from `QUEUE`.
4. **Log**: prepend an object to `REPORTS` in `venture-lab/index.html`:
   `{date:"YYYY-MM-DD", headline:"<one line>", scored:[[name,score,verdict]], radar:["<new sources/ideas found>"], next:"<what tomorrow's run will do>"}`.
5. **Check**: load the page once with Playwright (no console errors, no horizontal scroll at 390px).
6. **Ship**: commit, `git push -u origin <branch>`, then republish the dashboard with the Artifact tool using `url: https://claude.ai/artifact/WSUa7ACogtU9c8vZB4689U` (read it first with `action: "read"`, then publish the local `venture-lab/index.html` to that url).
7. **Report**: end with 3–4 lines: the idea scored, its score and verdict, and anything 75+ that needs the user's attention. If an idea scores 75+, call it out first.

If a step is blocked (no GitHub access, artifact publish refused), still finish the others and say exactly what was blocked.
