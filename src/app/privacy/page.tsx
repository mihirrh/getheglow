import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy – Get The Glow Leicester",
  description: "Privacy policy for Get The Glow beauty salon, Leicester.",
  alternates: { canonical: `${BUSINESS.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <div
        className="pt-36 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-3 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none">
          <div className="card-luxury border border-border/50 p-8 sm:p-12 space-y-8 text-dark">
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">1. Who We Are</h2>
              <p className="text-muted">
                Get The Glow is a beauty salon located at {BUSINESS.address.full}. We are the data controller for any personal data you provide to us. Contact:{" "}
                <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">{BUSINESS.email}</a>
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">2. Information We Collect</h2>
              <p className="text-muted">
                We may collect and process the following personal data:
              </p>
              <ul className="list-disc list-inside text-muted space-y-1 mt-3 text-sm">
                <li>Name, phone number and email address (via contact/booking forms)</li>
                <li>Service preferences and appointment details</li>
                <li>Communications via WhatsApp, email, or phone</li>
                <li>Technical data (IP address, browser type) via analytics</li>
              </ul>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">3. How We Use Your Data</h2>
              <p className="text-muted">We use your personal data to:</p>
              <ul className="list-disc list-inside text-muted space-y-1 mt-3 text-sm">
                <li>Manage and confirm bookings and appointments</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>Send appointment reminders (where consented)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">4. Legal Basis</h2>
              <p className="text-muted">
                We process your data based on: (a) your consent; (b) our legitimate interests in running our business; or (c) compliance with legal obligations. You may withdraw consent at any time.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">5. Data Sharing</h2>
              <p className="text-muted">
                We do not sell your personal data. We may share it with service providers (email delivery, analytics) under appropriate data processing agreements. We do not share data with third parties for marketing.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">6. Data Retention</h2>
              <p className="text-muted">
                We retain personal data only as long as necessary for the purpose it was collected, or as required by law. Appointment and contact data is typically retained for up to 3 years.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">7. Your Rights</h2>
              <p className="text-muted">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc list-inside text-muted space-y-1 mt-3 text-sm">
                <li>Access your personal data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Lodge a complaint with the ICO (ico.org.uk)</li>
              </ul>
              <p className="text-muted mt-3">
                To exercise these rights, contact:{" "}
                <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">{BUSINESS.email}</a>
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">8. Cookies</h2>
              <p className="text-muted">
                This website uses essential cookies required for functionality. We do not use advertising or tracking cookies without your explicit consent. You can manage cookies through your browser settings.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">9. Changes to This Policy</h2>
              <p className="text-muted">
                We may update this policy from time to time. Any changes will be posted on this page with an updated date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
