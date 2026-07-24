"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Tag, ArrowRight, Sparkles } from "lucide-react";
import { SPECIAL_OFFERS } from "@/lib/data";

export function SpecialOffersStrip() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Limited Bundles
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
            Special Offers
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Incredible value packages for the treatments you love most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SPECIAL_OFFERS.map((offer, i) => (
            <motion.div
              key={offer.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="gradient-primary text-white text-[10px] font-medium px-3 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={9} />
                    Popular
                  </span>
                </div>
              )}
              <div
                className={`card-luxury h-full p-6 text-center border ${
                  offer.popular ? "border-primary/40 ring-1 ring-primary/20" : "border-border/50"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-soft-pink/60 flex items-center justify-center mx-auto mb-4">
                  <Tag size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-dark text-base mb-2">
                  {offer.name}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {offer.description}
                </p>
                <div className="divider-pink mb-4" />
                <div className="font-display font-bold text-3xl text-primary mb-1">
                  {offer.price}
                </div>
                <div className="text-xs text-gold font-medium">{offer.saving}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/offers"
            className="inline-flex items-center gap-2 border border-primary text-primary font-medium px-8 py-3 rounded-full hover:bg-soft-pink/40 transition-colors text-sm"
          >
            View All Offers
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
