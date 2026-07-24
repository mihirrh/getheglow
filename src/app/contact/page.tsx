import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Get The Glow Beauty Salon Leicester",
  description:
    "Contact Get The Glow beauty salon in Leicester. 5 Woodgate, Leicester LE3 5GH. Call, WhatsApp, or email us to book your appointment.",
  alternates: { canonical: `${BUSINESS.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom">
          <span className="section-label mb-3 block">Get In Touch</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p
            className="text-[#7A7A7A] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We&apos;d love to hear from you. Book an appointment, ask a question, or just say hello.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="card-premium p-7">
                <h2
                  className="font-bold text-[20px] text-[#2B2B2B] mb-5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Contact Information
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={BUSINESS.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <MapPin size={18} className="text-[#E84C8B] mt-0.5 flex-shrink-0" />
                      <div>
                        <div
                          className="text-[15px] text-[#2B2B2B] group-hover:text-[#E84C8B] transition-colors"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          5 Woodgate, Leicester LE3 5GH
                        </div>
                        <div
                          className="text-[12px] text-[#7A7A7A] mt-0.5"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Click for directions
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={BUSINESS.phoneHref} className="flex items-center gap-3 group">
                      <Phone size={18} className="text-[#E84C8B] flex-shrink-0" />
                      <span
                        className="text-[15px] text-[#2B2B2B] group-hover:text-[#E84C8B] transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {BUSINESS.phone}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={BUSINESS.emailHref} className="flex items-center gap-3 group">
                      <Mail size={18} className="text-[#E84C8B] flex-shrink-0" />
                      <span
                        className="text-[15px] text-[#2B2B2B] group-hover:text-[#E84C8B] transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {BUSINESS.email}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="card-premium p-7">
                <h2
                  className="font-bold text-[20px] text-[#2B2B2B] mb-5 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Clock size={18} className="text-[#E84C8B]" />
                  Opening Hours
                </h2>
                <ul className="space-y-2">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span
                        className="text-[14px] text-[#7A7A7A]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {h.day}
                      </span>
                      <span
                        className={`text-[14px] font-medium ${
                          h.open ? "text-[#2B2B2B]" : "text-[#B0B0B0]"
                        }`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-3">
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us Now
                </a>
                <a href={BUSINESS.phoneHref} className="btn-secondary justify-center">
                  <Phone size={17} />
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-[0_4px_32px_rgba(232,76,139,0.1)] h-[500px] mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.0!2d-1.1398!3d52.6369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877610a6d8ae5f7%3A0x7c88bbc3d48ba18b!2s5%20Woodgate%2C%20Leicester%20LE3%205GH!5e0!3m2!1sen!2suk!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Get The Glow - 5 Woodgate Leicester"
                />
              </div>
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                <MapPin size={17} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
