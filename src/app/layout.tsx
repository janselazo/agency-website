import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Janse Lazo — AI Growth & Development",
    template: "%s | Janse Lazo",
  },
  description:
    "I help B2B and B2C SaaS startups build and scale with AI. AI Software Development and AI Software Growth — building ventures and advising clients.",
  openGraph: {
    title: "Janse Lazo — AI Growth & Development",
    description:
      "I help B2B and B2C SaaS startups build and scale with AI. AI Software Development and AI Software Growth.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
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
