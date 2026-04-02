interface Variation {
  type: string;
  power: string;
}

export interface Appliance {
  name: string;
  power: string;
  quantity: string;
  hrs: string;
  isSelected: boolean;
  isEditable: boolean;
  variation?: Variation[];
}

const initialAppliances: Appliance[] = [
  {
    name: "Bulb",
    power: "60",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Fan",
    power: "70", // Ceiling fan ~70W
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Sound System",
    power: "50", // Average stereo ~150W
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "LCD/LED TV <42'",
    power: "150", // 32-40" LED TV
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "LCD/LED TV <42'", power: "150" },
      { type: "LCD/LED TV >42'", power: "200" },
    ],
  },
  {
    name: "Laptop",
    power: "65", // Average laptop
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "A.C 1HP",
    power: "900", // 1 HP ~900W
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "A.C 1HP", power: "900" },
      { type: "A.C 1.5HP", power: "1350" },
      { type: "A.C 2HP", power: "1800" },
    ],
  },
  {
    name: "Refrigerator (165-250Ltr)",
    power: "150", // Small fridge ~150W average
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "Refrigerator (165-250Ltr)", power: "150" },
      { type: "Refrigerator (250-350Ltr)", power: "200" },
      { type: "Refrigerator (350-450Ltr)", power: "250" },
      { type: "Refrigerator (>450Ltr)", power: "350" },
    ],
  },
];

export default initialAppliances;
