import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Camera, Mail, Sparkles, ArrowRight } from "lucide-react";
import { BUSINESS, HOURS, NAV_LINKS } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesNav = NAV_LINKS.find((l) => l.label === "Services");
  const otherNav = NAV_LINKS.filter(
    (l) => l.label !== "Services" && l.label !== "Home"
  );

  return (
    <footer className="bg-dark text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="glass-pink rounded-3xl p-8 mb-16 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Ready to Glow?
          </p>
          <p className="text-white/70 mb-6 text-sm">
            Book your appointment today — online, by phone or on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 gradient-primary text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              <Sparkles size={14} />
              Book Now
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-display font-bold text-white text-2xl">
                Get The Glow
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-primary mt-0.5">
                Leicester
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Leicester's premium luxury beauty salon. Expert hair, nails, facials, massage, waxing & more.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera size={16} />
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366]/30 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2">
              {servicesNav?.children?.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-2">
              {otherNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={BUSINESS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {BUSINESS.address.street}<br />
                  {BUSINESS.address.city}, {BUSINESS.address.postcode}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={BUSINESS.phoneHref}
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-white/60 hover:text-primary transition-colors break-all"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/60 space-y-1">
                  {HOURS.filter((h) => h.open).map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span className="text-white/80">{h.day}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} Get The Glow. All rights reserved.</p>
          <p>5 Woodgate, Leicester LE3 5GH, United Kingdom</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
