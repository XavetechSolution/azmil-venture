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
): { va: number; price: number; volt: number }[] => {
  if (va <= 0) return [];

  const steps = Object.keys(INVERTER_VA_TO_COST)
    .map(Number)
    .sort((a, b) => a - b); // ascending

  const maxStep = steps[steps.length - 1];
  const result: { va: number; price: number; volt: number }[] = [];

  let remaining = va;

  // Use as many max units as possible
  while (remaining > maxStep) {
    result.push({
      va: maxStep,
      ...INVERTER_VA_TO_COST[maxStep],
    });
    remaining -= maxStep;
  }

  // Round up the remainder
  const found = steps.find((step) => step >= remaining);

  if (found) {
    result.push({
      va: found,
      ...INVERTER_VA_TO_COST[found],
    });
  }

  return result;
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
  let bestOption: any = null;

  for (const [whStr, data] of Object.entries(batteryMap)) {
    const wh = Number(whStr);

    // Number of batteries needed
    const count = Math.ceil(requiredWh / wh);
    const totalWh = count * wh;
    const totalPrice = count * data.price;

    const option = {
      batteryWh: wh,
      count,
      totalWh,
      totalPrice,
      volt: data.volt,
    };

    if (!bestOption) {
      bestOption = option;
      continue;
    }

    // Choose better option:
    // 1. Lower totalWh (less excess)
    // 2. If equal, lower totalPrice
    if (
      option.totalWh < bestOption.totalWh ||
      (option.totalWh === bestOption.totalWh &&
        option.totalPrice < bestOption.totalPrice)
    ) {
      bestOption = option;
    }
  }

  return bestOption;
}
