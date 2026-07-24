import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SpecialOffersStrip } from "@/components/home/SpecialOffersStrip";
import { LuxuryExperience } from "@/components/home/LuxuryExperience";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { FAQ } from "@/components/home/FAQ";
import { MapContactSection } from "@/components/home/MapContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SpecialOffersStrip />
      <LuxuryExperience />
      <GoogleReviews />
      <InstagramFeed />
      <FAQ />
      <MapContactSection />
    </>
  );
}
