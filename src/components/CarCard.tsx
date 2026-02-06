"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Users, Fuel, Settings2, Zap } from "lucide-react";
import { Car } from "@/lib/cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-orange-500/90 backdrop-blur-sm text-white rounded-full">
            {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
          </span>
          {car.available ? (
            <span className="px-3 py-1 text-xs font-medium bg-green-500/90 backdrop-blur-sm text-white rounded-full">
              Available
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-medium bg-red-500/90 backdrop-blur-sm text-white rounded-full">
              Booked
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-white">{car.rating}</span>
          <span className="text-xs text-gray-400">({car.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
            {car.brand} {car.model}
          </h3>
          <p className="text-sm text-gray-500">{car.year}</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4 text-gray-500" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Settings2 className="w-4 h-4 text-gray-500" />
            <span>{car.transmission === "automatic" ? "Auto" : "Manual"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Fuel className="w-4 h-4 text-gray-500" />
            <span>{car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="w-4 h-4 text-gray-500" />
            <span>{car.horsepower} HP</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-white/5">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-white">
              €{car.pricePerDay}
              <span className="text-sm font-normal text-gray-500">/day</span>
            </p>
          </div>
          <Link
            href={`/cars/${car.id}`}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
