"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Sparkles } from "lucide-react";
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
                  "text-[10px] uppercase tracking-[0.2em] font-sans transition-colors duration-300",
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
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-2 w-52 glass rounded-2xl shadow-xl border border-white/30 py-2 z-50"
                          >
                            <Link
                              href="/services"
                              className="block px-4 py-2 text-sm text-dark font-medium hover:text-primary hover:bg-soft-pink/30 transition-colors"
                            >
                              All Services
                            </Link>
                            <div className="divider-pink mx-4 my-1" />
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-2 text-sm transition-colors hover:text-primary hover:bg-soft-pink/30",
                                  pathname === child.href
                                    ? "text-primary font-medium"
                                    : "text-dark/80"
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
                  "lg:hidden p-2 rounded-xl transition-colors",
                  scrolled
                    ? "text-dark hover:bg-soft-pink/30"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-6 px-4 glass shadow-xl border-b border-white/20 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                if (link.label === "Services" && link.children) {
                  return (
                    <div key={link.label}>
                      <Link
                        href="/services"
                        className="block px-4 py-3 rounded-xl text-dark font-medium hover:bg-soft-pink/30 hover:text-primary transition-colors"
                      >
                        Services
                      </Link>
                      <div className="pl-4 flex flex-col gap-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 rounded-xl text-sm text-muted hover:text-primary hover:bg-soft-pink/30 transition-colors"
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
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium transition-colors",
                      pathname === link.href
                        ? "text-primary bg-soft-pink/40"
                        : "text-dark hover:text-primary hover:bg-soft-pink/30"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center gradient-primary text-white font-medium py-3 rounded-2xl"
                >
                  Book Now
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="w-full text-center border border-primary text-primary font-medium py-3 rounded-2xl hover:bg-soft-pink/30 transition-colors"
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
