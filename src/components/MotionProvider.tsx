"use client";

import { LazyMotion, domMax } from "framer-motion";
import { useEffect } from "react";

// domMax features are imported inline (synchronous) so Framer can start
// animations immediately on hydration without a second async chunk load.
// This prevents the blank-screen gap on slow mobile connections where the
// lazy chunk would arrive after opacity:0 was already applied.
const loadFeatures = () => Promise.resolve(domMax);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Signal that JS has hydrated — CSS pre-hydration fallback is removed
    document.documentElement.classList.add("js-ready");
  }, []);

  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
