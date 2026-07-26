# Get The Glow — How to Edit the Website

A plain-English guide. No coding experience needed for the tasks below.

---

## Table of Contents

1. [Change a price](#1-change-a-price)
2. [Add or remove a treatment](#2-add-or-remove-a-treatment)
3. [Add photos to the Gallery](#3-add-photos-to-the-gallery)
4. [Change opening hours](#4-change-opening-hours)
5. [Update contact details](#5-update-contact-details)
6. [Edit special offers](#6-edit-special-offers)
7. [Save and publish your changes](#7-save-and-publish-your-changes)

---

## The one file you need for prices, hours & contact

Almost all content lives in a single file:

```
getheglow/src/lib/data.ts
```

Open it in any text editor (VS Code, Notepad++, even Notepad).

---

## 1. Change a price

**File:** `src/lib/data.ts`

Find the `PRICING` section (around line 62).  
It's divided into categories — `threading`, `nails`, `facials`, `massage`, `hair`, etc.

**Example — change the price of Gel Polish from £18 to £20:**

Find:
```
{ name: "Gel Polish", price: "£18" },
```
Change to:
```
{ name: "Gel Polish", price: "£20" },
```

That's it. The change shows on `/pricing` **and** the Nails service page automatically.

**Prices that start with "From"** — just edit the string as you see it:
```
{ name: "Builder Extensions", price: "From £40" },
```

> ⚠️ Keep the quotes and the comma. Only change what's inside the quotes.

---

## 2. Add or remove a treatment

**File:** `src/lib/data.ts` — inside the `PRICING` object.

### Add a new treatment to an existing category

Find the category (e.g. `nails`) and add a new line inside its `items` array:

```ts
nails: {
  label: "Nails",
  items: [
    { name: "Normal Polish",   price: "£10" },
    { name: "Gel Polish",      price: "£18" },
    { name: "Chrome Add-on",   price: "£5"  },   // ← add like this
    ...
  ],
},
```

### Remove a treatment

Delete the entire `{ name: "...", price: "..." },` line for that item.

### Add a brand new category

Copy an existing block and paste it after the last category, before the closing `}`:

```ts
  lashExtensions: {
    label: "Lash Extensions",
    items: [
      { name: "Classic Set",  price: "£60" },
      { name: "Volume Set",   price: "£75" },
      { name: "Infill",       price: "£35" },
    ],
  },
```

Then go to the relevant service in `SERVICES` (further down in `data.ts`) and add
your new key to its `pricingKeys` array so the prices appear on that service's page:

```ts
pricingKeys: ["lashesAndBrows", "lashExtensions"],
```

---

## 3. Add photos to the Gallery

### Step 1 — Add the photo file

Put your photo inside:
```
getheglow/public/gallery/
```

Name it something descriptive with no spaces, e.g.:
- `nails-pink-art.jpg`
- `lash-lift-result.jpg`
- `balayage-before-after.jpg`

JPG or PNG both work. Recommended size: **1200 × 1200 px** or larger.

### Step 2 — Register the photo in the gallery list

**File:** `src/components/gallery/GalleryGrid.tsx`

Find the `IMAGES` array at the top of the file. Add a new line:

```ts
const IMAGES = [
  // ... existing entries ...
  {
    id: "13",
    src: "/gallery/nails-pink-art.jpg",
    alt: "Pink nail art with glitter design",
    category: "Nails",
    gradient: "from-primary/80 to-rose-400/60",
  },
];
```

**Fields:**

| Field | What to put |
|-------|-------------|
| `id` | Next number in the list (13, 14, 15…) |
| `src` | `/gallery/your-filename.jpg` |
| `alt` | Plain description of the photo — used by screen readers & Google |
| `category` | Must be one of: `"Nails"` · `"Hair"` · `"Facials"` · `"Lashes & Brows"` · `"Waxing"` · `"Threading"` |
| `gradient` | Only used as a fallback if `src` is empty — leave it unchanged |

### Remove a photo

Delete the entire `{ id: "...", ... },` line for that photo from `IMAGES`.

---

## 4. Change opening hours

**File:** `src/lib/data.ts` — find the `HOURS` section (around line 43).

```ts
export const HOURS = [
  { day: "Monday",    open: false, hours: "Closed" },
  { day: "Tuesday",   open: true,  hours: "11am – 5pm" },
  { day: "Wednesday", open: false, hours: "Closed" },
  { day: "Thursday",  open: true,  hours: "11am – 5pm" },
  { day: "Friday",    open: true,  hours: "11am – 5pm" },
  { day: "Saturday",  open: true,  hours: "11am – 5pm" },
  { day: "Sunday",    open: true,  hours: "11am – 3pm" },
];
```

- Change `"11am – 5pm"` to whatever the new hours are.
- Change `open: true` → `open: false` (and `hours: "Closed"`) if a day becomes closed.
- Change `open: false` → `open: true` if a closed day opens.

This updates the footer, contact page, and the map section automatically.

---

## 5. Update contact details

**File:** `src/lib/data.ts` — find the `BUSINESS` section (around line 17).

```ts
export const BUSINESS = {
  phone: "07778 698550",
  phoneHref: "tel:+447778698550",       // ← international format, no spaces
  whatsappHref: "https://wa.me/447778698550",
  email: "beautybynamm@outlook.com",
  instagram: "https://www.instagram.com/_getheglow/",
  ...
}
```

**Change phone number** — update both `phone` (display) and `phoneHref` (the `tel:` link):
```ts
phone: "07900 123456",
phoneHref: "tel:+447900123456",
whatsappHref: "https://wa.me/447900123456",
```

**Change email:**
```ts
email: "hello@gettheglow.co.uk",
```

**Change Instagram:**
```ts
instagram: "https://www.instagram.com/your_new_handle/",
instagramHandle: "@your_new_handle",
```

---

## 6. Edit special offers

**File:** `src/lib/data.ts` — find the `SPECIAL_OFFERS` section (around line 220).

```ts
export const SPECIAL_OFFERS = [
  {
    name: "Summer Smooth Bundle",
    description: "Full Arms + Full Legs + Underarms",
    price: "£23",
    saving: "Save £3",
    popular: false,
    slug: "summer-smooth-bundle",
  },
  ...
];
```

- **Change price/saving:** edit `price` and `saving`.
- **Mark as popular** (shows a badge): set `popular: true`.
- **Add a new offer:** copy one block, paste it, and change the details. Make `slug` unique (lowercase, hyphens only).
- **Remove an offer:** delete its `{ ... },` block.

---

## 7. Save and publish your changes

After editing, you need to rebuild and deploy the site. This takes about 2 minutes.

### If you have the project open in a terminal

```bash
cd getheglow
npm run deploy
```

That runs the build and pushes straight to Cloudflare Pages (live site).

### If you want to preview locally first

```bash
cd getheglow
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.  
When you're happy, run `npm run deploy` to push live.

### Full deploy steps (if using GitHub)

```bash
cd getheglow
git add -A
git commit -m "update prices / gallery"
git push origin main
npm run deploy
```

---

## Quick reference — what lives where

| What you want to change | File |
|-------------------------|------|
| Any price | `src/lib/data.ts` → `PRICING` |
| Opening hours | `src/lib/data.ts` → `HOURS` |
| Phone / email / Instagram | `src/lib/data.ts` → `BUSINESS` |
| Special offers | `src/lib/data.ts` → `SPECIAL_OFFERS` |
| Gallery photos | `src/components/gallery/GalleryGrid.tsx` → `IMAGES` |
| Review quotes | `src/lib/data.ts` → `MOCK_REVIEWS` |
| Nav menu links | `src/lib/data.ts` → `NAV_LINKS` |

---

> **Never delete a comma, a `{`, or a `}` by accident.**  
> If something breaks after an edit, undo your last change (Ctrl+Z) and try again.  
> When in doubt, ask Bob.
