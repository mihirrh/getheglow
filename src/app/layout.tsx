import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTAs } from "@/components/layout/StickyCTAs";
import { MotionProvider } from "@/components/MotionProvider";

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
    default: "Get The Glow – Beauty Salon in Leicester | Hair, Nails, Facials",
    template: "%s | Get The Glow Leicester",
  },
  description:
    "Beauty salon in Leicester. Expert hair, gel nails, facials, massage, waxing, eyebrow threading & lash lifts at 5 Woodgate, Leicester LE3 5GH. Book: 07778 698550.",
  keywords: [
    "beauty salon Leicester",
    "nail salon Leicester",
    "hair salon Leicester",
    "beauty salon near me",
    "gel nails Leicester",
    "acrylic nails Leicester",
    "builder gel nails Leicester",
    "eyebrow threading Leicester",
    "brow lamination Leicester",
    "lash lift Leicester",
    "waxing Leicester",
    "Hollywood wax Leicester",
    "facial Leicester",
    "massage Leicester",
    "beauty salon LE3",
    "Get The Glow Leicester",
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
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyCTAs />
        </MotionProvider>
      </body>
    </html>
  );
}
