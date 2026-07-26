"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect } from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Signal that JS has hydrated — used by CSS to re-enable framer animations
    document.documentElement.classList.add("js-ready");
  }, []);

  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
