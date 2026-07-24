"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Category = "all" | "hair" | "nails" | "facials" | "beauty" | "before-after";

const GALLERY_ITEMS = [
  { id: "1", cat: "nails" as Category, bg: "#F7D6E3", emoji: "💅", label: "Nail Art Design" },
  { id: "2", cat: "hair" as Category, bg: "#F5E6FF", emoji: "✂️", label: "Hair Styling" },
  { id: "3", cat: "facials" as Category, bg: "#E6F5FF", emoji: "✨", label: "Glow Facial" },
  { id: "4", cat: "beauty" as Category, bg: "#FFF0E6", emoji: "👁️", label: "Lash Lift" },
  { id: "5", cat: "nails" as Category, bg: "#E6FFE6", emoji: "💅", label: "Builder Gel" },
  { id: "6", cat: "hair" as Category, bg: "#FFF8E6", emoji: "🌸", label: "Balayage Colour" },
  { id: "7", cat: "before-after" as Category, bg: "#F7D6E3", emoji: "🔄", label: "Brow Transformation" },
  { id: "8", cat: "beauty" as Category, bg: "#F0F8E6", emoji: "✨", label: "Brow Lamination" },
  { id: "9", cat: "nails" as Category, bg: "#E6F0FF", emoji: "💎", label: "French Builder Gel" },
  { id: "10", cat: "hair" as Category, bg: "#FFE6F5", emoji: "💇", label: "Blowdry Style" },
  { id: "11", cat: "facials" as Category, bg: "#F0FFE6", emoji: "⭐", label: "Gold Facial" },
  { id: "12", cat: "before-after" as Category, bg: "#FFE6E6", emoji: "🔄", label: "Lash Lift Result" },
];

const CATEGORIES = [
  { id: "all" as Category, label: "All" },
  { id: "hair" as Category, label: "Hair" },
  { id: "nails" as Category, label: "Nails" },
  { id: "facials" as Category, label: "Facials" },
  { id: "beauty" as Category, label: "Lashes & Brows" },
  { id: "before-after" as Category, label: "Before & After" },
];

export function GalleryClient() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.cat === active);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
              active === cat.id
                ? "bg-[#E84C8B] text-white shadow-[0_4px_12px_rgba(232,76,139,0.3)]"
                : "bg-white text-[#7A7A7A] border border-[rgba(240,214,227,0.6)] hover:border-[#E84C8B] hover:text-[#E84C8B]"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer relative"
            style={{
              background: item.bg,
              aspectRatio: i % 3 === 0 ? "4/5" : "1/1",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity">
                {item.emoji}
              </span>
            </div>
            {/* Label overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p
                className="text-white text-[12px] font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
