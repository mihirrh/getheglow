/**
 * @file data.ts — single source of truth for all site content.
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │  HOW TO UPDATE PRICES                                       │
 * │  Find the relevant key inside PRICING below (e.g. "nails"), │
 * │  then change the `price` string on any item.               │
 * │  Categories are rendered automatically on /pricing.         │
 * ├─────────────────────────────────────────────────────────────┤
 * │  HOW TO UPDATE HOURS / CONTACT DETAILS                      │
 * │  Edit HOURS or BUSINESS below.  Everything on the site      │
 * │  (footer, contact page, schema, sitemaps) pulls from here.  │
 * └─────────────────────────────────────────────────────────────┘
 */

// ─── Business Information ────────────────────────────────────────────────────
export const BUSINESS = {
  name: "Get The Glow",
  tagline: "Hair, Beauty & Nails. All in one place.",
  description:
    "No booking needed — walk-ins welcome. Professional hair, nails, facials, massage, waxing, threading and more. Designed to leave you feeling confident and refreshed.",
  address: {
    street: "5 Woodgate",
    city: "Leicester",
    postcode: "LE3 5GH",
    country: "GB",
    full: "5 Woodgate, Leicester, LE3 5GH",
  },
  phone: "07778 698550",
  phoneHref: "tel:+447778698550",
  whatsappHref: "https://wa.me/447778698550",
  email: "beautybynamm@outlook.com",
  instagram: "https://www.instagram.com/_getheglow/",
  instagramHandle: "@getheglow",
  googleMaps: "https://maps.app.goo.gl/4j5JSzA7xpiMQsMg6",
  googleReview:
    "https://www.google.com/maps/search/?api=1&query=Get+The+Glow+5+Woodgate+Leicester+LE3+5GH",
  bookingUrl: "https://wa.me/447778698550?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment",
  url: "https://gettheglow.co.uk",
} as const;

// ─── Opening Hours ────────────────────────────────────────────────────────────
export const HOURS = [
  { day: "Monday",    open: false, hours: "Closed" },
  { day: "Tuesday",   open: true,  hours: "11am – 5pm" },
  { day: "Wednesday", open: false, hours: "Closed" },
  { day: "Thursday",  open: true,  hours: "11am – 5pm" },
  { day: "Friday",    open: true,  hours: "11am – 5pm" },
  { day: "Saturday",  open: true,  hours: "11am – 5pm" },
  { day: "Sunday",    open: true,  hours: "11am – 3pm" },
] as const;

// ─── Pricing ─────────────────────────────────────────────────────────────────
/**
 * PRICING is a keyed object.  Each key maps to a category displayed on /pricing
 * and on each service's detail page.
 *
 * To add a new treatment: add a new key with a `label` and `items` array.
 * To remove a treatment: delete its key.
 * Items: { name: string; price: string }  — price is displayed as-is (e.g. "£10" or "From £38").
 */
