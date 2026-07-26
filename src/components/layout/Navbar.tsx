"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

// Map slug → short descriptor shown in dropdown grid
const SERVICE_SUBTITLES: Record<string, string> = {
  hair:      "Cuts, colour & styling",
  nails:     "Gel, builder & nail art",
  facials:   "Glow-boosting treatments",
  massage:   "Relaxation & deep tissue",
  waxing:    "Hot wax & tea tree",
  threading: "Precision brow shaping",
  eyebrows:  "Lifts, tints & lamination",
  beauty:    "Lashes, make-up & more",
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [open, setOpen]               = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname  = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const navLinkClass = (href: string) =>
    cn(
      "px-3 py-2 text-sm font-sans font-medium transition-colors duration-200",
      pathname === href
        ? scrolled ? "text-primary" : "text-white"
        : scrolled  ? "text-dark/80 hover:text-primary" : "text-white/80 hover:text-white"
    );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[rgba(232,76,139,0.1)] shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-baseline gap-2.5 leading-none">
              <span
                className={cn(
                  "font-display font-bold tracking-tight transition-colors duration-300 text-xl sm:text-2xl",
                  scrolled ? "text-dark" : "text-white"
                )}
              >
                Get The Glow
              </span>
              <span
                className={cn(
                  "hidden xs:block text-[9px] uppercase tracking-[0.25em] font-sans font-medium transition-colors duration-300",
                  scrolled ? "text-primary" : "text-white/50"
                )}
              >
                Leicester
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                if (link.label === "Services" && link.children) {
                  return (
                    <div key={link.label} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onMouseEnter={() => setServicesOpen(true)}
                        className={cn(
                          "flex items-center gap-1.5 px-3 py-2 text-sm font-sans font-medium transition-colors duration-200",
                          servicesOpen || pathname.startsWith("/services")
                            ? scrolled ? "text-primary" : "text-white"
                            : scrolled  ? "text-dark/80 hover:text-primary" : "text-white/80 hover:text-white"
                        )}
                      >
                        Services
                        <motion.div
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: EASE }}
                        >
                          <ChevronDown size={13} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            onMouseLeave={() => setServicesOpen(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] z-50 rounded-2xl overflow-hidden"
                            style={{
                              background: "rgba(22, 8, 16, 0.92)",
                              backdropFilter: "blur(48px) saturate(180%)",
                              WebkitBackdropFilter: "blur(48px) saturate(180%)",
                              border: "1px solid rgba(232,76,139,0.18)",
                              boxShadow: "0 24px 80px rgba(0,0,0,0.45), 0 4px 16px rgba(232,76,139,0.15)",
                            }}
                          >
                            {/* Top accent line */}
                            <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                            <div className="p-5">
                              {/* Header row */}
                              <div className="flex items-center justify-between mb-4">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans">
                                  Our Services
                                </p>
                                <Link
                                  href="/services"
                                  onClick={() => setServicesOpen(false)}
                                  className="flex items-center gap-1 text-[11px] text-primary hover:text-primary-light font-sans font-medium transition-colors"
                                >
                                  View all
                                  <ArrowUpRight size={11} />
                                </Link>
                              </div>

                              {/* 2-column service grid */}
                              <div className="grid grid-cols-2 gap-1">
                                {SERVICES.map((svc) => (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    onClick={() => setServicesOpen(false)}
                                    className={cn(
                                      "group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150",
                                      pathname === `/services/${svc.slug}`
                                        ? "bg-primary/20"
                                        : "hover:bg-white/6"
                                    )}
                                  >
                                    <div className="flex-shrink-0 w-7 flex items-center justify-center">
                                      <ServiceIcon slug={svc.slug} size={16} className="text-white/60 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className={cn(
                                        "text-[13px] font-sans font-semibold leading-tight truncate transition-colors",
                                        pathname === `/services/${svc.slug}`
                                          ? "text-primary"
                                          : "text-white group-hover:text-primary"
                                      )}>
                                        {svc.name}
                                      </p>
                                      <p className="text-[11px] text-white/40 leading-tight truncate">
                                        {SERVICE_SUBTITLES[svc.slug]}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Footer bar */}
                            <div
                              className="px-5 py-3 flex items-center justify-between"
                              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                            >
                              <p className="text-[11px] text-white/30">
                                5 Woodgate · Leicester LE3 5GH
                              </p>
                              <Link
                                href="/pricing"
                                onClick={() => setServicesOpen(false)}
                                className="text-[11px] text-white/40 hover:text-white/70 font-sans transition-colors"
                              >
                                See prices →
                              </Link>
                            </div>
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
                    className={navLinkClass(link.href)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* ── Right side: CTA + hamburger ── */}
            <div className="flex items-center gap-2.5">
              {/* Phone — tablet only */}
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  "hidden md:lg:hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                  scrolled ? "text-dark/70 hover:text-primary" : "text-white/70 hover:text-white"
                )}
              >
                <Phone size={13} />
                <span className="hidden xl:inline text-[13px]">{BUSINESS.phone}</span>
              </a>

              {/* Book Now pill */}
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden md:flex items-center gap-1.5 text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-200",
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-dark shadow-sm"
                    : "bg-white/12 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                )}
              >
                Book Now
              </a>

              {/* Hamburger — mobile / tablet */}
              <button
                onClick={() => setOpen(!open)}
                className={cn(
                  "lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",
                  open
                    ? "bg-primary text-white"
                    : scrolled
                    ? "text-dark hover:bg-soft-pink/30"
                    : "text-white hover:bg-white/15"
                )}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={open ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.15 }}
                  >
                    {open ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(14,4,10,0.6)", backdropFilter: "blur(6px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-[320px] lg:hidden flex flex-col"
              style={{
                background: "rgba(20, 6, 14, 0.97)",
                backdropFilter: "blur(48px)",
                WebkitBackdropFilter: "blur(48px)",
                borderLeft: "1px solid rgba(232,76,139,0.14)",
                boxShadow: "-16px 0 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 pt-12 pb-5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <p className="font-display font-bold text-white text-base leading-none">Get The Glow</p>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-primary mt-1 font-sans">Leicester</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
                {NAV_LINKS.map((link) => {
                  if (link.label === "Services" && link.children) {
                    return (
                      <div key="services">
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block px-3 py-2.5 rounded-xl text-[14px] font-sans font-semibold transition-colors",
                            pathname === "/services" || pathname.startsWith("/services/")
                              ? "text-primary bg-primary/10"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          )}
                        >
                          Services
                        </Link>
                        <div className="grid grid-cols-2 gap-0.5 pl-2 pb-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "px-3 py-2 rounded-lg text-[12px] font-sans transition-colors",
                                pathname === child.href
                                  ? "text-primary font-medium"
                                  : "text-white/40 hover:text-white/80"
                              )}
                            >
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
                        "block px-3 py-2.5 rounded-xl text-[14px] font-sans font-semibold transition-colors",
                        pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Info strip */}
              <div className="px-5 py-3 space-y-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 text-[11px] text-white/30">
                  <MapPin size={11} className="text-primary/60 flex-shrink-0" />
                  5 Woodgate, Leicester LE3 5GH
                </div>
                <div className="flex items-center gap-2 text-[11px] text-white/30">
                  <Clock size={11} className="text-primary/60 flex-shrink-0" />
                  Tue–Sat 11am–5pm · Sun 11am–3pm
                </div>
              </div>

              {/* CTAs */}
              <div className="px-4 pb-10 pt-3 flex flex-col gap-2">
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-white font-semibold text-[13px] py-3 rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Book Appointment
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-[13px] py-3 rounded-xl border border-white/10 hover:border-white/25 transition-colors"
                >
                  <Phone size={13} />
                  {BUSINESS.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
