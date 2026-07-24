import type { Metadata } from "next";
import { PRICING, BUSINESS } from "@/lib/data";
import { PriceTable } from "@/components/ui/PriceTable";

export const metadata: Metadata = {
  title: "Full Price List – Beauty Salon Leicester",
  description:
    "Complete pricing for all services at Get The Glow Leicester: threading, waxing, nails, facials, massage, hair and more. Transparent, honest pricing.",
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
          <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium mb-4">
            Transparent Pricing
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6">
            Price List
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Luxury treatments at honest, transparent prices. No hidden costs — just great value beauty in Leicester.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Prices */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted mb-12">
            All prices are inclusive of VAT. Prices are subject to change — please confirm at time of booking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(PRICING).map((section) => (
              <PriceTable
                key={section.label}
                label={section.label}
                items={section.items}
              />
            ))}
          </div>

          {/* Book CTA */}
          <div className="text-center mt-16">
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
          </div>
        </div>
      </section>
    </>
  );
}
