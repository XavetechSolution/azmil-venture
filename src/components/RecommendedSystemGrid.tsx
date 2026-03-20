import { Battery, Gauge, MessageCircle, Sun, Wallet, Zap } from "lucide-react";
import useAppContext from "../hooks/useAppContext";

const POWER_FACTOR = 0.8;

const VA_STEPS = [
  800, 1400, 3000, 3500, 5000, 10000, 15000, 20000, 30000, 50000,
];

const estimateVA = (va: number): number => {
  if (va <= 0) return 0;
  return VA_STEPS.find((step) => va <= step) ?? 0;
};

function RecommendedSystemGrid() {
  const { state } = useAppContext();
  const { appliances } = state;

  // Convert to VA
  const va = state.energy.totalWatt / POWER_FACTOR;

  // Get recommended inverter size once
  const inverterVA = estimateVA(va);

  // Format display
  const inverterDisplay =
    inverterVA >= 1000 ? `${inverterVA / 1000}KVA` : `${inverterVA}VA`;

  const batteries = {
    0: 0,
    800: 1,
    1400: 2,
    3000: 4,
    3500: 4,
    5000: 8,
    10000: 15,
    15000: 30,
    20000: 30,
    30000: 30,
    50000: 60,
  };

  const Panels = {
    "0": 0,
    "800": 6,
    "1400": 8,
    "3000": 10,
    "3500": 12,
    "5000": 14,
    "10000": 16,
    "15000": 18,
    "20000": 20,
    "30000": 22,
    "50000": 24,
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-zinc-800">
          Your Recommended Solar System
        </h2>
        <p className="text-zinc-500 text-sm mt-2">
          Based on your estimated energy usage
        </p>
      </div>

      {/* System Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {/* Solar Panels */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Sun className="mx-auto text-yellow-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">
            {Panels[estimateVA(va).toString()]}
          </p>
          <p className="text-sm text-zinc-500">Solar Panels (500W - 700W)</p>
        </div>

        {/* Inverter */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Zap className="mx-auto text-blue-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">{inverterDisplay}</p>
          <p className="text-sm text-zinc-500">Inverter</p>
        </div>

        {/* Battery */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Battery className="mx-auto text-green-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">
            {batteries[estimateVA(va).toString()]}
          </p>
          <p className="text-sm text-zinc-500">Battery Bank (4.8kWh)</p>
        </div>

        {/* Daily Energy */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Gauge className="mx-auto text-purple-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">2.0kWh</p>
          <p className="text-sm text-zinc-500">Daily Energy</p>
        </div>
      </div>

      {/* Estimated Cost */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-center mb-8 shadow-lg">
        <div className="flex justify-center mb-2">
          <Wallet className="text-white" size={26} />
        </div>

        <p className="text-sm text-white/80">Estimated System Cost</p>

        <p className="text-3xl font-bold text-white mt-1">
          ₦xxx,xxx – ₦x,xxx,xxx
        </p>
      </div>

      {/* CTA */}
      <button
        className="w-full flex items-center justify-center gap-2 
          bg-green-600 hover:bg-green-700 
          text-white font-semibold py-3 rounded-xl transition shadow-md"
      >
        <MessageCircle size={18} />
        Get Formal Quote on WhatsApp
      </button>
    </div>
  );
}

export default RecommendedSystemGrid;
