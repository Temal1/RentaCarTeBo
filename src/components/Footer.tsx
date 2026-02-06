"use client";

import Link from "next/link";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowUp,
  Clock,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  <span className="text-white">TE</span>
                  <span className="text-orange-500">BO</span>
                </span>
                <p className="text-[10px] text-gray-500 -mt-1 tracking-widest uppercase">
                  Rent a Car
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium car rental service in Kosovo. From economy to luxury,
              find the perfect vehicle for every journey.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/cars", label: "Our Fleet" },
                { href: "/booking", label: "Book a Car" },
                { href: "/cars?category=luxury", label: "Luxury Collection" },
                { href: "/cars?category=sports", label: "Sports Cars" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6">Car Categories</h3>
            <ul className="space-y-3">
              {[
                { href: "/cars?origin=german", label: "German Cars", flag: "🇩🇪" },
                { href: "/cars?origin=japanese", label: "Japanese Cars", flag: "🇯🇵" },
                { href: "/cars?origin=british", label: "British Cars", flag: "🇬🇧" },
                { href: "/cars?category=suv", label: "SUVs", flag: "🚙" },
                { href: "/cars?category=economy", label: "Economy", flag: "💰" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    <span>{link.flag}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+38349437883"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  +383 (0) 49 437 883
                </a>
              </li>
              <li>
                <a
                  href="tel:+38349116898"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  +383 (0) 49 116 898
                </a>
              </li>
              <li>
                <a
                  href="mailto:TeBoRentaCar@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  TeBoRentaCar@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                Prishtina, Kosovo
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" />
                24/7 Available
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TeBo Rent a Car. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <a
              href="https://tebotronic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
            >
              Created by <span className="font-semibold">TeBoTronic</span>
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
