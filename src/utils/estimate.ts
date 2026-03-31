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

export const estimateInverterCost = (
  va: number,
): { wh: number; price: number; volt: number } => {
  if (va <= 0) return { wh: 0, price: 0, volt: 0 };
  const k = Object.keys(INVERTER_VA_TO_COST);
  const found = k.find((step) => va <= Number(step));
  console.log("wh is: ", va, "found: ", found);
  if (found) {
    return { wh: found, ...INVERTER_VA_TO_COST[Number(found)] };
  } else {
    return {
      wh: k[k.length - 1],
      ...INVERTER_VA_TO_COST[Number(k[k.length - 1])],
    };
  }
};

export const estimateBatteryCost = (
  wh: number,
): { wh: number; price: number; volt: number }[] => {
  if (wh <= 0) return [];

  const steps = Object.keys(BATTERY_Wh_TO_COST)
    .map(Number)
    .sort((a, b) => a - b); // ascending

  const maxStep = steps[steps.length - 1];
  const result: { wh: number; price: number; volt: number }[] = [];

  let remaining = wh;

  // Use as many max units as possible
  while (remaining > maxStep) {
    result.push({
      wh: maxStep,
      ...BATTERY_Wh_TO_COST[maxStep],
    });
    remaining -= maxStep;
  }

  //round UP to the nearest available step
  const found = steps.find((step) => step >= remaining);

  if (found) {
    result.push({
      wh: found,
      ...BATTERY_Wh_TO_COST[found],
    });
  }

  return result;
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
