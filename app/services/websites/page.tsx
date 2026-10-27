"use client";

import React from "react";
import Link from "next/link";
import {
  Laptop,
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

import Badge from "@/components/ui/Badge";
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
  {
    q: "What post-launch support and warranty do you provide?",
    a: "Every deployment includes 30 to 90 days of dedicated post-launch hyper-care covering bug fixes, performance monitoring, Core Web Vitals maintenance, and staff handover training. We also offer ongoing monthly maintenance retainers.",
  },
];

const webPackages = [
  {
    name: "Starter Web",
    price: "₹2.5L",
    desc: "Perfect for emerging brands validating product ideas with high-converting UI.",
    features: [
      "Modern Next.js or Shopify Setup",
      "5 Bespoke UI Design Templates",
      "100% Mobile & Tablet Responsive",
      "Core Web Vitals & SEO Setup",
      "1 Month Maintenance Support",
      "Payment Gateway & Analytics Integration",
    ],
    highlight: false,
    color: "bg-white border border-slate-200",
  },
  {
    name: "Growth Engine (Headless)",
    price: "₹5.5L",
    desc: "Our most popular build for scaling e-commerce & high-traffic modern brands.",
    features: [
      "Headless Commerce / Next.js App Router",
      "Custom Checkout & Inventory APIs",
      "Framer Motion Micro-Interactions",
      "Sub-Second Page Load Optimization (<1s)",
      "Automated Webhooks & Klaviyo/CRM Sync",
      "3 Months Dedicated Engineering Support",
    ],
    highlight: true,
    color: "bg-purple-50/70 border-2 border-purple-500/50 shadow-xl shadow-purple-950/5",
  },
  {
    name: "Enterprise Custom",
    price: "Custom Quote",
    desc: "Tailored code architectures for heavy industrial scale and complex workflows.",
    features: [
      "Custom Microservices & Database Schema",
      "Multi-Region Edge CDN Optimization",
      "Penetration Testing & Hardened Security",
      "Dedicated Technical Lead & 24/7 SLAs",
      "CRM & ERP Deep Integration (Odoo/Salesforce)",
      "Continuous CI/CD Automated Pipelines",
    ],
    highlight: false,
    color: "bg-white border border-slate-200",
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

export default function WebsitesPage() {
  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-x-clip font-sans">
      <ParticleField count={35} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-8%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold uppercase tracking-wider font-mono">
              <Laptop className="w-3.5 h-3.5 text-purple-600" /> High-Performance Web Engineering
            </div>
          </ScrollReveal>

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
              <Link href="/contact?service=websites">
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
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-mono font-bold bg-purple-900/80 px-3 py-1 rounded-full border border-purple-400/30">
                  Next.js App Router
                </span>
                <span className="text-xs font-mono text-emerald-300 font-bold">
                  99/100 Lighthouse Speed
                </span>
              </div>
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
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-mono font-bold bg-purple-900/80 px-3 py-1 rounded-full border border-purple-400/30">
                  Headless Shopify API
                </span>
                <span className="text-xs font-mono text-emerald-300 font-bold">
                  +38% Mobile Conversion
                </span>
              </div>
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

      {/* ── 4. PACKAGES & CAPABILITIES ── */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Transparent Engagements"
            title="Web Development Packages & Architecture Tiers"
            description="Every sprint is managed by senior full-stack engineers with bi-weekly staging reviews and continuous QA."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {webPackages.map((pkg, idx) => (
              <ScrollReveal key={pkg.name} delay={idx * 0.1}>
                <Tilt3DCard intensity={8} className="h-full">
                  <div className={cn("h-full p-8 flex flex-col justify-between rounded-3xl transition-all relative overflow-hidden", pkg.color)}>
                    {pkg.highlight && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider font-mono">
                        Most Popular
                      </div>
                    )}
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-slate-900 font-display">{pkg.name}</h3>
                        <p className="text-xs text-slate-500 min-h-[32px] leading-relaxed">{pkg.desc}</p>
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                        {pkg.price}
                      </div>
                      <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/70 pt-4">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/contact?service=websites&tier=${encodeURIComponent(pkg.name)}`} className="mt-8">
                      <Button
                        variant={pkg.highlight ? "primary" : "outline"}
                        colorTheme="violet"
                        className="w-full !text-xs !py-3 font-bold"
                      >
                        Choose {pkg.name} →
                      </Button>
                    </Link>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
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
          title="Websites &amp; Headless Architecture — FAQs"
          description="Everything you need to know about our web engineering, Shopify themes, and delivery timelines."
        />
      </div>

    </div>
  );
}
