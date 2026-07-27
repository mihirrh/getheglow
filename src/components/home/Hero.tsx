"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/data";
import { EASE } from "@/components/ui/Animate";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY           = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY       = useTransform(scrollYProgress, [0, 0.55], ["0%", "-6%"]);

  const left = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.11 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(125deg, #0e0208 0%, #1c0812 40%, #2d0f1e 70%, #180610 100%)" }}
        />
        {/* Subtle colour blooms */}
        <div
          className="orb-pink absolute -top-32 right-0 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(232,76,139,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="orb-gold absolute bottom-0 -left-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(214,177,90,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Fine grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
      </motion.div>

      {/* ── Content wrapper ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24"
      >
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* ── Left: editorial copy ── */}
          <motion.div
            variants={left}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* City line + walk-in badge */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/45 font-sans">
                  Leicester, LE3 5GH
                </span>
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.25em] text-white font-sans font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(232,76,139,0.25)",
                  border: "1px solid rgba(232,76,139,0.35)",
                }}
              >
                No Booking Needed · Walk-ins Welcome
              </span>
            </motion.div>

            {/* Main headline — large editorial serif */}
            <motion.h1 variants={item} className="mb-2">
              <span className="block font-display font-bold text-[clamp(3.2rem,8vw,6.5rem)] text-white leading-[0.95] tracking-tight">
                Elevate
              </span>
            </motion.h1>
            <motion.div variants={item} className="mb-10">
              <span className="block font-display font-bold italic text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.95] tracking-tight"
                style={{
                  background: "linear-gradient(100deg, #E84C8B 0%, #f09ec0 55%, #D6B15A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Beauty
              </span>
            </motion.div>

            {/* Body copy — restrained, one line */}
            <motion.p
              variants={item}
              className="text-white/50 text-[15px] leading-relaxed mb-10 max-w-sm font-body"
            >
              Hair · Nails · Facials · Massage · Waxing · Threading
            </motion.p>

            {/* CTAs — two distinct styles, no pill overload */}
            <motion.div variants={item} className="flex flex-wrap gap-3 items-center">
              <motion.a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl"
                whileHover={{ scale: 1.02, backgroundColor: "#c93a75" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease: EASE }}
              >
                Book Appointment
                <motion.span
                  className="flex-shrink-0"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.a>

              <motion.a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white/60 hover:text-white text-[14px] font-medium px-4 py-3.5 transition-colors duration-200"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                WhatsApp Us
              </motion.a>

              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2.5 text-white/40 hover:text-white/70 text-[14px] transition-colors duration-200"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">{BUSINESS.phone}</span>
              </a>
            </motion.div>

            {/* Rating strip — understated */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[12px] text-white/40 font-sans">
                5.0 · 127+ Google reviews
              </span>
              <span className="text-white/15 text-[12px]">·</span>
              <span className="text-[12px] text-white/40 font-sans">
                50+ services
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: editorial card collage ── */}
          <div className="relative hidden lg:block h-[540px] xl:h-[600px]">

            {/* ── Photo card 1 — Nails (large, top-right, slight clockwise tilt) ── */}
            <motion.div
              initial={{ opacity: 0, y: 32, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
              className="absolute top-0 right-0 w-[68%] h-[72%] rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Image
                src="/images/nail_front-page.jpg"
                alt="Gel nails at Get The Glow Leicester"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 45vw, 380px"
                priority
              />
              {/* Bottom scrim — dark fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* ── Inline editorial overlay — sits inside the photo ── */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                {/* Service name + price badge */}
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-[0.3em] font-sans mb-0.5">
                    Nails
                  </p>
                  <p className="text-white font-display font-bold text-[1.6rem] leading-none">
                    From £18
                  </p>
                </div>
                {/* Tag — treatment types */}
                <div className="flex flex-col gap-1 items-end">
                  {["Gel Polish", "Builder Gel", "Nail Art"].map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-sans font-medium text-white/60 uppercase tracking-[0.15em] px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Photo card 2 — Hair (smaller, bottom-left, counter-tilt) ── */}
            <motion.div
              initial={{ opacity: 0, y: 48, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
              className="absolute bottom-16 left-0 w-[52%] h-[50%] rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Image
                src="/images/hair_front-page.jpg"
                alt="Hair styling at Get The Glow Leicester"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 35vw, 280px"
              />
              {/* Bottom scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* ── Inline editorial overlay ── */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-[0.3em] font-sans mb-0.5">
                    Hair
                  </p>
                  <p className="text-white font-display font-bold text-[1.4rem] leading-none">
                    From £35
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  {["Cuts", "Colour", "Balayage"].map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-sans font-medium text-white/60 uppercase tracking-[0.15em] px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Floating treatment card — sits between the two photos ── */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
              className="absolute top-[54%] right-[4%] z-20 w-[44%] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(14, 4, 10, 0.82)",
                backdropFilter: "blur(32px) saturate(160%)",
                border: "1px solid rgba(232,76,139,0.2)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(232,76,139,0.1)",
              }}
            >
              {/* Top accent bar */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="p-4">
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-sans">
                    Popular Treatment
                  </p>
                  {/* Live indicator */}
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#25D366]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                    />
                    <span className="text-[8px] text-white/30 font-sans uppercase tracking-[0.2em]">
                      Book now
                    </span>
                  </div>
                </div>

                {/* Treatment name */}
                <p className="text-white font-display font-bold text-[1.1rem] leading-tight mb-0.5">
                  Lash Lift &amp; Tint
                </p>
                <p className="text-white/40 text-[10px] font-sans mb-3">
                  Open eyes · No mascara needed
                </p>

                {/* Price row */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-primary font-display font-bold text-2xl leading-none">£48</span>
                  </div>
                  {/* CTA button */}
                  <a
                    href="https://wa.me/447778698550?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Lash%20Lift%20%26%20Tint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-primary text-white text-[10px] font-sans font-semibold px-3 py-1.5 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Book
                    <ArrowRight size={9} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── 5-star social proof strip ── */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
              className="absolute top-[8%] left-[3%] z-20 flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{
                background: "rgba(14, 4, 10, 0.75)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[10px] text-white/50 font-sans">5.0 · 127+ reviews</span>
            </motion.div>

            {/* ── Thin vertical divider line ── */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="absolute top-8 bottom-8 left-[52%] w-px origin-top pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(232,76,139,0.2), transparent)" }}
            />
          </div>

        </div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          className="w-px h-10 origin-top"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }}
          animate={{ scaleY: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
