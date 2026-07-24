"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/data";

const todayDay = new Date().toLocaleDateString("en-GB", { weekday: "long" });

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
            Find Us
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
            Visit the Salon
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="card-luxury p-6 flex gap-4 border border-border/50">
              <div className="w-11 h-11 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-dark mb-1">Address</h3>
                <p className="text-muted text-sm">{BUSINESS.address.full}</p>
                <a
                  href={BUSINESS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium mt-1 inline-flex items-center gap-1 hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="card-luxury p-6 flex gap-4 border border-border/50">
              <div className="w-11 h-11 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-dark mb-1">Phone & WhatsApp</h3>
                <a href={BUSINESS.phoneHref} className="text-muted text-sm block hover:text-primary transition-colors">
                  {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] text-sm font-medium mt-0.5 inline-flex items-center gap-1 hover:underline"
                >
                  Message on WhatsApp →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="card-luxury p-6 border border-border/50">
              <div className="flex gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-dark">Opening Hours</h3>
                </div>
              </div>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm py-1 border-b border-border/40 last:border-0 ${
                      h.day === todayDay ? "text-primary font-semibold" : h.open ? "text-dark" : "text-muted/60"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {h.day === todayDay && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                      {h.day}
                    </span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book CTA */}
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 gradient-primary text-white font-medium px-6 py-4 rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              <Calendar size={20} />
              <div>
                <p className="font-semibold text-sm">Book an Appointment</p>
                <p className="text-white/80 text-xs">Quick & easy via WhatsApp</p>
              </div>
            </a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-border/30 min-h-[400px] bg-soft-pink/30 flex items-center justify-center"
          >
            <iframe
              title="Get The Glow on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.9568569580755!2d-1.147!3d52.634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM4JzAyLjQiTiAxwrAwOCc0OS4yIlc!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              className="w-full h-full min-h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
