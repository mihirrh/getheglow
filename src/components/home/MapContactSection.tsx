"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/constants";

export function MapContactSection() {
  return (
    <section className="section-padding" style={{ background: "#FFF8F8" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-3 block">Find Us</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2B2B2B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visit Us in Leicester
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-[0_4px_32px_rgba(232,76,139,0.1)] aspect-[4/3]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.0!2d-1.1398!3d52.6369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877610a6d8ae5f7%3A0x7c88bbc3d48ba18b!2s5%20Woodgate%2C%20Leicester%20LE3%205GH!5e0!3m2!1sen!2suk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Get The Glow Beauty Salon - 5 Woodgate Leicester"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Address Card */}
            <div className="card-premium p-6">
              <h3
                className="font-semibold text-[18px] text-[#2B2B2B] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Contact & Location
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={BUSINESS.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin size={16} className="text-[#E84C8B] mt-0.5 flex-shrink-0" />
                    <div>
                      <span
                        className="text-[14px] text-[#2B2B2B] group-hover:text-[#E84C8B] transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        5 Woodgate, Leicester LE3 5GH
                      </span>
                      <div
                        className="text-[12px] text-[#7A7A7A] flex items-center gap-1 mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Get Directions <ExternalLink size={10} />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={BUSINESS.phoneHref} className="flex items-center gap-3 group">
                    <Phone size={16} className="text-[#E84C8B] flex-shrink-0" />
                    <span
                      className="text-[14px] text-[#2B2B2B] group-hover:text-[#E84C8B] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {BUSINESS.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={BUSINESS.emailHref} className="flex items-center gap-3 group">
                    <Mail size={16} className="text-[#E84C8B] flex-shrink-0" />
                    <span
                      className="text-[14px] text-[#2B2B2B] group-hover:text-[#E84C8B] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {BUSINESS.email}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours Card */}
            <div className="card-premium p-6">
              <h3
                className="font-semibold text-[18px] text-[#2B2B2B] mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Clock size={16} className="text-[#E84C8B]" />
                Opening Hours
              </h3>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between items-center">
                    <span
                      className="text-[13px] text-[#7A7A7A]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
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

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center justify-center"
              >
                <MessageCircle size={17} />
                Book via WhatsApp
              </a>
              <a href={BUSINESS.googleMaps} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center justify-center">
                <MapPin size={17} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
