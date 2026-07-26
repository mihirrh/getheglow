import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { SpecialOffersStrip } from "@/components/home/SpecialOffersStrip";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { LuxuryExperience } from "@/components/home/LuxuryExperience";
import { PricingHighlights } from "@/components/home/PricingHighlights";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Get The Glow – Beauty Salon Leicester | Hair, Nails, Facials & More",
  description:
    "Beauty salon in Leicester. Gel nails, hair styling, facials, massage, waxing, eyebrow threading & lash lifts. 5 Woodgate, Leicester LE3 5GH. Call 07778 698550.",
  alternates: { canonical: "https://gettheglow.co.uk" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <FeaturedServices />
      <LuxuryExperience />
      <SpecialOffersStrip />
      <PricingHighlights />
      <GoogleReviews />
      <InstagramFeed />
      <FAQ />
      <ContactSection />
    </>
  );
}
