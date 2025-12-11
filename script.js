const locationLookup = {
  '10001': { city: 'New York, NY', lat: 40.7506, lon: -73.9971 },
  '11211': { city: 'Brooklyn, NY', lat: 40.7139, lon: -73.9511 },
  '94105': { city: 'San Francisco, CA', lat: 37.7898, lon: -122.3942 },
  '60601': { city: 'Chicago, IL', lat: 41.8853, lon: -87.6216 },
  '73301': { city: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  '75201': { city: 'Dallas, TX', lat: 32.7767, lon: -96.797 },
  '33101': { city: 'Miami, FL', lat: 25.7617, lon: -80.1918 },
  '90001': { city: 'Los Angeles, CA', lat: 34.0522, lon: -118.2437 },
  '30301': { city: 'Atlanta, GA', lat: 33.749, lon: -84.388 },
  '73344': { city: 'Round Rock, TX', lat: 30.5083, lon: -97.6789 },
  london: { city: 'London, UK', lat: 51.5072, lon: -0.1276 },
  edinburgh: { city: 'Edinburgh, UK', lat: 55.9533, lon: -3.1883 },
  dublin: { city: 'Dublin, IE', lat: 53.3498, lon: -6.2603 },
  miami: { city: 'Miami, FL', lat: 25.7617, lon: -80.1918 },
  austin: { city: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  dallas: { city: 'Dallas, TX', lat: 32.7767, lon: -96.797 },
  chicago: { city: 'Chicago, IL', lat: 41.8781, lon: -87.6298 },
  'new york': { city: 'New York, NY', lat: 40.7128, lon: -74.006 },
  brooklyn: { city: 'Brooklyn, NY', lat: 40.6782, lon: -73.9442 },
  atlanta: { city: 'Atlanta, GA', lat: 33.749, lon: -84.388 },
  la: { city: 'Los Angeles, CA', lat: 34.0522, lon: -118.2437 },
  'los angeles': { city: 'Los Angeles, CA', lat: 34.0522, lon: -118.2437 },
  sf: { city: 'San Francisco, CA', lat: 37.7749, lon: -122.4194 },
  'san francisco': { city: 'San Francisco, CA', lat: 37.7749, lon: -122.4194 },
};

const courses = [
  {
    name: 'Hudson Links',
    city: 'New York, NY',
    zip: '10001',
    lat: 40.785, lon: -73.968,
    rating: 4.6,
    price: 120,
    golfNowPrice: 98,
    url: 'https://www.golfnow.com/tee-times/facility/hudson-links',
    vibe: 'Parkland classic with skyline peeks',
    gem: false,
  },
  {
    name: 'Brookside Municipal',
    city: 'Brooklyn, NY',
    zip: '11211',
    lat: 40.699, lon: -73.966,
    rating: 4.0,
    price: 52,
    golfNowPrice: 45,
    url: 'https://www.golfnow.com/tee-times/facility/brookside-muni',
    vibe: 'Playable tree-lined muni with quick greens',
    gem: true,
  },
  {
    name: 'Golden Gate Cliffs',
    city: 'San Francisco, CA',
    zip: '94105',
    lat: 37.8079, lon: -122.4779,
    rating: 4.8,
    price: 215,
    golfNowPrice: 189,
    url: 'https://www.golfnow.com/tee-times/facility/golden-gate-cliffs',
    vibe: 'Ocean vistas, firm fairways, links-style challenge',
    gem: false,
  },
  {
    name: 'Mission Bay Links',
    city: 'San Francisco, CA',
    zip: '94107',
    lat: 37.7689, lon: -122.387,
    rating: 4.3,
    price: 105,
    golfNowPrice: 92,
    url: 'https://www.golfnow.com/tee-times/facility/mission-bay-links',
    vibe: 'Urban links with wide landing areas and breeze',
    gem: true,
  },
  {
    name: 'Lake Shore Club',
    city: 'Chicago, IL',
    zip: '60601',
    lat: 41.8985, lon: -87.623,
    rating: 4.7,
    price: 160,
    golfNowPrice: 142,
    url: 'https://www.golfnow.com/tee-times/facility/lake-shore-club',
    vibe: 'Bold bunkering, immaculate conditioning, skyline views',
    gem: false,
  },
  {
    name: 'Prairie Dunes Muni',
    city: 'Chicago, IL',
    zip: '60616',
    lat: 41.847, lon: -87.623,
    rating: 4.1,
    price: 58,
    golfNowPrice: 49,
    url: 'https://www.golfnow.com/tee-times/facility/prairie-dunes-muni',
    vibe: 'Fast rounds, approachable greens, friendly staff',
    gem: false,
  },
  {
    name: 'Barton Hills Reserve',
    city: 'Austin, TX',
    zip: '73301',
    lat: 30.263, lon: -97.75,
    rating: 4.9,
    price: 185,
    golfNowPrice: 165,
    url: 'https://www.golfnow.com/tee-times/facility/barton-hills-reserve',
    vibe: 'Hill country views with dramatic elevation changes',
    gem: false,
  },
  {
    name: 'Zilker Park Muni',
    city: 'Austin, TX',
    zip: '73344',
    lat: 30.266, lon: -97.763,
    rating: 4.2,
    price: 48,
    golfNowPrice: 39,
    url: 'https://www.golfnow.com/tee-times/facility/zilker-park-muni',
    vibe: 'Walkable parkland with creative short holes',
    gem: true,
  },
  {
    name: 'Everglades Pines',
    city: 'Miami, FL',
    zip: '33101',
    lat: 25.798, lon: -80.181,
    rating: 4.5,
    price: 132,
    golfNowPrice: 118,
    url: 'https://www.golfnow.com/tee-times/facility/everglades-pines',
    vibe: 'Lush paspalum fairways and water on 12 holes',
    gem: false,
  },
  {
    name: 'Biscayne Breeze',
    city: 'Miami, FL',
    zip: '33132',
    lat: 25.790, lon: -80.187,
    rating: 4.0,
    price: 69,
    golfNowPrice: 59,
    url: 'https://www.golfnow.com/tee-times/facility/biscayne-breeze',
    vibe: 'Playable resort-style layout with forgiving landing areas',
    gem: false,
  },
  {
    name: 'Northstar Trails',
    city: 'Dallas, TX',
    zip: '75201',
    lat: 32.800, lon: -96.8,
    rating: 4.4,
    price: 115,
    golfNowPrice: 102,
    url: 'https://www.golfnow.com/tee-times/facility/northstar-trails',
    vibe: 'Breezy prairie routing with modern bunkering',
    gem: true,
  },
  {
    name: 'Trinity Flats',
    city: 'Dallas, TX',
    zip: '75207',
    lat: 32.784, lon: -96.819,
    rating: 4.6,
    price: 140,
    golfNowPrice: 126,
    url: 'https://www.golfnow.com/tee-times/facility/trinity-flats',
    vibe: 'Championship conditioning and slick greens',
    gem: false,
  },
  {
    name: 'Caledonian Heath',
    city: 'Edinburgh, UK',
    zip: 'EH1',
    lat: 55.95, lon: -3.19,
    rating: 4.7,
    price: 130,
    golfNowPrice: 118,
    url: 'https://www.golfnow.com/tee-times/facility/caledonian-heath',
    vibe: 'Firm, fast links with North Sea wind considerations',
    gem: false,
  },
  {
    name: 'Firthside Links',
    city: 'Edinburgh, UK',
    zip: 'EH6',
    lat: 55.98, lon: -3.18,
    rating: 4.3,
    price: 72,
    golfNowPrice: 64,
    url: 'https://www.golfnow.com/tee-times/facility/firthside-links',
    vibe: 'Coastal gem with quirky greens and sea breezes',
    gem: true,
  },
  {
    name: 'Royal Thames Downs',
    city: 'London, UK',
    zip: 'SW1',
    lat: 51.507, lon: -0.127,
    rating: 4.8,
    price: 210,
    golfNowPrice: 189,
    url: 'https://www.golfnow.com/tee-times/facility/royal-thames-downs',
    vibe: 'Rolling heathland with immaculate fescue fairways',
    gem: false,
  },
  {
    name: 'Greenwich Park Golf',
    city: 'London, UK',
    zip: 'SE10',
    lat: 51.482, lon: -0.006,
    rating: 4.1,
    price: 76,
    golfNowPrice: 67,
    url: 'https://www.golfnow.com/tee-times/facility/greenwich-park-golf',
    vibe: 'Accessible routing with elevated tees and skyline views',
    gem: true,
  },
];

const tagMap = {
  budget: { label: 'Budget pick', class: 'tag--budget' },
  mid: { label: 'Mid-tier', class: 'tag--mid' },
  best: { label: 'Best course', class: 'tag--best' },
  gem: { label: 'Hidden gem', class: 'tag--gem' },
};

const form = document.getElementById('searchForm');
const resultsSection = document.getElementById('results');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const locationInput = document.getElementById('location').value.trim();
  const radius = Number(document.getElementById('radius').value);
  const playDate = document.getElementById('playDate').value;

  const resolved = resolveLocation(locationInput);
  if (!resolved) {
    renderMessage(`We couldn't recognize "${locationInput}" yet. Try a nearby city or ZIP from the list: New York, Brooklyn, San Francisco, Austin, Dallas, Miami, Chicago, Atlanta, Los Angeles, London, Edinburgh, Dublin.`);
    return;
  }

  const filtered = filterByRadius(resolved, radius);
  if (!filtered.length) {
    renderMessage(`No courses within ${radius} miles of ${resolved.city}. Try expanding your radius.`);
    return;
  }

  const picks = pickCourses(filtered);
  renderCards(picks, playDate, resolved.city, radius);
});

