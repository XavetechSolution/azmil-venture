import { ChevronDown, Wallet } from "lucide-react";
import { formatNaira, formatVA, formatWH } from "../utils/formatter";

interface RecommendedCostBreakDownProps {
  showBreakdown: boolean;
  setShowBreakdown: (val: boolean) => void;
  recommendedInverters: any;
  recommendedBatteries: any;
  solarQuantity: any;
  solarPrice: any;
}
const RecommendedCostBreakDown = ({
  showBreakdown,
  setShowBreakdown,
  recommendedInverters,
  recommendedBatteries,
  solarQuantity,
  solarPrice,
}: RecommendedCostBreakDownProps) => {
  return (
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

            <div className="flex justify-between">
              <span>
                Inverter ({formatVA(recommendedInverters.va)})
                {recommendedInverters.count > 1
                  ? ` (x${recommendedInverters.count})`
                  : ""}
              </span>
              <span>{formatNaira(recommendedInverters.totalPrice)}</span>
            </div>

            {/* Batteries */}
            <div className="flex justify-between">
              <span>
                Battery (Lithium {formatWH(recommendedBatteries.batteryWh)})
                {recommendedBatteries.count > 1
                  ? ` (x${recommendedBatteries.count})`
                  : ""}
              </span>
              <span>{formatNaira(recommendedBatteries.totalPrice)}</span>
            </div>

            <div className="flex justify-between">
              <span>Solar Panels {`(x${solarQuantity})`}</span>
              <span>{formatNaira(solarPrice)}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold text-zinc-800">
              <span>Total</span>
              <span>
                {formatNaira(
                  recommendedBatteries.totalPrice +
                    recommendedInverters.totalPrice +
                    solarPrice,
                )}
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
  );
};

export default RecommendedCostBreakDown;
