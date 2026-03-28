import { Battery, Gauge, MessageCircle, Sun, Wallet, Zap } from "lucide-react";
import Link from "next/link";
import {
  BATTERY_MAPPING,
  PANEL_MAPPING,
  POWER_FACTOR,
  VA_STEPS,
} from "../constants/systemConfigs";
import useAppContext from "../hooks/useAppContext";

const estimateVA = (va: number): number => {
  if (va <= 0) return 0;
  const found = VA_STEPS.find((step) => va <= step);
  return found ?? VA_STEPS[VA_STEPS.length - 1];
};

function RecommendedSystemGrid() {
  const { state } = useAppContext();

  const va =
    state.config.systemType === "offgrid"
      ? (state.energy.totalWatt / POWER_FACTOR) * 2
      : state.energy.totalWatt / POWER_FACTOR;

  const inverterVA = estimateVA(va);

  // check if user exceeds supported range
  const isAboveRange = va > VA_STEPS[VA_STEPS.length - 1];

  // display format
  const inverterDisplay = isAboveRange
    ? `${VA_STEPS[VA_STEPS.length - 1] / 1000}KVA+`
    : inverterVA >= 1000
      ? `${inverterVA / 1000}KVA`
      : `${inverterVA}VA`;

  const wattHour = state.energy.totalWatt * state.config.dailyUsage;
  const KWhDisplay =
    wattHour >= 1000 ? `${(wattHour / 1000).toFixed(2)}KWh` : `${wattHour}Wh`;

  const appliancesList = state.appliances?.length
    ? state.appliances
        .filter((item) => Number(item.power) * Number(item.quantity) > 0)
        .map((item) => `- ${item.name} (× ${item.quantity})`)
        .join("\n")
    : "No appliances specified";

  const message = `Hello, I would like a solar system quote.

Details: 
- Name: ${state.user.name}
- Email: ${state.user.email}
- Address: ${state.user.address}

Here are my Appliances and Estimated requirements:

Appliances ⚡:
${appliancesList}

Estimated Requirements 📝:
- Inverter: ${inverterDisplay}
- Solar Panels: ${PANEL_MAPPING[inverterVA] ?? 0}
- Battery Bank: ${BATTERY_MAPPING[inverterVA] ?? 0}
- Daily Energy: ${KWhDisplay}

Config ⚙:
- System Type: ${state.config.systemType === "ongrid" ? "On-Grid" : "Off-Grid"}
- Battery Type: ${state.config.batteryType === "lithium" ? state.config.batteryType + " Battery" : state.config.batteryType + " Cell"}
- Daily Usage: ${state.config.dailyUsage} hr(s)

Please provide a formal quote. Thank you.
`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/2348134936101?text=${encodedMessage}`;
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
            {PANEL_MAPPING[inverterVA] ?? 0}
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
            {BATTERY_MAPPING[inverterVA] ?? 0}
          </p>
          <p className="text-sm text-zinc-500">Battery Bank (KWh)</p>
        </div>

        {/* Daily Energy */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Gauge className="mx-auto text-purple-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">{KWhDisplay}</p>
          <p className="text-sm text-zinc-500">Daily Energy</p>
        </div>
      </div>

      {/* Estimated Cost */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-center mb-4 shadow-lg">
        <div className="flex justify-center mb-2">
          <Wallet className="text-white" size={26} />
        </div>

        <p className="text-sm text-white/80">Estimated System Cost</p>

        <p className="text-3xl font-bold text-white mt-1">
          ₦xxx,xxx – ₦x,xxx,xxx
        </p>
      </div>

      {/* Large Solar System Notice */}
      {isAboveRange && (
        <p className="text-center text-sm text-zinc-600 mb-6">
          Larger appliances or systems above this size require a custom setup.
          Please consult us on WhatsApp for a tailored solution.
        </p>
      )}

      <Link
        className="w-full flex items-center justify-center gap-2 
          bg-green-600 hover:bg-green-700 
          text-white font-semibold py-3 rounded-xl transition shadow-md"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={18} />
        Get Formal Quote on WhatsApp
      </Link>
    </div>
  );
}

export default RecommendedSystemGrid;