function resolveLocation(input) {
  const key = input.toLowerCase();
  if (locationLookup[key]) return locationLookup[key];
  const numeric = key.replace(/\D/g, '');
  if (numeric && locationLookup[numeric]) return locationLookup[numeric];
  return null;
}

function filterByRadius(location, radiusMiles) {
  return courses
    .map((course) => {
      const distance = haversineMiles(location.lat, location.lon, course.lat, course.lon);
      return { ...course, distance: Math.round(distance * 10) / 10 };
    })
    .filter((course) => course.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance);
}

function pickCourses(list) {
  if (!list.length) return [];
  const sortedByPrice = [...list].sort((a, b) => a.price - b.price);
  const sortedByRating = [...list].sort((a, b) => b.rating - a.rating || a.price - b.price);

  const selections = new Map();

  const budget = sortedByPrice[0];
  if (budget) selections.set('budget', budget);

  const best = sortedByRating[0];
  if (best) selections.set('best', best);

  const midIndex = Math.floor(sortedByPrice.length / 2);
  const mid = sortedByPrice[midIndex];
  if (mid) selections.set('mid', mid);

  const hiddenGem = list.find((c) => c.gem && !Array.from(selections.values()).includes(c))
    || sortedByRating.find((c) => !Array.from(selections.values()).includes(c));
  if (hiddenGem) selections.set('gem', hiddenGem);

  return Array.from(selections.entries()).map(([tag, course]) => ({ ...course, tag }));
}

