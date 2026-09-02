import vitamin from "../assets/vitamin-c.webp";
import bloodPressure from "../assets/blood-presure-m.png";
import Antiseptic from "../assets/asthentic.webp";
import elastic from "../assets/elastic-medical-bondage.webp";
import firstAidKit from "../assets/first-aid-kit.webp";
import glooves from "../assets/glooves.webp";
import handSanitizer from "../assets/hand-sanitizer.webp";
import mask from "../assets/mask.webp";
import pulseOximeter from "../assets/pulse-oximeter.webp";
import sugerMonitor from "../assets/sugar-m.webp";
import thermometer from "../assets/thermometer.webp";
import paracetamol from "../assets/paracetamol.webp";


export const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Drugs",
    type: "Pain Relief",
    price: 2500,
    image: paracetamol,
    description:
      "Paracetamol 500mg tablets for the temporary relief of mild to moderate pain and fever.",
    stock: 45,
    brand: "Emzor",
  },

  {
    id: 2,
    name: "Vitamin C 1000mg",
    category: "Supplements",
    type: "Vitamins",
    price: 4500,
    image: vitamin,
    description:
      "Vitamin C supplement that supports normal immune system function and overall wellness.",
    stock: 32,
    brand: "Nature's Field",
  },

  {
    id: 3,
    name: "Digital Blood Pressure Monitor",
    category: "Medical Equipment",
    type: "Monitoring",
    price: 18500,
    image: bloodPressure,
    description:
      "Easy-to-use digital blood pressure monitor designed for convenient home blood pressure monitoring.",
    stock: 18,
    brand: "Omron",
  },

  {
    id: 4,
    name: "Digital Thermometer",
    category: "Medical Equipment",
    type: "Monitoring",
    price: 7500,
    image: thermometer,
    description:
      "Fast and accurate digital thermometer suitable for home and clinical temperature measurement.",
    stock: 27,
    brand: "ThermoCare",
  },

  {
    id: 5,
    name: "Pulse Oximeter",
    category: "Medical Equipment",
    type: "Monitoring",
    price: 12000,
    image: pulseOximeter,
    description:
      "Compact fingertip pulse oximeter for measuring blood oxygen saturation and pulse rate.",
    stock: 21,
    brand: "Beurer",
  },

  {
    id: 6,
    name: "First Aid Kit",
    category: "First Aid",
    type: "Emergency Care",
    price: 15000,
    image: firstAidKit,
    description:
      "A complete first aid kit containing essential supplies for handling common minor injuries and emergencies.",
    stock: 14,
    brand: "MediCare",
  },

  {
    id: 7,
    name: "Hand Sanitizer 500ml",
    category: "Personal Care",
    type: "Hygiene",
    price: 1800,
    image: handSanitizer,
    description:
      "Alcohol-based hand sanitizer designed to help maintain hand hygiene when soap and water are unavailable.",
    stock: 65,
    brand: "Dettol",
  },

  {
    id: 8,
    name: "Surgical Face Masks",
    category: "Personal Care",
    type: "Protection",
    price: 3500,
    image: mask,
    description:
      "Disposable 3-layer surgical face masks designed for everyday respiratory protection.",
    stock: 120,
    brand: "MedPlus",
  },

  {
    id: 9,
    name: "Glucometer Blood Sugar Monitor",
    category: "Medical Equipment",
    type: "Monitoring",
    price: 16500,
    image: sugerMonitor,
    description:
      "Portable blood glucose monitoring system designed for convenient blood sugar testing.",
    stock: 16,
    brand: "Accu-Chek",
  },

  {
    id: 10,
    name: "Elastic Medical Bandage",
    category: "First Aid",
    type: "Wound Care",
    price: 2200,
    image: elastic,
    description:
      "Flexible elastic bandage suitable for providing support and compression during minor injuries.",
    stock: 40,
    brand: "CarePlus",
  },

  {
    id: 11,
    name: "Antiseptic Liquid 500ml",
    category: "First Aid",
    type: "Wound Care",
    price: 3200,
    image: Antiseptic,
    description:
      "Antiseptic solution for general first aid and cleaning of minor cuts and wounds.",
    stock: 54,
    brand: "Dettol",
  },

  {
    id: 12,
    name: "Disposable Examination Gloves",
    category: "Medical Equipment",
    type: "Protection",
    price: 6500,
    image: glooves,
    description:
      "Disposable examination gloves designed to provide a protective barrier during healthcare procedures.",
    stock: 85,
    brand: "SafeHands",
  },
];




export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "8 years",
    rating: 4.9,
    available: true,
    image: "https://images.unsplash.com/photo-1659989693409-5adc97274bed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Dr. Michael Anderson",
    specialization: "Dermatologist",
    experience: "6 years",
    rating: 4.8,
    available: true,
    image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialization: "Pediatrician",
    experience: "10 years",
    rating: 4.9,
    available: false,
    image: "https://plus.unsplash.com/premium_photo-1674841252366-162fc9b8f983?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Dr. David Brown",
    specialization: "Neurologist",
    experience: "12 years",
    rating: 4.7,
    available: true,
    image: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Dr. Jessica Miller",
    specialization: "Gynecologist",
    experience: "9 years",
    rating: 4.8,
    available: true,
    image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Dr. Daniel Wilson",
    specialization: "General Practitioner",
    experience: "7 years",
    rating: 4.6,
    available: false,
    image: "https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];