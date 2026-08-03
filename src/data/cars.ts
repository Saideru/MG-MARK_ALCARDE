import { CarModel } from '../types';

export const CAR_MODELS: CarModel[] = [
  {
    id: "mg5-cvt-core",
    name: "MG 5 CVT Core",
    officialTag: "Core Sedan 1.5L CVT",
    type: "Sedan",
    powertrain: "Petrol",
    transmission: "CVT Automatic",
    seating: 5,
    engineSpec: "1.5L DOHC 16-Valve i-VVT Petrol",
    powerOutput: "114 HP @ 6,000 RPM / 150 Nm Torque",
    isEV: false,
    isHybrid: false,
    startingPrice: "[Price on Request]", // Easy to edit
    monthlyEstimate: "₱9,998 / mo (Est.)",
    oneLineHook: "Class-leading cabin length & modern sedan style at an unbeatable daily value.",
    idealFor: "City Commuters, First-Time Car Owners & Grab/Executive Use",
    highlights: [
      "Extra-large 10-inch Infotainment Display w/ Apple CarPlay & Android Auto",
      "Spacious Executive Legroom & 512L Trunk Capacity",
      "Electronic Power Steering w/ 3-Mode Adjustment",
      "Rear Parking Sensors & Reversing Camera with Dynamic Lines"
    ],
    specs: {
      engineMotor: "1.5L 4-Cylinder Naturally Aspirated Petrol",
      horsepower: "114 HP",
      torque: "150 Nm",
      fuelEfficiency: "18.5 km/L (Highway)",
      safetyFeatures: ["Dual Front Airbags", "ABS + EBD + Brake Assist", "Cornering Brake Control", "ISOFIX Mounts"]
    },
    image: "/src/assets/images/mg_5_cvt_core_1785774914445.jpg",
    imageAlt: "MG 5 CVT Core modern compact sedan in sleek red finish",
    whatsappMessage: "Hi Mark! I am interested in getting a quote / booking a test drive for the MG 5 CVT Core."
  },
  {
    id: "mg3-hybrid-plus",
    name: "MG 3 Hybrid+",
    officialTag: "Hybrid+ Hatchback",
    type: "Hatchback",
    powertrain: "Hybrid+",
    transmission: "3-Speed Hybrid Transmission (E-AT)",
    seating: 5,
    engineSpec: "1.5L Ultra-Efficient Gasoline + Electric Motor",
    powerOutput: "191 HP System Power / 425 Nm Torque",
    isEV: false,
    isHybrid: true,
    startingPrice: "[Price on Request]",
    monthlyEstimate: "₱12,888 / mo (Est.)",
    oneLineHook: "Instant electric acceleration combined with 191HP dual-powertrain fuel independence.",
    idealFor: "Urban Drivers Seeking Maximum Fuel Savings without Charging Cables",
    highlights: [
      "Segment-Leading 191 HP Total System Output (0-100 km/h in 8.0s)",
      "Ultra-Low Fuel Consumption: Up to 22.7 km/L Combined",
      "Dual Screen Cockpit: 7-inch Digital Cluster + 10.25-inch Touchscreen",
      "Smart Regen Braking w/ 3 Driver Efficiency Modes"
    ],
    specs: {
      engineMotor: "1.5L Atkinson Cycle Petrol + 100kW Drive Motor",
      horsepower: "191 HP Combined",
      torque: "425 Nm Combined",
      fuelEfficiency: "22.7 km/L (Combined)",
      safetyFeatures: ["MG Pilot Driver Assist", "Lane Keep Assist", "Adaptive Cruise Control", "Automatic Emergency Braking"]
    },
    image: "/src/assets/images/mg_3_hybrid_plus_1785774972348.jpg",
    imageAlt: "MG 3 Hybrid+ smart sporty hatchback",
    whatsappMessage: "Hi Mark! Please send me the promo sheet & monthly financing options for the MG 3 Hybrid+."
  },
  {
    id: "mg4-xpower-ev",
    name: "MG 4 X POWER (Electric)",
    officialTag: "435 HP Dual Motor AWD EV",
    type: "Hatchback",
    powertrain: "Electric (EV)",
    transmission: "Single-Speed Automatic Reduction Gear",
    seating: 5,
    engineSpec: "Dual Electric Motors (Front 150kW + Rear 170kW)",
    powerOutput: "435 HP / 600 Nm Instant Torque",
    isEV: true,
    isHybrid: false,
    startingPrice: "[Price on Request]",
    monthlyEstimate: "₱19,500 / mo (Est.)",
    oneLineHook: "435 HP hyper-hatch performance: 0 to 100 km/h in blistering 3.8 seconds.",
    idealFor: "Performance Enthusiasts & Tech-Forward Electric Pioneers",
    highlights: [
      "0-100 km/h in 3.8 Seconds w/ Launch Control Mode",
      "Dynamic All-Wheel Drive (AWD) w/ Electronic Locking Differential",
      "64 kWh One-Pack Battery w/ Up to 385 km Range (WLTP)",
      "Track Mode Telemetry + Orange Calipers & Launch Control System"
    ],
    specs: {
      engineMotor: "Dual Motor All-Wheel Drive Electric Powertrain",
      batteryRange: "64 kWh Battery | 385 km Range (WLTP) | Fast Charging 10-80% in 26 mins",
      horsepower: "435 HP",
      torque: "600 Nm Instant Torque",
      safetyFeatures: ["Full MG Pilot Safety Suite", "360-Degree HD Camera", "Track Launch Mode", "Dynamic Torque Vectoring"]
    },
    image: "/src/assets/images/mg_4_xpower_ev_1785774358904.jpg",
    imageAlt: "MG 4 X POWER High-Performance Electric Hatchback",
    whatsappMessage: "Hi Mark! I'm interested in testing the 435 HP MG 4 X POWER (Electric). Please contact me!"
  },
  {
    id: "mg-marvel-r-ev",
    name: "MG Marvel R (Electric)",
    officialTag: "Flagship Luxury Electric Crossover",
    type: "Crossover",
    powertrain: "Electric (EV)",
    transmission: "2-Speed Rear Axle Transmission",
    seating: 5,
    engineSpec: "Tri-Motor AWD / Dual Motor Rear Electric Drive",
    powerOutput: "288 HP / 665 Nm Torque",
    isEV: true,
    isHybrid: false,
    startingPrice: "[Price on Request]",
    monthlyEstimate: "₱24,900 / mo (Est.)",
    oneLineHook: "The ultimate electric luxury flagship featuring a massive 19.4-inch portrait console.",
    idealFor: "Executives, Luxury EV Seekers & Tech Aficionados",
    highlights: [
      "19.4-inch Panoramic Touch Center Console with MG iSMART Connectivity",
      "Bose® Premium 9-Speaker Surround Sound System",
      "70 kWh Lithium-Ion Battery w/ Up to 402 km EV Range",
      "V2L (Vehicle-to-Load) Powering External Electronics & Camping Gear"
    ],
    specs: {
      engineMotor: "Dual/Tri Electric Motors w/ 2-Speed Transmission",
      batteryRange: "70 kWh Battery | 402 km Range (WLTP) | V2L Capable",
      horsepower: "288 HP",
      torque: "665 Nm Torque",
      safetyFeatures: ["MG Pilot Level 2 Autonomous Suite", "Blind Spot Detection", "Front Cross Traffic Alert", "7 Airbags"]
    },
    image: "/src/assets/images/mg_marvel_r_ev_1785774376002.jpg",
    imageAlt: "MG Marvel R Premium Electric SUV Crossover",
    whatsappMessage: "Hi Mark! I want to inquire about the flagship MG Marvel R (Electric) availability & financing terms."
  },
  {
    id: "mg-zs-hybrid-plus",
    name: "MG ZS Hybrid+",
    officialTag: "Hybrid+ Compact SUV",
    type: "SUV",
    powertrain: "Hybrid+",
    transmission: "3-Speed Electronic Hybrid Transmission",
    seating: 5,
    engineSpec: "1.5L Gasoline Engine + High-Output Electric Motor",
    powerOutput: "196 HP System Power / 425 Nm Torque",
    isEV: false,
    isHybrid: true,
    startingPrice: "[Price on Request]",
    monthlyEstimate: "₱13,998 / mo (Est.)",
    oneLineHook: "The Philippines' favorite compact SUV, upgraded with next-generation Hybrid+ efficiency.",
    idealFor: "Modern Families & Professionals Needing Space + Outstanding Fuel Savings",
    highlights: [
      "Panoramic Skyroof with One-Touch Electric Sunshade",
      "12.3-inch Floating HD Touchscreen + 7-inch Digital Gauge Cluster",
      "Combined Fuel Mileage Exceeding 20 km/L in Mixed Driving",
      "360-Degree Panoramic View Camera with 3D Render Assistance"
    ],
    specs: {
      engineMotor: "1.5L Atkinson Cycle Petrol + 1.83 kWh Battery Pack",
      horsepower: "196 HP System Combined",
      torque: "425 Nm System Combined",
      fuelEfficiency: "20.2 km/L (City & Highway)",
      safetyFeatures: ["Active Emergency Braking", "Lane Departure Warning", "Adaptive Cruise Control", "Electronic Stability Control"]
    },
    image: "/src/assets/images/mg_zs_hybrid_plus_1785774995257.jpg",
    imageAlt: "MG ZS Hybrid+ Compact Family SUV",
    whatsappMessage: "Hi Mark! Please send me the brochure and low downpayment offer for the MG ZS Hybrid+."
  },
  {
    id: "mg-hs-hybrid-plus",
    name: "MG HS Hybrid+",
    officialTag: "PHEV / Hybrid Mid-Size Luxury SUV",
    type: "SUV",
    powertrain: "Hybrid+",
    transmission: "10-Speed EDU Hybrid Transmission",
    seating: 5,
    engineSpec: "1.5L Turbo Gasoline + 90kW High-Efficiency Motor",
    powerOutput: "284 HP Combined Output / 480 Nm Torque",
    isEV: false,
    isHybrid: true,
    startingPrice: "[Price on Request]",
    monthlyEstimate: "₱18,200 / mo (Est.)",
    oneLineHook: "Flagship executive mid-size SUV with premium leather sports bucket seats & turbo hybrid punch.",
    idealFor: "Executive Travel, Weekend Roadtrippers & Family Comfort Specialists",
    highlights: [
      "Bader German Leather Ergonomic Sports Bucket Seats",
      "Interactive Dual 12.3-inch Widescreen HD Displays",
      "Dual-Zone Automatic Climate Control w/ PM2.5 Air Purifier",
      "Ambient Interior Lighting with 256 Color Customization"
    ],
    specs: {
      engineMotor: "1.5L Turbocharged Gasoline + Electric Synchronous Motor",
      horsepower: "284 HP Combined",
      torque: "480 Nm Combined",
      fuelEfficiency: "52 km/L (PHEV Mode) / 18.6 km/L (HEV Mode)",
      safetyFeatures: ["MG Pilot Safety Suite", "Rear Cross Traffic Alert", "Door Opening Warning", "6 Airbags"]
    },
    image: "/src/assets/images/mg_hs_hybrid_plus_1785774933260.jpg",
    imageAlt: "MG HS Hybrid+ Executive SUV",
    whatsappMessage: "Hi Mark! I'm interested in the MG HS Hybrid+ mid-size SUV. Can we schedule a test drive?"
  },
  {
    id: "mg-rx5-trq-l",
    name: "MG RX5 TRQ L 4x2 AT",
    officialTag: "TRQ L 4x2 AT",
    type: "SUV",
    powertrain: "Petrol",
    transmission: "7-Speed Dual Clutch Automatic (DCT)",
    seating: 5,
    engineSpec: "1.5L Turbocharged Direct Injection Gasoline",
    powerOutput: "171 HP @ 5,600 RPM / 275 Nm Torque",
    isEV: false,
    isHybrid: false,
    startingPrice: "[Price on Request]",
    monthlyEstimate: "₱14,500 / mo (Est.)",
    oneLineHook: "Commanding road presence, 275 Nm turbo power & bold high-riding stance.",
    idealFor: "Out-of-Town Road Trips, Heavy Cargo Loaders & Rugged SUV Enthusiasts",
    highlights: [
      "14.1-inch Vertical HD Touchscreen Infotainment Console",
      "Panoramic Moonroof & Power Tailgate with Height Memory",
      "High Ground Clearance (190mm) Ready for Flooded / Rough Roads",
      "Wireless Smartphone Charging Pad + 4 USB Ports"
    ],
    specs: {
      engineMotor: "1.5L Turbocharged Direct Injection Gasoline Engine",
      horsepower: "171 HP",
      torque: "275 Nm",
      fuelEfficiency: "15.2 km/L (Highway)",
      safetyFeatures: ["Hill Start Assist & Hill Descent Control", "Tire Pressure Monitoring System (TPMS)", "Electronic Stability Program", "Rear Camera & Sensors"]
    },
    image: "/src/assets/images/mg_rx5_trq_l_1785774954217.jpg",
    imageAlt: "MG RX5 TRQ L 4x2 AT Turbo SUV",
    whatsappMessage: "Hi Mark! I want to get a quote and check bank promo rates for the MG RX5 TRQ L 4x2 AT."
  }
];
