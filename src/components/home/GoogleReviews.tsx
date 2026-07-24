"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { MOCK_REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          fill={i <= rating ? "#D6B15A" : "transparent"}
          className={i <= rating ? "text-[#D6B15A]" : "text-[#E0E0E0]"}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-3 block">Real Experiences</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Clients Say
          </h2>

          {/* Rating Summary */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mt-4 p-4 rounded-2xl bg-[#FFF8F8] border border-[rgba(240,214,227,0.5)]">
            <div className="text-center">
              <div
                className="text-5xl font-bold text-[#2B2B2B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {REVIEW_SUMMARY.averageRating.toFixed(1)}
              </div>
              <StarRating rating={Math.round(REVIEW_SUMMARY.averageRating)} />
              <div
                className="text-[12px] text-[#7A7A7A] mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {REVIEW_SUMMARY.totalReviews} Google Reviews
              </div>
            </div>
            <div className="hidden sm:block w-[1px] h-12 bg-[#F0D6E3]" />
            <div className="text-center">
              <div
                className="text-[13px] text-[#7A7A7A] mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Share your experience
              </div>
              <a
                href={REVIEW_SUMMARY.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[13px] py-2 px-4 inline-flex items-center gap-1.5"
              >
                Leave a Review
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #E84C8B, #C93A76)",
                    }}
                  >
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-[14px] text-[#2B2B2B]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {review.author}
                    </div>
                    <div
                      className="text-[11px] text-[#7A7A7A]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {new Date(review.date).toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 flex-shrink-0"
                  aria-label="Google"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              <StarRating rating={review.rating} />

              <p
                className="text-[13px] text-[#5A5A5A] leading-relaxed mt-3 italic"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* API Note — shown only in dev */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-[13px] text-amber-800 font-mono">
            <strong>Dev Note:</strong> Reviews are using mock data. To show live Google Reviews,
            add <code>GOOGLE_PLACES_API_KEY</code> and <code>GOOGLE_PLACE_ID</code> to your{" "}
            <code>.env.local</code> and update{" "}
            <code>src/lib/reviews.ts</code> with a real API call.
          </div>
        )}
      </div>
    </section>
  );
}
