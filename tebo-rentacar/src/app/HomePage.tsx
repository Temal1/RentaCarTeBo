"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Star,
  Car,
  Users,
  Sparkles,
  ChevronRight,
  Phone,
} from "lucide-react";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "50+", label: "Premium Cars" },
  { value: "24/7", label: "Support" },
  { value: "99%", label: "Satisfaction" },
];

const features = [
  {
    icon: Shield,
    title: "Full Insurance",
    description: "Every rental includes comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock customer support and roadside assistance whenever you need it.",
  },
  {
    icon: MapPin,
    title: "Free Delivery",
    description: "We deliver your car to your location — airport, hotel, or anywhere in Kosovo.",
  },
  {
    icon: Sparkles,
    title: "Premium Fleet",
    description: "Meticulously maintained vehicles from the world's most prestigious brands.",
  },
];

const categories = [
  {
    title: "German Engineering",
    flag: "🇩🇪",
    href: "/cars?origin=german",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    brands: "Mercedes • BMW • Audi • Porsche",
  },
  {
    title: "Japanese Precision",
    flag: "🇯🇵",
    href: "/cars?origin=japanese",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=600&q=80",
    brands: "Toyota • Nissan • Honda • Mazda",
  },
  {
    title: "British Luxury",
    flag: "🇬🇧",
    href: "/cars?origin=british",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    brands: "Rolls-Royce • Bentley • Jaguar • Range Rover",
  },
];

const testimonials = [
  {
    name: "Arben Krasniqi",
    role: "Business Executive",
    text: "Outstanding service! The Mercedes E-Class was flawless and the pickup process was seamless. TeBo is my go-to for every business trip.",
    rating: 5,
  },
  {
    name: "Fjolla Berisha",
    role: "Travel Blogger",
    text: "Rented a BMW 5 Series for a week-long road trip. The car was immaculate and the customer service was world-class. Highly recommended!",
    rating: 5,
  },
  {
    name: "Driton Gashi",
    role: "Wedding Planner",
    text: "TeBo provided a stunning Rolls-Royce for our client's wedding. The attention to detail and professionalism exceeded all expectations.",
    rating: 5,
  },
];

export default function HomePage() {
  const featuredCars = cars.filter((c) => c.rating >= 4.8).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden w-full">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Luxury car"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-orange-500" />
              <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
                Premium Car Rental
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Drive Your{" "}
              <span className="gradient-text">Dream Car</span>{" "}
              Today
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
              Experience luxury, performance, and freedom on the roads of Kosovo.
              Choose from our premium fleet of over 50 meticulously maintained vehicles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/cars"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 text-lg"
              >
                Explore Fleet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all text-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-[#0a0a0a] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Browse By Origin
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">
              Choose Your Style
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              From German precision to Japanese reliability to British elegance —
              find the perfect car for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative h-80 rounded-2xl overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-3xl mb-2 block">{cat.flag}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cat.brands}</p>
                  <div className="flex items-center gap-1 mt-3 text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    View Cars <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-[#080808] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
                Top Rated
              </span>
              <h2 className="text-4xl font-bold text-white mt-3">
                Featured Vehicles
              </h2>
              <p className="text-gray-400 mt-3 max-w-lg">
                Our most popular vehicles, hand-picked for exceptional performance
                and customer satisfaction.
              </p>
            </div>
            <Link
              href="/cars"
              className="mt-6 sm:mt-0 flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              View All Cars
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-[#0a0a0a] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Why TeBo
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">
              The TeBo Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-orange-500/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <feat.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#080808] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#111] rounded-2xl p-8 border border-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-3xl p-12 sm:p-16">
            <Car className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Hit the Road?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Book your dream car in minutes. Free delivery, full insurance, and
              24/7 support included with every rental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-2xl shadow-orange-500/30 text-lg"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+38349437883"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
