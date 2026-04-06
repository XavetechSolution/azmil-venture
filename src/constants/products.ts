export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  price: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Felicity Solar Panel 450WATTS.  ",
    category: "panels",
    image: "/felicitysolarpanel102.png",
    description: "High-efficiency monocrystalline panel. Perfect for rooftops.",
    specs: ["450pW output", "Conversion efficiency", "IP68 weatherproof"],
    price: 90000,
  },
  {
    id: 2,
    name: "Itel 1kva inverter 12v",
    category: "inverters",
    image: "/itel solar 100.jpg",
    description: " MPPT efficiency and IP54 protection.",
    specs: ["1kVA", "12V", "IP54 rated"],
    price: 150000,
  },
  {
    id: 3,
    name: "Cworth lithium battery 1.3KWH 12V",
    category: "batteries",
    image: "/cworth li 101.jpg",
    description: "LiFePO4 lithium battery LBW series.",
    specs: ["1.3kWh capacity", "12V", "Easy installation"],
    price: 308000,
  },
  {
    id: 4,
    name: "Solar Street light 100W ALL IN ONE 2C OR D3. ",
    category: "packages",
    image: "/Cworthstreetlight103.jpg",
    description:
      "Cworth Solar Street Light, environmental friendly. All In One Led Solar Street Light.",
    specs: [
      "100W",
      " Waterproof Outdoor ",
      "Overvoltage ShortCircuit Protection",
    ],
    price: 220000,
  },
  {
    id: 5,
    name: "Itel 550Watts solar panel",
    category: "panels",
    image: "/itelenergysolar1001.webp",
    description:
      "The 550W PV Module features high efficiency with N-Type Mono cells, delivering stable performance in extreme conditions.",
    specs: ["550W", "Extreme Weather Solar Panel", "High-Yield Energy Module"],
    price: 136000,
  },
  {
    id: 6,
    name: "Itel 1.8KVA 12V Inverter",
    category: "inverters",
    image: "/ITEL inverter 102.jpg",
    description: "Reliable inverter hybrid ideal for small cabins.",
    specs: ["1.8KVA", "12V", "100A Fast charging"],
    price: 265000,
  },
  {
    id: 7,
    name: "Solar Street light 60W ALL IN ONE 2C OR D3 SERIES. ",
    category: "packages",
    image: "/Cworthstreetlight101.jpg",
    description:
      "Cworth Solar Street Light, environmental friendly. All In One Led Solar Street Light.",
    specs: [
      "Lifepo4 lithium Batteries",
      " Waterproof Outdoor ",
      "Overvoltage ShortCircuit Protection",
    ],
    price: 180000,
  },

  {
    id: 8,
    name: " Felicity 5KWH 51.2V",
    category: "batteries",
    image: "/ITEL LIB 107.jpg",
    description:
      " This is a high-performance 51.2V lithium iron phosphate (LiFePO₄) battery.",
    specs: ["5KWH @ 51.2V", "Fast charging support", "Inverter compatible"],
    price: 1070000,
  },
  {
    id: 9,
    name: "felicity solar panel 600Watts",
    category: "panels",
    image: "/felicitysolarpanel103.png",
    description: "High efficiency panels capture light from both sides.",
    specs: [
      "Utility-Scale Solar",
      "Class II Safety Certified",
      "Anodized Aluminum Frame",
    ],
    price: 150000,
  },
  {
    id: 10,
    name: "Itel 3KVA Inverter 24V",
    category: "inverters",
    image: "/ITEL inverter 103.jpg",
    description: "Featuring intelligent load recognition.",
    specs: ["3KVA", "Certified IP31", "MPPT charger"],
    price: 390000,
  },
  {
    id: 11,
    name: "Cworth energy Lithium battery 2.5KWH 12V",
    category: "batteries",
    image: "/Cworth li 103.jpg",
    description: "LIFePO4 BATTERY, intelligent battery protection system.",
    specs: ["2.5kWh", "Easy installation", "6000 cycles"],
    price: 450000,
  },
  {
    id: 12,
    name: "Cworth energy Lithium battery 3.8KWH 12V",
    category: "batteries",
    image: "/cworth li 104.jpg",
    description: "LIFePO4 BATTERY, intelligent battery protection system.",
    specs: ["2.5kWh", "Easy installation", "6000 cycles"],
    price: 590000,
  },
  {
    id: 13,
    name: "felicity solar panel 700Watts",
    category: "panels",
    image: "/felicitysolarpanel102.png",
    description:
      "High energy output in real conditions, better temp co-efficient.",
    specs: ["700W", "30yr lifespan", "Conversion efficiency"],
    price: 165000,
  },
  {
    id: 14,
    name: "Cworth energy 4.2KVA Inverter 24V",
    category: "inverters",
    image: "/CWORTH inverter 108.jpg",
    description: "Pure sine wave 4.2KVA Inverter 24V Model CE-H4K.",
    specs: ["4.2KVA", "LCD Real-time display", "MPPT charger"],
    price: 435000,
  },
  {
    id: 15,
    name: "Felicity 5kva inverter 48v. ",
    category: "inverters",
    image: "/felicityin 107.jpg",
    description:
      " A high-efficiency 5kVA hybrid inverter built for uninterrupted performance",
    specs: ["5KVA", "LCD Real-time display", "MPPT charger"],
    price: 670000,
  },
  {
    id: 16,
    name: "Gospower 1500WH solar Generator. ",
    category: "packages",
    image: "/GOSPsolarGEN101.jpg",
    description:
      "Gospower 1200W portable household energy storage system is an integrated all-in-one device designed for mobile energy demands",
    specs: [
      "Cost Effective",
      "Rated Loadcapacity 1500W",
      "Overvoltage ShortCircuit Protection",
    ],
    price: 675000,
  },
  {
    id: 17,
    name: " Itel 2.5KWH 24V",
    category: "batteries",
    image: "/ITEL LIB 106.jpg",
    description:
      " Itel LI battery, Featuring 90A continuous discharge and IP65 rating.",
    specs: ["2.5KWH", "24V", "6000cycles"],
    price: 570000,
  },
  {
    id: 18,
    name: "Solar Street light 100W ALL IN ONE 2C OR D3. ",
    category: "packages",
    image: "/Cworthstreetlight103.jpg",
    description:
      "Cworth Solar Street Light, environmental friendly. All In One Led Solar Street Light.",
    specs: [
      "100W",
      " Waterproof Outdoor ",
      "Overvoltage ShortCircuit Protection",
    ],
    price: 220000,
  },
  {
    id: 19,
    name: "Cworth energy Lithium battery 3.8KWH 12V",
    category: "batteries",
    image: "/cworth li 104.jpg",
    description:
      "Cycle Time 3200, Intelligent BMS & Modular Design Comprehensive compatibility.",
    specs: ["3.8kWh", "12V", "Easy installation"],
    price: 590000,
  },
  {
    id: 20,
    name: "Felicity Solar Lithium battery",
    category: "batteries",
    image: "/FELICITYLI 106.jpg",
    description:
      "The Felicity Solar Lithium battery 15KWH 51.2V is a powerful 48V 300Ah lithium battery built for large-scale solar energy storage. Ideal for commercial and industrial systems, it offers high energy density, long lifespan, and seamless compatibility with hybrid.",
    specs: [
      "15KWH 51.2V",
      "Compatible with inverters of major brands",
      " Fast charging and low self-discharge rate",
    ],
    price: 2400000,
  },
  {
    id: 21,
    name: "Cworth energy Lithium battery 20KWH 51.2V",
    category: "batteries",
    image: "/cworth li 104.jpg",
    description:
      "The cell belongs to lithium iron phosphate power cell which can be recycled about 6000 times. Comprehensive compatibility; It is better suited for off-grid inverters and on / off hybrid inverters..",
    specs: [
      "20KWH 51.2V",
      " CYCLE TIME 6000@80% DOD, 25°C, 0.5C",
      "Proffesional Application Design",
    ],
    price: 2900000,
  },
  {
    id: 22,
    name: "Felicity Solar Inverter 10Kva 48V",
    category: "inverters",
    image: "/FELICITYIN 106.jpg",
    description:
      "The Felicity IVPS10048 is a robust 10kVA pure sine wave inverter designed for stable, uninterrupted power in homes, offices, and industrial setups.",
    specs: [
      "10Kva 48V",
      "Compatible with inverters of major brands",
      " LCD display for monitoring system status",
    ],
    price: 1234000,
  },
  {
    id: 23,
    name: "Cworth energy 12KVA Inverter 48V",
    category: "inverters",
    image: "/CWORTH inverter 108.jpg",
    description: "Pure sine wave 12KVA Inverter 48V .",
    specs: ["12KVA 48V", "LCD Real-time display", "MPPT charger"],
    price: 1350000,
  },
  {
    id: 24,
    name: "SOLAR GENERATOR 1500WH SOLAR GENERATOR",
    category: "packages",
    image: "/itelsolargen103.jpg",
    description:
      "The iTel IESS-05K10P Solar Generator is an all-in-one power station.",
    specs: [
      "Provides backup power for homes, RVs, and emergencies",
      " Fully charges in 2 hours via solar (60V max) + grid simultaneously",
      "Dual PV/grid charging",
    ],
    price: 675000,
  },
];

export default PRODUCTS;
