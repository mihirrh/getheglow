import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Inter,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCtAs } from "@/components/layout/StickyCtAs";
import { BUSINESS } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Get The Glow | Premium Beauty Salon Leicester",
    template: "%s | Get The Glow Leicester",
  },
  description: BUSINESS.description,
  keywords: [
    "beauty salon Leicester",
    "hair salon Leicester",
    "nails Leicester",
    "facials Leicester",
    "massage Leicester",
    "waxing Leicester",
    "threading Leicester",
    "eyebrows Leicester",
    "lash lift Leicester",
    "brow lamination Leicester",
    "Get The Glow",
    "beauty salon Woodgate Leicester",
    "Leicestershire beauty",
    "Midlands beauty salon",
    "bridal makeup Leicester",
    "bridal hair Leicester",
  ],
  authors: [{ name: "Get The Glow" }],
  creator: "Get The Glow",
  publisher: "Get The Glow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: "Get The Glow | Premium Beauty Salon Leicester",
    description: BUSINESS.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Get The Glow — Premium Beauty Salon Leicester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get The Glow | Premium Beauty Salon Leicester",
    description: BUSINESS.description,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.6369,
      longitude: -1.1398,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday"],
        opens: "11:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "15:00",
      },
    ],
    sameAs: [BUSINESS.instagramUrl],
    priceRange: "£–££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Card",
    servesCuisine: null,
    hasMap: BUSINESS.googleMaps,
    image: `${BUSINESS.url}/og-image.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
    },
  };

  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCtAs />
      </body>
    </html>
  );
}
