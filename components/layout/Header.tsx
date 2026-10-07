"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Laptop, Share2, Database, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => {
      setIsOpen(false);
      setMegaMenuOpen(false);
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const servicesDropdownItems = [
    {
      title: "Web Development",
      desc: "Shopify headless & Next.js customization.",
      href: "/services#websites",
      icon: Laptop,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Socials",
      desc: "Data-driven creative scaling campaigns.",
      href: "/services/social-media-management",
      icon: Share2,
      color: "bg-fuchsia-50 text-fuchsia-600",
    },
    {
      title: "CRM / ERP Automation",
      desc: "Custom database & enterprise workflow automation.",
      href: "/services/crm-erp",
      icon: Database,
      color: "bg-cyan-50 text-cyan-600",
    },
  ];

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full bg-white/95 border-b border-purple-100/60 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-3.5 flex items-center justify-between">
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="KK NEX TECH SOLUTION Home">
            <Image
              src="/logo.png"
              alt="KK Next Tech Solutions Logo"
              width={160}
              height={104}
              className="h-10 md:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.5)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/70 backdrop-blur-xl px-6 py-2 rounded-full border border-purple-100/80 shadow-md">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-1"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={megaMenuOpen}
                      onClick={() => setMegaMenuOpen((open) => !open)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#7C3AED] transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.3)] outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-md px-1",
                        pathname.startsWith("/services") ? "text-[#7C3AED] font-bold" : ""
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          megaMenuOpen ? "transform rotate-180 text-[#7C3AED]" : ""
                        )}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-purple-100 p-6 shadow-2xl shadow-purple-900/10 grid grid-cols-2 gap-3"
                        >
                          {servicesDropdownItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-purple-50/70 border border-transparent hover:border-purple-100 transition-all"
                            >
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-purple-100/60",
                                  item.color
                                )}
                              >
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-bold text-slate-900">
                                  {item.title}
                                </span>
                                <span className="text-xs text-slate-500 leading-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 border-t border-purple-100/60 mt-2 pt-3 flex justify-between items-center px-3">
                            <span className="text-xs text-slate-500 font-medium">
                              Need a specialized enterprise integration?
                            </span>
                            <Link
                              href="/services"
                              className="text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] hover:underline flex items-center gap-1"
                            >
                              All Services <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold text-slate-700 hover:text-[#7C3AED] transition-colors relative py-1 px-1 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-md",
                    isActive ? "text-[#7C3AED] font-bold" : ""
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="primary" colorTheme="violet" className="!py-2.5 !px-6 !text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#7C3AED] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-white/98 backdrop-blur-lg flex flex-col p-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col gap-3">
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-400 px-3">
                        {link.name}
                      </span>
                      <div className="grid gap-2 pl-3">
                        {servicesDropdownItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center gap-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#7C3AED]"
                          >
                            <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-purple-100", item.color)}>
                              <item.icon className="w-4 h-4" />
                            </div>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-xl font-bold px-3 py-2 text-slate-800 hover:text-[#7C3AED] transition-colors",
                      isActive ? "text-[#7C3AED] font-black" : ""
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pb-8 flex flex-col gap-4">
              <Link href="/contact" className="w-full">
                <Button variant="primary" colorTheme="violet" className="w-full">
                  Book a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

