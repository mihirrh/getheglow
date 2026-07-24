import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-4"
      style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #1a0a10 50%, #E84C8B 100%)" }}
    >
      <div>
        {/* Large 404 */}
        <p
          className="font-display font-bold text-[140px] sm:text-[200px] leading-none mb-0"
          style={{
            background: "linear-gradient(135deg, rgba(247,214,227,0.2), rgba(232,76,139,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 -mt-4">
          Page Not Found
        </h1>
        <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist. Perhaps you'd like to browse our services or book an appointment?
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 gradient-primary text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl text-sm"
          >
            <Home size={16} />
            Return Home
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 glass border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all text-sm"
          >
            <ArrowLeft size={16} />
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
