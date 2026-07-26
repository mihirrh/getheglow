"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  { label: "Threading", from: "£2.50", href: "/services/threading", items: ["Eyebrows £4", "Upper Lip £2.50", "Full Face £8"] },
  { label: "Nails", from: "£10", href: "/services/nails", items: ["Gel Polish £18", "Builder Gel £25", "Builder Extensions from £38"] },
  { label: "Facials", from: "£22", href: "/services/facials", items: ["Express Facial £22", "Deep Cleanse £30", "Get The Glow Facial £55"] },
  { label: "Massage", from: "£30", href: "/services/massage", items: ["Indian Head £30", "Full Body £65", "Hot Stone £75"] },
  { label: "Waxing", from: "£3", href: "/services/waxing", items: ["Eyebrows £4", "Full Legs £11", "Hollywood £32"] },
  { label: "Hair", from: "£5", href: "/services/hair", items: ["Wash & Blowdry £35", "Wash Cut Blowdry £55", "Balayage from £120"] },
];

export function PricingHighlights() {
  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #FFF8F8 0%, #ffffff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
            Our Prices
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Luxury doesn't have to cost a fortune. Exceptional treatments at fair, honest prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={h.href}
                className="card-luxury group block p-5 text-center border border-border/50 hover:border-primary/30 h-full transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-muted font-sans mb-2">
                  {h.label}
                </p>
                <p className="font-display font-bold text-primary text-xl mb-3">
                  from {h.from}
                </p>
                <div className="space-y-1 mb-4">
                  {h.items.map((item) => (
                    <p key={item} className="text-xs text-muted leading-tight">
                      {item}
                    </p>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                  Full menu <ArrowRight size={10} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-10"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 border border-primary text-primary font-medium px-8 py-3 rounded-full hover:bg-soft-pink/40 transition-colors text-sm"
          >
            View Full Price List
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
