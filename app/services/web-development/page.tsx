"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Layers,
  Sparkles,
  Cpu,
  Globe,
  TrendingUp,
  ShoppingBag,
  Code2,
} from "lucide-react";

import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SpotlightSection from "@/components/ui/SpotlightSection";
import GlowingOrb from "@/components/ui/GlowingOrb";
import ParticleField from "@/components/ui/ParticleField";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import CTABanner from "@/components/ui/CTABanner";
import { cn } from "@/lib/utils";

const webFAQs: FAQItem[] = [
  {
    q: "Why choose Headless Shopify over a standard Shopify liquid template?",
    a: "Standard liquid themes load scripts, apps, and assets sequentially, leading to 3–6 second page load times and mobile drop-offs. A headless Shopify architecture separates the frontend (Next.js) from the backend (Shopify APIs), delivering sub-second page transitions, custom checkouts, and up to 38% higher mobile conversion rates.",
  },
  {
    q: "How long does a custom web development project take?",
    a: "A bespoke Next.js website or high-converting Shopify store typically takes 3 to 6 weeks. Enterprise web apps with custom integrations (CRM, ERP, payment gateways) take 6 to 10 weeks depending on custom feature requirements.",
  },
  {
    q: "Do you build fully custom designs or use pre-made templates?",
    a: "Every project is custom-designed from scratch in Figma before writing a single line of code. We tailor typography, UI components, animations, and checkout funnels specifically to your brand identity and audience expectations.",
  },
  {
    q: "Will our team be able to manage products, blogs, and content after launch?",
    a: "Yes. For Shopify builds, you continue managing inventory, orders, and customer accounts inside the familiar Shopify Admin. For custom web platforms, we integrate user-friendly headless CMS solutions (Sanity, Contentful, or Strapi) with full editor permissions.",
  },
];

const pillars = [
  {
    title: "Headless Shopify Storefronts",
    desc: "Decouple your customer-facing frontend with Next.js for lightning-fast speeds while managing inventory through Shopify's robust commerce engine.",
    icon: ShoppingBag,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    title: "Custom Next.js & React Applications",
    desc: "Server-side rendered, SEO-optimized web applications with edge caching, modern React Server Components, and zero render blocking.",
    icon: Code2,
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    desc: "High-velocity A/B testing, one-click checkout flows, and reduced cart friction engineered to turn organic and paid traffic into paying customers.",
    icon: TrendingUp,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "API & Backend Middleware",
    desc: "Custom webhook listeners, real-time third-party inventory sync, payment gateway routing, and ERP integrations that never drop a packet.",
    icon: Cpu,
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-x-clip font-sans">
      <ParticleField count={35} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-8%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">

          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display text-slate-900 uppercase">
              Websites &amp; Storefronts <br />
              <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                Built For Sub-Second Scale.
              </AnimatedGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We design and engineer bespoke Next.js web applications and headless Shopify storefronts that eliminate checkout friction, dominate Core Web Vitals, and convert high-intent traffic.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact?service=web-development">
                <Button variant="primary" colorTheme="violet" className="!py-3.5 !px-8 text-sm font-bold shadow-xl shadow-purple-500/25">
                  Start Your Web Project →
                </Button>
              </Link>
              <Link href="/portfolio?category=Websites">
                <Button variant="outline" className="!py-3.5 !px-8 text-sm font-bold border-slate-300 hover:bg-slate-50">
                  Explore Web Case Studies
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Tech Stack Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 text-xs font-mono font-bold text-slate-500">
            <span className="text-slate-400 mr-2 uppercase text-[11px]">Core Technologies:</span>
            {["Next.js 15", "Shopify Storefront API", "React 19", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js", "Vercel Edge"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. VISUAL ARCHITECTURE SHOWCASE ── */}
      <section className="py-10 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-purple-100 overflow-hidden bg-white shadow-xl group flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src="/images/web_architecture_showcase.jpg"
                alt="Bespoke Modern Web Architecture & Next.js"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              
            </div>
            <div className="p-8 flex flex-col gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600">
                Bespoke Full-Stack Engineering
              </span>
              <h3 className="text-xl font-black text-slate-900 font-display">
                Modern Next.js Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ultra-fast sub-second load times, server-side rendering, and headless API wrappers designed to withstand tens of thousands of concurrent users without breaking.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-purple-100 overflow-hidden bg-white shadow-xl group flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src="/images/ecommerce_showcase.jpg"
                alt="High-Converting Shopify & Ecommerce Stores"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
             
            </div>
            <div className="p-8 flex flex-col gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600">
                E-Commerce &amp; CRO Optimization
              </span>
              <h3 className="text-xl font-black text-slate-900 font-display">
                High-Conversion Shopify Stores
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Streamlined one-page checkout funnels, automated post-purchase upsells, and custom inventory automations that scale brand revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUR CORE CAPABILITY PILLARS ── */}
      <section className="py-12 bg-slate-50/70 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
          <SectionHeading
            eyebrow="Core Competencies"
            title="How We Engineer Digital Commercial Dominance"
            description="Our full-stack web engineering combines modern architecture with growth-oriented conversion science."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col gap-4 justify-between hover:border-purple-300 transition-all"
                >
                  <div className="flex flex-col gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border", pillar.color)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM CTA ── */}
      <CTABanner
        title="Ready to Build a High-Performance Storefront?"
        description="Book a technical discovery call with our solutions architects. We'll audit your current web performance and map a custom headless roadmap."
        buttonText="Schedule Technical Consultation →"
        buttonLink="/contact"
      />

      {/* ── 6. COMPREHENSIVE FAQs ── */}
      <div className="border-t border-purple-100">
        <FAQSection
          items={webFAQs}
          eyebrow="Got Questions?"
          title="Web Development &amp; Headless Architecture — FAQs"
          description="Everything you need to know about our web engineering, Shopify themes, and delivery timelines."
        />
      </div>

    </div>
  );
}
