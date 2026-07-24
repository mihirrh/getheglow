"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Star } from "lucide-react";

const FEATURES = [
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars on Google by our happy Leicester clients.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We only use professional-grade products for every treatment.",
  },
  {
    icon: Shield,
    title: "Expert Therapists",
    description: "Qualified, experienced therapists who genuinely care about results.",
  },
  {
    icon: Clock,
    title: "Walk-ins Welcome",
    description: "Book in advance or simply walk in — we&apos;re always ready to welcome you.",
  },
];

export function LuxuryExperience() {
  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block text-[#E84C8B]">The Glow Experience</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Beauty That&apos;s More Than
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E84C8B, #D96A98)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Skin Deep
              </span>
            </h2>
            <p
              className="text-white/70 text-[16px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              At Get The Glow, we believe every client deserves to leave feeling
              truly beautiful. Our Leicester salon combines expert technique with a
              warm, welcoming atmosphere and premium products for results that speak
              for themselves.
            </p>
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white"
              style={{
                background: "rgba(232, 76, 139, 0.15)",
                border: "1px solid rgba(232, 76, 139, 0.3)",
              }}
            >
              <Sparkles size={14} className="text-[#E84C8B]" />
              Leicester&apos;s Most Loved Beauty Salon
            </div>
          </motion.div>

          {/* Right — Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(232, 76, 139, 0.15)" }}
                >
                  <feature.icon size={18} className="text-[#E84C8B]" />
                </div>
                <h3
                  className="font-semibold text-white text-[15px] mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-white/55 text-[12px] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
