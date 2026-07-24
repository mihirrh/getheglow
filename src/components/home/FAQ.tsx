"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Do I need to book in advance?",
    a: "We welcome walk-ins, but booking in advance is recommended, especially for colour services, bridal packages and weekend appointments. You can book via WhatsApp or by calling us.",
  },
  {
    q: "Where are you located?",
    a: "We are at 5 Woodgate, Leicester, LE3 5GH. We are easy to find with parking nearby. Click the directions button on our contact page for full Google Maps directions.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Tuesday 11am–5pm, Thursday–Saturday 11am–5pm, and Sunday 11am–3pm. We are closed on Monday and Wednesday.",
  },
  {
    q: "Do you offer bridal hair and makeup?",
    a: "Yes! We offer bridal hair styling. For bridal makeup, please contact us directly as this is a separate service that we can discuss and tailour to your special day.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash and card payments. Please let us know if you have any questions about payment when booking.",
  },
  {
    q: "How far in advance should I book colour services?",
    a: "For colour services such as balayage, highlights or full colour, we recommend booking at least one week in advance to secure your preferred appointment time.",
  },
  {
    q: "Do you offer group bookings?",
    a: "Yes, we can accommodate groups for hen parties, bridesmaids and special occasions. Please contact us via WhatsApp or phone to discuss your group requirements.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly ask for at least 24 hours notice for cancellations. This allows us to offer the appointment to another client. Please contact us via WhatsApp or phone.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label mb-3 block">Got Questions?</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2B2B2B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-premium overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className="font-semibold text-[15px] text-[#2B2B2B] pr-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(232,76,139,0.08)] flex items-center justify-center">
                    {openIndex === i ? (
                      <Minus size={14} className="text-[#E84C8B]" />
                    ) : (
                      <Plus size={14} className="text-[#E84C8B]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5">
                        <div className="h-[1px] bg-[rgba(240,214,227,0.5)] mb-4" />
                        <p
                          className="text-[14px] text-[#7A7A7A] leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
}
