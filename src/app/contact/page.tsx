import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Camera } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeUp, SlideIn, StaggerGrid, StaggerItem, PageHero } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Contact Get The Glow – Book a Beauty Appointment in Leicester",
  description:
    "Contact Get The Glow beauty salon in Leicester. Book an appointment, ask about services, or find us at 5 Woodgate, Leicester LE3 5GH. Call 07778 698550.",
  alternates: { canonical: `${BUSINESS.url}/contact` },
};

const CONTACTS = [
  {
    href: BUSINESS.phoneHref,
    icon: Phone,
    iconColor: "text-primary",
    bgColor: "bg-soft-pink/60 group-hover:bg-primary/15",
    borderHover: "hover:border-primary/30",
    label: "Call",
    value: BUSINESS.phone,
    external: false,
  },
  {
    href: BUSINESS.whatsappHref,
    icon: MessageCircle,
    iconColor: "text-[#25D366]",
    bgColor: "bg-[#25D366]/15",
    borderHover: "hover:border-[#25D366]/40",
    label: "WhatsApp",
    value: "Message Us",
    external: true,
  },
  {
    href: `mailto:${BUSINESS.email}`,
    icon: Mail,
    iconColor: "text-primary",
    bgColor: "bg-soft-pink/60 group-hover:bg-primary/15",
    borderHover: "hover:border-primary/30",
    label: "Email",
    value: BUSINESS.email,
    external: false,
  },
  {
    href: BUSINESS.instagram,
    icon: Camera,
    iconColor: "text-primary",
    bgColor: "bg-soft-pink/60 group-hover:bg-primary/15",
    borderHover: "hover:border-primary/30",
    label: "Instagram",
    value: BUSINESS.instagramHandle,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-36 pb-24 overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #D96A98 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <PageHero>
            <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium mb-4">
              Get In Touch
            </p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/75 text-lg">
              We'd love to hear from you. Book an appointment, ask a question, or just say hello.
            </p>
          </PageHero>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose/20 blur-[120px] pointer-events-none" />
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <SlideIn from="left">
              <div className="space-y-6">
                {/* Quick contact cards */}
                <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                  {CONTACTS.map((c) => (
                    <StaggerItem key={c.label} variant="scale">
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className={`card-luxury flex items-center gap-4 p-6 border border-border/50 ${c.borderHover} transition-colors group h-full`}
                      >
                        <div className={`w-12 h-12 rounded-2xl ${c.bgColor} flex items-center justify-center flex-shrink-0 transition-colors`}>
                          <c.icon size={20} className={c.iconColor} />
                        </div>
                        <div>
                          <p className="text-xs text-muted uppercase tracking-widest mb-0.5">{c.label}</p>
                          <p className="font-display font-semibold text-dark text-sm break-all leading-snug">{c.value}</p>
                        </div>
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerGrid>

                {/* Address */}
                <FadeUp delay={0.1}>
                  <div className="card-luxury p-6 border border-border/50">
                    <div className="flex gap-4 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-dark">Find Us</h3>
                        <p className="text-muted text-sm mt-1">{BUSINESS.address.full}</p>
                        <a
                          href={BUSINESS.googleMaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-sm font-medium mt-1 inline-flex items-center gap-1 hover:underline"
                        >
                          Open in Google Maps →
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* Hours */}
                <FadeUp delay={0.2}>
                  <div className="card-luxury p-6 border border-border/50">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0">
                        <Clock size={20} className="text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-dark self-center">Opening Hours</h3>
                    </div>
                    <div className="space-y-2">
                      {HOURS.map((h) => (
                        <div
                          key={h.day}
                          className={`flex justify-between text-sm py-1.5 border-b border-border/40 last:border-0 ${
                            h.open ? "text-dark" : "text-muted/50"
                          }`}
                        >
                          <span>{h.day}</span>
                          <span className={h.open ? "text-primary font-medium" : ""}>{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </div>
            </SlideIn>

            {/* Right: form */}
            <SlideIn from="right" delay={0.15}>
              <ContactForm />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <FadeUp>
        <div className="h-[400px] bg-soft-pink/20">
          <iframe
            title="Get The Glow Location"
            src="https://maps.google.com/maps?q=5+Woodgate+Leicester+LE3+5GH&output=embed&z=17"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeUp>
    </>
  );
}
