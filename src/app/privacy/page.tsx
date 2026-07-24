import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Get The Glow Leicester",
  description: "Privacy policy for Get The Glow beauty salon, Leicester.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="container-custom max-w-2xl">
        <h1
          className="text-4xl font-bold text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Privacy Policy
        </h1>
        <div
          className="prose prose-sm max-w-none text-[#5A5A5A]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p className="mb-4">
            <strong>Last updated:</strong> {new Date().getFullYear()}
          </p>
          <p className="mb-4">
            Get The Glow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal
            information and your right to privacy. This policy explains how we collect, use, and
            safeguard your information.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B] mt-8 mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect your name, phone number, email address and service preferences when
            you contact us to book an appointment or make an enquiry via our website, WhatsApp,
            phone, or email.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B] mt-8 mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>To respond to your enquiries and confirm appointments</li>
            <li>To provide the beauty services you have requested</li>
            <li>To contact you regarding your appointments</li>
            <li>To improve our services</li>
          </ul>

          <h2
            className="text-2xl font-bold text-[#2B2B2B] mt-8 mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Data Sharing
          </h2>
          <p className="mb-4">
            We do not sell, trade, or share your personal information with third parties, except
            where required by law.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B] mt-8 mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Data Retention
          </h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to provide our
            services. You may request deletion of your data at any time.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B] mt-8 mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Rights
          </h2>
          <p className="mb-4">
            Under GDPR, you have the right to access, correct, or delete your personal data.
            Please contact us at{" "}
            <a href={BUSINESS.emailHref} className="text-[#E84C8B]">
              {BUSINESS.email}
            </a>{" "}
            to exercise these rights.
          </p>

          <h2
            className="text-2xl font-bold text-[#2B2B2B] mt-8 mb-3"
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
            <br />
            Phone: <a href={BUSINESS.phoneHref} className="text-[#E84C8B]">{BUSINESS.phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
