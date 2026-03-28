import AboutTrusted from "@/src/components/AboutTrusted";
import HomeCalculatorSection from "@/src/components/HomeCalculatorSection";
import HomeCTASection from "@/src/components/HomeCTASection";
import HomeHero from "@/src/components/HomeHero";
import HomeHowItWorks from "@/src/components/HomeHowItWorks";
import HomePortfolioSection from "@/src/components/HomePortfolioSection";
import HomeProducts from "@/src/components/HomeProducts";
import HomeStatsStrip from "@/src/components/HomeStatsStrip";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Leading solar company in Nigeria. AZMIL Power provides solar panels, inverters, and full solar installations for homes and businesses.",

  openGraph: {
    title: "Solar Energy Solutions in Nigeria | AZMIL Power",
    description:
      "Switch to solar today with AZMIL Power. Reliable and affordable energy solutions.",
    url: "https://azmilsolar.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <HomeStatsStrip />
      <HomeProducts />
      <HomeHowItWorks />
      <HomeCalculatorSection />
      <HomePortfolioSection />
      <AboutTrusted />
      <HomeCTASection />
    </main>
  );
}