function renderMessage(message) {
  resultsSection.innerHTML = `
    <div class="placeholder">
      <div class="glow"></div>
      <h3>${message}</h3>
      <p class="subtext">Supported example locations: 10001, 11211, 94105, 60601, 73301, 75201, 33101, 90001, 30301, 73344, or cities like Austin, Dallas, Miami, Chicago, London, Edinburgh, Dublin.</p>
    </div>
  `;
}

function renderCards(courses, date, city, radius) {
  const dateText = date ? new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'your date';

  const cardsHtml = courses.map((course) => `
    <article class="card">
      <span class="tag ${tagMap[course.tag].class}">${tagMap[course.tag].label}</span>
      <h3>${course.name}</h3>
      <p>${course.city} · ${course.vibe}</p>
      <div class="course-meta">
        <span class="badge">${course.distance} mi away</span>
        <span class="badge">Rated ${course.rating.toFixed(1)}/5</span>
        <span class="badge">Rack rate: $${course.price}</span>
      </div>
      <div class="row">
        <div>
          <div class="price">${course.golfNowPrice ? `$${course.golfNowPrice}` : 'GolfNow rate'}</div>
          <div class="subtext">Best GolfNow price for ${dateText}</div>
        </div>
        <a class="primary-link" href="${course.url}" target="_blank" rel="noreferrer">Book on GolfNow →</a>
      </div>
      <button class="secondary" onclick="window.open('${course.url}', '_blank')">View tee times</button>
    </article>
  `).join('');

  resultsSection.innerHTML = `
    <div class="cards-grid">
      ${cardsHtml}
    </div>
  `;
}

function haversineMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}
