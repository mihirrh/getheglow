import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Award, Heart, Users, Clock } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/data";
import {
  FadeUp,
  SlideIn,
  StaggerGrid,
  StaggerItem,
  PageHero,
  PageHeroItem,
  CountUp,
} from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "About Get The Glow – Beauty Salon in Leicester LE3",
  description:
    "Get The Glow is Leicester's trusted beauty salon at 5 Woodgate LE3 5GH. Expert therapists offering nails, hair, waxing, threading, lash lifts & facials.",
  alternates: { canonical: `${BUSINESS.url}/about` },
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Excellence",
    desc: "We never cut corners. Every treatment is performed to the highest standard with premium products.",
  },
  {
    icon: Heart,
    title: "Warmth",
    desc: "You are always made to feel welcome, comfortable and genuinely cared for from the moment you arrive.",
  },
  {
    icon: Award,
    title: "Expertise",
    desc: "Our team are highly trained professionals who stay up to date with the latest techniques and trends.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We are proud to serve the people of Leicester and have built a loyal community of happy clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-36 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #E84C8B 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <PageHero>
            <PageHeroItem>
              <p className="text-xs uppercase tracking-[0.3em] text-soft-pink font-sans font-medium">Our Story</p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 className="font-display font-bold text-5xl sm:text-7xl text-white mt-2 mb-4 leading-tight">
                About<br />
                <span style={{ background: "linear-gradient(135deg, #F7D6E3, #E84C8B, #D6B15A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Get The Glow
                </span>
              </h1>
            </PageHeroItem>
            <PageHeroItem>
              <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto">Leicester's most-loved luxury beauty salon — where every detail matters and every client matters more.</p>
            </PageHeroItem>
          </PageHero>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Story */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn from="left">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
                Who We Are
              </p>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-6 leading-tight">
                A Small Business<br />Built on Big Care
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Get The Glow is an independent, family-run beauty salon right in the heart of Leicester. We are not a chain. We are not a franchise. We are a small business — and that means every single client matters to us personally.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                We started with a simple but heartfelt belief: that everyone deserves to feel genuinely beautiful — not rushed through a conveyor belt, but truly seen, heard and cared for. That belief is baked into everything we do, from the warm welcome at the door to the final look in the mirror before you leave.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                Our little salon at 5 Woodgate has become something we are incredibly proud of — a space where people come not just for a treatment, but for how it makes them feel. Confident. Refreshed. Themselves again.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                When you choose Get The Glow, you are choosing a team that genuinely loves what they do and genuinely cares about you. That is the difference a small business makes — and it is one we will never take for granted.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { to: 1000, suffix: "+", label: "Happy Clients" },
                  { to: 5, suffix: ".0★", label: "Google Rating" },
                  { to: 50, suffix: "+", label: "Treatments" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display font-bold text-3xl text-primary mb-1">
                      <CountUp to={stat.to} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-muted uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SlideIn>

            {/* Visual */}
            <SlideIn from="right" delay={0.15}>
              <div className="relative">
                <div
                  className="rounded-3xl aspect-[4/5] max-w-md mx-auto"
                  style={{
                    background: "linear-gradient(135deg, #F7D6E3 0%, #E84C8B 40%, #D96A98 70%, #2B2B2B 100%)",
                  }}
                />
                <FadeUp delay={0.4} className="absolute -bottom-6 -right-6 glass shadow-xl border border-white/40 rounded-3xl p-5 max-w-[220px]">
                  <p className="font-display italic text-dark text-sm leading-snug">
                    "You are not just a booking — you are the reason we do this."
                  </p>
                </FadeUp>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
              Our Values
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
              What We Stand For
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {VALUES.map((v) => (
              <StaggerItem key={v.title} variant="up">
                <div className="card-luxury p-8 text-center border border-border/50 h-full">
                  <div className="w-14 h-14 rounded-full bg-soft-pink/60 flex items-center justify-center mx-auto mb-5">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-dark text-xl mb-3">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp className="mb-10">
            <h2 className="font-display font-bold text-4xl text-dark">Visit Us</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <SlideIn from="left">
              <div className="card-luxury p-8 border border-border/50 text-left h-full">
                <h3 className="font-display font-semibold text-dark text-xl mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Opening Hours
                </h3>
                <div className="space-y-2">
                  {HOURS.map((h) => (
                    <div key={h.day} className={`flex justify-between text-sm py-1 border-b border-border/40 last:border-0 ${h.open ? "text-dark" : "text-muted/60"}`}>
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <div className="card-luxury p-8 border border-border/50 text-left flex flex-col gap-5 h-full">
                <div>
                  <h3 className="font-display font-semibold text-dark text-xl mb-2">Location</h3>
                  <p className="text-muted text-sm">{BUSINESS.address.full}</p>
                  <a href={BUSINESS.googleMaps} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium mt-1 hover:underline block">
                    Get Directions →
                  </a>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-dark text-xl mb-2">Get In Touch</h3>
                  <a href={BUSINESS.phoneHref} className="block text-muted text-sm hover:text-primary transition-colors">{BUSINESS.phone}</a>
                  <a href={`mailto:${BUSINESS.email}`} className="block text-muted text-sm hover:text-primary transition-colors break-all">{BUSINESS.email}</a>
                </div>
              </div>
            </SlideIn>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 gradient-primary text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm"
            >
              Contact Us
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