export const PRICING = {
  threading: {
    label: "Threading",
    items: [
      { name: "Eyebrows", price: "£4" },
      { name: "Eyebrow Reshape", price: "£5" },
      { name: "Upper Lip", price: "£2.50" },
      { name: "Chin", price: "£3" },
      { name: "Cheeks", price: "£3" },
      { name: "Sides of the Face", price: "£4.50" },
      { name: "Neck", price: "£4.50" },
      { name: "Full Face", price: "£8" },
      { name: "Full Face & Neck", price: "£12" },
      { name: "Forehead", price: "£4" },
    ],
  },
  faceWaxTeaTee: {
    label: "Face Wax (Tea Tree)",
    items: [
      { name: "Eyebrows", price: "£4" },
      { name: "Upper Lip", price: "£3" },
      { name: "Chin", price: "£4" },
      { name: "Sides of the Face", price: "£5" },
      { name: "Neck", price: "£6" },
      { name: "Forehead", price: "£4" },
      { name: "Full Face", price: "£10" },
      { name: "Full Face & Neck", price: "£14" },
    ],
  },
  faceWaxHot: {
    label: "Face Wax (Hot Wax)",
    items: [
      { name: "Eyebrows", price: "£5" },
      { name: "Eyebrow Reshape", price: "£6" },
      { name: "Upper Lip", price: "£4" },
      { name: "Chin", price: "£5" },
      { name: "Sides of the Face", price: "£7" },
      { name: "Neck", price: "£7" },
      { name: "Forehead", price: "£5" },
      { name: "Top of the Nose", price: "£3" },
      { name: "Inside Nose", price: "£6" },
      { name: "Full Face (includes eyebrows threading)", price: "£15" },
      { name: "Full Face & Neck (includes eyebrows threading)", price: "£20" },
    ],
  },
  bodyWaxing: {
    label: "Body Waxing",
    items: [
      { name: "Full Arms", price: "£9" },
      { name: "Half Arms", price: "£7" },
      { name: "Full Legs", price: "£11" },
      { name: "Half Legs", price: "£8" },
      { name: "Underarms", price: "£6" },
      { name: "Underarms (Hot Wax)", price: "£8" },
      { name: "Shoulders", price: "£3" },
      { name: "Full Back", price: "£10" },
      { name: "Half Back", price: "£5" },
      { name: "Full Stomach", price: "£7" },
      { name: "Half Stomach", price: "£5" },
      { name: "Full Front (Chest & Stomach)", price: "£10" },
      { name: "Buttocks", price: "£7" },
      { name: "Bikini Line (Hot Wax)", price: "£8" },
      { name: "Brazilian (Hot Wax)", price: "£27" },
      { name: "Hollywood (Hot Wax)", price: "£32" },
      { name: "Full Body", price: "£55" },
      { name: "Full Body & Brazilian", price: "£60" },
      { name: "Full Body & Hollywood", price: "£70" },
    ],
  },
  lashesAndBrows: {
    label: "Eyelash & Brow Enhancements",
    items: [
      { name: "Eyebrow Tinting", price: "£8" },
      { name: "Eyelash Tinting", price: "£8" },
      { name: "Eyebrow Lamination", price: "£40" },
      { name: "Eyelash Lift", price: "£40" },
      { name: "Eyebrow Lamination, Tint & Wax", price: "£55" },
      { name: "Eyelash Lift & Tint", price: "£48" },
    ],
    note: "All tinting services require a skin patch test at least 48 hours before the service.",
  },
  nails: {
    label: "Nails",
    items: [
      { name: "Normal Polish", price: "£10" },
      { name: "Gel Polish", price: "£18" },
      { name: "Plain Builder Gel", price: "£25" },
      { name: "Builder with Gel Polish", price: "£28" },
      { name: "Builder Gel with French", price: "£28" },
      { name: "Builder with Simple Design", price: "£35" },
      { name: "Builder with Extensions", price: "From £38" },
      { name: "Removal with New Set", price: "£8" },
      { name: "Removal Alone", price: "£13" },
      { name: "Plain Builder Gel Infill", price: "£22" },
      { name: "Builder Gel Infill + Gel Polish/French", price: "£25" },
      { name: "Builder Gel Infill + Art", price: "From £30" },
    ],
  },
  manicure: {
    label: "Manicure",
    items: [
      { name: "Mini Manicure", price: "£15" },
      { name: "Get The Glow Luxury Manicure", price: "£35" },
    ],
  },
  pedicure: {
    label: "Pedicure",
    items: [
      { name: "Mini Pedicure", price: "£15" },
      { name: "Get The Glow Luxury Pedicure", price: "£35" },
    ],
  },
  facials: {
    label: "Facials",
    items: [
      { name: "Express Facial – 30 mins", price: "£22" },
      { name: "Deep Cleanse Facial – 45 mins", price: "£30" },
      { name: "Gold Facial – 1 hr", price: "£40" },
      { name: "Get The Glow Facial – 1 hr 15 mins", price: "£55" },
    ],
  },
  massage: {
    label: "Massage",
    items: [
      { name: "Indian Head Massage – 30 mins", price: "£30" },
      { name: "Back, Neck & Shoulder – 30 mins", price: "£45" },
      { name: "Full Body Massage – 1 hr", price: "£65" },
      { name: "Hot Stone Massage – 1 hr", price: "£75" },
    ],
  },
  hair: {
    label: "Hair",
    items: [
      { name: "Fringe Trim", price: "£5" },
      { name: "Feathers", price: "£6" },
      { name: "Dry Straight Cut", price: "£15" },
      { name: "Layers", price: "£15" },
      { name: "Trim with Layers", price: "£25" },
      { name: "Wash, Cut & Blowdry", price: "£55" },
      { name: "Wash, Restyle & Blowdry", price: "£55" },
      { name: "Wash & Blowdry", price: "£35" },
      { name: "Hair Straightening", price: "£15" },
      { name: "Hair Curling", price: "£15" },
      { name: "Hair Mask", price: "£10" },
    ],
    note: "Prices for these treatments may vary depending on hair length (above / below shoulder).",
  },
  colouring: {
    label: "Hair Colouring",
    items: [
      { name: "Retouch & Blowdry", price: "£40" },
      { name: "Full Head Colour & Blowdry", price: "From £55" },
      { name: "Full Head Highlights & Blowdry", price: "From £150" },
      { name: "Half Head Highlights & Blowdry", price: "From £95" },
      { name: "Balayage & Blowdry", price: "From £120" },
      { name: "Toner", price: "£35" },
    ],
    note: "Patch test required for all colouring services. Bridal & party hair and make-up available by enquiry — get in touch to discuss your requirements.",
  },
} as const;

