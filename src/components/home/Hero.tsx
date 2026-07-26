"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, Sparkles, ChevronDown, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { EASE } from "@/components/ui/Animate";

const STATS = [
  { value: "1,000+", label: "Happy Clients" },
  { value: "5.0 ★",  label: "Google Rating" },
  { value: "50+",    label: "Services" },
  { value: "5+",     label: "Years in Leicester" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY       = useTransform(scrollYProgress, [0, 0.6], ["0%", "-8%"]);

  // Shared stagger container that fires on mount (hero is always above fold)
  const container = {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.15, staggerChildren: 0.13 },
    },
  };

  const itemUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  const itemScale = {
    hidden:  { opacity: 0, scale: 0.85, y: 12 },
    visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.6,  ease: EASE } },
  };

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* ── Parallax background ───────────────────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0a10 0%, #2d1020 25%, #E84C8B 60%, #D96A98 80%, #FFF8F8 100%)",
          }}
        />
        {/* Soft ambient orbs — CSS animation so they render without JS */}
        <div
          className="orb-pink absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[130px]"
          style={{ background: "rgba(232,76,139,0.18)" }}
        />
        <div
          className="orb-gold absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[110px]"
          style={{ background: "rgba(214,177,90,0.12)" }}
        />
      </motion.div>

      {/* ── Dark overlay ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(180deg, rgba(20,5,12,0.45) 0%, rgba(20,5,12,0.15) 50%, rgba(20,5,12,0.65) 100%)" }}
      />

      {/* ── Content — fades + lifts as you scroll ─────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto w-full pt-20 sm:pt-24"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemScale}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium"
            style={{
              background: "rgba(247,214,227,0.15)",
              border: "1px solid rgba(247,214,227,0.3)",
              backdropFilter: "blur(16px)",
            }}
          >
            <Sparkles size={11} className="text-primary" />
            Premium Beauty · Leicester
          </motion.div>

          {/* Headline line 1 */}
          <motion.div variants={itemUp} className="overflow-hidden">
            <span className="block font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05]">
              Elevate Your
            </span>
          </motion.div>

          {/* Headline line 2 — gradient */}
          <motion.div variants={itemUp} className="overflow-hidden mb-6">
            <span
              className="block font-display font-bold italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]"
              style={{
                background: "linear-gradient(135deg, #F7D6E3 0%, #E84C8B 45%, #D6B15A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Natural Beauty
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemUp}
            className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed"
          >
            Leicester's luxury beauty salon — hair, nails, facials, massage, waxing &amp; more.{" "}
            <span className="text-soft-pink">Experience the difference.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemUp}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            <motion.a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-2xl text-sm sm:text-base"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <Sparkles size={15} />
              Book Your Appointment
              <ArrowRight size={14} />
            </motion.a>

            <motion.a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm sm:text-base"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.28)",
                backdropFilter: "blur(20px)",
              }}
              whileHover={{ scale: 1.04, y: -2, background: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <Phone size={15} />
              {BUSINESS.phone}
            </motion.a>

            <motion.a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm sm:text-base"
              style={{
                background: "rgba(37,211,102,0.18)",
                border: "1px solid rgba(37,211,102,0.35)",
                backdropFilter: "blur(20px)",
              }}
              whileHover={{ scale: 1.04, y: -2, background: "rgba(37,211,102,0.28)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </motion.a>
          </motion.div>

          {/* Stats — each one staggers in */}
          <motion.div
            variants={{
              hidden:  { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="flex flex-wrap gap-8 justify-center"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden:  { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0,  scale: 1,  transition: { duration: 0.5, ease: EASE } },
                }}
                className="text-center"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-0.5">
                  {stat.value}
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] font-sans"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} style={{ color: "rgba(255,255,255,0.4)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
