"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reveal-on-scroll helper. Returns a ref to attach to a section and a boolean
 * that flips to true once it enters the viewport (once). Users who prefer
 * reduced motion get `inView = true` immediately so nothing stays hidden.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);
  // Prefer reduced-motion users never wait on the observer.
  const [inView, setInView] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (inView) return;

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      // Defer the fallback so we don't call setState synchronously in the effect body.
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      options ?? { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return { ref, inView };
}
