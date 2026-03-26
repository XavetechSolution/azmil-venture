"use client";

import { COMPANIES } from "@/src/constants/systemConfigs";
import Image from "next/image";

export default function AboutTrusted() {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* HEADING */}
        <p className="text-lg text-zinc-500 font-medium tracking-tight">
          Trusted by the world’s most innovative teams
        </p>

        {/* LOGOS */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
          {COMPANIES.map((company, index) => (
            <div
              data-scroll-reveal
              animate-on-scroll={"true"}
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
