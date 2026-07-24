"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, ExternalLink, Heart } from "lucide-react";
import { BUSINESS } from "@/lib/data";

// ── Mock Instagram data — replace with real API data ──────────────────────────
// To connect to the real Instagram Graph API:
// 1. Create a Meta Developer App at developers.facebook.com
// 2. Add Instagram Graph API product
// 3. Get a long-lived User Access Token
// 4. Set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID in .env.local
// 5. Replace MOCK_POSTS with a server-side fetch from the API route /api/instagram
const MOCK_POSTS = [
  {
    id: "1",
    imageUrl: "/images/instagram/post-1.jpg",
    caption: "✨ Fresh set of builder gel nails — loving this soft nude with gold details! Book your nails today.",
    likes: 84,
    link: "https://www.instagram.com/_getheglow/",
    gradient: "from-primary/80 to-rose/80",
    bgColor: "#F7D6E3",
  },
  {
    id: "2",
    imageUrl: "/images/instagram/post-2.jpg",
    caption: "💆‍♀️ Hot stone massage — pure bliss. Treat yourself this weekend! 📞 07778 698550",
    likes: 62,
    link: "https://www.instagram.com/_getheglow/",
    gradient: "from-rose/70 to-dark/60",
    bgColor: "#D96A98",
  },
  {
    id: "3",
    imageUrl: "/images/instagram/post-3.jpg",
    caption: "👁️ Lash lift & tint results speak for themselves. No mascara needed! ✨ #GetTheGlow",
    likes: 118,
    link: "https://www.instagram.com/_getheglow/",
    gradient: "from-dark/70 to-primary/40",
    bgColor: "#2B2B2B",
  },
  {
    id: "4",
    imageUrl: "/images/instagram/post-4.jpg",
    caption: "🌸 Threading perfection — perfectly defined brows in just minutes! Come in today.",
    likes: 77,
    link: "https://www.instagram.com/_getheglow/",
    gradient: "from-gold/60 to-primary/70",
    bgColor: "#D6B15A",
  },
  {
    id: "5",
    imageUrl: "/images/instagram/post-5.jpg",
    caption: "✨ Get The Glow Facial — our signature treatment for radiant skin. Book yours now!",
    likes: 96,
    link: "https://www.instagram.com/_getheglow/",
    gradient: "from-soft-pink/80 to-rose/60",
    bgColor: "#F7D6E3",
  },
  {
    id: "6",
    imageUrl: "/images/instagram/post-6.jpg",
    caption: "💅 Builder gel French — timeless elegance that lasts! From £28. #NailsLeicester",
    likes: 103,
    link: "https://www.instagram.com/_getheglow/",
    gradient: "from-primary/60 to-rose/80",
    bgColor: "#E84C8B",
  },
];

export function InstagramFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
            Follow Along
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
            @getheglow
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-6">
            Follow us on Instagram for daily inspiration, transformations, and exclusive offers.
          </p>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-white font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm shadow-md"
          >
            <Camera size={15} />
            Follow @getheglow
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MOCK_POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundColor: post.bgColor }}
            >
              {/* Placeholder gradient (replaces image when not loaded) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-90`}
              />
              {/* Text placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <p className="text-white text-[10px] text-center leading-snug line-clamp-4 font-body">
                  {post.caption.slice(0, 60)}...
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <ExternalLink size={22} className="text-white" />
                <div className="flex items-center gap-1 text-white text-xs">
                  <Heart size={11} className="fill-white" />
                  {post.likes}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-xs text-muted/60 mt-6"
        >
          * Feed shown with placeholder content. Connect your Instagram Graph API token in{" "}
          <code className="bg-soft-pink/40 px-1.5 py-0.5 rounded text-primary">.env.local</code>{" "}
          to display live posts.
        </motion.p>
      </div>
    </section>
  );
}
