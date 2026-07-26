import type { Metadata } from "next";
import { PRICING, BUSINESS } from "@/lib/data";
import { FadeUp, StaggerGrid, StaggerItem, PageHero, PageHeroItem } from "@/components/ui/Animate";
import { PriceTable } from "@/components/ui/PriceTable";

export const metadata: Metadata = {
  title: "Prices – Beauty Salon Leicester | Nails, Hair, Waxing & More",
  description:
    "See prices for all treatments at Get The Glow Leicester: gel nails, threading, waxing, lash lift, facials, massage & hair. Honest, affordable pricing.",
  alternates: { canonical: `${BUSINESS.url}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-36 pb-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #D96A98 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <PageHero>
            <PageHeroItem>
              <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium">
                Transparent Pricing
              </p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mt-2 mb-3">
                Price List
              </h1>
            </PageHeroItem>
            <PageHeroItem>
              <p className="text-white/75 text-lg max-w-xl mx-auto">
                Luxury treatments at honest, transparent prices. No hidden costs — just great value beauty in Leicester.
              </p>
            </PageHeroItem>
          </PageHero>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Prices */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <p className="text-sm text-muted">
              All prices are inclusive of VAT. Prices are subject to change — please confirm at time of booking.
            </p>
          </FadeUp>

          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.06}
          >
            {Object.values(PRICING).map((section) => (
              <StaggerItem key={section.label} variant="up">
                <PriceTable label={section.label} items={section.items} />
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* Book CTA */}
          <FadeUp delay={0.2} className="text-center mt-16">
            <p className="font-display font-semibold text-dark text-xl mb-4">
              Ready to Book?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm"
              >
                Book via WhatsApp
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="border border-primary text-primary font-medium px-8 py-3.5 rounded-full hover:bg-soft-pink/40 transition-colors text-sm"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
