import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundBase from "@/components/layout/BackgroundBase";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "KK NEX TECH SOLUTION | IT Services & Software Solutions",
    template: "%s | KK NEX TECH SOLUTION",
  },
  description:
    "Build, launch, and scale your digital products with KK NEX TECH SOLUTION. Expert custom web development, mobile applications, social media management, and custom CRM/ERP integrations.",
  keywords: [
    "IT Services",
    "Web Development",
    "Mobile Apps",
    "Social Media Management",
    "CRM Solutions",
    "ERP Solutions",
    "KK NEX TECH SOLUTION",
  ],
  metadataBase: new URL("https://kknextech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-white text-ink antialiased relative">
        <BackgroundBase />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
