Compress-Archive `
  -Path .\src,.\public,.\index.html,.\package.json,.\package-lock.json,.\vite.config.js,.\README.md,.\WHERE2KAPE_PLAN.md,.\.gitignore,.\.oxlintrc.json `
  -DestinationPath "$HOME\Downloads\where2kape.zip" `
  -Force


# Where2Kape Project Plan

## Overview

**Where2Kape** is a quirky, aesthetic café discovery website aimed primarily at Gen Z users.

The core idea is simple:

> **Find nearby coffee shops based on the vibe you want, not just distance or ratings.**

Instead of feeling like a traditional business directory or Google Maps clone, Where2Kape should feel fun, social, visual, and easy to share.

The initial launch should focus on **Legazpi City** before expanding to other cities.

---

## Core Product Idea

Where2Kape helps users discover nearby cafés based on what they are actually looking for.

Examples:

- ☕ Just coffee
- 💻 Lock in
- 💘 Date coded
- 📸 Cute as hell
- 🌙 Open late
- 💸 Broke friendly
- 🌿 Outdoor
- 🐕 Pet friendly
- 🔌 Plenty of outlets
- 📶 Good Wi-Fi
- 🤫 Quiet
- 🍰 Food available

Instead of asking users to search through dozens of listings, the site should answer:

> **"What kind of café are you looking for rn?"**

---

## Brand Direction

### Name

**Where2Kape**

### Personality

The brand should feel:

- Gen Z
- playful
- casual
- quirky
- aesthetic
- locally relevant
- social
- slightly unserious, but still useful

### Visual Direction

Possible style:

- warm cream/off-white backgrounds
- espresso/dark brown text
- muted brown
- olive
- burnt orange
- dusty pink accents
- grain/noise texture
- stickers
- stamps
- doodles
- large lowercase typography
- strong café photography
- playful micro-interactions

Avoid making it look like a generic SaaS dashboard or business directory.

### Example Homepage Copy

> **where we getting coffee?**

> find cute cafés, study spots, hidden gems, and places worth leaving the house for.

Primary CTA:

> **find coffee near me ☕**

---

# Version 1: MVP

The first version should stay focused.

Do not build subscriptions, owner dashboards, complex accounts, or other large features before users actually use the product.

## User Flow

```text
User opens Where2Kape
        ↓
Location permission
        ↓
Nearby cafés are discovered
        ↓
User browses café cards
        ↓
User filters by vibe
        ↓
User opens a café profile
        ↓
User gets directions / shares it
```

---

## MVP Features

### 1. Location Detection

Use the browser Geolocation API.

Example:

```js
navigator.geolocation.getCurrentPosition(...)
```

The user's exact coordinates should only be used when needed to find nearby cafés.

Avoid permanently storing exact location unless the product genuinely needs it later.

---

### 2. Nearby Café Discovery

Search for nearby:

- cafés
- coffee shops
- specialty coffee shops

Initial search radius:

**3–5 km**

Possible data providers:

- Google Places API
- Foursquare Places API
- OpenStreetMap / Overpass API

We should evaluate which provider gives the best combination of:

- café coverage
- opening hours
- photos
- ratings
- pricing
- API cost

---

### 3. Café Cards

Each listing can show:

- café name
- photo
- distance
- rating
- review count
- address
- open/closed status
- price level
- vibe tags

Example:

```text
CAFÉ 528

📍 0.8 km away
★★★★★ 4.7

"quiet, cold af, outlets everywhere"

study spot
₱₱
wifi good
cozy
date coded

[ peek inside ]
```

---

### 4. Discovery Feed

The default experience should prioritize visually browsing cafés instead of immediately showing a giant map.

Possible navigation:

```text
discover | map
```

The discovery feed should feel closer to Pinterest or a social feed than a traditional directory.

---

### 5. Map View

Use:

- Leaflet
- React Leaflet
- OpenStreetMap tiles

The map should show nearby cafés and allow users to open café details.

---

### 6. Filters

Filters should feel conversational.

Examples:

```text
what's the vibe?

☕ just coffee
💻 lock in
💘 date spot
📸 cute as hell
🌙 late night
💸 broke friendly
🌿 outdoor
🐕 pet friendly
```

Standard filters can also exist underneath:

- distance
- price
- rating
- open now

---

### 7. Café Detail Page

Each café should eventually have its own shareable URL.

Example:

```text
/cafe/cafe-name-legazpi
```

Information could include:

- photos
- address
- distance
- opening hours
- map
- rating
- vibe tags
- directions
- share button

---

### 8. Directions

Users should be able to easily open directions through their preferred maps application.

This interaction should also be tracked because it can later become an important business metric.

---

### 9. Pick For Me

A fun feature:

> **pick for me**

Where2Kape randomly recommends one café nearby based on the user's active filters.

This could become one of the most recognizable features of the product.

---

# Suggested Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router

## Maps

- Leaflet
- React Leaflet
- OpenStreetMap

## Hosting

**Vercel**

Reasons:

- easy GitHub integration
- automatic deployment after `git push`
- supports serverless/API routes
- suitable for future backend functionality
- easier than GitHub Pages for this project

---

## Repository Structure

Possible structure:

```text
where2kape/
├── src/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── styles/
│
├── api/
│   └── cafes.js
│
├── public/
├── package.json
├── README.md
└── vite.config.js
```

---

# Backend Strategy

Where2Kape can begin as a mostly static React application, but using a small backend/serverless layer is recommended.

Architecture:

```text
React frontend
      ↓
