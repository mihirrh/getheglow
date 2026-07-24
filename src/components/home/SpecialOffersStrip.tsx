"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tag, ArrowRight } from "lucide-react";
import { SPECIAL_OFFERS } from "@/lib/pricing";

export function SpecialOffersStrip() {
  return (
    <section className="section-padding-sm" style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-label mb-3 block">
            <Tag size={12} />
            Limited Offers
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Special Offers
          </h2>
          <p
            className="text-[#7A7A7A] max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Luxury treatments, exceptional value. Our exclusive packages save you money.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SPECIAL_OFFERS.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium p-5 relative overflow-hidden group"
            >
              {/* Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #E84C8B, #C93A76)" }}
              >
                {offer.badge}
              </div>

              <h3
                className="font-semibold text-[15px] text-[#2B2B2B] mb-1.5 pr-14 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {offer.title}
              </h3>
              <p
                className="text-[12px] text-[#7A7A7A] mb-4 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {offer.description}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-2xl font-bold text-[#E84C8B]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {offer.price}
                    </span>
                    <span
                      className="text-[12px] text-[#B0B0B0] line-through"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {offer.originalPrice}
                    </span>
                  </div>
                  <span
                    className="text-[11px] text-[#D6B15A] font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {offer.saving}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link href="/offers" className="btn-secondary inline-flex items-center gap-2">
            View All Offers
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
