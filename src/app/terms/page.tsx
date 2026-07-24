import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions – Get The Glow Leicester",
  description: "Terms and conditions for Get The Glow beauty salon, Leicester.",
  alternates: { canonical: `${BUSINESS.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <div
        className="pt-36 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">Terms & Conditions</h1>
          <p className="text-white/60 mt-3 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-luxury border border-border/50 p-8 sm:p-12 space-y-8 text-dark">
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">1. Booking & Appointments</h2>
              <ul className="list-disc list-inside text-muted text-sm space-y-2">
                <li>All appointments should be booked in advance via WhatsApp, phone, or our website contact form.</li>
                <li>We reserve the right to decline bookings at our discretion.</li>
                <li>Appointments are subject to availability and may change during public holidays.</li>
              </ul>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">2. Cancellation Policy</h2>
              <ul className="list-disc list-inside text-muted text-sm space-y-2">
                <li>We ask for at least 24 hours' notice for cancellations or rescheduling.</li>
                <li>Late cancellations (less than 24 hours) or no-shows may be subject to a cancellation fee.</li>
                <li>We reserve the right to charge for repeated no-shows.</li>
              </ul>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">3. Pricing</h2>
              <ul className="list-disc list-inside text-muted text-sm space-y-2">
                <li>All prices are stated in GBP and are inclusive of applicable taxes.</li>
                <li>Prices may change from time to time. Please confirm pricing at time of booking.</li>
                <li>"From" prices indicate the starting price; final cost may vary based on treatment specifics.</li>
              </ul>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">4. Health & Allergy Disclaimer</h2>
              <ul className="list-disc list-inside text-muted text-sm space-y-2">
                <li>Please inform us of any allergies, skin conditions, or medical issues before your treatment.</li>
                <li>Patch tests may be required for certain treatments (e.g., tinting, colouring). Please allow 48 hours for a patch test before your appointment.</li>
                <li>Get The Glow cannot accept liability for reactions arising from failure to disclose medical information.</li>
              </ul>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">5. Code of Conduct</h2>
              <p className="text-muted text-sm">
                We are committed to providing a safe, welcoming environment. We reserve the right to refuse or terminate service to any client who is rude, abusive, or causes discomfort to our team or other clients.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">6. Liability</h2>
              <p className="text-muted text-sm">
                Get The Glow's liability is limited to the cost of the treatment received. We are not liable for any indirect or consequential loss. Our treatments are performed by trained professionals in accordance with industry standards.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">7. Governing Law</h2>
              <p className="text-muted text-sm">
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
            <div className="divider-pink" />
            <div>
              <h2 className="font-display font-bold text-2xl text-dark mb-3">8. Contact</h2>
              <p className="text-muted text-sm">
                For any questions about these terms, please contact us at{" "}
                <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">{BUSINESS.email}</a>{" "}
                or call {BUSINESS.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