Where2Kape API/serverless function
      ↓
Places provider
      ↓
Nearby café data
```

Reasons to use a backend/serverless function:

- protects private API keys
- avoids exposing credentials in frontend JavaScript
- provides better control over API requests
- allows caching later
- makes switching providers easier

A traditional always-running server is not required for the MVP.

---

# Database

## MVP

A database is **not required initially**.

The first version should prove that users actually want to use Where2Kape.

## Later

Use something like:

**Supabase / PostgreSQL**

A database becomes useful for:

- user accounts
- favorites
- community reports
- café vibe tags
- Wi-Fi ratings
- noise ratings
- outlet availability
- café owner accounts
- claimed business listings
- promotions
- events
- analytics

---

# Community Data

One long-term advantage over Google Maps is collecting information that normal business listings usually do not provide.

Example café data:

```text
Wi-Fi: Fast
Outlets: Plenty
Noise: Quiet
Seats: ~30
Laptop friendly: Yes
Typical drink price: ₱120
Last verified: 3 days ago
```

Potential café personality tags:

```text
🎧 headphones encouraged
💻 laptop campers welcome
🗣 kinda loud
🌱 plant parent energy
📸 camera eats first
```

Community comments should be short and casual.

Examples:

> "wifi carried my thesis"

> "coffee mid but the place is gorgeous"

> "10/10 if you're avoiding your responsibilities"

> "one outlet per table. absolute cinema."

---

# Analytics Plan

Usage tracking should be implemented early.

The goal is to measure whether people actually use and return to Where2Kape.

## Layer 1: Website Analytics

Possible tools:

- Vercel Analytics
- Google Analytics
- Plausible

Track:

- visitors
- page views
- traffic sources
- device types
- countries/cities
- popular pages
- returning visitors

---

## Layer 2: Product Events

Track important actions inside the app.

Examples:

```text
cafe_view
directions_click
filter_used
random_pick_used
share_click
favorite_added
search_performed
```

Possible event structure:

```text
analytics_events

id
event_type
cafe_id
session_id
metadata
created_at
```

Example rows:

```text
cafe_view        | cafe_123 | abc123 | {}
directions_click | cafe_123 | abc123 | {}
filter_used      | null     | abc123 | {"filter":"study_spot"}
share_click      | cafe_456 | xyz789 | {}
```

---

## Important Metrics

Track:

- monthly visitors
- daily active users
- returning users
- café profile views
- directions clicks
- share clicks
- filters used
- most popular vibes
- most viewed cafés
- average session length
- number of cafés viewed per session
- percentage of users who return

A major signal of success is not just visitors.

It is:

> **People coming back whenever they want coffee.**

---

# Privacy

Avoid unnecessarily storing precise user location.

Recommended approach:

```text
Get coordinates
      ↓
Find nearby cafés
      ↓
Return results
      ↓
Discard exact location
```

For analytics, broad information such as city or general area should normally be enough.

A privacy policy should be added before collecting meaningful personal data.

---

# Growth Strategy

The first goal is not nationwide adoption.

The first goal is:

> **Become the default café discovery tool for one city.**

Initial market:

**Legazpi City**

Potential later expansion:

- Daraga
- Naga
- Sorsogon
- Metro Manila
- Cebu
- other Philippine cities

---

## Growth Loop

```text
TikTok / Facebook / Instagram
        ↓
Where2Kape
        ↓
User discovers café
        ↓
User visits / shares café
        ↓
More people discover Where2Kape
        ↓
Café owners notice traffic
        ↓
Businesses eventually pay
```

Possible content:

- "best study cafés in Legazpi"
- "coffee shops under ₱150"
- "date coded cafés near you"
- "places to lock in before finals"
- "hidden cafés you probably haven't tried"
- "late night coffee spots"
- "Where2Kape picked my café today"

---

# Shareability

Where2Kape should produce content that users naturally want to send to friends.

Potential features:

- café share cards
- "send this to your coffee person"
- Instagram-story-friendly graphics
- collections
- favorite lists
- random café picker
- café personality summaries

---

# Monetization Strategy

Do **not** charge normal users initially.

The consumer product should remain free.

The long-term business model should primarily charge cafés.

Architecture:

```text
Users
FREE
   ↓
Discover cafés
   ↓
Generate customer traffic
   ↓
Café owners pay for additional tools and visibility
```

---

## Stage 1: Free Listings

Every café can appear for free.

This keeps the platform useful and avoids limiting the directory.

---

## Stage 2: Claimed Café Profiles

Owners can claim their café.

Possible features:

- edit café information
- upload photos
- upload menus
- opening hours
- social links
- amenities
- announcements
- promotions

---

## Stage 3: Where2Kape Verified / Pro

Possible starting price:

**₱299–₱499/month**

Potential features:

- verified badge
- enhanced profile
- additional photos
- menus
- promotions
- event listings
- featured content
- analytics dashboard

Example café analytics:

```text
This month

