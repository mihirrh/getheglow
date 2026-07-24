"use client";

import { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function StickyCTAs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden safe-area-inset-bottom">
        <div className="glass border-t border-white/20 px-4 py-3">
          <div className="flex items-center gap-2 max-w-sm mx-auto">
            <a
              href={BUSINESS.phoneHref}
              className="flex-1 flex items-center justify-center gap-2 bg-dark text-white text-sm font-medium py-3 rounded-2xl"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-3 rounded-2xl"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 gradient-primary text-white text-sm font-medium py-3 rounded-2xl"
            >
              <Calendar size={16} />
              Book
            </a>
          </div>
        </div>
      </div>

      {/* Desktop floating FAB */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-3">
        {/* Expandable actions */}
        {expanded && (
          <>
            <a
              href={BUSINESS.phoneHref}
              className={cn(
                "flex items-center gap-3 glass shadow-lg border border-white/30 px-5 py-3 rounded-full text-sm font-medium text-dark hover:bg-soft-pink/30 transition-all",
                "animate-fade-up"
              )}
            >
              <Phone size={16} className="text-primary" />
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 glass shadow-lg border border-white/30 px-5 py-3 rounded-full text-sm font-medium text-dark hover:bg-soft-pink/30 transition-all",
                "animate-fade-up"
              )}
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 gradient-primary shadow-lg px-5 py-3 rounded-full text-sm font-medium text-white hover:opacity-90 transition-all",
                "animate-fade-up"
              )}
            >
              <Calendar size={16} />
              Book Appointment
            </a>
          </>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-14 h-14 gradient-primary rounded-full shadow-xl flex items-center justify-center text-white hover:opacity-90 transition-all"
          aria-label="Quick actions"
        >
          {expanded ? (
            <span className="text-xl leading-none">✕</span>
          ) : (
            <Calendar size={22} />
          )}
        </button>
      </div>
    </>
  );
}
