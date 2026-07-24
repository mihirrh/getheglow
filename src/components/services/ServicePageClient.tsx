"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { BUSINESS } from "@/lib/constants";
import { MessageCircle, Phone, Check, ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/pricing";

interface Props {
  service: Service;
}

export function ServicePageClient({ service }: Props) {
  const pricingCategory = PRICING.find((p) => p.id === service.id);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in Leicester`,
    provider: {
      "@type": "BeautySalon",
      name: "Get The Glow",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 Woodgate",
        addressLocality: "Leicester",
        postalCode: "LE3 5GH",
      },
    },
    description: service.longDescription,
    areaServed: {
      "@type": "City",
      name: "Leicester",
    },
    offers: pricingCategory
      ? {
          "@type": "Offer",
          priceCurrency: "GBP",
          price: service.priceFrom.replace("£", "").replace("From ", ""),
        }
      : undefined,
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] mb-8" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="text-[#7A7A7A] hover:text-[#E84C8B] transition-colors">
              Home
            </Link>
            <span className="text-[#F0D6E3]">/</span>
            <Link href="/services" className="text-[#7A7A7A] hover:text-[#E84C8B] transition-colors">
              Services
            </Link>
            <span className="text-[#F0D6E3]">/</span>
            <span className="text-[#E84C8B] font-medium">{service.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <span className="section-label mb-3 block">{service.tagline}</span>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {service.title}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #E84C8B, #C93A76)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Leicester
              </span>
            </h1>
            <p
              className="text-[#7A7A7A] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={17} />
                Book via WhatsApp
              </a>
              <a href={BUSINESS.phoneHref} className="btn-secondary">
                <Phone size={17} />
                {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What's Included */}
            <div className="card-premium p-7">
              <h2
                className="font-bold text-[20px] text-[#2B2B2B] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What&apos;s Included
              </h2>
              <ul className="space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#E84C8B] mt-0.5 flex-shrink-0" />
                    <span
                      className="text-[14px] text-[#2B2B2B]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="card-premium p-7">
              <h2
                className="font-bold text-[20px] text-[#2B2B2B] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Benefits
              </h2>
              <ul className="space-y-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="text-[#D6B15A] mt-0.5 flex-shrink-0">✦</span>
                    <span
                      className="text-[14px] text-[#2B2B2B]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div className="card-premium p-7">
              <h2
                className="font-bold text-[20px] text-[#2B2B2B] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Who It&apos;s For
              </h2>
              <ul className="space-y-2.5">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5">
                    <span className="text-[#E84C8B] mt-0.5 flex-shrink-0">→</span>
                    <span
                      className="text-[14px] text-[#2B2B2B]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {w}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {pricingCategory && (
        <section className="section-padding-sm" style={{ background: "#FFF8F8" }}>
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-3xl font-bold text-[#2B2B2B] mb-8 text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Pricing
              </h2>
              <div className="card-premium overflow-hidden">
                {pricingCategory.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-center px-6 py-3.5 ${
                      i < pricingCategory.items.length - 1
                        ? "border-b border-[rgba(240,214,227,0.4)]"
                        : ""
                    }`}
                  >
                    <span
                      className="text-[14px] text-[#2B2B2B]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="font-semibold text-[15px] text-[#E84C8B]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-[#2B2B2B] mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="card-premium p-6">
                <h3
                  className="font-semibold text-[15px] text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-[14px] text-[#7A7A7A] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding-sm" style={{ background: "#FFF8F8" }}>
        <div className="container-custom">
          <h2
            className="text-2xl font-bold text-[#2B2B2B] mb-6 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            You May Also Like
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.relatedServices.map((id) => (
              <Link
                key={id}
                href={`/services/${id}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[rgba(240,214,227,0.6)] text-[14px] font-medium text-[#2B2B2B] hover:text-[#E84C8B] hover:border-[#E84C8B] transition-all shadow-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #E84C8B, #C93A76)" }}
      >
        <div className="container-custom">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Book Your {service.title} Appointment?
          </h2>
          <p
            className="text-white/80 mb-8 text-[16px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            At Get The Glow, 5 Woodgate, Leicester LE3 5GH
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#E84C8B] font-semibold rounded-full text-[15px] hover:bg-[#FFF8F8] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <MessageCircle size={17} />
              WhatsApp to Book
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/15 text-white font-semibold rounded-full text-[15px] border border-white/30 hover:bg-white/25 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Phone size={17} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
