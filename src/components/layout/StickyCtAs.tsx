"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function StickyCtAs() {
  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[rgba(240,214,227,0.6)] shadow-[0_-4px_20px_rgba(232,76,139,0.08)]">
        <div className="grid grid-cols-3 divide-x divide-[rgba(240,214,227,0.5)]">
          <a
            href={BUSINESS.phoneHref}
            className="flex flex-col items-center justify-center py-3 gap-1 hover:bg-[rgba(232,76,139,0.04)] transition-colors"
          >
            <Phone size={18} className="text-[#E84C8B]" />
            <span
              className="text-[10px] font-medium text-[#2B2B2B]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Call
            </span>
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 gap-1 bg-[#E84C8B] hover:bg-[#C93A76] transition-colors"
          >
            <MessageCircle size={18} className="text-white" />
            <span
              className="text-[10px] font-medium text-white"
              style={{ fontFamily: "var(--font-body)" }}
            >
              WhatsApp
            </span>
          </a>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 gap-1 hover:bg-[rgba(232,76,139,0.04)] transition-colors"
          >
            <Calendar size={18} className="text-[#E84C8B]" />
            <span
              className="text-[10px] font-medium text-[#2B2B2B]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book
            </span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed right-6 bottom-8 z-50 flex-col gap-3">
        <a
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 overflow-hidden shadow-[0_4px_20px_rgba(37,211,102,0.35)] rounded-full transition-all duration-300 hover:shadow-[0_6px_28px_rgba(37,211,102,0.45)]"
          style={{
            background: "linear-gradient(135deg, #25D166, #128C7E)",
          }}
          aria-label="WhatsApp us"
          title="WhatsApp Us"
        >
          <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
            <MessageCircle size={22} className="text-white" />
          </div>
          <span
            className="text-white text-[13px] font-semibold pr-5 max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)" }}
          >
            WhatsApp Us
          </span>
        </a>

        <a
          href={BUSINESS.phoneHref}
          className="group flex items-center gap-2 overflow-hidden shadow-[0_4px_20px_rgba(232,76,139,0.35)] rounded-full transition-all duration-300 hover:shadow-[0_6px_28px_rgba(232,76,139,0.45)]"
          style={{
            background: "linear-gradient(135deg, #E84C8B, #C93A76)",
          }}
          aria-label="Call us"
          title="Call Us"
        >
          <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
            <Phone size={20} className="text-white" />
          </div>
          <span
            className="text-white text-[13px] font-semibold pr-5 max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {BUSINESS.phone}
          </span>
        </a>
      </div>

      {/* Mobile safe area spacer */}
      <div className="h-[60px] md:hidden" aria-hidden="true" />
    </>
  );
}
