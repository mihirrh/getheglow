# Image Handover Guide — Get The Glow

## Step 1 — Where to put the images

Drop all images into this folder:

```
getheglow/public/images/
```

That's it. You already did this correctly with `nail_front-page.jpg` and `hair_front-page.jpg`.

---

## Step 2 — Naming convention

Use this exact pattern:

```
category_description.jpg
```

**Rules: lowercase · hyphens not spaces · no special characters**

---

### 🖼 Hero / Front page collage cards

| Filename | What to put in it |
|---|---|
| `nail_front-page.jpg` | ✅ Already done |
| `hair_front-page.jpg` | ✅ Already done |

---

### 🗂 Service hero images
*(Used at the top of each `/services/[slug]` page)*

| Filename | What to put in it |
|---|---|
| `service_hair.jpg` | Hair cut / blowdry / colour — nice salon shot |
| `service_nails.jpg` | Close-up of a finished nail set |
| `service_facials.jpg` | Facial in progress or glowing skin result |
| `service_massage.jpg` | Hands on back or hot stones |
| `service_waxing.jpg` | Waxing treatment or smooth skin result |
| `service_threading.jpg` | Threading eyebrows close-up |
| `service_eyebrows.jpg` | Lash lift / brow lamination result |
| `service_beauty.jpg` | Bridal / glam / make-up result |

---

### 🖼 Gallery images
*(Shown on the `/gallery` page — add as many as you like)*

Name them with a category and an incrementing number:

```
gallery_nails_01.jpg
gallery_nails_02.jpg
gallery_nails_03.jpg
gallery_hair_01.jpg
gallery_hair_02.jpg
gallery_facials_01.jpg
gallery_lashes_01.jpg
gallery_brows_01.jpg
gallery_waxing_01.jpg
gallery_threading_01.jpg
```

Just keep counting up (`_01`, `_02`, `_03`…) for each new photo in the same category.

---

### 📸 About page

| Filename | What to put in it |
|---|---|
| `about_salon.jpg` | Inside the salon — clean, warm, welcoming |
| `about_team.jpg` | Team photo or therapist at work |

---

## Step 3 — Tell me what each image is

When you drop the images in, send a message like this:

> *"I've added these images:*
> - `gallery_nails_01.jpg` — builder gel set, nude with gold foil
> - `gallery_nails_02.jpg` — gel polish, deep red
> - `gallery_hair_01.jpg` — balayage result, brunette
> - `service_facials.jpg` — client having the Get The Glow facial
> - `about_salon.jpg` — photo of the salon reception area"*

That's all I need. I'll wire each one up to the correct place on the site — right page, right section, alt text, and optimised sizes.

---

## Step 4 — Image format & size

| Thing | Recommendation |
|---|---|
| **Format** | `.jpg` is fine · `.webp` is even better (smaller = faster load) |
| **Size** | Don't resize — give originals. Next.js handles optimisation automatically |
| **Orientation for gallery** | Any — portrait, landscape and square all work |
| **Orientation for service heroes** | **Landscape** preferred (wide, not tall) |
| **Orientation for front page collage** | **Portrait** preferred (tall, like the nail photo) |

---

## Quick summary

```
1. Drop images in:   getheglow/public/images/
2. Name them:        category_description.jpg  (e.g. gallery_nails_01.jpg)
3. Tell me:          what's in each photo and what it's for
4. I wire it up.     Done.
```
