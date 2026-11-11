---
name: daily-venture-run
description: The automated daily Venture Lab run. Scans the Research Radar sources for new ideas, scores the next queued idea, logs a Daily Report on the dashboard, pushes and republishes. Use when a scheduled routine fires or the user says "run today's venture research".
---

# Daily Venture Lab run

## Budget (user rule)
User set 3 ideas per day (2026-11-11): score up to **three** queued ideas per run, at most ~20 `standard` web searches in total (≤3 radar, ≤6 per idea). If the queue runs short, top it up from the radar scan first. Ideas under 50 get a one-line reason, no more research.

## Steps
1. **Repo**: work in the Golpher repo. Branch: `claude/ai-business-research-dashboard-2igb8y`. If its PR (#18) is merged, restart the branch from `main` (`git fetch origin main && git checkout -B <branch> origin/main`) and keep it for daily commits.
2. **Radar scan (≤3 searches)**: check the sources in the `RADAR` array in `venture-lab/index.html` (Greg Isenberg, Chris Koerner, My First Million, Starter Story, Dan Koe, Liam Ottley, Nick Saraev, Nate Herk, KVK Automates, Authority Hacker, Codie Sanchez, Nick Huber, Acquiring Minds, JackQuisitions, Alex Hormozi, Calum Johnson, Diary of a CEO, UK trade press) for episodes from the last 7 days with a new AI / agentic business model. Add genuinely new ideas to `QUEUE` (no duplicates of `IDEAS` or `QUEUE`).
0. **Base on the live page**: read the live artifact (`action: "read"`, url below) and, if it is newer than the repo copy (more `REPORTS` entries), copy its page content (from `<title>` to the end of the closing `</script>`) over `venture-lab/index.html` before editing. The live page is the source of truth because pushes can fail.
3. **Score (≤6 searches each, up to 3 ideas)**: take the first three `QUEUE` items one at a time and follow the `score-business-idea` skill: add it to `IDEAS`, remove it from `QUEUE`.
4. **Log**: prepend an object to `REPORTS` in `venture-lab/index.html`:
   `{date:"YYYY-MM-DD", headline:"<one line>", scored:[[name,score,verdict]], radar:["<new sources/ideas found>"], next:"<what tomorrow's run will do>"}`.
5. **Check**: load the page once with Playwright (no console errors, no horizontal scroll at 390px).
6. **Ship**: commit, `git push -u origin <branch>`, then republish the dashboard with the Artifact tool using `url: https://claude.ai/artifact/WSUa7ACogtU9c8vZB4689U` (read it first with `action: "read"`, then publish the local `venture-lab/index.html` to that url).
7. **Report**: end with 3–5 lines: each idea scored, its score and verdict, and anything 75+ that needs the user's attention. If an idea scores 75+, call it out first.

If the push is refused (repo not authorised for the routine), do not retry: republishing the artifact still saves the day's work, and the next session that has repo access syncs it into git. Say in one line that the push was skipped.
If another step is blocked, still finish the others and say exactly what was blocked.
