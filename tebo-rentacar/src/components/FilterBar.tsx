"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filters: {
    search: string;
    origin: string;
    category: string;
    transmission: string;
    fuelType: string;
    sortBy: string;
  }) => void;
  initialOrigin?: string;
  initialCategory?: string;
}

export default function FilterBar({ onFilterChange, initialOrigin, initialCategory }: FilterBarProps) {
  const [search, setSearch] = useState("");
  const [origin, setOrigin] = useState(initialOrigin || "all");
  const [category, setCategory] = useState(initialCategory || "all");
  const [transmission, setTransmission] = useState("all");
  const [fuelType, setFuelType] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const triggerFilter = (updates: Partial<typeof filters>) => {
    const filters = { search, origin, category, transmission, fuelType, sortBy, ...updates };
    onFilterChange(filters);
  };

  const filters = { search, origin, category, transmission, fuelType, sortBy };

  const resetFilters = () => {
    setSearch("");
    setOrigin("all");
    setCategory("all");
    setTransmission("all");
    setFuelType("all");
    setSortBy("featured");
    onFilterChange({ search: "", origin: "all", category: "all", transmission: "all", fuelType: "all", sortBy: "featured" });
  };

  const hasActiveFilters = origin !== "all" || category !== "all" || transmission !== "all" || fuelType !== "all" || search !== "";

  const selectClass = "w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer";

  return (
    <div className="mb-8">
      {/* Search & Toggle */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by brand, model, or category..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              triggerFilter({ search: e.target.value });
            }}
            className="w-full pl-12 pr-4 py-3.5 bg-[#111] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
          />
          {search && (
            <button
              onClick={() => {
                setSearch("");
                triggerFilter({ search: "" });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border text-sm font-medium transition-all ${
            showFilters || hasActiveFilters
              ? "border-orange-500 text-orange-400 bg-orange-500/10"
              : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-orange-500" />
          )}
        </button>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            triggerFilter({ sortBy: e.target.value });
          }}
          className="px-4 py-3.5 bg-[#111] border border-white/10 rounded-xl text-sm text-white focus:border-orange-500 outline-none transition-all cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">A - Z</option>
        </select>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Filter Options</h3>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                Reset All
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                Origin
              </label>
              <select
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value);
                  triggerFilter({ origin: e.target.value });
                }}
                className={selectClass}
              >
                <option value="all">All Origins</option>
                <option value="german">🇩🇪 German</option>
                <option value="japanese">🇯🇵 Japanese</option>
                <option value="british">🇬🇧 British</option>
                <option value="korean">🇰🇷 Korean</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  triggerFilter({ category: e.target.value });
                }}
                className={selectClass}
              >
                <option value="all">All Categories</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports</option>
                <option value="luxury">Luxury</option>
                <option value="economy">Economy</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                Transmission
              </label>
              <select
                value={transmission}
                onChange={(e) => {
                  setTransmission(e.target.value);
                  triggerFilter({ transmission: e.target.value });
                }}
                className={selectClass}
              >
                <option value="all">All</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                Fuel Type
              </label>
              <select
                value={fuelType}
                onChange={(e) => {
                  setFuelType(e.target.value);
                  triggerFilter({ fuelType: e.target.value });
                }}
                className={selectClass}
              >
                <option value="all">All</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="hybrid">Hybrid</option>
                <option value="electric">Electric</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
