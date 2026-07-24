"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Hair", href: "/services/hair" },
      { label: "Nails", href: "/services/nails" },
      { label: "Facials", href: "/services/facials" },
      { label: "Massage", href: "/services/massage" },
      { label: "Waxing", href: "/services/waxing" },
      { label: "Threading", href: "/services/threading" },
      { label: "Beauty", href: "/services/beauty" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Special Offers", href: "/offers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2B2B2B] text-white text-xs py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <span style={{ fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}>
            5 Woodgate, Leicester LE3 5GH
          </span>
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-1.5 hover:text-[#E84C8B] transition-colors"
            >
              <Phone size={12} />
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E84C8B] transition-colors"
            >
              @_getheglow
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-[0_4px_24px_rgba(232,76,139,0.08)] border-b border-[rgba(240,214,227,0.4)]"
            : "bg-white/95 backdrop-blur-sm border-b border-[rgba(240,214,227,0.3)]"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E84C8B] to-[#C93A76] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(232,76,139,0.4)]">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div
                  className="text-[#2B2B2B] font-bold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Get The Glow
                </div>
                <div
                  className="text-[#E84C8B] text-[10px] tracking-[0.2em] uppercase leading-tight"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Leicester
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#2B2B2B] hover:text-[#E84C8B] transition-colors rounded-lg hover:bg-[rgba(232,76,139,0.05)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={13} className="opacity-60" />}
                  </Link>

                  {/* Dropdown */}
                  {link.children && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 pt-2 z-50"
                        >
                          <div className="card-premium bg-white rounded-2xl py-2 min-w-[180px] shadow-xl">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2.5 text-[13px] text-[#2B2B2B] hover:text-[#E84C8B] hover:bg-[rgba(232,76,139,0.04)] transition-colors"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[rgba(232,76,139,0.06)] text-[#E84C8B] transition-colors hover:bg-[rgba(232,76,139,0.12)]"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-[rgba(240,214,227,0.5)] bg-white overflow-hidden"
            >
              <div className="container-custom py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-2.5 px-3 text-[15px] font-medium text-[#2B2B2B] hover:text-[#E84C8B] rounded-lg hover:bg-[rgba(232,76,139,0.04)] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block py-2 px-3 text-[13px] text-[#7A7A7A] hover:text-[#E84C8B] rounded-lg hover:bg-[rgba(232,76,139,0.04)] transition-colors"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 pb-1 flex flex-col gap-2">
                  <a href={BUSINESS.phoneHref} className="btn-secondary text-center text-sm py-3">
                    📞 Call {BUSINESS.phone}
                  </a>
                  <a
                    href={BUSINESS.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center text-sm py-3"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
