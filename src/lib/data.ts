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
  tagline: "Leicester's Premier Luxury Beauty Salon",
  description:
    "Elevating beauty in Leicester with expert hair, nails, facials, massage and more — in a calm, luxurious space designed for you.",
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
      { name: "Sides of Face", price: "£4.50" },
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
      { name: "Sides of Face", price: "£5" },
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
      { name: "Sides of Face", price: "£7" },
      { name: "Neck", price: "£7" },
      { name: "Forehead", price: "£5" },
      { name: "Top of Nose", price: "£3" },
      { name: "Inside Nose", price: "£6" },
      { name: "Full Face", price: "£15" },
      { name: "Full Face & Neck", price: "£20" },
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
      { name: "Full Front", price: "£10" },
      { name: "Buttocks", price: "£7" },
      { name: "Bikini Line", price: "£8" },
      { name: "Brazilian", price: "£27" },
      { name: "Hollywood", price: "£32" },
      { name: "Full Body", price: "£55" },
      { name: "Full Body & Brazilian", price: "£60" },
      { name: "Full Body & Hollywood", price: "£70" },
    ],
  },
  lashesAndBrows: {
    label: "Eyelash & Brows",
    items: [
      { name: "Eyebrow Tint", price: "£8" },
      { name: "Eyelash Tint", price: "£8" },
      { name: "Eyebrow Lamination", price: "£40" },
      { name: "Eyelash Lift", price: "£40" },
      { name: "Lamination Tint & Wax", price: "£55" },
      { name: "Lash Lift & Tint", price: "£48" },
    ],
  },
  nails: {
    label: "Nails",
    items: [
      { name: "Normal Polish", price: "£10" },
      { name: "Gel Polish", price: "£18" },
      { name: "Plain Builder Gel", price: "£25" },
      { name: "Builder with Gel Polish", price: "£28" },
      { name: "Builder French", price: "£28" },
      { name: "Builder with Design", price: "£35" },
      { name: "Builder Extensions", price: "From £38" },
      { name: "Removal with New Set", price: "£8" },
      { name: "Removal", price: "£13" },
      { name: "Builder Gel Infill", price: "£22" },
      { name: "Builder Infill + Polish/French", price: "£25" },
      { name: "Builder Infill + Art", price: "From £30" },
    ],
  },
  manicure: {
    label: "Manicure",
    items: [
      { name: "Mini Manicure", price: "£15" },
      { name: "Luxury Manicure", price: "£35" },
    ],
  },
  pedicure: {
    label: "Pedicure",
    items: [
      { name: "Mini Pedicure", price: "£15" },
      { name: "Luxury Pedicure", price: "£35" },
    ],
  },
  facials: {
    label: "Facials",
    items: [
      { name: "Express Facial", price: "£22" },
      { name: "Deep Cleanse Facial", price: "£30" },
      { name: "Gold Facial", price: "£40" },
      { name: "Get The Glow Facial", price: "£55" },
    ],
  },
  massage: {
    label: "Massage",
    items: [
      { name: "Indian Head Massage", price: "£30" },
      { name: "Back, Neck & Shoulder", price: "£45" },
      { name: "Full Body Massage", price: "£65" },
      { name: "Hot Stone Massage", price: "£75" },
    ],
  },
  hair: {
    label: "Hair",
    items: [
      { name: "Fringe Trim", price: "£5" },
      { name: "Feathers", price: "£6" },
      { name: "Dry Cut", price: "£15" },
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
      { name: "Retouch", price: "£40" },
      { name: "Full Colour", price: "From £55" },
      { name: "Full Highlights", price: "From £150" },
      { name: "Half Highlights", price: "From £95" },
      { name: "Balayage", price: "From £120" },
      { name: "Toner", price: "£35" },
    ],
    note: "Patch test required for all colouring services. Please contact us at least 48 hours before your appointment.",
  },
} as const;

