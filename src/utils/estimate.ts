import {
  BATTERY_Wh_TO_COST,
  INVERTER_VA_TO_COST,
  VA_STEPS,
} from "../constants/systemConfigs";

export const estimateVA = (va: number): number => {
  if (va <= 0) return 0;
  const found = VA_STEPS.find((step) => va <= step);
  return found ?? VA_STEPS[VA_STEPS.length - 1];
};

type Battery = {
  price: number;
  volt: number;
};

type BatteryMap = Record<number, Battery>;

export function findBestBattery(requiredWh: number, batteryMap: BatteryMap) {
  const batteries = Object.entries(batteryMap)
    .map(([wh, data]) => ({ wh: Number(wh), ...data }))
    .sort((a, b) => b.wh - a.wh);

  let bestOption: any = null;

  for (const battery of batteries) {
    const count = Math.ceil(requiredWh / battery.wh);
    const totalWh = count * battery.wh;
    const totalPrice = count * battery.price;

    const option = {
      batteryWh: battery.wh,
      count,
      totalWh,
      totalPrice,
      volt: battery.volt,
    };

    if (!bestOption) {
      bestOption = option;
      continue;
    }

    // ✅ Prefer fewer batteries (main goal)
    if (option.count < bestOption.count) {
      bestOption = option;
    }
    // ✅ If same count, prefer bigger battery
    else if (
      option.count === bestOption.count &&
      option.batteryWh > bestOption.batteryWh
    ) {
      bestOption = option;
    }
  }

  return bestOption;
}

export function findBestBatteryCombination(requiredWh: number) {
  let bestOption: any = null;

  for (const [whStr, data] of Object.entries(BATTERY_Wh_TO_COST)) {
    const wh = Number(whStr);

    const count = Math.ceil(requiredWh / wh);
    const totalWh = count * wh;
    const totalPrice = count * data.price;

    const candidate = {
      batteryWh: wh,
      count,
      totalWh,
      totalPrice,
      volt: data.volt,
    };

    if (!bestOption) {
      bestOption = candidate;
      continue;
    }

    // Prefer fewer batteries
    if (candidate.count < bestOption.count) {
      bestOption = candidate;
    }
    // If same count, prefer less excess Wh
    else if (
      candidate.count === bestOption.count &&
      candidate.totalWh < bestOption.totalWh
    ) {
      bestOption = candidate;
    }
  }

  return bestOption;
}

interface BestOption {
  va: number;
  count: number;
  totalVa: number;
  totalPrice: number;
  volt: any;
}

export function findBestInverterCombination(requiredVa: number) {
  let bestOption: any = null;

  for (const [whStr, data] of Object.entries(INVERTER_VA_TO_COST)) {
    const va = Number(whStr);

    const count = Math.ceil(requiredVa / va);
    const totalVa = count * va;
    const totalPrice = count * data.price;

    const candidate = {
      va: va,
      count,
      totalVa,
      totalPrice,
      volt: data.volt,
    };

    if (!bestOption) {
      bestOption = candidate;
      continue;
    }

    // Prefer fewer batteries
    if (candidate.count < bestOption.count) {
      bestOption = candidate;
    }
    // If same count, prefer less excess Wh
    else if (
      candidate.count === bestOption.count &&
      candidate.totalVa < bestOption.totalVa
    ) {
      bestOption = candidate;
    }
  }

  return bestOption;
}

export function findBestPanelQuantity(requiredVa: number, qty = 1) {
  if (requiredVa * qty <= 0) return 0;
  if (requiredVa * qty < 1000) return 6;
  return 4 + 2 * Math.floor(requiredVa / 1000);
}
