"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export function FeaturedServices() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
            What We Offer
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
            Our Services
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From expert hair styling to luxury facials, our skilled team delivers exceptional treatments in a calm, beautiful environment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="card-luxury group block p-6 sm:p-8 h-full border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-soft-pink/60 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-200">
                  Learn more
                  <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 gradient-primary text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm"
          >
            View All Services
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
