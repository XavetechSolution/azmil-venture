"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  targets?: string;
}

export function useScrollReveal({
  targets = "[data-scroll-reveal]",
}: ScrollRevealProps = {}) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timers: ReturnType<typeof setInterval>[] = [];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            const countEl = entry.target as HTMLElement;
            if (countEl.dataset.countTarget) {
              const target = parseInt(countEl.dataset.countTarget || "0", 10);
              const countText = countEl.dataset.countText || "";
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  countEl.textContent =
                    countText || target.toLocaleString() + "+";
                  clearInterval(timer);
                } else {
                  countEl.textContent =
                    Math.floor(current).toLocaleString() + "+";
                }
              }, 30);
              timers.push(timer);
            }

            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const revealElements = document.querySelectorAll(targets);
    revealElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      timers.forEach(clearInterval);
      revealElements.forEach((el) => observerRef.current?.unobserve(el));
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [targets]);
}
