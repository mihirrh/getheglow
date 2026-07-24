import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery – Beauty Transformations in Leicester",
  description:
    "Browse our gallery of beauty transformations at Get The Glow Leicester: nails, hair, facials, brows, lashes, massage and more.",
  alternates: { canonical: `${BUSINESS.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <div
        className="relative pt-36 pb-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #E84C8B 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium mb-4">
            Our Work
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6">
            Gallery
          </h1>
          <p className="text-white/75 text-lg">
            Real results from real clients. Browse our portfolio of beauty transformations.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />

          <div className="text-center mt-14">
            <p className="text-sm text-muted mb-6">
              Follow us on Instagram for daily inspiration and new work
            </p>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm"
            >
              Follow @getheglow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
