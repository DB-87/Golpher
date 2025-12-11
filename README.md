# Golpher

A lightweight, modern web app that curates four golf-course options near a user-supplied location and date:

- **Budget pick**
- **Mid-tier option**
- **Best course**
- **Hidden gem**

Each recommendation includes the best available GolfNow price with a booking link.

## Running the app

No build step is required. Open `index.html` in any modern browser, then:

1. Choose your play date.
2. Enter a supported city or ZIP/postcode (examples: `10001`, `94105`, `Austin`, `London`).
3. Pick a search radius (10 / 25 / 50 miles).
4. Review the curated cards and click through to GolfNow for tee times.

Location matching is backed by a small on-page lookup for common U.S. and U.K. cities/ZIP codes; out-of-scope inputs will prompt for a supported option.
