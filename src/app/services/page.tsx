import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Beauty Treatments Leicester",
  description:
    "Explore all beauty services at Get The Glow Leicester. Hair, nails, facials, massage, waxing, threading, lashes & brows. Book today.",
  alternates: { canonical: `${BUSINESS.url}/services` },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom">
          <span className="section-label mb-3 block">What We Offer</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Services
          </h1>
          <p
            className="text-[#7A7A7A] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Premium beauty treatments from expert therapists in the heart of Leicester.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card-premium p-8 group block"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h2
                  className="text-2xl font-bold text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-[#7A7A7A] text-[14px] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[14px] font-semibold text-[#E84C8B]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    From {service.priceFrom}
                  </span>
                  <div className="flex items-center gap-1 text-[#E84C8B] text-[13px] group-hover:gap-2 transition-all">
                    <span style={{ fontFamily: "var(--font-body)" }}>Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
