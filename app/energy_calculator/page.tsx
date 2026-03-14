"use client";

import { useState } from "react";

import initialAppliances, { Appliance } from "@/constants/initialAppliances";

export default function EnergyCalculator() {
  const [appliances, setAppliances] = useState<Appliance[]>([
    ...initialAppliances,
  ]);

  const setAppliancePower = (id: number, power: string | number) => {
    if (Number(power) < 0) return;

    setAppliances((state) => {
      const newState = [...state];
      newState[id].power = !Number(power) ? "0" : Number(power).toString();
      return newState;
    });
  };

  const setApplianceName = (id: number, name: string) =>
    setAppliances((state) => {
      const newState = [...state];
      newState[id].name = name;
      return newState;
    });

  const setApplianceQuantity = (id: number, quantity: string | number) => {
    if (Number(quantity) > 99 || Number(quantity || !Number(quantity)) < 0)
      return;

    setAppliances((state) => {
      const newState = [...state];
      newState[id].quantity = quantity.toString();
      return newState;
    });
  };

  const setApplianceVariation = (id: number, type: string) => {
    setAppliances((state) => {
      const newState = [...state];

      const appliance = newState[id];

      const variation = appliance.variation?.find((v) => v.type === type);

      if (variation) {
        appliance.name = variation.type;
        appliance.power = variation.power;
      }

      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">
          Energy Consumption Calculator
        </h1>

        <div className="space-y-4">
          {appliances.map((appliance, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 md:grid-cols-4 items-center p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              {/* Name */}
              <div>
                {appliance.isEditable ? (
                  <input
                    type="text"
                    value={appliance.name}
                    onChange={(e) => setApplianceName(index, e.target.value)}
                    className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                ) : appliance?.variation ? (
                  <select
                    value={appliance.name}
                    onChange={(e) =>
                      setApplianceVariation(index, e.target.value)
                    }
                    className="w-full font-semibold rounded-lg p-2 text-sm bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {appliance.variation.map((c) => (
                      <option
                        key={c.type}
                        value={c.type}
                        className="font-semibold"
                      >
                        {c.type}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="font-semibold text-zinc-800 dark:text-white">
                    {appliance.name}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <input
                type="number"
                placeholder="Qty"
                value={
                  Number(appliance.quantity) <= 0 ? "" : appliance.quantity
                }
                onChange={(e) => setApplianceQuantity(index, e.target.value)}
                className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Power */}
              {appliance.isEditable ? (
                <input
                  type="number"
                  placeholder="Power (W)"
                  value={appliance.power}
                  onChange={(e) => setAppliancePower(index, e.target.value)}
                  className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {Number(appliance.power)} W each
                </p>
              )}

              {/* Total */}
              <p className="font-semibold text-blue-600">
                {Number(appliance.power) * Number(appliance.quantity)} W
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
