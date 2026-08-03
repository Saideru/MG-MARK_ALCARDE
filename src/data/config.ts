import { SalesConsultant, PromoInfo, Testimonial } from '../types';

// ============================================================================
// MARK ALCARDE - CONSULTANT & DEALERSHIP CONFIGURATION
// Easily update phone numbers, WhatsApp, Viber, and promos below.
// ============================================================================

export const CONSULTANT_INFO: SalesConsultant = {
  name: "Mark Alcarde",
  title: "Senior MG Sales Consultant & Specialist",
  dealership: "MG Official Philippines Dealership Partner",
  phone: "639096330432", // Format for links (e.g. 639096330432)
  displayPhone: "+63 909 633 0432",
  whatsappNumber: "639096330432", // WhatsApp international format without leading + or spaces
  viberNumber: "+639096330432",
  email: "josephmirador99@gmail.com",
  location: "Taft North, Iloilo City, Philippines, 5000",
  yearsExperience: 7,
  unitsDelivered: 450,
  rating: 4.9,
  reviewCount: 182,
  heroImage: "/src/assets/images/mark_alcarde_hero_1785774340770.jpg",
  logoImage: "/src/assets/images/mg_main_logo_1785774394135.jpg",
};

export const CURRENT_PROMO: PromoInfo = {
  title: "Exclusive MG All-In Low Downpayment Driveaway Promo",
  subtitle: "Limited-Time Offers for Fast Approval Units with Free Chattel Fee & 3-Year LTO Registration",
  badge: "THIS MONTH'S FEATURED DEAL",
  details: [
    "Free Comprehensive Insurance w/ Acts of Nature (1 Year)",
    "Free 3-Year LTO Registration & TPL",
    "Free Chattel Mortgage Fee",
    "Free Tint, Matting, Seat Covers & MG Emergency Kit",
    "5-Year / 100,000 km Factory Warranty + 8-Year Battery Warranty on EVs"
  ],
  validity: "Valid through this month only. Stock units ready for immediate release!"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Engr. Ricardo D.",
    modelBought: "MG 4 X POWER (Electric)",
    location: "Quezon City",
    rating: 5,
    quote: "Mark made my transition to EV effortless. He handled all my bank requirements in under 48 hours and personally delivered my MG4 X POWER to my home in QC. Top tier consultant!",
    date: "July 2026",
    verifiedBuyer: true,
  },
  {
    id: "t2",
    clientName: "Dra. Patricia M.",
    modelBought: "MG ZS Hybrid+",
    location: "Makati City",
    rating: 5,
    quote: "Very transparent with all pricing breakdowns — no hidden charges whatsoever. Mark assisted us from initial inquiry down to after-sales service. Highly recommended!",
    date: "June 2026",
    verifiedBuyer: true,
  },
  {
    id: "t3",
    clientName: "Arch. Jose & Family",
    modelBought: "MG RX5 TRQ L 4x2 AT",
    location: "Alabang, Muntinlupa",
    rating: 5,
    quote: "We got the best financing deal for our RX5 thanks to Sir Mark's strong bank connections. Smooth handover, patient explanations, and super responsive on Viber!",
    date: "May 2026",
    verifiedBuyer: true,
  }
];
