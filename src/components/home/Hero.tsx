"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, Sparkles, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background — gradient when no real image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0a10 0%, #2d1020 25%, #E84C8B 60%, #D96A98 80%, #FFF8F8 100%)",
          }}
        />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-rose/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-dark/40 blur-[80px]" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(180deg, rgba(43,43,43,0.3) 0%, rgba(43,43,43,0.2) 50%, rgba(43,43,43,0.7) 100%)" }} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto"
      >
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-pink px-5 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-soft-pink mb-8"
        >
          <Sparkles size={11} />
          Premium Beauty · Leicester
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold leading-[1.1] mb-6"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
            Elevate Your
          </span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic"
            style={{
              background: "linear-gradient(135deg, #F7D6E3, #E84C8B, #D6B15A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Natural Beauty
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          Leicester's luxury beauty salon — hair, nails, facials, massage, waxing & more. 
          Experience the difference.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 gradient-primary px-8 py-4 rounded-full text-white font-medium shadow-xl hover:opacity-90 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <Sparkles size={16} />
            Book Your Appointment
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 glass border border-white/30 px-8 py-4 rounded-full text-white font-medium hover:bg-white/20 transition-all text-sm sm:text-base"
          >
            <Phone size={16} />
            {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366]/25 hover:bg-[#25D366]/40 border border-[#25D366]/40 px-8 py-4 rounded-full text-white font-medium transition-all text-sm sm:text-base"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-16 flex flex-wrap gap-6 justify-center"
        >
          {[
            { label: "Happy Clients", value: "1,000+" },
            { label: "Google Rating", value: "5.0 ★" },
            { label: "Services", value: "50+" },
            { label: "Years in Leicester", value: "5+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
              <div className="text-xs text-white/60 uppercase tracking-widest mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
