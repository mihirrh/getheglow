"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #FFF8F8 0%, #F7D6E3 25%, #FFF8F8 50%, #F7D6E3 75%, #FFF8F8 100%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #E84C8B 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, #D6B15A 0%, transparent 70%)",
        }}
      />

      {/* Ornamental dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E84C8B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label">
              <span className="w-5 h-[1px] bg-[#D6B15A] inline-block" />
              Leicester&apos;s Premium Beauty Salon
              <span className="w-5 h-[1px] bg-[#D6B15A] inline-block" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2B2B2B] leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Step In.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #E84C8B, #D96A98, #C93A76)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Glow Out.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-[#7A7A7A] leading-relaxed mb-4 max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Expert hair, nails, facials, massage, waxing, threading and beauty
            treatments in the heart of Leicester.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-[15px] text-[#E84C8B] font-medium mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <MapPin size={14} className="inline mr-1.5 mb-0.5" />
            5 Woodgate, Leicester LE3 5GH · Walk-ins Welcome
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
            <a href={BUSINESS.phoneHref} className="btn-secondary text-base px-8 py-4">
              <Phone size={18} />
              Call {BUSINESS.phone}
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#D6B15A"
                    className="text-[#D6B15A]"
                  />
                ))}
              </div>
              <span
                className="text-[14px] font-medium text-[#2B2B2B]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                5.0 on Google
              </span>
            </div>
            <span className="text-[#F0D6E3]">|</span>
            <span
              className="text-[14px] text-[#7A7A7A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Walk-ins Welcome
            </span>
            <span className="text-[#F0D6E3]">|</span>
            <Link
              href="/offers"
              className="text-[14px] text-[#E84C8B] font-medium hover:underline"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ✨ View Special Offers
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#E84C8B] to-transparent"
        />
      </motion.div>
    </section>
  );
}
