import type { Metadata } from "next";
import { SPECIAL_OFFERS, BUSINESS } from "@/lib/data";
import { Sparkles, Tag } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerItem, PageHero, PageHeroItem } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Special Offers – Beauty Bundles & Packages Leicester",
  description:
    "Save on beauty treatments with our exclusive bundle packages at Get The Glow Leicester. Waxing bundles, Hollywood packages & more.",
  alternates: { canonical: `${BUSINESS.url}/offers` },
};

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-36 pb-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #D6B15A 60%, #E84C8B 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <PageHero>
            <PageHeroItem>
              <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium">Limited Bundles</p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mt-2 mb-3">Special Offers</h1>
            </PageHeroItem>
            <PageHeroItem>
              <p className="text-white/75 text-lg">Incredible value packages on our most popular treatments. Book now before they sell out.</p>
            </PageHeroItem>
          </PageHero>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/20 blur-[120px] pointer-events-none" />
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {SPECIAL_OFFERS.map((offer) => (
              <StaggerItem key={offer.slug} variant="up">
                <div
                  className={`relative card-luxury p-8 text-center border h-full flex flex-col ${
                    offer.popular ? "border-primary/40 ring-1 ring-primary/20" : "border-border/50"
                  }`}
                >
                  {offer.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="gradient-primary text-white text-[10px] font-medium px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                        <Sparkles size={9} />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-full bg-soft-pink/60 flex items-center justify-center mx-auto mb-6">
                    <Tag size={24} className="text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-xl text-dark mb-3">
                    {offer.name}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {offer.description}
                  </p>
                  <div className="divider-pink mb-6" />
                  <div className="font-display font-bold text-5xl text-primary mb-2">
                    {offer.price}
                  </div>
                  <div className="text-sm text-gold font-medium mb-8">{offer.saving}</div>
                  <a
                    href={BUSINESS.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full gradient-primary text-white font-medium py-3.5 rounded-2xl hover:opacity-90 transition-opacity text-sm"
                  >
                    Book This Offer
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.2} className="text-center mt-16">
            <p className="text-sm text-muted">
              To claim any of these offers, just mention them when booking.{" "}
              <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                WhatsApp us
              </a>{" "}
              or call{" "}
              <a href={BUSINESS.phoneHref} className="text-primary hover:underline">
                {BUSINESS.phone}
              </a>
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
