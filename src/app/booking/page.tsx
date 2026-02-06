"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import { getCarById } from "@/lib/cars";
import { CalendarCheck, Shield, Clock, Truck } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const carId = searchParams.get("car") || undefined;
  const car = carId ? getCarById(carId) : undefined;

  return (
    <div className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Reservation
            </span>
            <div className="w-10 h-[2px] bg-orange-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Book Your Car
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Fill in the details below and we&apos;ll confirm your booking within minutes.
            Free cancellation up to 24 hours before pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <BookingForm
                carId={carId}
                carName={car ? `${car.brand} ${car.model} (${car.year})` : undefined}
                pricePerDay={car?.pricePerDay}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-semibold mb-4">Included with every rental</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Full Insurance</p>
                    <p className="text-gray-500 text-xs">Comprehensive coverage included</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Free Delivery</p>
                    <p className="text-gray-500 text-xs">To airport, hotel, or any location</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">24/7 Support</p>
                    <p className="text-gray-500 text-xs">Roadside assistance anytime</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CalendarCheck className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Free Cancellation</p>
                    <p className="text-gray-500 text-xs">Up to 24h before pickup</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">Need help?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Our team is available 24/7 to assist you with your booking.
              </p>
              <a
                href="tel:+38349437883"
                className="block text-center w-full py-3 border border-orange-500/30 text-orange-400 font-medium rounded-xl hover:bg-orange-500/10 transition-colors text-sm"
              >
                Call +383 49 437 883
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="pt-28 pb-20 text-center text-gray-400">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
