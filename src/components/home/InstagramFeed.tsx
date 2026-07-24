"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

// Placeholder Instagram posts
const PLACEHOLDER_POSTS = [
  { id: "1", alt: "Beautiful nail art at Get The Glow Leicester", bg: "#F7D6E3" },
  { id: "2", alt: "Hair styling at Get The Glow", bg: "#F5E6FF" },
  { id: "3", alt: "Luxury facial treatment", bg: "#E6F5FF" },
  { id: "4", alt: "Eyebrow threading results", bg: "#FFF0E6" },
  { id: "5", alt: "Lash lift transformation", bg: "#E6FFE6" },
  { id: "6", alt: "Builder gel nails", bg: "#FFF8E6" },
];

const EMOJIS = ["💅", "✂️", "✨", "🌸", "💄", "💫"];

export function InstagramFeed() {
  return (
    <section className="section-padding" style={{ background: "#FFF8F8" }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4"
        >
          <div>
            <span className="section-label mb-2 block">
              ✦ Follow Along
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2B2B2B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              @_getheglow
            </h2>
          </div>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-[13px]"
          >
            ✦ Follow on Instagram
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PLACEHOLDER_POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: post.bg }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity">
                  {EMOJIS[i]}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#E84C8B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <ExternalLink size={13} className="text-[#E84C8B]" />
                  <span
                    className="text-[12px] font-medium text-[#2B2B2B]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    View
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* API Note */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-[13px] text-amber-800 font-mono">
            <strong>Dev Note:</strong> Instagram feed uses placeholders. To show live posts, add{" "}
            <code>INSTAGRAM_ACCESS_TOKEN</code> to <code>.env.local</code>. See README for
            Instagram Graph API setup.
          </div>
        )}
      </div>
    </section>
  );
}
