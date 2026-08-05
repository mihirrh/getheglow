import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, PRICING, BUSINESS } from "@/lib/data";
import { PriceTable } from "@/components/ui/PriceTable";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} Leicester – ${service.shortDesc}`,
    description: `${service.longDesc} Book at Get The Glow, ${BUSINESS.address.full}. Call ${BUSINESS.phone}.`,
    alternates: { canonical: `${BUSINESS.url}/services/${slug}` },
    openGraph: {
      title: `${service.name} Leicester | Get The Glow`,
      description: service.longDesc,
      url: `${BUSINESS.url}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const pricingKeys = service.pricingKeys as unknown as string[];
  const servicePricing = pricingKeys
    .map((key) => PRICING[key as keyof typeof PRICING])
    .filter(Boolean);

  const relatedServices = SERVICES.filter(
    (s) => s.slug !== service.slug
  ).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} Leicester`,
    description: service.longDesc,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        postalCode: BUSINESS.address.postcode,
      },
    },
    areaServed: "Leicester",
    serviceType: service.name,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #E84C8B 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
            className="mb-8 text-white/60 [&_a]:text-white/60 [&_a:hover]:text-primary"
          />
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <ServiceIcon slug={service.slug} size={26} className="text-white" />
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6 leading-tight">
              {service.name}{" "}
              <span style={{ background: "linear-gradient(135deg, #F7D6E3, #E84C8B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Leicester
              </span>
            </h1>
            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              {service.longDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 gradient-primary text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm"
              >
                <Sparkles size={15} />
                Book {service.name}
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 glass border border-white/30 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/20 transition-all text-sm"
              >
                <Phone size={15} />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/25 border border-[#25D366]/40 text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#25D366]/40 transition-all text-sm"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Decorative orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark mb-6">
                The {service.name} Experience at Get The Glow
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                At Get The Glow, every {service.name.toLowerCase()} treatment is performed by experienced professionals who care about getting you the very best results in a comfortable, premium environment.
              </p>
              <div className="space-y-3">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-dark text-sm leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Pricing */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
                Pricing
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark mb-6">
                {service.name} Prices
              </h2>
              <div className="space-y-4">
                {servicePricing.map((pricing) => (
                  <PriceTable
                    key={pricing.label}
                    label={pricing.label}
                    items={pricing.items}
                    note={"note" in pricing ? (pricing as { note?: string }).note : undefined}
                  />
                ))}
              </div>
              <p className="text-xs text-muted mt-3">
                All prices are inclusive of VAT. Subject to change — please confirm at time of booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-dark mb-4">
              {service.name} FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="card-luxury border border-border/50 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-dark mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 gradient-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Ready to Book Your {service.name}?
          </h2>
          <p className="text-white/80 mb-8">
            Get in touch with Get The Glow today. We'd love to welcome you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-medium px-8 py-3.5 rounded-full hover:bg-soft-pink transition-colors shadow-lg text-sm"
            >
              Book Now
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

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-dark mb-10 text-center">
            More Services
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-luxury group p-6 text-center border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-soft-pink/60 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                  <ServiceIcon slug={s.slug} size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-dark text-sm mb-1">{s.name}</h3>
                <span className="text-xs text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View <ArrowRight size={10} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
