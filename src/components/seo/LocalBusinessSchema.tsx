import { BUSINESS, HOURS, SERVICES } from "@/lib/data";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon", "HealthAndBeautyBusiness"],
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.634,
      longitude: -1.147,
    },
    openingHoursSpecification: HOURS.filter((h) => h.open).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.hours.split("–")[0].trim().replace("am", ":00").replace("pm", ":00"),
      closes: h.hours.split("–")[1]?.trim().replace("am", ":00").replace("pm", ":00") ?? "17:00",
    })),
    sameAs: [BUSINESS.instagram],
    image: `${BUSINESS.url}/og-image.jpg`,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: {
      "@type": "City",
      name: "Leicester",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: `${s.name} Leicester`,
          description: s.longDesc,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
