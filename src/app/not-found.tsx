import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center text-center py-24"
      style={{ background: "linear-gradient(135deg, #FFF8F8, #F7D6E3, #FFF8F8)" }}
    >
      <div className="container-custom max-w-lg">
        <div
          className="text-8xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            background: "linear-gradient(135deg, #E84C8B, #C93A76)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>
        <h1
          className="text-3xl font-bold text-[#2B2B2B] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Page Not Found
        </h1>
        <p
          className="text-[#7A7A7A] mb-8 text-[16px]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to glowing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
        <div className="mt-8">
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E84C8B] text-[14px] hover:underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Or book via WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
