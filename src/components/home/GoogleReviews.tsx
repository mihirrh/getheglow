"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { MOCK_REVIEWS, BUSINESS } from "@/lib/data";
import { EASE, StaggerGrid, StaggerItem, FadeUp } from "@/components/ui/Animate";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-gold text-gold" : "fill-white/20 text-white/20"}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="section-padding bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeUp className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Client Reviews
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-8">
            What Our Clients Say
          </h2>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl"
            style={{
              background: "rgba(247,214,227,0.12)",
              border: "1px solid rgba(232,76,139,0.25)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div>
              <div className="font-display font-bold text-4xl text-white">5.0</div>
              <div className="flex gap-0.5 mt-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <div className="font-semibold text-white text-lg">127+ Reviews</div>
              <div className="text-white/50 text-sm">on Google</div>
            </div>
          </motion.div>
        </FadeUp>

        {/*
         * Desktop: 3-col grid, each card staggers in.
         * Mobile: horizontal scroll-snap, native swipe.
         */}
        <div className="hidden md:block">
          <StaggerGrid
            className="grid grid-cols-3 gap-5 mb-10"
            staggerDelay={0.1}
          >
            {MOCK_REVIEWS.map((review) => (
              <StaggerItem key={review.id} variant="up">
                <div className="h-full rounded-2xl p-6 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Quote size={22} className="text-primary/50 mb-3 flex-shrink-0" />
                  <p className="text-white/75 text-sm leading-relaxed mb-5 flex-1 line-clamp-5">
                    {review.text}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-medium text-white text-sm">{review.author}</p>
                      <p className="text-white/40 text-xs mt-0.5">
                        {new Date(review.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                      </p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        {/* Mobile swipe carousel */}
        <div className="md:hidden mb-10 -mx-4 px-4">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3"
            style={{ scrollbarWidth: "none" }}
          >
            {MOCK_REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="snap-start flex-none w-[82vw] rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Quote size={20} className="text-primary/50 mb-3" />
                <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-5">{review.text}</p>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-medium text-white text-sm">{review.author}</p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {new Date(review.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeUp delay={0.15} className="text-center">
          <motion.a
            href={BUSINESS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-dark font-medium px-8 py-3 rounded-full text-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <Star size={14} className="fill-gold text-gold" />
            Leave Us a Review
            <ExternalLink size={12} />
          </motion.a>
          <p className="text-white/30 text-xs mt-3">
            Reviews shown are representative. Component is API-ready for live Google Business reviews.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
