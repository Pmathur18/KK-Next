"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Menu, X, Laptop, Smartphone, Share2, Database, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Transparent to frosted white bg scroll animation
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 50], [0, 12]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.15]);

  useEffect(() => {
    setIsOpen(false);
    setMegaMenuOpen(false);
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
      color: "bg-[#EBF3FC] text-[#0A2540]",
    },
    {
      title: "Socials",
      desc: "Data-driven creative scaling campaigns.",
      href: "/services#social-media",
      icon: Share2,
      color: "bg-[#F1F5F9] text-[#050B14]",
    },
    {
      title: "CRM / ERP Automation",
      desc: "Custom database & enterprise workflow automation.",
      href: "/services/crm-erp",
      icon: Database,
      color: "bg-[#050B14] text-white",
    },
  ];

  return (
    <>
      <motion.header
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(255, 255, 255, ${v})`),
          backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(10, 37, 64, ${v})`),
        }}
        className="sticky top-0 z-50 w-full transition-all duration-200"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-4 flex items-center justify-between">
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="KK Next Tech Solutions Logo"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 text-sm font-semibold text-[#050B14]/80 hover:text-[#0A2540] cursor-pointer",
                        pathname.startsWith("/services") ? "text-[#0A2540] font-bold" : ""
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          megaMenuOpen ? "transform rotate-180 text-[#0A2540]" : ""
                        )}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white rounded-3xl border border-slate-200 p-6 shadow-xl grid grid-cols-2 gap-4"
                        >
                          {servicesDropdownItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                            >
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/50",
                                  item.color
                                )}
                              >
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-bold text-ink">
                                  {item.title}
                                </span>
                                <span className="text-xs text-slate-500 leading-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 border-t border-slate-100 mt-2 pt-4 flex justify-between items-center px-4">
                            <span className="text-xs text-slate-500 font-medium">
                              Need a specialized enterprise integration?
                            </span>
                            <Link
                              href="/services"
                              className="text-xs font-bold text-[#0A2540] hover:text-[#1E40AF] hover:underline flex items-center gap-1"
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
                    "text-sm font-semibold text-[#050B14]/80 hover:text-[#0A2540] transition-colors relative py-1",
                    isActive ? "text-[#0A2540] font-bold" : ""
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A2540] rounded-full"
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
              <Button variant="primary" colorTheme="navy" className="!py-2 !px-6 !text-sm">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#050B14] hover:text-[#0A2540] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white/98 backdrop-blur-lg flex flex-col p-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col gap-3">
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-500 px-3">
                        {link.name}
                      </span>
                      <div className="grid gap-2 pl-3">
                        {servicesDropdownItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center gap-3 py-2 text-sm font-semibold text-ink hover:text-[#0A2540]"
                          >
                            <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-slate-200/50", item.color)}>
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
                      "text-xl font-bold px-3 py-2 text-[#050B14]/80 hover:text-[#0A2540] transition-colors",
                      isActive ? "text-[#0A2540] font-black" : ""
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pb-8 flex flex-col gap-4">
              <Link href="/contact" className="w-full">
                <Button variant="primary" colorTheme="navy" className="w-full">
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
