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
    power: "10",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "LED Bulb", power: "10" },
      { type: "Energy Saver Bulb", power: "20" },
      { type: "Incandescent Bulb", power: "60" },
    ],
  },
  {
    name: "Fan",
    power: "75",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
  },
  {
    name: "Sound System",
    power: "150",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "Small Speaker", power: "50" },
      { type: "Home Theatre", power: "150" },
      { type: "Large DJ System", power: "300" },
    ],
  },
  {
    name: 'LCD/LED TV <42"',
    power: "100",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: 'TV 32-42"', power: "100" },
      { type: 'TV 43-55"', power: "150" },
      { type: 'TV >55"', power: "200" },
    ],
  },
  {
    name: "Laptop",
    power: "65",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "Laptop", power: "65" },
      { type: "Gaming Laptop", power: "120" },
    ],
  },
  {
    name: "A.C 1HP",
    power: "1000",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "A.C 1HP", power: "1000" },
      { type: "A.C 1.5HP", power: "1500" },
      { type: "A.C 2HP", power: "2000" },
    ],
  },
  {
    name: "Refrigerator (165-250Ltr)",
    power: "200",
    quantity: "0",
    hrs: "0",
    isSelected: false,
    isEditable: false,
    variation: [
      { type: "Refrigerator (165-250Ltr)", power: "200" },
      { type: "Refrigerator (250-350Ltr)", power: "250" },
      { type: "Refrigerator (350-450Ltr)", power: "300" },
      { type: "Refrigerator (>450Ltr)", power: "400" },
    ],
  },
];

export default initialAppliances;
