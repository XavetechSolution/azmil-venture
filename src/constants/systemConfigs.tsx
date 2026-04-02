export const POWER_FACTOR = 0.8;

interface BatteryInfo {
  price: number;
  volt: number;
}

interface BatteryMap {
  [wh: number]: BatteryInfo;
}

// Wh - Watt Hour
export const BATTERY_Wh_TO_COST: BatteryMap = {
  1300: { price: 308000, volt: 12 },
  2500: { price: 455000, volt: 12 },
  3000: { price: 570000, volt: 24 },
  3800: { price: 590000, volt: 12 },
  5000: { price: 1070000, volt: 51.2 },
  7500: { price: 1330000, volt: 24 },
  10000: { price: 2000000, volt: 51.2 },
  15000: { price: 2400000, volt: 51.2 },
  20000: { price: 2900000, volt: 51.2 },
};

export const BATTERY = {
  lithium: { dod: 0.9, efficiency: 0.95 },
  wet: { dod: 0.5, efficiency: 0.8 },
  dry: { dod: 0.6, efficiency: 0.85 },
};

interface InverterInfo {
  price: number;
  volt: number;
}

interface InverterMap {
  [va: number]: InverterInfo;
}

export const INVERTER_VA_TO_COST: InverterMap = {
  1000: { price: 150000, volt: 12 },
  1800: { price: 265000, volt: 12 },
  3000: { price: 400000, volt: 24 },
  4200: { price: 435000, volt: 24 },
  5000: { price: 670000, volt: 48 },
  10000: { price: 1234000, volt: 48 },
  12000: { price: 1350000, volt: 48 },
};

export const VA_STEPS = [1000, 1800, 3000, 4200, 5000, 10000, 12000];

export const SOLAR_PRICE = 165000;

export const MAX_VA_THRESHOLD = 12000;
