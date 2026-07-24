// ===== BUSINESS CONSTANTS =====
export const BUSINESS = {
  name: "Get The Glow",
  tagline: "Leicester's Premium Beauty Salon",
  description:
    "Leicester's most luxurious beauty salon. Expert hair, nails, facials, massage, waxing, threading, and bridal makeup at 5 Woodgate, Leicester.",
  address: {
    street: "5 Woodgate",
    city: "Leicester",
    county: "Leicestershire",
    postcode: "LE3 5GH",
    country: "United Kingdom",
  },
  phone: "07778 698550",
  phoneHref: "tel:+447778698550",
  whatsapp: "447778698550",
  whatsappHref: "https://wa.me/447778698550",
  email: "beautybynamm@outlook.com",
  emailHref: "mailto:beautybynamm@outlook.com",
  instagram: "@_getheglow",
  instagramUrl: "https://www.instagram.com/_getheglow/",
  googleMaps: "https://maps.app.goo.gl/4j5JSzA7xpiMQsMg6",
  googleReviewsUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ...",
  url: "https://getheglow.co.uk",
} as const;

export const HOURS = [
  { day: "Monday", hours: "Closed", open: false },
  { day: "Tuesday", hours: "11am – 5pm", open: true },
  { day: "Wednesday", hours: "Closed", open: false },
  { day: "Thursday", hours: "11am – 5pm", open: true },
  { day: "Friday", hours: "11am – 5pm", open: true },
  { day: "Saturday", hours: "11am – 5pm", open: true },
  { day: "Sunday", hours: "11am – 3pm", open: true },
] as const;
