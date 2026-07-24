import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Get The Glow Beauty Salon Leicester",
  description:
    "About Get The Glow — Leicester's premium beauty salon at 5 Woodgate. Expert therapists, luxury treatments, and genuine care for every client.",
  alternates: { canonical: `${BUSINESS.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
      >
        <div className="container-custom max-w-3xl">
          <span className="section-label mb-3 block">Our Story</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2B2B2B] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E84C8B, #C93A76)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get The Glow
            </span>
          </h1>
          <p
            className="text-[#7A7A7A] text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Leicester&apos;s premium beauty destination — where luxury treatments meet genuine warmth.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Who We Are</span>
              <h2
                className="text-4xl font-bold text-[#2B2B2B] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Passionate About Beauty. Dedicated to You.
              </h2>
              <div
                className="space-y-4 text-[15px] text-[#5A5A5A] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p>
                  Get The Glow was founded with one clear vision: to create a beauty salon in
                  Leicester where every client feels truly valued, pampered and leaves looking and
                  feeling their absolute best.
                </p>
                <p>
                  Based at 5 Woodgate in Leicester, we offer a comprehensive menu of luxury beauty
                  treatments — from precision hair cuts and vibrant colour to indulgent facials,
                  relaxing massages, expert waxing, precise threading and stunning nail services.
                </p>
                <p>
                  Our therapists are highly trained professionals who are passionate about their
                  craft and genuinely care about every client who walks through our door. We use
                  only premium products and stay up to date with the latest techniques to deliver
                  results that exceed expectations.
                </p>
                <p>
                  Whether it&apos;s your first visit or your fiftieth, whether you&apos;re treating yourself
                  or preparing for your wedding day, we can&apos;t wait to help you glow.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={17} />
                  Book an Appointment
                </a>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {[
                {
                  title: "Premium Quality",
                  desc: "Only professional-grade products. Only expert techniques. Only the best for our clients.",
                  icon: "✦",
                },
                {
                  title: "Personal Care",
                  desc: "Every treatment is tailored to you. We listen, we consult, and we deliver exactly what you want.",
                  icon: "◈",
                },
                {
                  title: "Welcoming Atmosphere",
                  desc: "Luxury doesn't have to feel intimidating. We're warm, friendly and genuinely happy to see you.",
                  icon: "◉",
                },
                {
                  title: "Consistent Excellence",
                  desc: "5-star rated on Google — because we treat every client like our most important client.",
                  icon: "★",
                },
              ].map((value) => (
                <div key={value.title} className="card-premium p-5 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[18px] text-[#E84C8B]"
                    style={{ background: "rgba(232, 76, 139, 0.08)" }}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-[15px] text-[#2B2B2B] mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-[13px] text-[#7A7A7A] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        className="section-padding-sm text-center"
        style={{ background: "#FFF8F8" }}
      >
        <div className="container-custom">
          <h2
            className="text-3xl font-bold text-[#2B2B2B] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visit Us
          </h2>
          <p
            className="text-[#7A7A7A] mb-2 text-[16px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            5 Woodgate, Leicester LE3 5GH
          </p>
          <p
            className="text-[14px] text-[#7A7A7A] mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tues–Sat 11am–5pm · Sun 11am–3pm · Walk-ins Welcome
          </p>
          <a
            href={BUSINESS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
