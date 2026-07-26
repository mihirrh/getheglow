"use client";

/**
 * Lightweight animation primitives used across every page.
 *
 * <FadeUp>          — fades + slides up on scroll (headings, paragraphs)
 * <FadeIn>          — pure fade, no movement (backgrounds, overlays)
 * <SlideIn>         — slides from left or right
 * <StaggerGrid>     — wraps a grid; children stagger in one by one
 * <StaggerItem>     — individual item inside StaggerGrid
 * <ScaleIn>         — scales up from 0.92 (cards, badges)
 * <PageHero>        — entrance animation for page hero sections (runs on mount)
 * <CountUp>         — animates a number from 0 to target
 */

import { useRef, useState, useEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── FadeUp ──────────────────────────────────────────────────────────────────
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── FadeIn ──────────────────────────────────────────────────────────────────
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── SlideIn ─────────────────────────────────────────────────────────────────
interface SlideInProps extends FadeUpProps {
  from?: "left" | "right";
}

export function SlideIn({
  children,
  from = "left",
  delay = 0,
  duration = 0.8,
  className,
}: SlideInProps) {
  const x = from === "left" ? -40 : 40;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── ScaleIn ─────────────────────────────────────────────────────────────────
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerGrid ─────────────────────────────────────────────────────────────
interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const staggerContainer = {
  hidden: {},
  show: (staggerDelay: number) => ({
    transition: { staggerChildren: staggerDelay },
  }),
};

export function StaggerGrid({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      custom={staggerDelay}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ─────────────────────────────────────────────────────────────
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "scale" | "fade";
}

const itemVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
  },
};

export function StaggerItem({
  children,
  className,
  variant = "up",
}: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants[variant]} className={className}>
      {children}
    </motion.div>
  );
}

// ─── PageHero ────────────────────────────────────────────────────────────────
// Runs animate on mount (not scroll) because it's always above the fold
interface PageHeroProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHero({ children, className }: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── CountUp ─────────────────────────────────────────────────────────────────
interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
