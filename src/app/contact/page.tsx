import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Camera } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Get The Glow – Book a Beauty Appointment in Leicester",
  description:
    "Contact Get The Glow beauty salon in Leicester. Book an appointment, ask about services, or find us at 5 Woodgate, Leicester LE3 5GH. Call 07778 698550.",
  alternates: { canonical: `${BUSINESS.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-36 pb-24 overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #D96A98 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium mb-4">
            Get In Touch
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg">
            We'd love to hear from you. Book an appointment, ask a question, or just say hello.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose/20 blur-[120px] pointer-events-none" />
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <div className="space-y-6">
              {/* Quick contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="card-luxury flex items-center gap-4 p-6 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-0.5">Call</p>
                    <p className="font-display font-semibold text-dark text-sm">{BUSINESS.phone}</p>
                  </div>
                </a>
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-luxury flex items-center gap-4 p-6 border border-border/50 hover:border-[#25D366]/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-0.5">WhatsApp</p>
                    <p className="font-display font-semibold text-dark text-sm">Message Us</p>
                  </div>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="card-luxury flex items-center gap-4 p-6 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-0.5">Email</p>
                    <p className="font-display font-semibold text-dark text-sm break-all text-xs leading-snug">
                      {BUSINESS.email}
                    </p>
                  </div>
                </a>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-luxury flex items-center gap-4 p-6 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Camera size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-0.5">Instagram</p>
                    <p className="font-display font-semibold text-dark text-sm">{BUSINESS.instagramHandle}</p>
                  </div>
                </a>
              </div>

              {/* Address */}
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

              {/* Hours */}
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
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] bg-soft-pink/20">
        <iframe
          title="Get The Glow Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.9568569580755!2d-1.147!3d52.634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM4JzAyLjQiTiAxwrAwOCc0OS4yIlc!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
