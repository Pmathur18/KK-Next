"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Linkedin, Twitter, Instagram, Github } from "@/components/ui/BrandIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-[#0F172A] text-slate-200 overflow-hidden pt-16 md:pt-20 pb-6 border-t border-purple-500/20 font-sans">
      {/* Ambient Purple Top Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/15 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">

        {/* ── 1. TOP COLUMNS CONTENT (Original Content Intact) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 lg:gap-16 pb-14 border-b border-purple-300/15">

          {/* Col 1: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base md:text-lg font-bold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/about" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base md:text-lg font-bold text-white tracking-wider uppercase">
              Services
            </h3>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/services#websites" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  Websites &amp; Shopify
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  Social Management
                </Link>
              </li>
              <li>
                <Link href="/services/crm-erp" className="inline-block hover:text-purple-300 hover:translate-x-1.5 transition-all duration-300">
                  CRM &amp; ERP Automations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter + Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-base md:text-lg font-bold text-white tracking-wider uppercase">
                Stay Tuned
              </h3>
              <form onSubmit={handleSubscribe} className="flex relative max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/80 border border-purple-400/30 text-white rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-purple-400 placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer font-bold shadow-md"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <span className="text-xs text-white bg-purple-500/30 border border-purple-400/40 px-3 py-1 rounded-full font-semibold w-fit">
                  Thanks for subscribing!
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-purple-400" />
                <span>Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-purple-400" />
                <a href="mailto:hello@kknextech.com" className="hover:text-purple-300 transition-colors">
                  hello@kknextech.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0 text-purple-400" />
                <a href="tel:+919876543210" className="hover:text-purple-300 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── 2. BOTTOM BAR (Original Content & Social Icons) ── */}
        <div className="relative pt-6">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            {/* Copyright */}
            <span className="text-center sm:text-left">
              Proudly created in India. All Right Reserved, All Wrong Reversed.
            </span>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-purple-500/20 hover:bg-purple-600 text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="hover:text-purple-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-purple-300 transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* ── 3. GIANT BRAND WATERMARK ── */}
        <div className="relative w-full pt-10 pb-0 overflow-hidden select-none pointer-events-none text-center">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-black text-[clamp(4.5rem,18vw,14rem)] tracking-tight text-white/[0.07] leading-none whitespace-nowrap block -mb-4 md:-mb-8"
          >
            KKNEXTTECH
          </motion.span>
        </div>

      </div>
    </footer>
  );
}

