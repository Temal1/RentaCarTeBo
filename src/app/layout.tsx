import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TeBo Rent a Car | Premium Car Rental in Kosovo",
  description:
    "Premium car rental service in Kosovo. German, Japanese & British luxury, sports and economy cars available 24/7. Book your dream car today!",
  keywords: "rent a car, Kosovo, Prishtina, car rental, luxury cars, sports cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden w-full`}>
        <Navbar />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
