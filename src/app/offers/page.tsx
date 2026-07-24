import type { Metadata } from "next";
import { SPECIAL_OFFERS } from "@/lib/pricing";
import { BUSINESS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Special Offers | Beauty Deals Leicester",
  description:
    "Exclusive beauty package deals at Get The Glow Leicester. Waxing packages, combo deals and special offers for Leicester clients.",
  alternates: { canonical: `${BUSINESS.url}/offers` },
};

export default function OffersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom">
          <span className="section-label mb-3 block">Save More</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Special Offers
          </h1>
          <p
            className="text-[#7A7A7A] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Indulge more for less. Our exclusive beauty packages combine the treatments you love
            at unbeatable prices.
          </p>
        </div>
      </section>

      {/* Offers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SPECIAL_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="card-premium p-8 relative overflow-hidden"
              >
                {/* Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #E84C8B, #C93A76)" }}
                >
                  {offer.badge}
                </div>

                {/* Saving ribbon */}
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold mb-4"
                  style={{
                    background: "rgba(214, 177, 90, 0.12)",
                    color: "#D6B15A",
                    border: "1px solid rgba(214, 177, 90, 0.3)",
                  }}
                >
                  ✦ {offer.saving}
                </div>

                <h2
                  className="font-bold text-[22px] text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {offer.title}
                </h2>
                <p
                  className="text-[14px] text-[#7A7A7A] mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {offer.description}
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span
                    className="text-4xl font-bold text-[#E84C8B]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {offer.price}
                  </span>
                  <span
                    className="text-[16px] text-[#B0B0B0] line-through"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {offer.originalPrice}
                  </span>
                </div>

                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <MessageCircle size={16} />
                  Book This Deal
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
