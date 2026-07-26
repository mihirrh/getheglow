"use client";

/**
 * Animation primitives for Get The Glow.
 * All use whileInView (never the broken animate={inView ? … : {}} pattern).
 * Easing: [0.22, 1, 0.36, 1] — Apple's spring-like deceleration curve.
 */

import { useRef, useState, useEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Shared prop interface
// ─────────────────────────────────────────────────────────────────────────────
interface BaseProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// ─── FadeUp ──────────────────────────────────────────────────────────────────
// The workhorse. Fades + lifts up when scrolled into view.
export function FadeUp({ children, delay = 0, duration = 0.7, className }: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── FadeIn ──────────────────────────────────────────────────────────────────
// Pure opacity — no movement. For backgrounds, badges, subtle reveals.
export function FadeIn({ children, delay = 0, duration = 0.6, className }: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── SlideIn ─────────────────────────────────────────────────────────────────
// Side entrance for split-screen layouts.
interface SlideInProps extends BaseProps {
  from?: "left" | "right" | "bottom";
}

export function SlideIn({ children, from = "left", delay = 0, duration = 0.8, className }: SlideInProps) {
  const x = from === "left" ? -48 : from === "right" ? 48 : 0;
  const y = from === "bottom" ? 40 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── ScaleIn ─────────────────────────────────────────────────────────────────
// Scale up from slightly smaller — for cards, badges, images.
export function ScaleIn({ children, delay = 0, duration = 0.6, className }: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerGrid ─────────────────────────────────────────────────────────────
// Wraps a grid. When it enters the viewport every direct child staggers in.
interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;      // seconds between each child
  childDelay?: number;        // initial delay before first child fires
}

export function StaggerGrid({
  children,
  className,
  staggerDelay = 0.08,
  childDelay = 0,
}: StaggerGridProps) {
  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: childDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ─────────────────────────────────────────────────────────────
// Must be a direct child of StaggerGrid.
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "scale" | "fade" | "left" | "right";
}

const itemVariants: Record<string, Variants> = {
  up: {
    hidden:  { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0,   transition: { duration: 0.65, ease: EASE } },
  },
  scale: {
    hidden:  { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1,    transition: { duration: 0.55, ease: EASE } },
  },
  fade: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1,              transition: { duration: 0.5,  ease: EASE } },
  },
  left: {
    hidden:  { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0,       transition: { duration: 0.6,  ease: EASE } },
  },
  right: {
    hidden:  { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0,       transition: { duration: 0.6,  ease: EASE } },
  },
};

export function StaggerItem({ children, className, variant = "up" }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants[variant]} className={className}>
      {children}
    </motion.div>
  );
}

// ─── PageHero ────────────────────────────────────────────────────────────────
// Wraps inner-page hero content. Animates on MOUNT (not scroll — it's above fold).
// Children should each be wrapped in <motion.div> with their own delays for stagger.
export function PageHero({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden:  { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delayChildren: 0.1, staggerChildren: 0.12 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── PageHeroItem ────────────────────────────────────────────────────────────
// Direct child of PageHero. Staggers automatically.
export function PageHeroItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── CountUp ─────────────────────────────────────────────────────────────────
// Counts a number from 0 to `to` when scrolled into view.
interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ to, suffix = "", prefix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}

// ─── RevealText ──────────────────────────────────────────────────────────────
// Reveals a block of text with a sliding mask — like Apple product pages.
export function RevealText({ children, delay = 0, className }: BaseProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.75, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
