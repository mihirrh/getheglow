import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Get The Glow Leicester",
  description: "Terms and conditions for Get The Glow beauty salon, Leicester.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="container-custom max-w-2xl">
        <h1
          className="text-4xl font-bold text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Terms &amp; Conditions
        </h1>
        <div
          className="text-[15px] text-[#5A5A5A] space-y-6 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p>
            <strong>Last updated:</strong> {new Date().getFullYear()}
          </p>
          <p>
            These terms govern the use of our beauty salon services. By booking an appointment
            with Get The Glow, you agree to these terms.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Appointments &amp; Bookings
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Appointments can be booked via WhatsApp, phone, or walk-in.</li>
            <li>We recommend booking in advance for colour, bridal, and group services.</li>
            <li>Appointment times are approximate and may vary.</li>
          </ul>

          <h2
            className="text-2xl font-bold text-[#2B2B2B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cancellation Policy
          </h2>
          <p>
            We kindly ask for at least 24 hours&apos; notice for cancellations. This allows us to offer
            your appointment to another client. Repeated no-shows may result in a deposit being
            required for future bookings.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pricing
          </h2>
          <p>
            All prices are listed on our website and are subject to change. We reserve the right
            to update prices at any time. The price at time of booking applies.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Health &amp; Safety
          </h2>
          <p>
            Please inform your therapist of any allergies, skin conditions, or health issues
            before treatment. We reserve the right to decline treatment if we believe it may
            cause harm.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact
          </h2>
          <p>
            Get The Glow, 5 Woodgate, Leicester LE3 5GH
            <br />
            Email:{" "}
            <a href={BUSINESS.emailHref} className="text-[#E84C8B]">
              {BUSINESS.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
