"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Sparkles, MapPin, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass shadow-sm border-b border-white/20 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col leading-none">
              <span
                className={cn(
                  "font-display font-bold transition-colors duration-300",
                  scrolled ? "text-dark" : "text-white",
                  "text-xl sm:text-2xl tracking-tight"
                )}
              >
                Get The Glow
              </span>
              <span
                className={cn(
                  "hidden xs:block text-[10px] uppercase tracking-[0.2em] font-sans transition-colors duration-300",
                  scrolled ? "text-primary" : "text-soft-pink"
                )}
              >
                Leicester
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.label === "Services" && link.children) {
                  return (
                    <div key={link.label} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200",
                          scrolled
                            ? "text-dark hover:text-primary hover:bg-soft-pink/30"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        )}
                      >
                        Services
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            servicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 mt-2.5 w-56 rounded-2xl py-2 z-50 overflow-hidden"
                            style={{
                              background: "rgba(255, 252, 254, 0.96)",
                              backdropFilter: "blur(40px) saturate(180%)",
                              WebkitBackdropFilter: "blur(40px) saturate(180%)",
                              boxShadow: "0 8px 40px rgba(43,43,43,0.18), 0 2px 12px rgba(232,76,139,0.1)",
                              border: "1px solid rgba(232,76,139,0.12)",
                            }}
                          >
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2.5 text-sm text-dark font-semibold hover:text-primary hover:bg-soft-pink/40 transition-colors rounded-xl mx-1"
                            >
                              All Services
                            </Link>
                            <div className="divider-pink mx-4 my-1.5" />
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setServicesOpen(false)}
                                className={cn(
                                  "block px-4 py-2 text-sm transition-colors hover:text-primary hover:bg-soft-pink/30 rounded-xl mx-1",
                                  pathname === child.href
                                    ? "text-primary font-semibold bg-soft-pink/20"
                                    : "text-dark"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200",
                      pathname === link.href
                        ? scrolled
                          ? "text-primary bg-soft-pink/40"
                          : "text-white bg-white/15"
                        : scrolled
                        ? "text-dark hover:text-primary hover:bg-soft-pink/30"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  "hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                  scrolled ? "text-dark hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                <Phone size={14} />
                <span className="hidden xl:inline">{BUSINESS.phone}</span>
              </a>
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 gradient-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
              >
                <Sparkles size={13} />
                Book Now
              </a>
              <button
                onClick={() => setOpen(!open)}
                className={cn(
                  "lg:hidden w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-200",
                  open
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : scrolled
                    ? "bg-dark/8 text-dark hover:bg-soft-pink/40"
                    : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/20"
                )}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu — liquid glass slide-in from right */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(43,43,43,0.35)", backdropFilter: "blur(4px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] lg:hidden flex flex-col"
              style={{
                background: "rgba(255, 252, 254, 0.92)",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                borderLeft: "1px solid rgba(232, 76, 139, 0.15)",
                boxShadow: "-8px 0 60px rgba(43,43,43,0.18), -2px 0 12px rgba(232,76,139,0.08)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-14 pb-6 border-b border-[rgba(232,76,139,0.1)]">
                <div>
                  <p className="font-display font-bold text-dark text-lg leading-none">Get The Glow</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary mt-0.5 font-sans">Leicester</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-2xl bg-dark/6 flex items-center justify-center text-dark hover:bg-soft-pink/50 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => {
                    if (link.label === "Services" && link.children) {
                      return (
                        <div key={link.label}>
                          <Link
                            href="/services"
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-between px-4 py-3 rounded-2xl font-sans font-semibold text-[15px] transition-colors",
                              pathname === "/services"
                                ? "text-primary bg-soft-pink/40"
                                : "text-dark hover:text-primary hover:bg-soft-pink/25"
                            )}
                          >
                            Services
                          </Link>
                          <div className="pl-3 flex flex-col gap-0.5 mb-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-sans transition-colors",
                                  pathname === child.href
                                    ? "text-primary font-medium bg-soft-pink/30"
                                    : "text-muted hover:text-primary hover:bg-soft-pink/20"
                                )}
                              >
                                <span
                                  className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0"
                                />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-2xl font-sans font-semibold text-[15px] transition-colors",
                          pathname === link.href
                            ? "text-primary bg-soft-pink/40"
                            : "text-dark hover:text-primary hover:bg-soft-pink/25"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-[rgba(232,76,139,0.2)] to-transparent" />

                {/* Info strip */}
                <div className="px-4 space-y-2.5 mb-4">
                  <div className="flex items-center gap-2.5 text-[12px] text-muted">
                    <MapPin size={13} className="text-primary flex-shrink-0" />
                    5 Woodgate, Leicester LE3 5GH
                  </div>
                  <div className="flex items-center gap-2.5 text-[12px] text-muted">
                    <Clock size={13} className="text-primary flex-shrink-0" />
                    Tue–Sat 11am–5pm · Sun 11am–3pm
                  </div>
                </div>
              </nav>

              {/* CTA buttons pinned to bottom */}
              <div className="px-5 pb-10 pt-4 flex flex-col gap-2.5 border-t border-[rgba(232,76,139,0.1)]">
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 gradient-primary text-white font-semibold text-[14px] py-3.5 rounded-2xl shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
                  onClick={() => setOpen(false)}
                >
                  <Sparkles size={15} />
                  Book Appointment
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="w-full flex items-center justify-center gap-2 bg-dark/6 text-dark font-semibold text-[14px] py-3.5 rounded-2xl border border-dark/10 hover:bg-soft-pink/30 hover:text-primary hover:border-primary/30 transition-all"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={15} />
                  {BUSINESS.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
