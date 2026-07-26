import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FadeUp, PageHero, PageHeroItem } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Gallery – Nails, Hair & Beauty Results | Get The Glow Leicester",
  description:
    "See real results from our clients in Leicester: gel nails, acrylic nails, lash lifts, brow lamination, hair colour, facials and more. Book your appointment.",
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
          <PageHero>
            <PageHeroItem>
              <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium">Our Work</p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mt-2 mb-3">Gallery</h1>
            </PageHeroItem>
            <PageHeroItem>
              <p className="text-white/75 text-lg">Real results from real clients. Browse our portfolio of beauty transformations.</p>
            </PageHeroItem>
          </PageHero>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* GalleryGrid is already a client component with its own scroll animations */}
          <GalleryGrid />

          <FadeUp delay={0.1} className="text-center mt-14">
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
          </FadeUp>
        </div>
      </section>
    </>
  );
}
