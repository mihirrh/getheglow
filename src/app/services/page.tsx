import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Beauty Services in Leicester – Hair, Nails, Facials & More",
  description:
    "Explore the full range of luxury beauty services at Get The Glow Leicester: hair styling, nails, facials, massage, waxing, threading, eyebrows & more.",
  alternates: { canonical: `${BUSINESS.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-36 pb-24 overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #E84C8B 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium mb-4">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6">
            Our Services
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto">
            From precision hair styling to luxury facials, massage, nails and more — everything you need for a complete beauty experience in Leicester.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-luxury group block p-7 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h2 className="font-display font-bold text-xl text-dark mb-2">
                  {service.name} Leicester
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {service.longDesc.slice(0, 100)}...
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  View treatments & pricing
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">Book Today</h2>
          <p className="text-white/80 mb-8">
            Ready to experience Leicester's best beauty salon? Get in touch and we'll take care of you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-medium px-8 py-3.5 rounded-full hover:bg-soft-pink transition-colors shadow-lg text-sm"
            >
              Book via WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="border border-white/50 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors text-sm"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
