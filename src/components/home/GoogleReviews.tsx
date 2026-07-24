"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { MOCK_REVIEWS, BUSINESS } from "@/lib/data";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

interface GoogleReviewsProps {
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-gold text-gold" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

export function GoogleReviews({
  reviews = MOCK_REVIEWS as unknown as Review[],
  averageRating = 5.0,
  totalReviews = 127,
}: GoogleReviewsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setActiveIdx((i) => (i + 1) % reviews.length);

  return (
    <section className="section-padding bg-dark text-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Client Reviews
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            What Our Clients Say
          </h2>
          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 glass-pink px-8 py-4 rounded-2xl">
            <div>
              <div className="font-display font-bold text-4xl text-white">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <div className="font-semibold text-white text-lg">{totalReviews}+ Reviews</div>
              <div className="text-white/60 text-sm">on Google</div>
            </div>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <Quote size={24} className="text-primary/50 mb-3" />
              <p className="text-white/80 text-sm leading-relaxed mb-5 line-clamp-4">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
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
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Quote size={24} className="text-primary/50 mb-3" />
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              {reviews[activeIdx].text}
            </p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium text-white text-sm">{reviews[activeIdx].author}</p>
                <p className="text-white/40 text-xs mt-0.5">
                  {new Date(reviews[activeIdx].date).toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <StarRating rating={reviews[activeIdx].rating} />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} className="text-white" />
              </button>
              <div className="flex-1 flex justify-center gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIdx ? "bg-primary w-5" : "bg-white/20 w-1.5"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
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
            * Reviews shown are representative. Component is API-ready for live Google Business reviews.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