// ─── Special Offers ───────────────────────────────────────────────────────────
export const SPECIAL_OFFERS = [
  {
    name: "Summer Smooth Bundle",
    description: "Full Arms + Full Legs + Underarms",
    price: "£23",
    saving: "Save £3",
    popular: false,
    slug: "summer-smooth-bundle",
  },
  {
    name: "Hot Wax Package",
    description: "Our most popular hot wax combination",
    price: "£26",
    saving: "Save £4",
    popular: true,
    slug: "hot-wax-package",
  },
  {
    name: "Brazilian Package",
    description: "Complete Brazilian waxing experience",
    price: "£32",
    saving: "Save £3",
    popular: false,
    slug: "brazilian-package",
  },
  {
    name: "Bikini Package",
    description: "Full bikini ready package",
    price: "£48",
    saving: "Save £5",
    popular: false,
    slug: "bikini-package",
  },
  {
    name: "Hollywood Package",
    description: "The ultimate smooth experience",
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
    icon: "✂️",
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
    icon: "💅",
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
      "Reveal your best skin with our range of luxurious facial treatments, from quick refreshers to our signature Get The Glow facial.",
    icon: "✨",
    color: "#E84C8B",
    pricingKeys: ["facials"],
    heroImage: "/images/services/facials-hero.jpg",
    benefits: [
      "Deeply cleansing and rejuvenating treatments",
      "Premium skincare products used",
      "Tailored to your skin type",
      "Visible results from the first session",
    ],
    faqs: [
      {
        q: "Which facial is best for me?",
        a: "We'll assess your skin during your visit. The Get The Glow Facial (£55) is our most comprehensive treatment, ideal for most skin types.",
      },
      {
        q: "How often should I have a facial?",
        a: "For best results, we recommend a facial every 4–6 weeks to maintain healthy, glowing skin.",
      },
      {
        q: "What is the Gold Facial?",
        a: "The Gold Facial uses gold-infused products to brighten, firm and deeply nourish the skin. A true luxury experience.",
      },
    ],
  },
  {
    slug: "massage",
    name: "Massage",
    shortDesc: "Indian head, full body, hot stone & more",
    longDesc:
      "Melt away stress and tension with our relaxing massage treatments, from Indian head massage to the ultimate hot stone experience.",
    icon: "🌿",
    color: "#D96A98",
    pricingKeys: ["massage"],
    heroImage: "/images/services/massage-hero.jpg",
    benefits: [
      "Deep relaxation and stress relief",
      "Skilled, experienced therapists",
      "Warm, calming treatment environment",
      "Hot stone upgrade available",
    ],
    faqs: [
      {
        q: "What is a hot stone massage?",
        a: "Hot stone massage uses smooth, heated basalt stones placed on key points of the body to deeply relax muscles and ease tension.",
      },
      {
        q: "How long is a full body massage?",
        a: "Our full body massage takes approximately 60 minutes.",
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
    icon: "🌸",
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
    icon: "🎯",
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
      "Frame your face beautifully with our brow and lash treatments — from natural tints to dramatic lash lifts.",
    icon: "👁️",
    color: "#E84C8B",
    pricingKeys: ["lashesAndBrows"],
    heroImage: "/images/services/lashes-hero.jpg",
    benefits: [
      "Transform your natural brows and lashes",
      "Lash lift for a wide, open-eye effect",
      "Eyebrow lamination for fluffy, defined brows",
      "Long-lasting tint treatments",
    ],
    faqs: [
      {
        q: "What is eyebrow lamination?",
        a: "Eyebrow lamination restructures the brow hairs to set them in a uniform upward direction, giving a fluffy, full look that lasts 4–6 weeks.",
      },
      {
        q: "What is a lash lift?",
        a: "A lash lift curls and lifts your natural lashes from the base, giving the appearance of longer, lifted lashes without extensions.",
      },
      {
        q: "How long does lash tint last?",
        a: "Lash tint typically lasts 4–6 weeks. We recommend pairing it with a lash lift for maximum effect.",
      },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty",
    shortDesc: "Full beauty treatments for every occasion",
    longDesc:
      "Whether you're preparing for a special occasion or treating yourself, our beauty treatments cover everything from bridal packages to everyday pampering.",
    icon: "💄",
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
