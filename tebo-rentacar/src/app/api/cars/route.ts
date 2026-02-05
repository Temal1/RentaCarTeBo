import { NextRequest, NextResponse } from "next/server";
import { cars, filterCars, searchCars } from "@/lib/cars";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");
  const origin = searchParams.get("origin") || undefined;
  const category = searchParams.get("category") || undefined;
  const transmission = searchParams.get("transmission") || undefined;
  const fuelType = searchParams.get("fuelType") || undefined;
  const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined;
  const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined;

  let result;

  if (query) {
    result = searchCars(query);
  } else if (origin || category || transmission || fuelType || minPrice || maxPrice) {
    result = filterCars({ origin, category, transmission, fuelType, minPrice, maxPrice });
  } else {
    result = cars;
  }

  return NextResponse.json({
    cars: result,
    total: result.length,
  });
}
