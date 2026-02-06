"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Car,
  Phone,
  Menu,
  X,
  User,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Our Fleet" },
  { href: "/booking", label: "Book Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              <Car className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">TE</span>
                <span className="text-orange-500">BO</span>
              </span>
              <p className="text-[10px] text-gray-400 -mt-1 tracking-widest uppercase">
                Rent a Car
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#111]/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-white/10">
                  <Link
                    href="/cars?origin=german"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">🇩🇪</span>
                    <span className="text-sm text-gray-300">German Cars</span>
                  </Link>
                  <Link
                    href="/cars?origin=japanese"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm text-gray-300">Japanese Cars</span>
                  </Link>
                  <Link
                    href="/cars?origin=british"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-sm text-gray-300">British Cars</span>
                  </Link>
                  <div className="border-t border-white/5 my-1" />
                  <Link
                    href="/cars?category=sports"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">🏎️</span>
                    <span className="text-sm text-gray-300">Sports Cars</span>
                  </Link>
                  <Link
                    href="/cars?category=luxury"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">💎</span>
                    <span className="text-sm text-gray-300">Luxury Cars</span>
                  </Link>
                  <Link
                    href="/cars?category=suv"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">🚙</span>
                    <span className="text-sm text-gray-300">SUVs</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+38349437883"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+383 49 437 883</span>
            </a>
            <Link
              href="/booking"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#111]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/5">
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
