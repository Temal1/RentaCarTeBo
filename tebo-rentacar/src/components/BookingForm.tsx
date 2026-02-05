"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface BookingFormProps {
  carId?: string;
  carName?: string;
  pricePerDay?: number;
}

export default function BookingForm({ carId, carName, pricePerDay }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "09:00",
    returnTime: "09:00",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;
    const pickup = new Date(formData.pickupDate);
    const returnD = new Date(formData.returnDate);
    const diff = Math.ceil((returnD.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const days = calculateDays();
  const totalPrice = pricePerDay ? days * pricePerDay : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          carId,
          totalPrice,
          days,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(`Booking confirmed! Your booking ID is: ${data.bookingId}`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          pickupDate: "",
          returnDate: "",
          pickupTime: "09:00",
          returnTime: "09:00",
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all";

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Car Info Summary */}
      {carName && pricePerDay && (
        <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-5">
          <h3 className="text-white font-semibold text-lg">{carName}</h3>
          <p className="text-orange-400 text-sm mt-1">€{pricePerDay}/day</p>
          {days > 0 && (
            <div className="mt-3 pt-3 border-t border-orange-500/20">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{days} day{days > 1 ? "s" : ""} × €{pricePerDay}</span>
                <span className="text-white font-bold text-lg">€{totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Personal Info */}
      <div>
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">1</span>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+383 49 XXX XXX"
              required
              className={inputClass}
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Date & Time */}
      <div>
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">2</span>
          Rental Period
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Pickup Date
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              min={today}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Pickup Time
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Return Date
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              min={formData.pickupDate || today}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Return Time
            </label>
            <input
              type="time"
              name="returnTime"
              value={formData.returnTime}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
          <p className="text-green-400 text-sm">{message}</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-sm">{message}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Confirm Booking
            {totalPrice > 0 && <span>— €{totalPrice}</span>}
          </>
        )}
      </button>
    </form>
  );
}