// ─── Special Offers ───────────────────────────────────────────────────────────
export const SPECIAL_OFFERS = [
  {
    name: "Smooth Bundle",
    description: "Full Arms + Full Legs + Underarms",
    price: "£23",
    saving: "Save £3",
    popular: false,
    slug: "smooth-bundle",
  },
  {
    name: "Hot Wax Package",
    description: "Full Arms + Full Legs + Underarms (Hot Wax)",
    price: "£26",
    saving: "Save £4",
    popular: true,
    slug: "hot-wax-package",
  },
  {
    name: "Brazilian Package",
    description: "Full Arms + Full Legs + Underarms + Brazilian",
    price: "£32",
    saving: "Save £3",
    popular: false,
    slug: "brazilian-package",
  },
  {
    name: "Bikini Line Package",
    description: "Full Arms + Full Legs + Underarms + Bikini Line (Hot Wax)",
    price: "£48",
    saving: "Save £5",
    popular: false,
    slug: "bikini-package",
  },
  {
    name: "Hollywood Package",
    description: "Full Arms + Full Legs + Underarms + Hollywood",
    price: "£52",
    saving: "Save £6",
    popular: true,
    slug: "hollywood-package",
  },
] as const;

// ─── Services (for navigation + pages) ───────────────────────────────────────
/**
 * SERVICES drives the /services listing page, service detail pages, and the
 * Navbar dropdown.  Each service slug must be unique and URL-safe.
 *
 * `pricingKeys` — array of keys from PRICING whose tables appear on that service's page.
 * `benefits`    — bullet points shown in the "Why Choose Us" section.
 * `faqs`        — FAQ accordion on the service page. Add as many as needed.
 */
