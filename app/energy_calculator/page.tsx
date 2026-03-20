"use client";

import EnergyCalculatorConfig from "@/src/components/EnergyCalculatorConfig";
import EnergyCalculatorFAQ from "@/src/components/EnergyCalculatorFAQ";
import EnergyCalculatorGrid from "@/src/components/EnergyCalculatorGrid";
import EnergyCalculatorHero from "@/src/components/EnergyCalculatorHero";
import RecommendedSystemGrid from "@/src/components/RecommendedSystemGrid";
import useAppContext from "@/src/hooks/useAppContext";
import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 0, label: "Appliances" },
  { id: 1, label: "Configuration" },
  { id: 2, label: "Result" },
];

export default function EnergyCalculatorScreen() {
  const [step, setStep] = useState(0);
  const contentRef = useRef(null);

  const { state, dispatch } = useAppContext();
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // optional offset for sticky header
      window.scrollBy({ top: -80, behavior: "smooth" });
    }
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <EnergyCalculatorGrid />;
      case 1:
        return <EnergyCalculatorConfig />;
      case 2:
        return <RecommendedSystemGrid />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <EnergyCalculatorHero />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={
                  state.energy.totalWatt <= 0 ? () => {} : () => setStep(s.id)
                }
                className={`py-3 rounded-xl text-sm font-semibold transition
                  ${
                    step === s.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className="bg-white rounded-2xl shadow-xl p-4 md:p-6"
        >
          {renderStep()}

          {/* Bottom Navigation */}
          <div className="flex justify-between mt-10">
            <button
              onClick={
                step === 0
                  ? () => {
                      dispatch({ type: "RESET_APPLIANCES" });
                    }
                  : () => setStep((prev) => prev - 1)
              }
              className="px-6 py-2 rounded-lg bg-gray-200 disabled:opacity-40"
            >
              {step === 0 ? "Reset" : "Back"}
            </button>

            <button
              disabled={
                state.energy.totalWatt <= 0 || step === steps.length - 1
              }
              onClick={() => setStep((prev) => prev + 1)}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <EnergyCalculatorFAQ />
    </div>
  );
}
