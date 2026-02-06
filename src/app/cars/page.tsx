"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "@/components/CarCard";
import FilterBar from "@/components/FilterBar";
import { cars, Car } from "@/lib/cars";
import { Car as CarIcon } from "lucide-react";

function CarsContent() {
  const searchParams = useSearchParams();
  const initialOrigin = searchParams.get("origin") || "all";
  const initialCategory = searchParams.get("category") || "all";

  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [activeFilters, setActiveFilters] = useState({
    search: "",
    origin: initialOrigin,
    category: initialCategory,
    transmission: "all",
    fuelType: "all",
    sortBy: "featured",
  });

  useEffect(() => {
    applyFilters(activeFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyFilters = (filters: typeof activeFilters) => {
    setActiveFilters(filters);

    let result = [...cars];

    // Search
    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(q) ||
          car.model.toLowerCase().includes(q) ||
          car.category.includes(q) ||
          car.origin.includes(q)
      );
    }

    // Filters
    if (filters.origin !== "all") result = result.filter((c) => c.origin === filters.origin);
    if (filters.category !== "all") result = result.filter((c) => c.category === filters.category);
    if (filters.transmission !== "all") result = result.filter((c) => c.transmission === filters.transmission);
    if (filters.fuelType !== "all") result = result.filter((c) => c.fuelType === filters.fuelType);

    // Sort
    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case "price-high":
        result.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
        break;
    }

    setFilteredCars(result);
  };

  const getTitle = () => {
    if (activeFilters.origin !== "all") {
      const map: Record<string, string> = {
        german: "🇩🇪 German Cars",
        japanese: "🇯🇵 Japanese Cars",
        british: "🇬🇧 British Cars",
        korean: "🇰🇷 Korean Cars",
      };
      return map[activeFilters.origin] || "Our Fleet";
    }
    if (activeFilters.category !== "all") {
      return `${activeFilters.category.charAt(0).toUpperCase() + activeFilters.category.slice(1)} Cars`;
    }
    return "Our Fleet";
  };

  return (
    <div className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">
              Browse Collection
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{getTitle()}</h1>
          <p className="text-gray-400 mt-3">
            {filteredCars.length} vehicle{filteredCars.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          onFilterChange={applyFilters}
          initialOrigin={initialOrigin}
          initialCategory={initialCategory}
        />

        {/* Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <CarIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No cars found</h3>
            <p className="text-gray-400">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CarsPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-28 pb-20 text-center text-gray-400">Loading fleet...</div>
      }
    >
      <CarsContent />
    </Suspense>
  );
}