export const SERVICES = [
  {
    slug: "hair",
    name: "Hair",
    shortDesc: "Cuts, styling, colouring & treatments",
    longDesc:
      "From precision cuts to stunning colour transformations, our hair experts bring your vision to life using premium products and techniques.",
    color: "#E84C8B",
    pricingKeys: ["hair", "colouring"],
    heroImage: "/images/services/hair-hero.jpg",
    benefits: [
      "Expert stylists with years of experience",
      "Premium professional-grade products",
      "Personalised consultation included",
      "From quick trims to full transformations",
    ],
    faqs: [
      {
        q: "Do I need to book in advance?",
        a: "We recommend booking in advance to secure your preferred time, though we do welcome walk-ins when slots are available.",
      },
      {
        q: "What hair colouring services do you offer?",
        a: "We offer full colour, highlights, balayage, retouches, and toners. Prices start from £35 for a toner.",
      },
      {
        q: "How long does a wash, cut and blowdry take?",
        a: "A wash, cut and blowdry typically takes 60–90 minutes depending on hair length and style.",
      },
    ],
  },
  {
    slug: "nails",
    name: "Nails",
    shortDesc: "Gel, builder gel, extensions & nail art",
    longDesc:
      "From classic polish to luxury builder gel extensions, our nail technicians create beautiful, long-lasting results.",
    color: "#D96A98",
    pricingKeys: ["nails", "manicure", "pedicure"],
    heroImage: "/images/services/nails-hero.jpg",
    benefits: [
      "Long-lasting builder gel and gel polish",
      "Stunning nail art and French finishes",
      "Relaxing manicure and pedicure treatments",
      "Premium gel and builder gel products",
    ],
    faqs: [
      {
        q: "How long does builder gel last?",
        a: "Builder gel typically lasts 3–5 weeks with proper care. We recommend infills every 3–4 weeks.",
      },
      {
        q: "Can you do nail art?",
        a: "Absolutely! We offer a wide range of nail art designs. Builder with design starts from £35.",
      },
      {
        q: "Do you offer nail removal?",
        a: "Yes, we offer removal with a new set for £8 or removal only for £13.",
      },
    ],
  },
  {
    slug: "facials",
    name: "Facials",
    shortDesc: "Express, deep cleanse, gold & signature facials",
    longDesc:
      "Reveal your best skin with our range of facial treatments. From a 30-minute express refresh to our signature 1hr 15min Get The Glow Facial — each treatment is designed to cleanse, hydrate and restore your natural radiance.",
    color: "#E84C8B",
    pricingKeys: ["facials"],
    heroImage: "/images/services/facials-hero.jpg",
    benefits: [
      "Treatments from 30 mins to 1hr 15mins",
      "Deeply cleansing and rejuvenating",
      "Premium skincare products used",
      "Tailored to your skin type and concerns",
    ],
    faqs: [
      {
        q: "Which facial is best for me?",
        a: "The Get The Glow Facial (1hr 15min, £55) is our most comprehensive treatment and is ideal for most skin types. If you're short on time, the Express Facial (30min, £22) is a great refresh.",
      },
      {
        q: "How often should I have a facial?",
        a: "For best results, we recommend a facial every 4–6 weeks to maintain healthy, glowing skin.",
      },
      {
        q: "What is the Gold Facial?",
        a: "The Gold Facial (1hr, £40) is a luxurious skin-renewing treatment that nourishes, firms and revitalises, finished with a lifting massage to sculpt facial contours and leave skin smooth and radiant.",
      },
    ],
  },
  {
    slug: "massage",
    name: "Massage",
    shortDesc: "Indian head, full body, hot stone & more",
    longDesc:
      "Melt away stress and tension with our professional massage treatments. From a 30-minute Indian head massage to the ultimate 1-hour hot stone experience — each session is designed to leave you feeling completely relaxed and refreshed.",
    color: "#D96A98",
    pricingKeys: ["massage"],
    heroImage: "/images/services/massage-hero.jpg",
    benefits: [
      "Treatments from 30 mins to 1 hour",
      "Deep relaxation and stress relief",
      "Skilled, experienced therapists",
      "Hot stone upgrade available",
    ],
    faqs: [
      {
        q: "What is a hot stone massage?",
        a: "Hot stone massage (1hr, £75) uses smooth, heated basalt stones to massage the body, helping to relax muscles, relieve tension and improve circulation — reducing stress and improving sleep.",
      },
      {
        q: "How long is a full body massage?",
        a: "Our full body massage takes approximately 1 hour (£65).",
      },
      {
        q: "Do I need to undress for a massage?",
        a: "For a full body massage, appropriate draping is used to ensure your comfort and modesty throughout.",
      },
    ],
  },
  {
    slug: "waxing",
    name: "Waxing",
    shortDesc: "Face & body waxing with tea tree and hot wax",
    longDesc:
      "Smooth, long-lasting results with our professional waxing services using both tea tree and premium hot wax options.",
    color: "#E84C8B",
    pricingKeys: ["faceWaxTeaTee", "faceWaxHot", "bodyWaxing"],
    heroImage: "/images/services/waxing-hero.jpg",
    benefits: [
      "Choice of tea tree or hot wax",
      "Experienced, gentle practitioners",
      "Long-lasting smooth results",
      "Special bundle packages available",
    ],
    faqs: [
      {
        q: "What is the difference between tea tree and hot wax?",
        a: "Tea tree wax is a strip wax great for larger areas. Hot wax is gentler, applied thicker and removed without strips — ideal for sensitive and intimate areas.",
      },
      {
        q: "How long does waxing last?",
        a: "Results typically last 3–6 weeks depending on your hair growth cycle.",
      },
      {
        q: "Do you offer Hollywood and Brazilian waxing?",
        a: "Yes, we offer bikini line (£8), Brazilian (£27) and Hollywood (£32) waxing. We also have package deals for better value.",
      },
    ],
  },
  {
    slug: "threading",
    name: "Threading",
    shortDesc: "Precision brow shaping & full face threading",
    longDesc:
      "Achieve perfectly shaped, defined brows and flawlessly smooth skin with our traditional threading technique.",
    color: "#D96A98",
    pricingKeys: ["threading"],
    heroImage: "/images/services/threading-hero.jpg",
    benefits: [
      "Precision shaping and definition",
      "100% natural technique — no chemicals",
      "Suitable for all skin types including sensitive",
      "Quick, efficient and long-lasting",
    ],
    faqs: [
      {
        q: "Is threading painful?",
        a: "Threading is generally well-tolerated. Any discomfort is brief and most clients find it very manageable.",
      },
      {
        q: "How long does eyebrow threading last?",
        a: "Eyebrow threading typically lasts 2–5 weeks depending on your hair growth.",
      },
      {
        q: "Can threading irritate my skin?",
        a: "Threading is a natural technique with no chemicals, making it suitable for even sensitive skin. Mild redness can occur but fades quickly.",
      },
    ],
  },
  {
    slug: "eyebrows",
    name: "Eyebrows & Lashes",
    shortDesc: "Tinting, lamination, lash lift & brow design",
    longDesc:
      "Frame your face beautifully with our eyelash and brow enhancement treatments — from natural tints and precise shaping to dramatic lash lifts and brow lamination.",
    color: "#E84C8B",
    pricingKeys: ["lashesAndBrows"],
    heroImage: "/images/services/lashes-hero.jpg",
    benefits: [
      "Transform your natural brows and lashes",
      "Lash lift for a wide, open-eye effect",
      "Eyebrow lamination for fluffy, defined brows",
      "Skin patch test required for all tinting — contact us 48hrs before",
    ],
    faqs: [
      {
        q: "What is eyebrow lamination?",
        a: "Eyebrow lamination restructures the brow hairs to set them in a uniform upward direction, giving a fluffy, full look that lasts 4–6 weeks.",
      },
      {
        q: "What is a lash lift?",
        a: "A lash lift curls and lifts your natural lashes from the base, giving the appearance of longer, lifted lashes without extensions. Can be combined with a tint for £48.",
      },
      {
        q: "Do tinting services require a patch test?",
        a: "Yes — all tinting services (eyebrow tinting, eyelash tinting) require a skin patch test at least 48 hours before your appointment. Please contact us to arrange this.",
      },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty",
    shortDesc: "Full beauty treatments for every occasion",
    longDesc:
      "Whether you're preparing for a special occasion or treating yourself, our beauty treatments cover everything from bridal packages to everyday pampering.",
    color: "#D96A98",
    pricingKeys: ["facials", "massage", "lashesAndBrows"],
    heroImage: "/images/services/beauty-hero.jpg",
    benefits: [
      "Complete beauty packages available",
      "Bridal and party makeup",
      "Experienced in all skin tones",
      "Luxury experience in a calm environment",
    ],
    faqs: [
      {
        q: "Do you offer bridal packages?",
        a: "Yes! Contact us to discuss a bespoke bridal package tailored to your special day.",
      },
      {
        q: "Can I book multiple treatments in one visit?",
        a: "Absolutely. We can combine treatments for a full pamper day — just let us know when booking.",
      },
      {
        q: "Do you cater for parties and groups?",
        a: "Yes, we love hosting group bookings. Call us or WhatsApp to arrange a group pamper session.",
      },
    ],
  },
] as const;

// ─── Mock Reviews ─────────────────────────────────────────────────────────────
/**
 * MOCK_REVIEWS — shown newest-first in the Reviews section on the homepage.
 *
 * HOW TO ADD A NEW REVIEW:
 *   1. Add a new object at the TOP of this array (so it shows first).
 *   2. Set rating: 5 — only 5★ reviews are displayed.
 *   3. Use ISO date format: "YYYY-MM-DD"
 *
 * To connect real Google reviews, replace this array with a live fetch from
 * the Google Business Profile API and pass the data as props to <GoogleReviews>.
 */
export const MOCK_REVIEWS = [
  // ── Newest first ──────────────────────────────────────────────────────────
  {
    id: "1",
    author: "Zara H.",
    rating: 5,
    date: "2025-06-10",
    text: "Just had my brow lamination and lash lift done — absolutely obsessed! They last ages and look so natural. The salon is so clean and relaxing. 100% coming back.",
  },
  {
    id: "2",
    author: "Amelia T.",
    rating: 5,
    date: "2025-05-28",
    text: "Get The Glow is my go-to for everything. Had my builder gels done last week and they're still perfect. The nail tech takes her time and the finish is flawless.",
  },
  {
    id: "3",
    author: "Riya K.",
    rating: 5,
    date: "2025-05-14",
    text: "Best threading in Leicester, hands down. My eyebrows have never looked this good. Quick, painless and so precise. Will not go anywhere else!",
  },
  {
    id: "4",
    author: "Jessica M.",
    rating: 5,
    date: "2025-04-30",
    text: "Treated myself to the Get The Glow Facial and wow — my skin felt incredible for weeks. So relaxing too. The atmosphere is pure luxury for the price. Highly recommend.",
  },
  {
    id: "5",
    author: "Fatima A.",
    rating: 5,
    date: "2025-04-12",
    text: "Had a Hollywood wax and the hot wax package — genuinely the best experience. So professional and gentle. The results were amazing. Will definitely be booking again.",
  },
  {
    id: "6",
    author: "Chloe B.",
    rating: 5,
    date: "2025-03-22",
    text: "Had my hair done here — balayage and blowdry. Came out absolutely stunning. The stylist really listened to what I wanted and delivered perfectly. Love it!",
  },
] as const;

// ─── Nav Links ────────────────────────────────────────────────────────────────
/** NAV_LINKS drives the desktop nav and mobile slide-in menu. */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Hair", href: "/services/hair" },
      { label: "Nails", href: "/services/nails" },
      { label: "Facials", href: "/services/facials" },
      { label: "Massage", href: "/services/massage" },
      { label: "Waxing", href: "/services/waxing" },
      { label: "Threading", href: "/services/threading" },
      { label: "Eyebrows & Lashes", href: "/services/eyebrows" },
      { label: "Beauty", href: "/services/beauty" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Special Offers", href: "/offers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
