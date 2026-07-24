export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
  priceFrom: string;
}

export const SERVICES: Service[] = [
  {
    id: "hair",
    title: "Hair",
    slug: "hair",
    tagline: "Expert Hair Styling in Leicester",
    description:
      "From precision cuts to luxurious blowdrys, balayage and full colour — our hair services are tailored to you.",
    longDescription:
      "At Get The Glow, our talented stylists bring artistry and expertise to every appointment. Whether you're looking for a fresh cut, a vibrant colour transformation, a silky blowdry, or expert balayage, our team delivers results that turn heads. We use premium products to keep your hair healthy, shiny and beautiful.",
    icon: "✂",
    heroImage: "/images/hair-hero.jpg",
    features: [
      "Precision cuts & trims",
      "Wash, cut & blowdry",
      "Balayage & highlights",
      "Full colour & retouches",
      "Hair masks & treatments",
      "Bridal hair styling",
    ],
    benefits: [
      "Premium products used",
      "Tailored to your hair type",
      "Long-lasting results",
      "Experienced stylists",
    ],
    whoFor: [
      "Anyone wanting a fresh cut or restyle",
      "Those seeking colour transformation",
      "Brides and bridal parties",
      "Anyone wanting a luxury blowdry",
    ],
    faqs: [
      {
        q: "How long does a wash, cut and blowdry take?",
        a: "Typically 60–90 minutes depending on hair length and thickness.",
      },
      {
        q: "Do I need to book in advance for balayage?",
        a: "Yes, we recommend booking at least a week in advance for colour services.",
      },
      {
        q: "What colour brands do you use?",
        a: "We use professional-grade colour brands that prioritise hair health and vibrancy.",
      },
    ],
    relatedServices: ["beauty", "nails", "facials"],
    seoTitle: "Hair Salon Leicester | Cuts, Colour & Blowdrys | Get The Glow",
    seoDescription:
      "Expert hair styling in Leicester. Cuts, blowdrys, balayage, highlights and colour at Get The Glow, 5 Woodgate, Leicester LE3 5GH. Book today.",
    priceFrom: "£5",
  },
  {
    id: "nails",
    title: "Nails",
    slug: "nails",
    tagline: "Luxury Nail Services in Leicester",
    description:
      "From gel polish to builder gel extensions and intricate nail art — treat your hands and feet to something special.",
    longDescription:
      "Our nail technicians are passionate about the art of nails. Using only premium products, we offer everything from classic polish to long-lasting gel, builder gel extensions, and detailed nail art. Every treatment includes full nail prep and finishing for a flawless result.",
    icon: "✦",
    heroImage: "/images/nails-hero.jpg",
    features: [
      "Gel polish & normal polish",
      "Builder gel nails",
      "Builder gel extensions",
      "Nail art & designs",
      "Mini & luxury manicures",
      "Mini & luxury pedicures",
    ],
    benefits: [
      "Long-lasting results",
      "Premium nail products",
      "Nail health focused",
      "Intricate designs available",
    ],
    whoFor: [
      "Those wanting long-lasting gel nails",
      "Brides and special occasions",
      "Anyone wanting nail art",
      "Nail health enthusiasts",
    ],
    faqs: [
      {
        q: "How long do builder gel nails last?",
        a: "Builder gel typically lasts 3–4 weeks before needing an infill.",
      },
      {
        q: "Can I choose my own nail design?",
        a: "Absolutely! Bring inspiration images and our techs will create your dream nails.",
      },
      {
        q: "Do you offer nail removal?",
        a: "Yes, we offer safe removal with or without a new set from £8.",
      },
    ],
    relatedServices: ["beauty", "facials", "massage"],
    seoTitle:
      "Nail Salon Leicester | Gel Nails, Builder Gel & Nail Art | Get The Glow",
    seoDescription:
      "Premium nail services in Leicester. Gel polish, builder gel, extensions and nail art at Get The Glow, 5 Woodgate, Leicester. Book now.",
    priceFrom: "£10",
  },
  {
    id: "facials",
    title: "Facials",
    slug: "facials",
    tagline: "Luxury Facials in Leicester",
    description:
      "Restore your natural glow with our range of luxury facial treatments, from express to our signature Get The Glow Facial.",
    longDescription:
      "Our facial treatments are designed to address your unique skin concerns using professional-grade products and expert techniques. From a quick express facial to our indulgent signature Get The Glow Facial, each treatment is a sensory journey that leaves your skin radiant, balanced and deeply nourished.",
    icon: "◈",
    heroImage: "/images/facials-hero.jpg",
    features: [
      "Express facial",
      "Deep cleanse facial",
      "Gold luxury facial",
      "Signature Get The Glow Facial",
      "Skin analysis included",
      "Premium skincare products",
    ],
    benefits: [
      "Visible results from first treatment",
      "Deep skin cleansing",
      "Anti-ageing benefits",
      "Relaxing and rejuvenating",
    ],
    whoFor: [
      "Those with dull or congested skin",
      "Anyone wanting deep hydration",
      "Anti-ageing seekers",
      "Self-care enthusiasts",
    ],
    faqs: [
      {
        q: "How often should I have a facial?",
        a: "For best results we recommend a facial every 4–6 weeks.",
      },
      {
        q: "What is the Get The Glow Facial?",
        a: "Our signature treatment combines deep cleansing, exfoliation, mask and massage for a full glow transformation.",
      },
      {
        q: "Is a facial suitable for sensitive skin?",
        a: "Yes, we tailor every facial to your skin type including sensitive skin.",
      },
    ],
    relatedServices: ["massage", "beauty", "nails"],
    seoTitle:
      "Facials Leicester | Gold & Luxury Facial Treatments | Get The Glow",
    seoDescription:
      "Luxury facials in Leicester. Express, Deep Cleanse, Gold and signature Get The Glow Facial. Book at 5 Woodgate, Leicester LE3 5GH.",
    priceFrom: "£22",
  },
  {
    id: "massage",
    title: "Massage",
    slug: "massage",
    tagline: "Relaxing Massage in Leicester",
    description:
      "Melt away tension with our expert massage treatments including hot stone, full body and Indian head massage.",
    longDescription:
      "Step into total relaxation with our range of therapeutic massage treatments. Our experienced therapists use expert techniques to relieve tension, improve circulation and restore your sense of calm. From a targeted back, neck and shoulder massage to a full indulgent hot stone experience.",
    icon: "◎",
    heroImage: "/images/massage-hero.jpg",
    features: [
      "Indian head massage",
      "Back, neck & shoulder",
      "Full body massage",
      "Hot stone massage",
      "Tension relief",
      "Relaxing atmosphere",
    ],
    benefits: [
      "Deep tension relief",
      "Improved circulation",
      "Stress reduction",
      "Promotes better sleep",
    ],
    whoFor: [
      "Those suffering from tension and stress",
      "People with muscle aches",
      "Those wanting deep relaxation",
      "Anyone needing self-care time",
    ],
    faqs: [
      {
        q: "What should I wear for a full body massage?",
        a: "You will be professionally draped throughout — we provide full modesty at all times.",
      },
      {
        q: "Is hot stone massage suitable for everyone?",
        a: "Hot stone is suitable for most people. Please mention any health conditions when booking.",
      },
      {
        q: "How long is a full body massage?",
        a: "Our full body massage lasts approximately 60 minutes.",
      },
    ],
    relatedServices: ["facials", "beauty", "hair"],
    seoTitle:
      "Massage Leicester | Hot Stone, Full Body & Indian Head | Get The Glow",
    seoDescription:
      "Relaxing massage treatments in Leicester. Hot stone, full body, Indian head and back, neck & shoulder massage. Book at Get The Glow, Leicester.",
    priceFrom: "£30",
  },
  {
    id: "waxing",
    title: "Waxing",
    slug: "waxing",
    tagline: "Professional Waxing in Leicester",
    description:
      "Smooth, long-lasting results with our expert waxing services. Face and body waxing using premium tea tree and hot wax.",
    longDescription:
      "Our professional waxing services use premium tea tree and hot wax formulas, carefully selected to suit different skin types. Whether you're looking for a quick tidy-up or a full body wax, our therapists work with precision and care for smooth, lasting results.",
    icon: "◇",
    heroImage: "/images/waxing-hero.jpg",
    features: [
      "Face waxing (tea tree & hot wax)",
      "Body waxing",
      "Brazilian & Hollywood",
      "Bikini waxing",
      "Full body packages",
      "Special offer packages",
    ],
    benefits: [
      "Long-lasting smoothness",
      "Reduces hair regrowth over time",
      "Premium wax formulas",
      "Quick and efficient",
    ],
    whoFor: [
      "Those wanting long-lasting hair removal",
      "Anyone preparing for holidays",
      "Regular waxing clients",
      "Those switching from shaving",
    ],
    faqs: [
      {
        q: "How long does hair need to be for waxing?",
        a: "Hair should ideally be at least 5mm (about 2 weeks of growth) for best results.",
      },
      {
        q: "Is Brazilian or Hollywood waxing painful?",
        a: "Discomfort varies by individual. We use premium hot wax which is gentler on sensitive areas.",
      },
      {
        q: "How long do waxing results last?",
        a: "Results typically last 3–6 weeks depending on your hair growth cycle.",
      },
    ],
    relatedServices: ["threading", "beauty", "nails"],
    seoTitle:
      "Waxing Leicester | Brazilian, Hollywood & Body Wax | Get The Glow",
    seoDescription:
      "Professional waxing in Leicester. Face, body, Brazilian and Hollywood waxing at Get The Glow, 5 Woodgate, Leicester LE3 5GH. Book now.",
    priceFrom: "£3",
  },
  {
    id: "threading",
    title: "Threading",
    slug: "threading",
    tagline: "Expert Threading in Leicester",
    description:
      "Precise, gentle threading for perfectly shaped eyebrows and flawless face shaping by our experienced therapists.",
    longDescription:
      "Threading is an ancient and precise hair removal technique that delivers beautifully defined results, especially for eyebrows. Our therapists are highly skilled in facial threading, offering everything from eyebrow shaping to full face threading with a gentle touch.",
    icon: "⊹",
    heroImage: "/images/threading-hero.jpg",
    features: [
      "Eyebrow threading & reshaping",
      "Upper lip threading",
      "Full face threading",
      "Forehead threading",
      "Neck threading",
      "Cheeks & chin",
    ],
    benefits: [
      "Precise hair removal",
      "Natural technique",
      "Suitable for sensitive skin",
      "Long-lasting results",
    ],
    whoFor: [
      "Those wanting perfectly shaped brows",
      "People with sensitive skin",
      "Anyone avoiding wax on face",
      "Regular threading clients",
    ],
    faqs: [
      {
        q: "How often should I get my eyebrows threaded?",
        a: "Most clients come every 2–4 weeks to maintain their brow shape.",
      },
      {
        q: "Is threading better than waxing for eyebrows?",
        a: "Threading is more precise and gentler on skin — ideal for those with sensitive skin or who use retinol/acids.",
      },
      {
        q: "Does threading hurt?",
        a: "There is minimal discomfort. Most clients find it less irritating than waxing.",
      },
    ],
    relatedServices: ["waxing", "beauty", "facials"],
    seoTitle:
      "Threading Leicester | Eyebrow Threading & Face Threading | Get The Glow",
    seoDescription:
      "Expert eyebrow and face threading in Leicester. Precise, gentle threading at Get The Glow, 5 Woodgate, Leicester. Walk-ins welcome.",
    priceFrom: "£2.50",
  },
  {
    id: "beauty",
    title: "Beauty",
    slug: "beauty",
    tagline: "Full Beauty Services in Leicester",
    description:
      "Complete beauty treatments including lash lifts, brow lamination, tints and full luxury beauty packages.",
    longDescription:
      "Our beauty treatments are the finishing touch to your look. From a natural brow lamination that frames your face, to a lash lift that opens up your eyes — our beauty services are designed to enhance your natural beauty and save you precious time every morning.",
    icon: "◉",
    heroImage: "/images/beauty-hero.jpg",
    features: [
      "Eyebrow lamination",
      "Eyelash lift",
      "Brow & lash tinting",
      "Lash lift & tint combo",
      "Lamination tint & wax combo",
      "Luxury beauty packages",
    ],
    benefits: [
      "Wake up ready",
      "Low maintenance beauty",
      "Natural-looking results",
      "Long-lasting 6–8 weeks",
    ],
    whoFor: [
      "Those wanting low-maintenance beauty",
      "Anyone wanting fuller-looking lashes",
      "Those wanting defined brows without daily makeup",
      "Brides and special occasions",
    ],
    faqs: [
      {
        q: "How long does brow lamination last?",
        a: "Brow lamination typically lasts 4–6 weeks.",
      },
      {
        q: "Can I wear mascara after a lash lift?",
        a: "Yes, after 24 hours you can wear mascara to further enhance your lashes.",
      },
      {
        q: "Is lash lifting safe for my natural lashes?",
        a: "Yes, when done professionally lash lifting is completely safe for your natural lashes.",
      },
    ],
    relatedServices: ["facials", "nails", "massage"],
    seoTitle:
      "Beauty Treatments Leicester | Lash Lift, Brow Lamination | Get The Glow",
    seoDescription:
      "Premium beauty treatments in Leicester. Lash lift, brow lamination, tinting and beauty packages at Get The Glow, 5 Woodgate, Leicester.",
    priceFrom: "£8",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
