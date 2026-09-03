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
    rating: 4.5,
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
    rating: 4.2,
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
    rating: 4.8,
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
    rating: 4.7,
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
    rating: 4.1,
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
    rating: 14,
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
    rating: 5.5,
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
    rating: 3.5,
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
    rating: 4.6,
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
    rating: 4.0,
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
    rating: 5.4,
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
    rating: 4.5,
    brand: "SafeHands",
  },

  {
    id: 13,
    name: "Ibuprofen 400mg",
    category: "Drugs",
    type: "Pain Relief",
    price: 2800,
    image: "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32",
    description:
      "Ibuprofen tablets commonly used for temporary relief of mild to moderate pain and inflammation.",
    rating: 4.6,
    brand: "Emzor",
  },

  {
    id: 14,
    name: "Medical Stethoscope",
    category: "Medical Equipment",
    type: "Diagnostic",
    price: 12500,
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    description:
      "Professional stethoscope designed for routine medical examinations and patient assessment.",
    rating: 4.8,
    brand: "MediPro",
  },

  {
    id: 15,
    name: "Nebulizer Machine",
    category: "Medical Equipment",
    type: "Respiratory Care",
    price: 28000,
    image: "https://images.unsplash.com/photo-1645273474732-8fd9c63a148f",
    description:
      "Compact nebulizer machine designed to deliver medication through a fine mist for respiratory care.",
    rating: 4.7,
    brand: "Philips",
  },

  {
    id: 16,
    name: "Surgical Gloves",
    category: "Medical Supplies",
    type: "Protection",
    price: 4500,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf",
    description:
      "Disposable medical gloves designed to provide protection during healthcare procedures.",
    rating: 4.6,
    brand: "SafeCare",
  },

  {
    id: 17,
    name: "Medical Walking Stick",
    category: "Medical Equipment",
    type: "Mobility",
    price: 8500,
    image: "https://images.unsplash.com/photo-1633690765811-19cb739ccd72",
    description:
      "Adjustable walking stick designed to provide additional support and stability while walking.",
    rating: 4.5,
    brand: "CareMove",
  },

  {
    id: 18,
    name: "Hot Water Bottle",
    category: "Personal Care",
    type: "Pain Relief",
    price: 4500,
    image: "https://images.unsplash.com/photo-1616170919057-5946e5f0c9f6",
    description:
      "Reusable hot water bottle designed to provide soothing warmth and temporary relief from minor aches.",
    rating: 4.5,
    brand: "ThermoCare",
  },

  {
    id: 19,
    name: "Eye Drops",
    category: "Drugs",
    type: "Eye Care",
    price: 3200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROyt_kV_urH6jjNlHMRBdMV2xi7m5ixVaFkDaQuRHVSk2Y9U03jcLplPAN&s=10",
    description:
      "Lubricating eye drops designed to provide temporary relief from dry and irritated eyes.",
    rating: 4.4,
    brand: "OptiCare",
  },

  {
    id: 20,
    name: "Oral Rehydration Salts",
    category: "Drugs",
    type: "Hydration",
    price: 1200,
    image: "https://images.unsplash.com/photo-1737053569090-fd578310fcd2",
    description:
      "Oral rehydration solution used to help replace fluids and electrolytes lost through dehydration.",
    rating: 4.7,
    brand: "Rehydra",
  },

  {
    id: 21,
    name: "Medical Face Mask",
    category: "Personal Care",
    type: "Protection",
    price: 3000,
    image: "https://images.unsplash.com/photo-1622631090360-ba04acd2e02f",
    description:
      "Disposable protective face masks designed for everyday hygiene and respiratory protection.",
    rating: 4.6,
    brand: "SafeMask",
  },

  {
    id: 22,
    name: "Knee Support Brace",
    category: "Medical Equipment",
    type: "Support",
    price: 9000,
    image: "https://media.istockphoto.com/id/1390995558/photo/young-european-girl-athlete-puts-her-hands-on-a-protective-band-on-her-knee-for-sports.webp?a=1&b=1&s=612x612&w=0&k=20&c=q3GfnwqugYwwWHCZi7TNfGj99sa59nW7OK1cpdPESJk=",
    description:
      "Adjustable knee support designed to provide stability and support during everyday activities.",
    rating: 4.5,
    brand: "FlexCare",
  },

  {
    id: 23,
    name: "Heating Pad",
    category: "Personal Care",
    type: "Pain Relief",
    price: 11000,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    description:
      "Reusable heating pad designed to provide soothing warmth for temporary relief of muscle discomfort.",
    rating: 4.7,
    brand: "ThermoRelief",
  },

  {
    id: 24,
    name: "Medical Wheelchair",
    category: "Medical Equipment",
    type: "Mobility",
    price: 85000,
    image: "https://plus.unsplash.com/premium_photo-1663134006880-30c4dfd0a439",
    description:
      "Comfortable manual wheelchair designed to provide mobility support for people with limited movement.",
    rating: 4.8,
    brand: "MediMove",
  },

  {
    id: 25,
    name: "Surgical Scissors",
    category: "Medical Equipment",
    type: "Surgical",
    price: 7500,
    image: "https://images.unsplash.com/photo-1664902275922-9cd136203ba1",
    description:
      "Precision medical scissors designed for professional healthcare and clinical use.",
    rating: 4.6,
    brand: "SurgiPro",
  },

  {
    id: 26,
    name: "Medicine Organizer",
    category: "Personal Care",
    type: "Medication Storage",
    price: 3500,
    image: "https://plus.unsplash.com/premium_photo-1723759258300-75a00d41fc3f",
    description:
      "Compact weekly medicine organizer designed to help users keep their medications organized.",
    rating: 4.5,
    brand: "MedOrganize",
  },

  {
    id: 27,
    name: "Reusable Ice Pack",
    category: "First Aid",
    type: "Pain Relief",
    price: 3800,
    image: "https://images.unsplash.com/photo-1776677137625-2b1409eee2ca",
    description:
      "Reusable cold pack designed to provide cooling relief for minor swelling and muscle discomfort.",
    rating: 4.6,
    brand: "CoolCare",
  },

  {
    id: 28,
    name: "Medical Examination Lamp",
    category: "Medical Equipment",
    type: "Clinical Equipment",
    price: 35000,
    image: "https://images.unsplash.com/photo-1784075063657-6e2ebfeb4f26",
    description:
      "Adjustable examination lamp designed to provide focused lighting during medical examinations.",
    rating: 4.8,
    brand: "MediLight",
  },
  {
    id: 29,
    name: "Digital Weighing Scale",
    category: "Medical Equipment",
    type: "Body Measurement",
    price: 18500,
    image: "https://plus.unsplash.com/premium_photo-1726754575687-ddea985f1bba",
    description:
      "Digital weighing scale designed for accurate body weight measurement at home or in healthcare facilities.",
    rating: 4.4,
    brand: "Omron",
  },

  {
    id: 30,
    name: "Medical Stethoscope",
    category: "Medical Equipment",
    type: "Diagnostic Equipment",
    price: 12500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stethoscope.jpg",
    description:
      "Professional acoustic stethoscope for listening to heart, lung, and other internal body sounds.",
    rating: 4.7,
    brand: "Littmann",
  },

  {
    id: 31,
    name: "Nebulizer Machine",
    category: "Medical Equipment",
    type: "Respiratory Care",
    price: 32000,
    image: "https://images.unsplash.com/photo-1645273474782-315debca00b9",
    description:
      "Compact nebulizer machine designed to deliver medication directly to the respiratory system.",
    rating: 4.6,
    brand: "Rossmax",
  },

  {
    id: 32,
    name: "Hot Water Bottle",
    category: "Healthcare",
    type: "Pain Relief",
    price: 4500,
    image: "https://images.unsplash.com/photo-1608632634409-edb4d61ec731",
    description:
      "Reusable hot water bottle designed to provide soothing warmth for muscle aches and discomfort.",
    rating: 4.3,
    brand: "Carex",
  },

  {
    id: 33,
    name: "Medical Ice Pack",
    category: "Healthcare",
    type: "Pain Relief",
    price: 3500,
    image: "https://images.unsplash.com/photo-1742911350792-783678552a38",
    description:
      "Reusable cold therapy pack for reducing swelling and providing relief from minor injuries.",
    rating: 4.5,
    brand: "MedCare",
  },

  {
    id: 34,
    name: "Medical Walking Stick",
    category: "Mobility Aids",
    type: "Walking Support",
    price: 9500,
    image: "https://images.unsplash.com/photo-1627117316626-d60064148f5e",
    description:
      "Adjustable walking stick designed to provide additional balance and support while walking.",
    rating: 4.4,
    brand: "Drive",
  },

  {
    id: 35,
    name: "Knee Support Brace",
    category: "Healthcare",
    type: "Joint Support",
    price: 7500,
    image: "https://images.unsplash.com/photo-1754941622136-6664a3f50b2e",
    description:
      "Adjustable knee support brace designed to provide compression and support during daily activities.",
    rating: 4.5,
    brand: "Mueller",
  },

  {
    id: 36,
    name: "Wrist Support Brace",
    category: "Healthcare",
    type: "Joint Support",
    price: 5500,
    image: "https://images.unsplash.com/photo-1752858579375-e379d0449d4c",
    description:
      "Comfortable wrist support designed to stabilize and protect the wrist during everyday activities.",
    rating: 4.3,
    brand: "Futuro",
  },

  {
    id: 37,
    name: "Medical Surgical Cap",
    category: "Medical Supplies",
    type: "Protective Wear",
    price: 1800,
    image: "https://plus.unsplash.com/premium_photo-1664304327468-82cfd5886b55",
    description:
      "Disposable surgical caps designed to help maintain hygiene in clinical and medical environments.",
    rating: 4.2,
    brand: "MedPro",
  },

  {
    id: 38,
    name: "Disposable Shoe Covers",
    category: "Medical Supplies",
    type: "Protective Wear",
    price: 2500,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8",
    description:
      "Disposable shoe covers designed to help maintain cleanliness and hygiene in healthcare environments.",
    rating: 4.2,
    brand: "SafeCare",
  },

  {
    id: 39,
    name: "Medical Adhesive Tape",
    category: "Medical Supplies",
    type: "Wound Care",
    price: 2200,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    description:
      "Medical adhesive tape for securing bandages, dressings, and other medical equipment.",
    rating: 4.4,
    brand: "3M",
  },

  {
    id: 40,
    name: "Sterile Gauze Pads",
    category: "Medical Supplies",
    type: "Wound Care",
    price: 3200,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    description:
      "Sterile gauze pads designed for cleaning, covering, and protecting wounds.",
    rating: 4.6,
    brand: "Johnson & Johnson",
  },

  {
    id: 41,
    name: "Hydrogen Peroxide Solution",
    category: "Antiseptics",
    type: "Wound Care",
    price: 1800,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    description:
      "Antiseptic solution commonly used for cleaning minor cuts and wounds.",
    rating: 4.3,
    brand: "CarePlus",
  },

  {
    id: 42,
    name: "Oral Rehydration Salts",
    category: "Drugs",
    type: "Hydration",
    price: 1200,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    description:
      "Oral rehydration salts formulated to help replace fluids and electrolytes lost through dehydration.",
    rating: 4.6,
    brand: "Emzor",
  },

  {
    id: 43,
    name: "Zinc Tablets 20mg",
    category: "Drugs",
    type: "Supplement",
    price: 2800,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
    description:
      "Zinc tablets providing an essential mineral that supports normal immune system function.",
    rating: 4.5,
    brand: "Emzor",
  },

  {
    id: 44,
    name: "Antacid Tablets",
    category: "Drugs",
    type: "Digestive Health",
    price: 1600,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
    description:
      "Antacid tablets designed to provide temporary relief from heartburn and acid indigestion.",
    rating: 4.3,
    brand: "Gaviscon",
  },

  {
    id: 45,
    name: "Saline Nasal Spray",
    category: "Healthcare",
    type: "Nasal Care",
    price: 4200,
    image: "https://images.unsplash.com/photo-1580281658628-9d7e5b7e9b2e",
    description:
      "Gentle saline nasal spray designed to moisturize and cleanse dry nasal passages.",
    rating: 4.4,
    brand: "Sterimar",
  },

  {
    id: 46,
    name: "Eye Wash Solution",
    category: "Healthcare",
    type: "Eye Care",
    price: 3500,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    description:
      "Eye wash solution designed to gently rinse and refresh irritated or tired eyes.",
    rating: 4.3,
    brand: "Optrex",
  },

  {
    id: 47,
    name: "Disposable Syringes 5ml",
    category: "Medical Supplies",
    type: "Injection Supplies",
    price: 3000,
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    description:
      "Sterile disposable 5ml syringes intended for professional medical use.",
    rating: 4.5,
    brand: "BD",
  },

  {
    id: 48,
    name: "Elastic Crepe Bandage",
    category: "Medical Supplies",
    type: "Wound Care",
    price: 2800,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
    description:
      "Stretchable crepe bandage designed to provide support and compression for minor injuries.",
    rating: 4.4,
    brand: "Medline",
  },

  {
    id: 49,
    name: "Medical Hot & Cold Gel Pack",
    category: "Healthcare",
    type: "Pain Relief",
    price: 5000,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    description:
      "Reusable gel pack suitable for both hot and cold therapy to help relieve minor aches and swelling.",
    rating: 4.5,
    brand: "ThermaCare",
  },

  {
    id: 50,
    name: "Portable Medicine Organizer",
    category: "Healthcare Accessories",
    type: "Medication Storage",
    price: 3800,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831",
    description:
      "Compact medicine organizer with multiple compartments for keeping daily medications organized.",
    rating: 4.4,
    brand: "MedBox",
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


export const blogPosts = [
  {
    id: 1,
    title: "5 Simple Habits for a Healthier Lifestyle",
    category: "Healthy Living",
    author: "Dr. Sarah Williams",
    date: "September 1, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    excerpt:
      "Small daily habits can make a big difference to your physical and mental wellbeing. Discover simple ways to build a healthier lifestyle.",
    content:
      "Maintaining a healthy lifestyle does not always require major changes. Eating balanced meals, staying physically active, getting enough sleep, drinking enough water, and managing stress can help improve overall wellbeing."
  },

  {
    id: 2,
    title: "Understanding the Importance of Regular Health Checkups",
    category: "Preventive Care",
    author: "Dr. Michael Johnson",
    date: "August 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    excerpt:
      "Regular health checkups can help identify potential health problems early and give you a better understanding of your overall health.",
    content:
      "Preventive healthcare focuses on identifying potential health problems before they become serious. Regular checkups allow healthcare professionals to monitor important health indicators and recommend appropriate screenings."
  },

  {
    id: 3,
    title: "How Technology Is Changing Modern Healthcare",
    category: "Health Tech",
    author: "James Anderson",
    date: "August 24, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    excerpt:
      "From telemedicine to wearable devices, technology is making healthcare more accessible, convenient, and connected.",
    content:
      "Healthcare technology is transforming how patients interact with healthcare providers. Digital consultations, electronic health records, wearable devices, and health applications are creating new ways to access and manage healthcare."
  },

  {
    id: 4,
    title: "Telemedicine: Getting Medical Care From Home",
    category: "Telemedicine",
    author: "Dr. Emily Carter",
    date: "August 20, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
    excerpt:
      "Learn how online medical consultations can make healthcare easier to access without requiring a trip to the hospital.",
    content:
      "Telemedicine allows patients to communicate with healthcare professionals through digital platforms. It can be particularly useful for follow-up appointments, general consultations, and situations where travelling to a healthcare facility is difficult."
  },

  {
    id: 5,
    title: "Eating Better: A Beginner's Guide to Balanced Nutrition",
    category: "Nutrition",
    author: "Dr. Rachel Adams",
    date: "August 17, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    excerpt:
      "A balanced diet provides your body with the nutrients it needs to function properly. Here's how to make healthier food choices.",
    content:
      "Good nutrition is an important part of maintaining overall health. A balanced diet can include vegetables, fruits, whole grains, protein sources, and healthy fats while keeping highly processed foods in moderation."
  },

  {
    id: 6,
    title: "Why Getting Enough Sleep Matters",
    category: "Wellness",
    author: "Dr. Daniel Brown",
    date: "August 13, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
    excerpt:
      "Sleep plays an important role in physical recovery, mental wellbeing, concentration, and everyday performance.",
    content:
      "Quality sleep is an important part of maintaining good health. Establishing a consistent sleep schedule, creating a comfortable sleep environment, and limiting excessive screen use before bedtime can support healthier sleep habits."
  },

  {
    id: 7,
    title: "Managing Stress in a Busy World",
    category: "Mental Health",
    author: "Dr. Olivia Martin",
    date: "August 10, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
    excerpt:
      "Learn practical ways to recognize stress and develop healthier strategies for managing everyday pressure.",
    content:
      "Stress is a normal part of life, but ongoing stress can affect wellbeing. Regular physical activity, relaxation techniques, healthy routines, social connection, and professional support when needed can help people manage stress."
  },

  {
    id: 8,
    title: "First Aid Basics Everyone Should Know",
    category: "First Aid",
    author: "Dr. Christopher Lee",
    date: "August 6, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
    excerpt:
      "Knowing basic first aid can help you respond calmly and appropriately when someone experiences a minor injury or emergency.",
    content:
      "First aid knowledge can be useful at home, school, work, or while travelling. Learning how to respond to common injuries and knowing when professional emergency care is required can help protect someone's health."
  },

  {
    id: 9,
    title: "Understanding Blood Pressure",
    category: "Heart Health",
    author: "Dr. David Wilson",
    date: "August 2, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    excerpt:
      "Learn what blood pressure means, why monitoring it matters, and how healthy lifestyle choices can support cardiovascular health.",
    content:
      "Blood pressure is one of the important measurements used to assess cardiovascular health. Regular monitoring and discussions with qualified healthcare professionals can help identify and manage potential problems."
  },

  {
    id: 10,
    title: "The Role of Wearable Devices in Healthcare",
    category: "Health Tech",
    author: "Alex Thompson",
    date: "July 29, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26",
    excerpt:
      "Smartwatches and fitness trackers are becoming popular tools for monitoring everyday health and activity.",
    content:
      "Wearable devices can collect information such as physical activity, heart rate, and sleep patterns. These tools can help users understand their habits, although they should not replace professional medical evaluation."
  },

  {
    id: 11,
    title: "Staying Hydrated: Why Water Matters",
    category: "Wellness",
    author: "Dr. Grace Taylor",
    date: "July 25, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
    excerpt:
      "Water plays an essential role in many functions of the body. Learn simple ways to maintain healthy hydration habits.",
    content:
      "Staying hydrated supports many normal body functions. Drinking water regularly throughout the day and paying attention to increased fluid needs during hot weather or physical activity can support hydration."
  },

  {
    id: 12,
    title: "When Should You Talk to a Doctor?",
    category: "Health Education",
    author: "Dr. Robert Evans",
    date: "July 21, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1638202993928-7d113a8a0208",
    excerpt:
      "Knowing when to seek professional medical advice can help you address health concerns before they become more serious.",
    content:
      "Some health concerns can be monitored at home, while others require professional evaluation. Persistent, worsening, or concerning symptoms should be discussed with an appropriate healthcare professional."
  },
];