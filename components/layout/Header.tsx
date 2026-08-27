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
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.75]);
  const backdropBlur = useTransform(scrollY, [0, 50], [0, 12]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.1]);

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
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
  ];

  const servicesDropdownItems = [
    {
      title: "Websites & E-commerce",
      desc: "Shopify headless & Next.js customization.",
      href: "/services/websites",
      icon: Laptop,
      color: "bg-pastel-sky",
    },
    {
      title: "Mobile Applications",
      desc: "Native performance on iOS & Android.",
      href: "/services/mobile-apps",
      icon: Smartphone,
      color: "bg-pastel-peach",
    },
    {
      title: "Social Media Management",
      desc: "Data-driven creative scaling campaigns.",
      href: "/services/social-media-management",
      icon: Share2,
      color: "bg-pastel-mint",
    },
    {
      title: "CRM & ERP Solutions",
      desc: "Custom inventory & workflow automation.",
      href: "/services/crm-erp",
      icon: Database,
      color: "bg-pastel-yellow",
    },
  ];

  return (
    <>
      <motion.header
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(250, 250, 247, ${v})`),
          backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(20, 20, 20, ${v})`),
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
                        "flex items-center gap-1 text-sm font-medium text-ink/75 hover:text-ink cursor-pointer",
                        pathname.startsWith("/services") ? "text-accent-primary font-semibold" : ""
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          megaMenuOpen ? "transform rotate-180" : ""
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
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white rounded-3xl border border-zinc-150/40 p-6 shadow-xl grid grid-cols-2 gap-4"
                        >
                          {servicesDropdownItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors"
                            >
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-xl flex items-center justify-center text-ink shrink-0",
                                  item.color
                                )}
                              >
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-bold text-ink">
                                  {item.title}
                                </span>
                                <span className="text-xs text-zinc-500 leading-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 border-t border-zinc-100 mt-2 pt-4 flex justify-between items-center px-4">
                            <span className="text-xs text-zinc-400 font-medium">
                              Need a specialized integration solution?
                            </span>
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-accent-primary hover:underline flex items-center gap-1"
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
                    "text-sm font-medium text-ink/75 hover:text-ink transition-colors relative py-1",
                    isActive ? "text-accent-primary font-semibold" : ""
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-primary rounded-full"
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
              <Button variant="primary" colorTheme="violet" className="!py-2 !px-6 !text-sm">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-ink hover:text-accent-primary transition-colors focus:outline-none cursor-pointer"
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
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-bg-base/95 backdrop-blur-lg flex flex-col p-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col gap-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 px-3">
                        {link.name}
                      </span>
                      <div className="grid gap-2 pl-3">
                        {servicesDropdownItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center gap-3 py-2 text-sm font-medium text-ink hover:text-accent-primary"
                          >
                            <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0", item.color)}>
                              <item.icon className="w-4 h-4 text-ink" />
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
                      "text-xl font-bold px-3 py-2 text-ink/80 hover:text-accent-primary transition-colors",
                      isActive ? "text-accent-primary font-black" : ""
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
