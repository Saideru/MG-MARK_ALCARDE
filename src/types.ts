export interface CarModel {
  id: string;
  name: string;
  officialTag: string; // e.g. "TRQ L 4x2 AT"
  type: 'Sedan' | 'Hatchback' | 'SUV' | 'Crossover';
  powertrain: 'Petrol' | 'Hybrid+' | 'Electric (EV)';
  transmission: string;
  seating: number;
  engineSpec: string;
  powerOutput: string;
  isEV: boolean;
  isHybrid: boolean;
  startingPrice: string; // e.g., "₱698,000" or "[Price on Request]"
  monthlyEstimate: string; // e.g., "₱11,888/mo"
  oneLineHook: string;
  idealFor: string;
  highlights: string[];
  specs: {
    engineMotor: string;
    batteryRange?: string;
    horsepower: string;
    torque: string;
    fuelEfficiency?: string;
    safetyFeatures: string[];
  };
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export interface SalesConsultant {
  name: string;
  title: string;
  dealership: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // e.g., "639171234567"
  viberNumber: string;
  email: string;
  location: string;
  yearsExperience: number;
  unitsDelivered: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  logoImage: string;
}

export interface PromoInfo {
  title: string;
  subtitle: string;
  badge: string;
  details: string[];
  validity: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  modelBought: string;
  location: string;
  rating: number;
  quote: string;
  date: string;
  verifiedBuyer: boolean;
}
