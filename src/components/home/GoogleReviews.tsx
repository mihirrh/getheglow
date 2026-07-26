"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { MOCK_REVIEWS, BUSINESS } from "@/lib/data";

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
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-dark text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Client Reviews
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            What Our Clients Say
          </h2>

          {/* Rating summary badge */}
          <div className="inline-flex items-center gap-4 glass-pink px-8 py-4 rounded-2xl">
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
              <div className="text-white/60 text-sm">on Google</div>
            </div>
          </div>
        </div>

        {/*
         * Scroll-snap carousel — works on all screen sizes.
         * On ≥md it shows 3 cards side by side; on mobile it scrolls one at a time.
         * Native browser touch/swipe is handled automatically — no JS needed.
         */}
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {MOCK_REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className="
                snap-start flex-none w-[82vw] sm:w-[60vw] lg:w-auto
                bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-6
                transition-all duration-700
              "
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(24px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <Quote size={22} className="text-primary/50 mb-3" />
              <p className="text-white/80 text-sm leading-relaxed mb-5 line-clamp-5">
                {review.text}
              </p>
              <div className="flex items-center justify-between gap-2 mt-auto">
                <div>
                  <p className="font-medium text-white text-sm">{review.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {new Date(review.date).toLocaleDateString("en-GB", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-10 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(16px)",
            transitionDelay: "480ms",
          }}
        >
          <a
            href={BUSINESS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-dark font-medium px-8 py-3 rounded-full hover:bg-soft-pink transition-colors text-sm"
          >
            <Star size={14} className="fill-gold text-gold" />
            Leave Us a Review
            <ExternalLink size={12} />
          </a>
          <p className="text-white/40 text-xs mt-3">
            Reviews shown are representative. Component is API-ready for live Google Business reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
