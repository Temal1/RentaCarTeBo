import { NextRequest, NextResponse } from "next/server";

// In-memory store (in production, use a database)
const bookings: Array<{
  id: string;
  carId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: string;
  returnDate: string;
  pickupTime: string;
  returnTime: string;
  totalPrice: number;
  days: number;
  status: string;
  createdAt: string;
}> = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, pickupDate, returnDate, pickupTime, returnTime, carId, totalPrice, days } = body;

    // Validation
    if (!name || !email || !phone || !pickupDate || !returnDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate dates
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (pickup < now) {
      return NextResponse.json(
        { error: "Pickup date cannot be in the past" },
        { status: 400 }
      );
    }

    if (returnD <= pickup) {
      return NextResponse.json(
        { error: "Return date must be after pickup date" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create booking
    const bookingId = `TB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

    const booking = {
      id: bookingId,
      carId: carId || "unspecified",
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      totalPrice: totalPrice || 0,
      days: days || 0,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);

    return NextResponse.json(
      {
        message: "Booking confirmed successfully!",
        bookingId,
        booking,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ bookings, total: bookings.length });
}
