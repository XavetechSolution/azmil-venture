"use client";

import { useEffect } from "react";

export function useTypewriter(
  targetRef: React.RefObject<HTMLElement | null>,
  text: string,
  speed: number = 50,
) {
  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    let i = 0;
    element.innerHTML = "";
    element.classList.add("typewriter-text");

    const timer = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;

      if (i >= text.length) {
        clearInterval(timer);
        element.classList.remove("blinking-cursor");
        const subheadline =
          element.parentElement?.querySelector(".subheadline");
        if (subheadline) {
          (subheadline as HTMLElement).classList.add("fade-in-up");
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [targetRef, text, speed]);
}
