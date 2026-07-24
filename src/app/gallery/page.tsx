import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Get The Glow Beauty Salon Leicester",
  description:
    "View our gallery of beauty transformations — nails, hair, facials, lashes and more at Get The Glow, Leicester's premium beauty salon.",
  alternates: { canonical: `${BUSINESS.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom">
          <span className="section-label mb-3 block">Our Work</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Gallery
          </h1>
          <p
            className="text-[#7A7A7A] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Browse our portfolio of stunning beauty transformations from clients at Get The Glow,
            Leicester.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <GalleryClient />
        </div>
      </section>
    </div>
  );
}
