"use client";

import EnergyCalculatorFAQ from "@/src/components/EnergyCalculatorFAQ";
import EnergyCalculatorGrid from "@/src/components/EnergyCalculatorGrid";
import EnergyCalculatorHero from "@/src/components/EnergyCalculatorHero";
import RecommendedSystemGrid from "@/src/components/RecommendedSystemGrid";

export default function EnergyCalculatorScreen() {
  return (
    <div className="min-h-screen bg-gray-900">
      <EnergyCalculatorHero />
      <EnergyCalculatorGrid />
      <RecommendedSystemGrid />
      <EnergyCalculatorFAQ />
    </div>
  );
}
