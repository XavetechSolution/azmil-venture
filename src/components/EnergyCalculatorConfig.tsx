"use client";

import useAppContext from "@/src/hooks/useAppContext";

function EnergyCalculatorConfig() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-zinc-800">System Configuration</h2>

      <div>
        <label className="text-sm font-semibold text-zinc-600">
          System Type
        </label>
        <select
          value={"type"}
          onChange={(e) => {}}
          className="w-full mt-1 border border-zinc-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="ongrid">On-Grid</option>
          <option value="offgrid">Off-Grid</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-zinc-600">
          Hours Used Per Day
        </label>
        <input
          type="number"
          value={3}
          onChange={(e) => {}}
          className="w-full mt-1 border border-zinc-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <button
          onClick={() => {}}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          + Add Appliance
        </button>

        <button
          onClick={() => {}}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Calculate System
        </button>
      </div>
    </div>
  );
}

export default EnergyCalculatorConfig;
