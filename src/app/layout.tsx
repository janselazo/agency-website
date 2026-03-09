import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zenpho — AI Development Agency & Startup Venture Studio",
    template: "%s | Zenpho",
  },
  description:
    "We build intelligent software for clients and launch our own AI-powered ventures. Agency services and studio products, all under one roof.",
  openGraph: {
    title: "Zenpho — AI Development Agency & Startup Venture Studio",
    description:
      "We build intelligent software for clients and launch our own AI-powered ventures.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <div className="relative">
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
