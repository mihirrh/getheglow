import type { Metadata } from "next";
import { PRICING } from "@/lib/pricing";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | Beauty Treatment Prices Leicester",
  description:
    "Full price list for Get The Glow Leicester. Threading, waxing, nails, facials, massage, hair colouring and more. Affordable luxury beauty.",
  alternates: { canonical: `${BUSINESS.url}/pricing` },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom">
          <span className="section-label mb-3 block">Transparent Pricing</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Treatment Price List
          </h1>
          <p
            className="text-[#7A7A7A] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Luxury beauty treatments at prices that won&apos;t break the bank. All prices include treatment
            and professional consultation.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRICING.map((category) => (
              <div key={category.id} className="card-premium overflow-hidden">
                {/* Category Header */}
                <div
                  className="px-6 py-4 border-b border-[rgba(240,214,227,0.4)]"
                  style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3)" }}
                >
                  <h2
                    className="font-bold text-[18px] text-[#2B2B2B] flex items-center gap-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <span className="text-[#E84C8B]">{category.icon}</span>
                    {category.title}
                  </h2>
                </div>

                {/* Items */}
                <div className="divide-y divide-[rgba(240,214,227,0.3)]">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center px-6 py-3 hover:bg-[rgba(232,76,139,0.02)] transition-colors"
                    >
                      <span
                        className="text-[13px] text-[#2B2B2B]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="font-semibold text-[14px] text-[#E84C8B] ml-4 whitespace-nowrap"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p
            className="text-center text-[13px] text-[#7A7A7A] mt-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Prices are subject to change. Please contact us for the most up-to-date pricing and
            any bespoke treatment queries.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-center"
        style={{ background: "linear-gradient(135deg, #E84C8B, #C93A76)" }}
      >
        <div className="container-custom">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Book?
          </h2>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#E84C8B] font-semibold rounded-full text-[15px] hover:bg-[#FFF8F8] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            💬 Book via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
