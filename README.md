# Get The Glow – Production-Ready Beauty Salon Website

**Live:** [getheglow.co.uk](https://getheglow.co.uk)  
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion  
**Deploy:** Cloudflare Pages

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deploy to Cloudflare Pages

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → Create a project
3. Connect your GitHub repo `mihirrh/getheglow`
4. Set build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Output directory:** `.next`
5. Add environment variables (see below)
6. Deploy 🎉

---

## 🔐 Environment Variables

Create a `.env.local` file (never commit this):

```env
# Google Places API (for live Google Reviews)
GOOGLE_PLACES_API_KEY=your_google_places_api_key
GOOGLE_PLACE_ID=ChIJ_your_place_id_here

# Instagram Graph API (for live Instagram feed)
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token

# Cloudflare Turnstile (for contact form spam protection)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Email (for contact form - via Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=beautybynamm@outlook.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://getheglow.co.uk
```

Set these same values in the Cloudflare Pages environment variables dashboard.

---

## 📋 Google Reviews Integration

Currently using **mock data**. To enable live reviews:

1. Enable the [Google Places API](https://console.cloud.google.com/) in GCP
2. Get your `Place ID` from [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
3. Add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` to `.env.local`
4. Update `src/app/api/reviews/route.ts` (create this file):

```ts
export async function GET() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${process.env.GOOGLE_PLACES_API_KEY}`
  );
  const data = await res.json();
  return Response.json(data.result);
}
```

---

## 📸 Instagram Feed Integration

Currently using **placeholder tiles**. To enable live feed:

1. Create a [Facebook Developer App](https://developers.facebook.com/)
2. Add the Instagram Basic Display API product
3. Generate a long-lived access token for `@_getheglow`
4. Add `INSTAGRAM_ACCESS_TOKEN` to `.env.local`
5. Create `src/app/api/instagram/route.ts`:

```ts
export async function GET() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
  );
  const data = await res.json();
  return Response.json(data);
}
```

---

## 🛡️ Cloudflare Turnstile (Contact Form)

1. Go to [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Add a new site for `getheglow.co.uk`
3. Copy the **Site Key** (public) and **Secret Key** (private)
4. Add to your environment variables

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar, Footer)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── about/              # About page
│   ├── services/           # Services index + [slug] pages
│   ├── pricing/            # Full price list
│   ├── gallery/            # Gallery with masonry + filter
│   ├── offers/             # Special offers
│   ├── contact/            # Contact + map
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms & conditions
├── components/
│   ├── layout/             # Navbar, Footer, StickyCtAs
│   ├── home/               # Hero, ServicesGrid, GoogleReviews, etc.
│   ├── services/           # ServicePageClient
│   └── gallery/            # GalleryClient
└── lib/
    ├── constants.ts        # Business info, hours
    ├── services.ts         # All service data
    ├── pricing.ts          # Full pricing + special offers
    ├── reviews.ts          # Mock reviews data
    └── utils.ts            # Utility functions
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#E84C8B` |
| Soft Pink | `#F7D6E3` |
| Rose | `#D96A98` |
| Cream | `#FFF8F8` |
| Gold | `#D6B15A` |
| Dark | `#2B2B2B` |

**Fonts:** Playfair Display · Cormorant Garamond · Inter · DM Sans

---

## 📞 Business Contact

| | |
|--|--|
| **Address** | 5 Woodgate, Leicester LE3 5GH |
| **Phone** | 07778 698550 |
| **Email** | beautybynamm@outlook.com |
| **Instagram** | [@_getheglow](https://www.instagram.com/_getheglow/) |
| **Google Maps** | [Directions](https://maps.app.goo.gl/4j5JSzA7xpiMQsMg6) |

---

## 📜 Licence

Private — all rights reserved. © Get The Glow.
