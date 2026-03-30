import {
  Battery,
  ChevronDown,
  Gauge,
  MessageCircle,
  Sun,
  Wallet,
  Zap,
} from "lucide-react";
import Link from "next/link";
import formatNaira from "../constants/formatNaira";
import {
  BATTERY,
  POWER_FACTOR,
  VA_STEPS,
  VA_TO_PANNEL_QTY,
} from "../constants/systemConfigs";

import {
  estimateBatteryCost,
  estimateInverterCost,
  estimateVA,
} from "../utils/estimate";

import { useState } from "react";
import useAppContext from "../hooks/useAppContext";

function RecommendedSystemGrid() {
  const { state } = useAppContext();
  const [showBreakdown, setShowBreakdown] = useState(false);

  const groupItems = <T extends { price: number }>(
    items: T[],
    key: (item: T) => string,
  ) => {
    const map = new Map<
      string,
      { item: T; count: number; totalPrice: number }
    >();

    items.forEach((item) => {
      const k = key(item);
      if (!map.has(k)) {
        map.set(k, { item, count: 1, totalPrice: item.price });
      } else {
        const existing = map.get(k)!;
        existing.count += 1;
        existing.totalPrice += item.price;
      }
    });

    return Array.from(map.values());
  };
  const va =
    state.config.systemType === "offgrid"
      ? (state.energy.totalWatt / POWER_FACTOR) * 2
      : state.energy.totalWatt / POWER_FACTOR;

  const isAboveRange = va > VA_STEPS[VA_STEPS.length - 1];

  const inverterVA = estimateVA(va);

  const wattHour = state.energy.totalWatt * state.config.dailyUsage;
  const KWhDisplay =
    wattHour >= 1000 ? `${(wattHour / 1000).toFixed(2)}KWh` : `${wattHour}Wh`;

  const batterySize =
    wattHour / (BATTERY.lithium.dod * BATTERY.lithium.efficiency);

  const recommendedInverters = estimateInverterCost(va);
  const recommendedBatteries = estimateBatteryCost(batterySize);

  // totals
  const totalInverterCost = recommendedInverters.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  const totalBatteryCost = recommendedBatteries.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  // helpers
  const formatVA = (va: number) => (va >= 1000 ? `${va / 1000}KVA` : `${va}VA`);

  const formatWH = (wh: number) => (wh >= 1000 ? `${wh / 1000}KWh` : `${wh}Wh`);

  // display strings
  const groupedInverters = groupItems(
    recommendedInverters,
    (i) => `${i.va}-${i.volt}`,
  );

  const groupedBatteries = groupItems(
    recommendedBatteries,
    (b) => `${b.wh}-${b.volt}`,
  );

  const inverterDisplay = groupedInverters
    .map(
      ({ item, count }) =>
        `${count > 1 ? `${count} × ` : ""}${formatVA(item.va)}`,
    )
    .join(" + ");

  const batteryDisplay = groupedBatteries
    .map(
      ({ item, count }) =>
        `${count > 1 ? `${count} × ` : ""}${formatWH(item.wh)}`,
    )
    .join(" + ");

  const batteryVoltDisplay = [
    ...new Set(recommendedBatteries.map((b) => b.volt)),
  ].join("/");

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
- Inverter(s): ${inverterDisplay}
- Solar Panels: ${VA_TO_PANNEL_QTY[inverterVA] ?? 0}
- Battery Bank: ${batteryDisplay}
- Daily Energy: ${KWhDisplay}

Config ⚙:
- System Type: ${state.config.systemType === "ongrid" ? "On-Grid" : "Off-Grid"}
- Battery Type: ${
    state.config.batteryType === "lithium"
      ? state.config.batteryType + " Battery"
      : state.config.batteryType + " Cell"
  }
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
            {VA_TO_PANNEL_QTY[inverterVA] ?? 0}
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
          <p className="text-2xl font-bold text-zinc-800">{batteryDisplay}</p>
          <p className="text-sm text-zinc-500">
            Battery ({batteryVoltDisplay}V)
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
          {formatNaira(totalBatteryCost + totalInverterCost)}
        </p>
      </div>

      {/* Breakdown */}
      {!isAboveRange && (
        <div className="mb-4">
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full bg-white border border-zinc-200 hover:border-yellow-400 
                       hover:bg-yellow-50 text-zinc-800 font-semibold py-3 rounded-xl 
                       transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            <Wallet size={18} className="text-yellow-500" />

            <span>
              {showBreakdown ? "Hide Cost Details" : "View Cost Breakdown"}
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                showBreakdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              showBreakdown ? "max-h-[500px] mt-3" : "max-h-0"
            }`}
          >
            <div className="bg-white rounded-xl p-5 shadow-sm border border-zinc-100">
              <div className="space-y-3 text-sm text-zinc-700">
                {/* Inverters */}
                {groupedInverters.map(({ item, count, totalPrice }, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>
                      Inverter ({count > 1 ? `${count} × ` : ""}
                      {formatVA(item.va)})
                    </span>
                    <span>{formatNaira(totalPrice)}</span>
                  </div>
                ))}

                {/* Batteries */}
                {groupedBatteries.map(({ item, count, totalPrice }, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>
                      Battery (Lithium {count > 1 ? `${count} × ` : ""}
                      {formatWH(item.wh)} - {item.volt}V)
                    </span>
                    <span>{formatNaira(totalPrice)}</span>
                  </div>
                ))}

                <div className="flex justify-between">
                  <span>Solar Panels</span>
                  <span>{formatNaira(0)}</span>
                </div>

                <div className="border-t pt-3 flex justify-between font-semibold text-zinc-800">
                  <span>Total</span>
                  <span>
                    {formatNaira(totalBatteryCost + totalInverterCost)}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
                *Prices are estimates and may vary slightly based on market
                conditions, installation requirements, and product availability.
              </p>
            </div>
          </div>
        </div>
      )}

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
