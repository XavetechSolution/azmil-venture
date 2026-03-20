"use client";

import Image from "next/image";

export default function AboutCommunity() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <Image
        src="/about-community.jpg"
        alt="People together"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Powering communities, together
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
            We believe energy is more than electricity — it’s about connection,
            empowerment, and building a future where everyone has access to
            reliable power.
          </p>
        </div>
      </div>
    </section>
  );
}
