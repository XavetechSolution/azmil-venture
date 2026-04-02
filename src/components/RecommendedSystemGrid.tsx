import { Battery, Gauge, MessageCircle, Sun, Wallet, Zap } from "lucide-react";
import Link from "next/link";
import {
  BATTERY,
  MAX_VA_THRESHOLD,
  POWER_FACTOR,
  SOLAR_PRICE,
} from "../constants/systemConfigs";
import {
  findBestBatteryCombination,
  findBestInverterCombination,
  findBestPanelQuantity,
} from "../utils/estimate";
import { formatNaira, formatVA, formatWH } from "../utils/formatter";

import { useState } from "react";
import useAppContext from "../hooks/useAppContext";
import generateRecommendationMessage from "../utils/generateRecommendationMessage";
import RecommendedCostBreakDown from "./RecommendedCostBreakDown";

function RecommendedSystemGrid() {
  const { state } = useAppContext();
  const [showBreakdown, setShowBreakdown] = useState(false);

  const va =
    state.config.systemType === "offgrid"
      ? (state.energy.totalWatt / POWER_FACTOR) * 2
      : state.energy.totalWatt / POWER_FACTOR;

  const wattHour = state.energy.totalWatt * state.config.dailyUsage;
  const KWhDisplay =
    wattHour >= 1000 ? `${(wattHour / 1000).toFixed(2)}KWh` : `${wattHour}Wh`;

  const batterySize =
    wattHour / (BATTERY.lithium.dod * BATTERY.lithium.efficiency);

  const recommendedInverters = findBestInverterCombination(va);
  const recommendedBatteries = findBestBatteryCombination(batterySize);

  // Solar Panel Estimation
  const solarQuantity = findBestPanelQuantity(
    recommendedInverters.va,
    recommendedBatteries.count,
  );
  const solarPrice = SOLAR_PRICE * solarQuantity;

  const isAboveRange = va > MAX_VA_THRESHOLD;

  const message = generateRecommendationMessage({
    state,
    recommendedBatteries,
    recommendedInverters,
    KWhDisplay,
    solarQuantity,
  });

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
          <p className="text-2xl font-bold text-zinc-800">{solarQuantity}</p>
          <p className="text-sm text-zinc-500">Solar Panels (700W)</p>
        </div>

        {/* Inverter */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Zap className="mx-auto text-blue-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">
            {formatVA(recommendedInverters.va)}
          </p>
          <p className="text-sm text-zinc-500">
            Inverter{" "}
            {recommendedInverters.count > 1
              ? ` (x${recommendedInverters.count})`
              : ""}
          </p>
        </div>

        {/* Battery */}
        <div className="bg-zinc-50 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition">
          <Battery className="mx-auto text-green-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-zinc-800">
            {formatWH(recommendedBatteries.batteryWh)}
          </p>
          <p className="text-sm text-zinc-500">
            Battery
            {recommendedBatteries.count > 1
              ? ` (x${recommendedBatteries.count})`
              : ""}
          </p>
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
          {formatNaira(
            recommendedBatteries.totalPrice +
              recommendedInverters.totalPrice +
              solarPrice,
          )}
        </p>
      </div>

      {/* Breakdown */}
      <RecommendedCostBreakDown
        setShowBreakdown={setShowBreakdown}
        showBreakdown={showBreakdown}
        recommendedBatteries={recommendedBatteries}
        recommendedInverters={recommendedInverters}
        solarPrice={solarPrice}
        solarQuantity={solarQuantity}
      />

      {isAboveRange && (
        <p className="text-center text-sm text-zinc-600 mb-6">
          Larger systems require a custom setup. Please contact us on WhatsApp.
        </p>
      )}

      <Link
        className="w-full flex items-center justify-center gap-2 
          bg-green-600 hover:bg-green-700 
          text-white font-semibold py-3 rounded-xl transition shadow-md"
        href={whatsappLink}
        target="_blank"
      >
        <MessageCircle size={18} />
        Get Formal Quote on WhatsApp
      </Link>
    </div>
  );
}

export default RecommendedSystemGrid;