1,248 profile views
183 direction clicks
72 menu views
41 Instagram clicks
```

The value proposition becomes:

> **Where2Kape helps cafés get discovered by people actively looking for somewhere to go.**

---

## Stage 4: Featured Placement

Cafés could pay for temporary promotions.

Examples:

- featured near you
- café of the week
- student pick
- date spot feature
- weekend promotion

Possible initial pricing:

**₱100–₱300 per campaign**

Pricing should change based on actual traffic.

---

## Stage 5: Promotions and Deals

Examples:

> Show this Where2Kape deal for 10% off.

Potential revenue models:

- fixed campaign fee
- subscription feature
- commission on redeemed deals

---

## Stage 6: Local Advertising

Potential advertisers:

- coffee bean sellers
- bakeries
- events
- coworking spaces
- local lifestyle brands

Avoid intrusive generic banner advertising that damages the site's visual identity.

---

# Why Analytics Matters for Monetization

Instead of telling a café owner:

> "Our website is popular."

Where2Kape should eventually be able to say:

> "Your café appeared 430 times this month. 61 people viewed directions, and 38 opened your menu."

That makes the subscription easier to justify.

---

# Revenue Examples

Example at **₱299/month**:

```text
20 paying cafés  = ₱5,980/month
50 paying cafés  = ₱14,950/month
100 paying cafés = ₱29,900/month
```

This excludes:

- promoted listings
- advertising
- campaign fees
- sponsored events

The product does not require millions of users to become useful as a local SaaS business.

---

# Café Events

A strong long-term feature is local café events.

Examples:

- acoustic nights
- student discounts
- new drink launches
- open mic nights
- workshops
- Valentine's promos
- buy-one-take-one deals

Possible discovery section:

> **what's happening near me tonight?**

This gives café owners a reason to regularly use the business side of Where2Kape.

---

# Success Milestones

Do not define success only by revenue.

## Milestone 1

Deploy a working version.

Goals:

- real café data
- location detection
- discovery feed
- map
- filters
- directions
- analytics

---

## Milestone 2

**100 real users**

Validate:

- Do people understand the concept?
- Do people browse several cafés?
- What filters do they use?
- Do people click directions?
- Do they share cafés?

---

## Milestone 3

**1,000 monthly users**

Focus on:

- returning visitors
- SEO
- TikTok / Reels / Facebook
- improving café data
- community contribution features

---

## Milestone 4

**5,000+ monthly users**

Begin testing café-owner monetization.

Approach cafés with real usage numbers.

---

## Milestone 5

Launch owner tools and subscriptions.

Only invest heavily in the business dashboard after user demand exists.

---

# GitHub and Portfolio

## GitHub Repository

Suggested repository name:

```text
where2kape
```

Suggested description:

> ☕ A quirky café discovery app for finding coffee, study spots, date spots, and hidden gems near you.

---

## Deployment

Recommended flow:

```text
GitHub
   ↓
Vercel
   ↓
Automatic deployment after git push
```

Possible initial URL:

```text
where2kape.vercel.app
```

Possible future domain:

```text
where2kape.com
where2kape.ph
```

---

## Portfolio Entry

Example:

### Where2Kape

**React · Vite · Tailwind · Maps API**

A location-based café discovery app designed around vibes rather than traditional business search.

Links:

- Live Site
- GitHub Repository

This project can eventually demonstrate:

- frontend development
- API integration
- maps
- geolocation
- backend/serverless functions
- analytics
- database design
- product design
- deployment
- growth
- real-world users
- SaaS monetization

---

# Product Principles

1. **Users first, monetization later.**
2. **Make café discovery fun.**
3. **Do not become a boring Google Maps clone.**
4. **Start with one city.**
5. **Track usage from day one.**
6. **Keep normal users free.**
7. **Charge businesses once Where2Kape delivers measurable value.**
8. **Build features based on actual user behavior.**
9. **Protect user privacy.**
10. **Make the product highly shareable.**

---

# Immediate Next Steps

1. Create the `where2kape` GitHub repository.
2. Initialize React + Vite.
3. Add Tailwind CSS.
4. Create the visual identity and homepage.
5. Add browser geolocation.
6. Choose the café data provider.
7. Display real nearby cafés.
8. Build the discovery feed.
9. Add filters.
10. Add the map.
11. Add café profile pages.
12. Add directions and sharing.
13. Deploy to Vercel.
14. Add analytics.
15. Test with real users in Legazpi.
16. Improve based on actual usage.
17. Begin local social-media promotion.
18. Consider monetization only after meaningful traction.

---

# Long-Term Vision

Where2Kape should eventually become two products operating together.

## For users

> **Find somewhere cool to drink coffee.**

## For cafés

> **Get discovered by people looking for somewhere to go.**

The consumer experience creates the audience.

The business tools monetize that audience.

That is the core Where2Kape model.
