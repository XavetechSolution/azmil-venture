"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const timers: ReturnType<typeof setInterval>[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            const countEl = entry.target as HTMLElement;
            if (countEl.dataset.countTarget) {
              const target = parseInt(countEl.dataset.countTarget, 10);
              const finalText =
                countEl.dataset.countText || target.toLocaleString() + "+";
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  countEl.textContent = finalText;
                  clearInterval(timer);
                } else {
                  countEl.textContent =
                    Math.floor(current).toLocaleString() + "+";
                }
              }, 30);
              timers.push(timer);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const revealElements = document.querySelectorAll("[data-scroll-reveal]");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      timers.forEach(clearInterval);
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
