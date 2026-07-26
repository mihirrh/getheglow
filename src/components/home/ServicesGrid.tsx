"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const FEATURED_SERVICES = [
  {
    id: "hair",
    title: "Hair",
    description: "Precision cuts, colour, balayage & blowdrys by expert stylists.",
    priceFrom: "£5",
    href: "/services/hair",
    bg: "from-[#FFF0F6] to-[#FDD8EC]",
  },
  {
    id: "nails",
    title: "Nails & Builder Gel",
    description: "Gel polish, builder gel, extensions and stunning nail art.",
    priceFrom: "£10",
    href: "/services/nails",
    bg: "from-[#FFF8F0] to-[#FDE8D0]",
  },
  {
    id: "facials",
    title: "Facials",
    description: "Luxury facials designed to restore your natural radiant glow.",
    priceFrom: "£22",
    href: "/services/facials",
    bg: "from-[#F0FBF8] to-[#D0F0E8]",
  },
  {
    id: "massage",
    title: "Massage",
    description: "Hot stone, full body & Indian head massage for total relaxation.",
    priceFrom: "£30",
    href: "/services/massage",
    bg: "from-[#F5F0FD] to-[#E0D0F8]",
  },
  {
    id: "waxing",
    title: "Waxing",
    description: "Smooth, precise waxing using premium tea tree & hot wax.",
    priceFrom: "£3",
    href: "/services/waxing",
    bg: "from-[#FFF8F0] to-[#FDE8D0]",
  },
  {
    id: "threading",
    title: "Threading",
    description: "Expertly shaped brows and flawless face threading.",
    priceFrom: "£2.50",
    href: "/services/threading",
    bg: "from-[#FFF0F6] to-[#FDD8EC]",
  },
  {
    id: "beauty",
    title: "Lashes & Brows",
    description: "Lash lift, brow lamination, tinting & luxury beauty combos.",
    priceFrom: "£8",
    href: "/services/beauty",
    bg: "from-[#F0F8FF] to-[#D0E8F8]",
  },
  {
    id: "all",
    title: "View All Services",
    description: "Explore our full menu of premium beauty treatments.",
    priceFrom: "",
    href: "/services",
    bg: "from-[#2B2B2B] to-[#1a1a1a]",
    isDark: true,
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">What We Offer</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Treatments
          </h2>
          <p
            className="text-[#7A7A7A] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Everything you need for your beauty routine, under one roof in Leicester.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {FEATURED_SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={service.href}
                className={`group block relative overflow-hidden rounded-2xl p-6 h-full min-h-[170px] transition-all duration-300 hover:-translate-y-1 ${
                  (service as { isDark?: boolean }).isDark
                    ? "bg-gradient-to-br from-[#2B2B2B] to-[#1a1a1a]"
                    : `bg-gradient-to-br ${service.bg}`
                }`}
                style={{
                  boxShadow: "0 2px 12px rgba(232,76,139,0.06)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-3">
                    <ServiceIcon
                      slug={service.id}
                      size={20}
                      className={(service as { isDark?: boolean }).isDark ? "text-white/70" : "text-[#E84C8B]"}
                    />
                  </div>
                  <h3
                    className={`font-semibold text-[15px] leading-tight mb-2 ${
                      (service as { isDark?: boolean }).isDark ? "text-white" : "text-[#2B2B2B]"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-[12px] leading-relaxed flex-1 ${
                      (service as { isDark?: boolean }).isDark ? "text-white/65" : "text-[#7A7A7A]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service.description}
                  </p>
                  {service.priceFrom && (
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className="text-[12px] font-semibold text-[#E84C8B]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        From {service.priceFrom}
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-[#E84C8B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                      />
                    </div>
                  )}
                  {(service as { isDark?: boolean }).isDark && (
                    <div className="mt-3 flex items-center gap-1 text-white/70">
                      <span className="text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
                        View all
                      </span>
                      <ArrowRight size={13} />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
