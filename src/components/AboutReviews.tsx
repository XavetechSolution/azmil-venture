"use client";
import { useEffect, useRef, useState } from "react";
import reviews from "../constants/reviews";

export default function AboutReviews() {
  const scrollRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cardWidth = 340;

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const scroll = (dir: string) => {
    let newIndex =
      dir === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, reviews.length - 1);

    scrollToIndex(newIndex);
  };

  // Auto scroll
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reviews.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full py-9 px-6 md:px-16 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-[500] text-zinc-900 tracking-tight">
              Reviews
            </h2>
            <p className="mt-5 text-lg text-zinc-500">
              See what our customers say about us
            </p>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200 shadow-sm hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200 shadow-sm hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 mt-7 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="snap-start my-4 min-w-[300px] max-w-[310px] md:min-w-[350px] md:max-w-[380px] flex-shrink-0 
              bg-white/80 backdrop-blur-xl border border-zinc-200
              rounded-3xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full ring-2 ring-zinc-100"
                />
                <div>
                  <p className="text-sm font-medium text-zinc-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-zinc-500">{review.time}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 text-yellow-500 text-sm tracking-wide">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              {/* Text */}
              <p className="mt-4 text-zinc-600 leading-relaxed text-[15px]">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-zinc-900" : "w-2 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
