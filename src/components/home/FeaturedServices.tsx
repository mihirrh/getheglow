"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { EASE } from "@/components/ui/Animate";

// Signature (large) cards — first 2 services shown side-by-side in a big editorial strip
const SIGNATURE = SERVICES.slice(0, 2);
// Secondary row — remaining services
const SECONDARY = SERVICES.slice(2);

export function FeaturedServices() {
  return (
    <section className="bg-[#faf8f9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section label + headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-primary" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-sans font-medium">
                What We Offer
              </p>
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.2rem)] text-dark leading-[1.05] tracking-tight">
              Every treatment,<br />
              <span className="text-dark/30">one address.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-primary hover:text-primary-dark transition-colors sm:mb-2"
          >
            Browse all services
            <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        {/* ── Signature row — 2 large cards ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {SIGNATURE.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
            >
              <Link
                href={`/services/${svc.slug}`}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-52 sm:h-64"
                style={{
                  background: `linear-gradient(145deg, ${svc.color}22 0%, #1c080e 100%)`,
                  border: "1px solid rgba(232,76,139,0.1)",
                }}
              >
                {/* Large emoji watermark */}
                <span
                  className="absolute top-5 right-6 text-[4.5rem] leading-none pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.3))" }}
                >
                  {svc.icon}
                </span>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <p className="font-display font-bold text-xl text-white mb-1 leading-tight">
                    {svc.name}
                  </p>
                  <p className="text-white/50 text-[13px] mb-4 leading-snug max-w-xs">
                    {svc.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-sans font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                    See treatments
                    <ArrowRight size={12} />
                  </span>
                </div>

                {/* Hover shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 80% 20%, ${svc.color}15 0%, transparent 70%)` }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Secondary row — compact tight cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {SECONDARY.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.06, ease: EASE }}
            >
              <Link
                href={`/services/${svc.slug}`}
                className="group flex flex-col items-start p-4 rounded-xl h-full transition-all duration-200 hover:bg-white hover:shadow-sm"
                style={{ border: "1px solid rgba(240,217,229,0.5)" }}
              >
                <span className="text-2xl mb-3 block transition-transform duration-300 group-hover:scale-110">
                  {svc.icon}
                </span>
                <p className="font-sans font-semibold text-[13px] text-dark mb-1 leading-tight">
                  {svc.name}
                </p>
                <p className="text-[11px] text-muted leading-snug line-clamp-2 flex-1">
                  {svc.shortDesc}
                </p>
                <span className="mt-3 text-[11px] text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  View <ArrowRight size={10} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
