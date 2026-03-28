export const POWER_FACTOR = 0.8;

export const BATTERY_MAPPING: Record<number, number> = {
  0: 0,
  800: 1,
  1400: 2,
  3000: 4,
  3500: 4,
  5000: 8,
  10000: 15,
  15000: 30,
  20000: 30,
  30000: 30,
  50000: 60,
};

export const PANEL_MAPPING: Record<number, number> = {
  0: 0,
  800: 6,
  1400: 8,
  3000: 10,
  3500: 12,
  5000: 14,
  10000: 16,
  15000: 18,
  20000: 20,
  30000: 22,
  50000: 24,
};

export const VA_STEPS = [
  800, 1400, 3000, 3500, 5000, 10000, 15000, 20000, 30000, 50000,
];

export const COMPANIES = [
  { name: "amaron quanta", logo: "/partners/amaronquanta-no-bg.png" },
  { name: "deye", logo: "/partners/deye-removebg-preview.png" },
  { name: "cworth energy", logo: "/partners/cworthenergy-no-bg.png" },
  { name: "felicity solar", logo: "/partners/felicitysolar-no-bg.png" },
  { name: "itel", logo: "/partners/itel-removebg-preview.png" },
  { name: "gospower", logo: "/partners/gospower-no-bg.png" },
];
