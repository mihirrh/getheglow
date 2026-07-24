import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B2B2B] text-white">
      {/* Top CTA Strip */}
      <div
        className="py-10"
        style={{
          background: "linear-gradient(135deg, #E84C8B 0%, #C93A76 50%, #D96A98 100%)",
        }}
      >
        <div className="container-custom text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Glow?
          </h2>
          <p className="text-white/85 mb-6 text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
            Book your luxury beauty appointment today — Walk-ins welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#E84C8B] font-semibold rounded-full text-[15px] hover:bg-[#FFF8F8] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              💬 WhatsApp to Book
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/15 text-white font-semibold rounded-full text-[15px] border border-white/30 hover:bg-white/25 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              📞 {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E84C8B] to-[#C93A76] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div>
                  <div
                    className="text-white font-bold text-lg leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Get The Glow
                  </div>
                  <div
                    className="text-[#E84C8B] text-[10px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Leicester
                  </div>
                </div>
              </div>
              <p
                className="text-white/65 text-[13px] leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Leicester&apos;s premium beauty destination. Expert hair, nails, facials, massage and
                so much more at 5 Woodgate, Leicester.
              </p>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#E84C8B] hover:text-[#F07AB0] transition-colors text-[13px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <ExternalLink size={14} />
                {BUSINESS.instagram}
              </a>
            </div>

            {/* Services */}
            <div>
              <h3
                className="text-white font-semibold text-[14px] mb-4 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
              >
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  ["Hair", "/services/hair"],
                  ["Nails & Builder Gel", "/services/nails"],
                  ["Facials", "/services/facials"],
                  ["Massage", "/services/massage"],
                  ["Waxing", "/services/waxing"],
                  ["Threading", "/services/threading"],
                  ["Lashes & Brows", "/services/beauty"],
                  ["Special Offers", "/offers"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-[#E84C8B] transition-colors text-[13px]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3
                className="text-white font-semibold text-[14px] mb-4 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
              >
                Opening Hours
              </h3>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span
                      className="text-white/60 text-[13px]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        h.open ? "text-white/85" : "text-white/35"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-white font-semibold text-[14px] mb-4 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
              >
                Find Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={BUSINESS.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-white/60 hover:text-white/85 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#E84C8B]" />
                    <span className="text-[13px] leading-snug">
                      5 Woodgate<br />Leicester LE3 5GH
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex items-center gap-2.5 text-white/60 hover:text-white/85 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Phone size={14} className="flex-shrink-0 text-[#E84C8B]" />
                    <span className="text-[13px]">{BUSINESS.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.emailHref}
                    className="flex items-center gap-2.5 text-white/60 hover:text-white/85 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Mail size={14} className="flex-shrink-0 text-[#E84C8B]" />
                    <span className="text-[13px]">{BUSINESS.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className="flex-shrink-0 text-[#E84C8B]" />
                    <span className="text-[13px] text-white/60" style={{ fontFamily: "var(--font-body)" }}>
                      Walk-ins welcome
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="text-white/40 text-[12px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {currentYear} Get The Glow. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              ["Privacy Policy", "/privacy"],
              ["Terms", "/terms"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-white/40 hover:text-white/65 transition-colors text-[12px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
