// Car data types and mock database
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: "sedan" | "suv" | "sports" | "luxury" | "economy" | "truck";
  origin: "german" | "japanese" | "british" | "american" | "italian" | "korean";
  transmission: "automatic" | "manual";
  fuelType: "petrol" | "diesel" | "electric" | "hybrid";
  seats: number;
  pricePerDay: number;
  image: string;
  features: string[];
  available: boolean;
  rating: number;
  reviews: number;
  horsepower: number;
  acceleration: string; // 0-100 km/h
}

export interface Booking {
  id: string;
  carId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: string;
  returnDate: string;
  pickupTime: string;
  returnTime: string;
  totalPrice: number;
  status: "pending" | "confirmed" | "active" | "completed" | "cancelled";
  createdAt: string;
}

export const cars: Car[] = [
  // German Cars
  {
    id: "mb-eclass",
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2024,
    category: "luxury",
    origin: "german",
    transmission: "automatic",
    fuelType: "hybrid",
    seats: 5,
    pricePerDay: 120,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    features: ["GPS Navigation", "Leather Seats", "Heated Seats", "Panoramic Roof", "Apple CarPlay", "360° Camera"],
    available: true,
    rating: 4.9,
    reviews: 128,
    horsepower: 312,
    acceleration: "5.9s",
  },
  {
    id: "bmw-5series",
    brand: "BMW",
    model: "5 Series",
    year: 2024,
    category: "luxury",
    origin: "german",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 5,
    pricePerDay: 110,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    features: ["GPS Navigation", "Leather Seats", "iDrive System", "Ambient Lighting", "Wireless Charging"],
    available: true,
    rating: 4.8,
    reviews: 96,
    horsepower: 255,
    acceleration: "6.2s",
  },
  {
    id: "audi-a6",
    brand: "Audi",
    model: "A6",
    year: 2024,
    category: "luxury",
    origin: "german",
    transmission: "automatic",
    fuelType: "diesel",
    seats: 5,
    pricePerDay: 105,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    features: ["Virtual Cockpit", "MMI Navigation", "Leather Seats", "Matrix LED", "Bang & Olufsen Sound"],
    available: true,
    rating: 4.7,
    reviews: 84,
    horsepower: 245,
    acceleration: "6.5s",
  },
  {
    id: "porsche-911",
    brand: "Porsche",
    model: "911 Carrera",
    year: 2024,
    category: "sports",
    origin: "german",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 2,
    pricePerDay: 350,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    features: ["Sport Chrono Package", "PASM", "Bose Sound", "Sport Exhaust", "Launch Control"],
    available: true,
    rating: 5.0,
    reviews: 67,
    horsepower: 379,
    acceleration: "4.2s",
  },
  {
    id: "vw-golf",
    brand: "Volkswagen",
    model: "Golf GTI",
    year: 2024,
    category: "economy",
    origin: "german",
    transmission: "manual",
    fuelType: "petrol",
    seats: 5,
    pricePerDay: 55,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    features: ["Digital Cockpit", "CarPlay", "Parking Sensors", "Sport Seats", "LED Lights"],
    available: true,
    rating: 4.5,
    reviews: 203,
    horsepower: 241,
    acceleration: "6.3s",
  },
  {
    id: "mb-gle",
    brand: "Mercedes-Benz",
    model: "GLE 450",
    year: 2024,
    category: "suv",
    origin: "german",
    transmission: "automatic",
    fuelType: "hybrid",
    seats: 7,
    pricePerDay: 150,
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&q=80",
    features: ["MBUX System", "Air Suspension", "7 Seats", "Burmester Sound", "Head-Up Display"],
    available: true,
    rating: 4.8,
    reviews: 75,
    horsepower: 367,
    acceleration: "5.7s",
  },
  // Japanese Cars
  {
    id: "toyota-camry",
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    category: "sedan",
    origin: "japanese",
    transmission: "automatic",
    fuelType: "hybrid",
    seats: 5,
    pricePerDay: 45,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    features: ["Toyota Safety Sense", "Apple CarPlay", "Wireless Charging", "JBL Audio", "Adaptive Cruise"],
    available: true,
    rating: 4.6,
    reviews: 312,
    horsepower: 203,
    acceleration: "8.3s",
  },
  {
    id: "nissan-gtr",
    brand: "Nissan",
    model: "GT-R",
    year: 2024,
    category: "sports",
    origin: "japanese",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 2,
    pricePerDay: 280,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    features: ["Launch Control", "Bose Audio", "Carbon Fiber Trim", "Track Mode", "Twin Turbo"],
    available: true,
    rating: 4.9,
    reviews: 52,
    horsepower: 565,
    acceleration: "2.9s",
  },
  {
    id: "honda-civic",
    brand: "Honda",
    model: "Civic Type R",
    year: 2024,
    category: "sedan",
    origin: "japanese",
    transmission: "manual",
    fuelType: "petrol",
    seats: 5,
    pricePerDay: 65,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    features: ["Brembo Brakes", "Adaptive Dampers", "Rev Match", "Honda Sensing", "Triple Exhaust"],
    available: true,
    rating: 4.7,
    reviews: 143,
    horsepower: 315,
    acceleration: "5.4s",
  },
  {
    id: "toyota-supra",
    brand: "Toyota",
    model: "GR Supra",
    year: 2024,
    category: "sports",
    origin: "japanese",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 2,
    pricePerDay: 180,
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&q=80",
    features: ["Adaptive Sport Suspension", "JBL Premium Audio", "Sport Differential", "Launch Control"],
    available: true,
    rating: 4.8,
    reviews: 89,
    horsepower: 382,
    acceleration: "3.9s",
  },
  {
    id: "mazda-mx5",
    brand: "Mazda",
    model: "MX-5 Miata",
    year: 2024,
    category: "sports",
    origin: "japanese",
    transmission: "manual",
    fuelType: "petrol",
    seats: 2,
    pricePerDay: 75,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    features: ["Retractable Hardtop", "Bose Audio", "Bilstein Dampers", "Limited Slip Diff"],
    available: true,
    rating: 4.6,
    reviews: 167,
    horsepower: 181,
    acceleration: "6.5s",
  },
  // British Cars
  {
    id: "rr-phantom",
    brand: "Rolls-Royce",
    model: "Phantom",
    year: 2024,
    category: "luxury",
    origin: "british",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 5,
    pricePerDay: 800,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    features: ["Starlight Headliner", "Bespoke Audio", "Rear Theater", "Champagne Cooler", "Suicide Doors"],
    available: true,
    rating: 5.0,
    reviews: 24,
    horsepower: 563,
    acceleration: "5.1s",
  },
  {
    id: "bentley-continental",
    brand: "Bentley",
    model: "Continental GT",
    year: 2024,
    category: "luxury",
    origin: "british",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 4,
    pricePerDay: 550,
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    features: ["Naim Audio", "Rotating Display", "Diamond Knurling", "Air Suspension", "Night Vision"],
    available: true,
    rating: 4.9,
    reviews: 31,
    horsepower: 542,
    acceleration: "3.6s",
  },
  {
    id: "rr-sport",
    brand: "Range Rover",
    model: "Sport",
    year: 2024,
    category: "suv",
    origin: "british",
    transmission: "automatic",
    fuelType: "diesel",
    seats: 5,
    pricePerDay: 200,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    features: ["Terrain Response", "Meridian Audio", "Pixel LED", "Air Suspension", "ClearSight Mirror"],
    available: true,
    rating: 4.8,
    reviews: 92,
    horsepower: 346,
    acceleration: "5.8s",
  },
  {
    id: "jaguar-ftype",
    brand: "Jaguar",
    model: "F-Type R",
    year: 2024,
    category: "sports",
    origin: "british",
    transmission: "automatic",
    fuelType: "petrol",
    seats: 2,
    pricePerDay: 250,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    features: ["Active Exhaust", "Configurable Dynamics", "Meridian Surround", "Performance Seats"],
    available: true,
    rating: 4.7,
    reviews: 58,
    horsepower: 575,
    acceleration: "3.5s",
  },
  // Economy
  {
    id: "toyota-corolla",
    brand: "Toyota",
    model: "Corolla",
    year: 2024,
    category: "economy",
    origin: "japanese",
    transmission: "automatic",
    fuelType: "hybrid",
    seats: 5,
    pricePerDay: 35,
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80",
    features: ["Toyota Safety Sense", "Apple CarPlay", "LED Headlights", "Adaptive Cruise Control"],
    available: true,
    rating: 4.5,
    reviews: 445,
    horsepower: 169,
    acceleration: "9.6s",
  },
  {
    id: "hyundai-tucson",
    brand: "Hyundai",
    model: "Tucson",
    year: 2024,
    category: "suv",
    origin: "korean",
    transmission: "automatic",
    fuelType: "hybrid",
    seats: 5,
    pricePerDay: 60,
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&q=80",
    features: ["Smart Key", "Blind Spot Detection", "Wireless CarPlay", "Digital Key", "Surround View"],
    available: true,
    rating: 4.6,
    reviews: 178,
    horsepower: 226,
    acceleration: "7.8s",
  },
];

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id);
}

