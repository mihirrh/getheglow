"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD IMAGES
// 1. Drop your photo into /public/gallery/  (e.g. /public/gallery/nails-1.jpg)
// 2. Add an entry below with:
//      src      – path from /public, e.g. "/gallery/nails-1.jpg"
//      alt      – plain-English description (used for accessibility + SEO)
//      category – one of: "Nails" | "Hair" | "Facials" | "Lashes & Brows" | "Waxing" | "Threading"
//
// Leave src as "" to show the branded placeholder gradient instead of a photo.
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = [
  { id: "1",  src: "", alt: "Gel nail art – pink and white design",         category: "Nails",         gradient: "from-primary/80 to-rose-400/60" },
  { id: "2",  src: "", alt: "Builder gel extensions – natural nude",         category: "Nails",         gradient: "from-soft-pink/90 to-primary/40" },
  { id: "3",  src: "", alt: "Lash lift before and after results",            category: "Lashes & Brows", gradient: "from-dark/80 to-primary/40" },
  { id: "4",  src: "", alt: "Eyebrow lamination – fluffy defined brows",     category: "Lashes & Brows", gradient: "from-gold/70 to-rose-400/70" },
  { id: "5",  src: "", alt: "Get The Glow signature facial treatment",       category: "Facials",       gradient: "from-cream/90 to-rose-400/60" },
  { id: "6",  src: "", alt: "Hair balayage colour transformation",           category: "Hair",          gradient: "from-gold/80 to-primary/60" },
  { id: "7",  src: "", alt: "Threading – perfectly shaped brows",            category: "Threading",     gradient: "from-primary/70 to-dark/60" },
  { id: "8",  src: "", alt: "Hot stone massage treatment",                   category: "Facials",       gradient: "from-dark/70 to-rose-400/50" },
  { id: "9",  src: "", alt: "French builder gel nails",                      category: "Nails",         gradient: "from-soft-pink/80 to-gold/50" },
  { id: "10", src: "", alt: "Hair styling – bouncy blowdry",                 category: "Hair",          gradient: "from-rose-400/70 to-primary/80" },
  { id: "11", src: "", alt: "Gold facial treatment",                         category: "Facials",       gradient: "from-gold/80 to-rose-400/60" },
  { id: "12", src: "", alt: "Waxing results – smooth skin",                  category: "Waxing",        gradient: "from-cream/90 to-primary/50" },
];

const CATEGORIES = ["All", ...Array.from(new Set(IMAGES.map((g) => g.category)))];

type GalleryImage = (typeof IMAGES)[number];

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = active === "All" ? IMAGES : IMAGES.filter((g) => g.category === active);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "gradient-primary text-white shadow-md"
                : "bg-white border border-border text-muted hover:border-primary/40 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((img, i) => (
          <motion.div
            key={img.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="break-inside-avoid mb-3 relative group cursor-pointer rounded-2xl overflow-hidden"
            style={{ aspectRatio: i % 3 === 0 ? "1/1.3" : "1/1" }}
            onClick={() => setLightbox(img)}
          >
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              /* Placeholder shown until real photos are added */
              <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-white/70 text-center">
                  <p className="text-[11px] font-medium leading-tight">{img.alt}</p>
                </div>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-2 left-2 bg-black/30 text-white text-[10px] px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
              {img.category}
            </div>

            {/* Hover zoom overlay */}
            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn size={28} className="text-white drop-shadow" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full aspect-square rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.src ? (
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-cover" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${lightbox.gradient}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                    <p className="text-xs uppercase tracking-widest mb-3 text-white/70">{lightbox.category}</p>
                    <p className="font-display font-semibold text-xl">{lightbox.alt}</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
