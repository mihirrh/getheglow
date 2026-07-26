"use client";

import { LazyMotion, domMax } from "framer-motion";
import { useEffect } from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Signal that JS has hydrated — used by CSS to re-enable framer animations
    document.documentElement.classList.add("js-ready");
  }, []);

  // domMax is required for useScroll / useTransform / drag / layout animations.
  // domAnimation is a subset that silently breaks those features.
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