export function getCarsByOrigin(origin: string): Car[] {
  return cars.filter((car) => car.origin === origin);
}

export function getCarsByCategory(category: string): Car[] {
  return cars.filter((car) => car.category === category);
}

export function searchCars(query: string): Car[] {
  const lower = query.toLowerCase();
  return cars.filter(
    (car) =>
      car.brand.toLowerCase().includes(lower) ||
      car.model.toLowerCase().includes(lower) ||
      car.category.toLowerCase().includes(lower) ||
      car.origin.toLowerCase().includes(lower)
  );
}

export function filterCars(filters: {
  origin?: string;
  category?: string;
  transmission?: string;
  fuelType?: string;
  minPrice?: number;
  maxPrice?: number;
  seats?: number;
}): Car[] {
  return cars.filter((car) => {
    if (filters.origin && filters.origin !== "all" && car.origin !== filters.origin) return false;
    if (filters.category && filters.category !== "all" && car.category !== filters.category) return false;
    if (filters.transmission && filters.transmission !== "all" && car.transmission !== filters.transmission) return false;
    if (filters.fuelType && filters.fuelType !== "all" && car.fuelType !== filters.fuelType) return false;
    if (filters.minPrice && car.pricePerDay < filters.minPrice) return false;
    if (filters.maxPrice && car.pricePerDay > filters.maxPrice) return false;
    if (filters.seats && car.seats < filters.seats) return false;
    return true;
  });
}
