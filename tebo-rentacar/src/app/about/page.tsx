import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Clock,
  MapPin,
  Users,
  Award,
  Heart,
  Target,
  Car,
  ArrowRight,
} from "lucide-react";

const team = [
  {
    name: "Taulant Berisha",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Bonin Osmani",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Elira Krasniqi",
    role: "Fleet Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Driton Gashi",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Every vehicle is meticulously maintained and thoroughly inspected before each rental.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority. We go above and beyond to ensure the perfect experience.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect — from our fleet quality to our customer service.",
  },
  {
    icon: Award,
    title: "Trust",
    description: "Built on a foundation of transparency, fair pricing, and honest business practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      {/* Hero */}
      <section className="relative h-[400px] mb-20 w-full">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-ebd13bc7dde5?w=1920&q=80"
          alt="About TeBo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-[2px] bg-orange-500" />
              <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">About TeBo</h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Kosovo&apos;s premier car rental service, setting the standard for
              quality, reliability, and customer satisfaction since 2020.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Driving Excellence in Kosovo
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                TeBo Rent a Car was founded with a simple vision: to provide the people
                of Kosovo and its visitors with access to premium vehicles and world-class service.
              </p>
              <p>
                What started as a small fleet of carefully selected vehicles has grown into
                Kosovo&apos;s most trusted car rental service, with over 50 premium cars ranging
                from efficient daily drivers to exotic luxury vehicles.
              </p>
              <p>
                Our name &ldquo;TeBo&rdquo; represents the partnership and shared passion of our
                founders, Taulant and Bonin, who believe that everyone deserves to experience
                the thrill of driving an exceptional car.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5 text-center">
              <Car className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-500 mt-1">Premium Cars</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5 text-center">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5 text-center">
              <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-sm text-gray-500 mt-1">Support</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5 text-center">
              <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-sm text-gray-500 mt-1">Cities</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-orange-500/20 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">Meet the People Behind TeBo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/20 transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-sm text-orange-400 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience TeBo?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Browse our fleet or book your perfect car today. We&apos;re here to make
              every journey unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cars"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25"
              >
                Explore Fleet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
