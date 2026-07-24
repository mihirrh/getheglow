"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      reset();
    } catch {
      setError("Sorry, there was an error sending your message. Please call us or WhatsApp directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-luxury p-10 border border-border/50 text-center">
        <div className="w-16 h-16 rounded-full bg-soft-pink/60 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-primary" />
        </div>
        <h3 className="font-display font-bold text-dark text-2xl mb-3">Message Sent!</h3>
        <p className="text-muted leading-relaxed">
          Thank you for getting in touch. We'll be in contact with you shortly to confirm your appointment.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-luxury p-8 border border-border/50 space-y-5"
    >
      <h2 className="font-display font-bold text-dark text-2xl mb-2">Send Us a Message</h2>
      <p className="text-muted text-sm">Fill in the form below and we'll get back to you promptly.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-dark/80 mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            {...register("name")}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-dark/80 mb-1.5 uppercase tracking-wider">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="07xxx xxxxxx"
            {...register("phone")}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-dark/80 mb-1.5 uppercase tracking-wider">
          Email Address *
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service */}
        <div>
          <label className="block text-xs font-medium text-dark/80 mb-1.5 uppercase tracking-wider">
            Service *
          </label>
          <select
            {...register("service")}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
        </div>

        {/* Preferred date */}
        <div>
          <label className="block text-xs font-medium text-dark/80 mb-1.5 uppercase tracking-wider">
            Preferred Date
          </label>
          <input
            type="date"
            {...register("preferredDate")}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-dark/80 mb-1.5 uppercase tracking-wider">
          Message *
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about the treatment you're interested in, any questions, or your preferred time…"
          {...register("message")}
          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white resize-none"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* Cloudflare Turnstile placeholder */}
      <div className="bg-soft-pink/30 border border-border rounded-xl px-4 py-3 text-xs text-muted">
        🛡️ Spam protection by Cloudflare Turnstile will appear here.{" "}
        <span className="text-primary">Add your TURNSTILE_SITE_KEY to .env.local to enable.</span>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 gradient-primary text-white font-medium py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-muted text-center">
        For immediate response, WhatsApp us at{" "}
        <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {BUSINESS.phone}
        </a>
      </p>
    </form>
  );
}
