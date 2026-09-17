"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Linkedin, Twitter, Instagram, Github } from "@/components/ui/BrandIcons";
import GlowingOrb from "@/components/ui/GlowingOrb";
import ParticleField from "@/components/ui/ParticleField";
import ScrollReveal from "@/components/ui/ScrollReveal";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Websites & Shopify", href: "/services#websites" },
    { label: "Mobile Applications", href: "/services" },
    { label: "Social Management", href: "/services/social-media-management" },
    { label: "CRM & ERP", href: "/services/crm-erp" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 md:pt-28 pb-6 font-sans"
      style={{ background: "linear-gradient(160deg, #faf5ff 0%, #f0f4ff 50%, #f5f8ff 100%)" }}
    >
      {/* Particle field */}
      <ParticleField count={35} color="124, 58, 237" opacity={0.15} speed={0.2} />

      {/* Glow orbs */}
      <GlowingOrb className="top-[-10%] left-[-5%]" color="#7C3AED" size={500} opacity={0.08} blur={120} duration={12} />
      <GlowingOrb className="bottom-[-5%] right-[-5%]" color="#38bdf8" size={350} opacity={0.07} blur={100} duration={14} />

      {/* Decorative beam lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Main Footer Row: Brand, Company, Services, and Contact aligned in one line with justified spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-10 border-b border-purple-200/40 items-start justify-between">
          {/* Brand section */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-3">
              <Link href="/" className="block">
                <img
                  src="/logo.png"
                  alt="KK NEX TECH SOLUTION"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-xs">
                Your creative, media &amp; technology engineering partner. Delivering growth at scale.
              </p>
            </div>
          </ScrollReveal>

          {/* Links grid (Company & Services) */}
          {Object.entries(footerLinks).map(([category, links], colIdx) => (
            <ScrollReveal key={category} delay={(colIdx + 1) * 0.08}>
              <div className="flex flex-col gap-5">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest font-display">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-purple-600 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200 font-medium group"
                      >
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                          <ArrowRight className="w-3 h-3 shrink-0" />
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}

          {/* Contact column */}
          <ScrollReveal delay={0.24}>
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest font-display">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:info@kknexttech.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-purple-600 transition-colors group font-medium">
                  <div className="w-7 h-7 rounded-lg bg-purple-100/80 flex items-center justify-center shrink-0 group-hover:bg-purple-200/80 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  info@kknexttech.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-slate-500 hover:text-purple-600 transition-colors group font-medium">
                  <div className="w-7 h-7 rounded-lg bg-purple-100/80 flex items-center justify-center shrink-0 group-hover:bg-purple-200/80 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  +91 98765 43210
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <div className="w-7 h-7 rounded-lg bg-purple-100/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  Rajasthan, India
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <span>
            Proudly crafted in 🇮🇳 India. All Right Reserved, All Wrong Reversed.
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 4, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-white border border-purple-200/60 hover:bg-purple-100 hover:border-purple-300 text-purple-600 flex items-center justify-center transition-colors shadow-sm"
                aria-label={item.label}
              >
                <item.icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-purple-600 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
