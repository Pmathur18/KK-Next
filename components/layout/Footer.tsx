"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Linkedin, Twitter, Instagram, Github } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

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
    <footer className="relative bg-dark-panel text-zinc-400 overflow-hidden pt-20 pb-8 border-t border-zinc-900 animate-fadeIn">
      {/* Corner animated gradient glow */}


      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-zinc-800">

          {/* Col 2: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/career" className="hover:text-white transition-colors">Career</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/services/websites" className="hover:text-white transition-colors">Websites & Shopify</Link></li>
              <li><Link href="/services/mobile-apps" className="hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services/social-media-management" className="hover:text-white transition-colors">Social Management</Link></li>
              <li><Link href="/services/crm-erp" className="hover:text-white transition-colors">CRM & ERP Automations</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter + Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Stay Tuned</h3>
              <form onSubmit={handleSubscribe} className="flex relative">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-full px-4 py-2 text-xs focus:outline-none focus:border-zinc-700 placeholder-zinc-600"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-accent-primary text-white rounded-full flex items-center justify-center hover:bg-accent-primary/95 transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <span className="text-xs text-pastel-mint font-medium">
                  Thanks for subscribing!
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3 text-xs text-zinc-500 leading-normal">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>hello@kknextech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-8 border-t border-zinc-900">

          {/* Watermark — absolutely centered behind the bar */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-display font-black text-[clamp(2rem,6vw,4.5rem)] tracking-[0.25em] whitespace-nowrap text-white uppercase opacity-[1]">
              KK NEX TECH SOLUTION
            </span>
          </div>

          {/* Bottom row */}
          <div className="relative z-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            {/* Copyright */}
            <span className="text-center sm:text-left">
              Proudly created in India. All Right Reserved, All Wrong Reversed.
            </span>

            {/* Social icons — centered with padding */}
            <div className="flex items-center gap-2 px-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-110"
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-zinc-300 transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
