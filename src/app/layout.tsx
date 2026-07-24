import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTAs } from "@/components/layout/StickyCTAs";

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
  metadataBase: new URL("https://gettheglow.co.uk"),
  title: {
    default: "Get The Glow – Premium Beauty Salon in Leicester",
    template: "%s | Get The Glow Leicester",
  },
  description:
    "Leicester's premium beauty salon. Hair, nails, facials, massage, waxing, threading & more at 5 Woodgate, Leicester LE3 5GH. Book online or call 07778 698550.",
  keywords: [
    "beauty salon Leicester",
    "hair salon Leicester",
    "nails Leicester",
    "facials Leicester",
    "massage Leicester",
    "waxing Leicester",
    "threading Leicester",
    "eyebrows Leicester",
    "lashes Leicester",
    "Get The Glow",
    "luxury beauty Leicester",
  ],
  authors: [{ name: "Get The Glow" }],
  creator: "Get The Glow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://gettheglow.co.uk",
    siteName: "Get The Glow",
    title: "Get The Glow – Premium Beauty Salon in Leicester",
    description:
      "Leicester's premium beauty salon. Hair, nails, facials, massage, waxing, threading & more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Get The Glow – Premium Beauty Salon Leicester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get The Glow – Premium Beauty Salon in Leicester",
    description:
      "Leicester's premium beauty salon. Hair, nails, facials, massage, waxing, threading & more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://gettheglow.co.uk" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased bg-white text-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTAs />
      </body>
    </html>
  );
}
