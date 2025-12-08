import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reality Builders Publishing",
  description: "Building new realities through words.",
  icons: {
    icon: "/RBP-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen text-white`}
        suppressHydrationWarning={true}
      >
        <SpaceBackground />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 pt-24">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
