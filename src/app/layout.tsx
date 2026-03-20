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
    default: "Janse Lazo — Custom AI Software & AI Agents",
    template: "%s | Janse Lazo",
  },
  description:
    "Custom AI software and AI agents for web and mobile: LLMs, RAG, automation, and integrations—built to ship and run in production.",
  openGraph: {
    title: "Janse Lazo — Custom AI Software & AI Agents",
    description:
      "Custom AI software, agents, and full-stack delivery for teams that need production-ready apps, APIs, and observability—not slideware.",
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
    <html lang="en">
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
