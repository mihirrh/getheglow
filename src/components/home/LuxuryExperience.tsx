"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Heart, Shield, Clock } from "lucide-react";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Expert Craftsmanship",
    desc: "Our skilled team brings years of expertise to every treatment, ensuring flawless, long-lasting results.",
  },
  {
    icon: Heart,
    title: "You Are Our Priority",
    desc: "Every client receives personalised attention, tailored treatments, and genuine care from the moment you walk in.",
  },
  {
    icon: Shield,
    title: "Premium Products Only",
    desc: "We use only professional-grade, high-quality products across every service for the best possible results.",
  },
  {
    icon: Clock,
    title: "Efficient & Relaxing",
    desc: "We respect your time while ensuring you never feel rushed. Every visit is a moment of calm.",
  },
];

const WHY_US = [
  "Highly trained, experienced beauty professionals",
  "Calm, clean, luxury environment",
  "Competitive pricing — no hidden costs",
  "Full range of treatments under one roof",
  "Flexible appointments including weekends",
  "Trusted by 1,000+ Leicester clients",
];

export function LuxuryExperience() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #F7D6E3 0%, #E84C8B 40%, #D96A98 70%, #2B2B2B 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display italic text-white/90 text-3xl sm:text-4xl text-center px-8 leading-snug">
                  "Where every<br />detail matters."
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 glass shadow-xl border border-white/40 rounded-3xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-dark text-sm">5.0 Stars</p>
                  <p className="text-muted text-xs">127+ Google Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
              The Get The Glow Experience
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-6 leading-tight">
              Leicester's Most Loved<br />
              <span className="text-gradient-primary">Beauty Salon</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Get The Glow is more than a beauty salon — it's a sanctuary. We combine expert technique with a genuinely warm, welcoming atmosphere to give you an experience that goes far beyond your expectations.
            </p>

            {/* Pillar grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-soft-pink/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <pillar.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-dark text-sm mb-0.5">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why us checklist */}
            <div className="space-y-2">
              {WHY_US.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 text-sm text-dark/80"
                >
                  <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
