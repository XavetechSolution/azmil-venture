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
    power: "70",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Sound System",
    power: "320",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "LCD/LED TV (<42')",
    power: "150",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [{ type: "LCD/LED TV (>42')", power: "200" }],
  },
  {
    name: "Laptop",
    power: "100",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "A.C 1HP",
    power: "1120",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "A.C 1HP", power: "1120" },
      { type: "A.C 1.5HP", power: "1830" },
      { type: "A.C 2HP", power: "2500" },
    ],
  },
  {
    name: "Refrigerator (165-250Ltr)",
    power: "150",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Refrigerator (250-350Ltr)",
    power: "210",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Refrigerator (350-450Ltr)",
    power: "320",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Refrigerator (>450Ltr)",
    power: "460",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
];

export default initialAppliances;
