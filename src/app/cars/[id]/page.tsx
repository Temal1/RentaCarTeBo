import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Star,
  Users,
  Fuel,
  Settings2,
  Zap,
  Calendar,
  Shield,
  CheckCircle2,
  Gauge,
} from "lucide-react";
import { cars, getCarById } from "@/lib/cars";
import CarCard from "@/components/CarCard";

interface CarDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { id } = await params;
  const car = getCarById(id);

  if (!car) {
    notFound();
  }

  const similarCars = cars
    .filter((c) => c.id !== car.id && (c.origin === car.origin || c.category === car.category))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Button */}
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fleet
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-4 py-1.5 text-sm font-medium bg-orange-500/90 backdrop-blur-sm text-white rounded-full">
                {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
              </span>
              <span className="px-4 py-1.5 text-sm font-medium bg-green-500/90 backdrop-blur-sm text-white rounded-full">
                Available
              </span>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                  {car.year} • {car.origin.charAt(0).toUpperCase() + car.origin.slice(1)}
                </p>
                <h1 className="text-4xl font-bold text-white mt-1">
                  {car.brand} {car.model}
                </h1>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-medium text-white">{car.rating}</span>
                <span className="text-xs text-gray-400">({car.reviews})</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-6 my-6">
              <p className="text-sm text-gray-400">Daily Rate</p>
              <p className="text-4xl font-bold text-white mt-1">
                €{car.pricePerDay}
                <span className="text-lg font-normal text-gray-400">/day</span>
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#111] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Seats</span>
                </div>
                <p className="text-white font-semibold">{car.seats} Passengers</p>
              </div>
              <div className="bg-[#111] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Settings2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Transmission</span>
                </div>
                <p className="text-white font-semibold capitalize">{car.transmission}</p>
              </div>
              <div className="bg-[#111] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Fuel className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Fuel</span>
                </div>
                <p className="text-white font-semibold capitalize">{car.fuelType}</p>
              </div>
              <div className="bg-[#111] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Power</span>
                </div>
                <p className="text-white font-semibold">{car.horsepower} HP</p>
              </div>
              <div className="bg-[#111] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Gauge className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">0-100 km/h</span>
                </div>
                <p className="text-white font-semibold">{car.acceleration}</p>
              </div>
              <div className="bg-[#111] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Insurance</span>
                </div>
                <p className="text-white font-semibold">Full Coverage</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature) => (
                  <span
                    key={feature}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Book CTA */}
            <Link
              href={`/booking?car=${car.id}`}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 text-lg"
            >
              <Calendar className="w-5 h-5" />
              Book This Car — €{car.pricePerDay}/day
            </Link>
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCars.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
