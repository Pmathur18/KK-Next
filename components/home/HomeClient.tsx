"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Zap,
  Laptop,
  Database,
  Code,
  CheckCircle2,
  BarChart3,
  Shield,
  Workflow,
  TrendingUp,
  ChevronRight,
  Check,
  Cpu,
  LineChart,
  ShoppingBag,
  Layers,
  Gauge,
  Server,
  Activity,
  CheckSquare,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import GlowingOrb from "@/components/ui/GlowingOrb";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import ParticleField from "@/components/ui/ParticleField";
import CTABanner from "@/components/ui/CTABanner";

import { projects } from "@/data/portfolio";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Section 7: FAQs from user spec
const homeFAQs: FAQItem[] = [
  {
    q: "Do you work with startups and small businesses?",
    a: "We partner with businesses of all sizes, from early-stage startups and small businesses to established enterprises. For startups and growing businesses, we build lean MVPs and agile digital marketing strategies. For established companies, we deliver secure software modernizations, API integrations, and scalable infrastructure.",
  },
  {
    q: "How long does a website project usually take?",
    a: "Development timelines vary based on project requirements and system integrations. Typically, custom full-stack web builds take 4 to 12 weeks from initial architectural mapping to production deployment.",
  },
  {
    q: "How can CRM or ERP solutions help my business?",
    a: "CRM and ERP solutions eliminate operational friction, automate repetitive manual workflows, organize client and inventory records, and unlock actionable business intelligence through custom integrations.",
  },
  {
    q: "Do you provide support after a website launches?",
    a: "Every delivery includes dedicated post-launch support and training. We also provide retainer models covering 24/7 infrastructure monitoring, security updates, continuous SEO optimization, and feature enhancements.",
  },
  {
    q: "How do I get started with KK Next Tech?",
    a: "You can schedule a free Tech & Growth consultation directly on our website. We analyze your goals and digital presence, outline recommended technical architectures, and deliver a detailed project roadmap within 48 hours.",
  },
];

// Section 4: Core Solutions (Service Offerings)
const coreSolutions = [
  {
    id: "web-arch",
    icon: Laptop,
    badge: "Custom Web",
    title: "Custom Web Architecture & High-Concurrency Systems",
    desc: "Sub-100ms response times and zero-downtime reliability. We build web applications that maintain blazing speeds during 50,000+ user traffic spikes, ensuring your customers never hit a slow screen or broken flow.",
    color: "from-violet-500/15 via-purple-500/10 to-indigo-500/5",
    iconColor: "text-violet-600 bg-violet-50 border-violet-200",
    link: "/services/web-development",
    highlights: ["React / Next.js Stack", "Sub-100ms API Response", "Zero-Downtime Scaling"],
    stat: "Sub-100ms API Response",
  },
  {
    id: "shopify-ecom",
    icon: ShoppingBag,
    badge: "E-Commerce",
    title: "High-Converting Shopify & Headless Commerce Infrastructure",
    desc: "Frictionless one-page checkouts and custom backend syncs that eliminate inventory overselling, slash cart abandonment by 40%, and turn first-time visitors into repeat buyers.",
    color: "from-emerald-500/15 via-teal-500/10 to-cyan-500/5",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    link: "/services/web-development",
    highlights: ["Custom Theme Dev", "Conversion Rate Optimization", "Checkout API Flow"],
    stat: "+45% Avg Conversion",
  },
  {
    id: "wordpress-eng",
    icon: Code,
    badge: "Headless CMS",
    title: "High-Speed Headless WordPress Engineering",
    desc: "Sub-second page speeds, enterprise-grade security, and zero plugin bloat. Empower your marketing team to publish effortlessly while keeping Google Core Web Vitals at a perfect 100/100.",
    color: "from-blue-500/15 via-sky-500/10 to-indigo-500/5",
    iconColor: "text-blue-600 bg-blue-50 border-blue-200",
    link: "/services/web-development",
    highlights: ["Headless WordPress", "100/100 PageSpeed", "Zero Bloat Codebase"],
    stat: "99+ Performance Score",
  },
  {
    id: "perf-marketing",
    icon: LineChart,
    badge: "Growth Engine",
    title: "Data-Driven Performance Marketing & Full-Funnel ROAS",
    desc: "No vanity metrics or empty clicks. We position your brand directly in front of high-intent buyers through precision Meta/Google acquisition and technical SEO that delivers predictable revenue.",
    color: "from-fuchsia-500/15 via-pink-500/10 to-rose-500/5",
    iconColor: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200",
    link: "/services/socials",
    highlights: ["Technical & On-Page SEO", "Paid Social & SEM", "ROAS Optimization"],
    stat: "340% Avg ROAS Impact",
  },
  {
    id: "crm-erp-integration",
    icon: Database,
    badge: "Enterprise Tech",
    title: "Enterprise CRM & ERP Workflow Automation",
    desc: "Eliminate manual data entry, spreadsheets, and departmental silos. We connect inventory, customer records, and financial accounting into one automated dashboard, saving 40%+ in weekly operational hours.",
    color: "from-amber-500/15 via-orange-500/10 to-yellow-500/5",
    iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    link: "/services/crm-erp",
    highlights: ["Salesforce & HubSpot", "Workflow Automation", "Bi-directional Sync"],
    stat: "60% Ops Time Saved",
  },
];

// Section 5: Why Partner With Us?
const differentiators = [
  {
    capability: "Single Point of Accountability",
    badge: "Zero Finger-Pointing",
    impact: "Dev agencies build code with zero marketing sense; ad agencies send traffic to slow websites. We fuse both under one accountable senior team responsible for your revenue.",
    icon: Layers,
    color: "border-purple-200 bg-purple-50/50 text-purple-700",
  },
  {
    capability: "Engineered for Commercial Outcomes",
    badge: "ROI-First Architecture",
    impact: "We don't build tech for tech's sake. Every line of code, database query, and conversion sprint is directly tied to customer acquisition and operational efficiency.",
    icon: Cpu,
    color: "border-blue-200 bg-blue-50/50 text-blue-700",
  },
  {
    capability: "Decisions Guided by Hard Data",
    badge: "Zero Guesswork",
    impact: "We analyze real visitor heatmaps, session drop-offs, and checkout funnels before writing a line of code or adjusting ad bids—eliminating guesswork completely.",
    icon: BarChart3,
    color: "border-emerald-200 bg-emerald-50/50 text-emerald-700",
  },
  {
    capability: "Built to Scale 10x Without Rewrites",
    badge: "Future-Proof Tech",
    impact: "Clean, documented architectures engineered to absorb massive order surges and international expansion without needing expensive rebuilds 12 months later.",
    icon: Shield,
    color: "border-amber-200 bg-amber-50/50 text-amber-700",
  },
];

// Section 6: Our Proven Growth Process
const growthProcessSteps = [
  {
    title: "Discovery & Technical Audit",
    desc: "We perform a deep-dive technical audit of your existing software architecture, operational bottlenecks, and market competitive landscape.",
    icon: Zap,
    color: "bg-violet-600 text-white border-violet-500 shadow-purple-500/30",
  },
  {
    title: "Strategy & System Architecture",
    desc: "We map out wireframes, user journeys, software architecture, and full-funnel marketing strategies designed to meet your target KPIs.",
    icon: Workflow,
    color: "bg-blue-600 text-white border-blue-500 shadow-blue-500/30",
  },
  {
    title: "Agile Engineering & Execution",
    desc: "Our developers and digital strategists build out your solution using clean code, rapid sprints, and continuous quality testing.",
    icon: Code,
    color: "bg-purple-600 text-white border-purple-500 shadow-purple-500/30",
  },
  {
    title: "Deployment, Optimization & Scaling",
    desc: "We launch your product, execute real-time conversion rate optimization (CRO), monitor infrastructure health, and provide ongoing strategic support.",
    icon: TrendingUp,
    color: "bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/30",
  },
];

// Section 2: Trust Marquee Logos & Partner Badges
const partnerLogos = [
  {
    name: "Shopify Plus",
    type: "E-Commerce Partner",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 5.5l-2.2.7c-1-3.2-3.2-5.4-5.9-5.4-.3 0-.6 0-.9.1-.4-1.1-1.3-1.9-2.5-2.2-1.9-.4-3.7.5-4.6 2.2-1.4 2.5-.7 6.7.1 10.1L1 12.1c-.4.1-.6.7-.2 1 .4.4 1.1 1.1 1.2 1.2 1.2 1.1 1.4 3 1.7 4.9.4 3 1.2 6.2 3.8 8.1.4.3.8.4 1.2.5l9.5-2.8c.4-.1.6-.5.5-.9l-2.3-18.2c-.1-.2-.3-.4-.5-.5zm-8 3l-3.3 1c-.5-2.6-1-5.5.1-7.1.7-1 2-1 3-.8.2 0 .4.1.6.4.8 1.5 1.5 3.9 1.8 6.5h-2.2zm-2.7 7.7l3.5-1c-.5-2.4-1-3.1-1.8-3.5-.3-.2-.7-.1-1 0l-3.5 2.4c-.2.2-.4.5-.3.8.2.6.6 1.1 1.1 1.3h2z" fill="#95BF47" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    type: "Enterprise CRM",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#00A1E0">
        <path d="M10.1 3.5c1.1-1.2 2.6-1.9 4.3-1.9 2.6 0 4.8 1.7 5.5 4.1.8.3 1.5.8 2 1.4.9 1 1.4 2.3 1.4 3.7 0 2.9-2.3 5.3-5.2 5.4h-.6c-.6 2.4-2.7 4.2-5.3 4.2-2.2 0-4.1-1.3-4.9-3.2-.6.3-1.3.4-2 .4-2.7 0-4.9-2.2-4.9-4.9 0-1.6.8-3.1 2.1-4 .1-.9.5-1.7 1.1-2.4 1.4-1.5 3.4-2.4 5.5-2.4.3 0 .7 0 1 .1z"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    type: "Growth CRM",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#FF7A59">
        <path d="M18.8 7.3V4.4c.8-.4 1.4-1.2 1.4-2.2C20.2 1 19.2 0 18 0s-2.2 1-2.2 2.2c0 1 .6 1.8 1.4 2.2v2.9c-1.3.3-2.3 1.2-2.8 2.3L8.6 6.1c.1-.3.2-.7.2-1.1 0-1.8-1.5-3.3-3.3-3.3S2.2 3.2 2.2 5s1.5 3.3 3.3 3.3c.7 0 1.3-.2 1.8-.6l5.7 3.4c-.2.6-.4 1.2-.4 1.9s.1 1.3.4 1.9l-5.7 3.4c-.5-.4-1.1-.6-1.8-.6-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3c0-.4-.1-.7-.2-1.1l5.8-3.5c.5 1.1 1.5 2 2.8 2.3v2.9c-.8.4-1.4 1.2-1.4 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-1-.6-1.8-1.4-2.2v-2.9c1.9-.5 3.3-2.2 3.3-4.3 0-2-1.4-3.8-3.3-4.3zm-.8 6.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"/>
      </svg>
    ),
  },
  {
    name: "WordPress",
    type: "CMS Platform",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#21759B">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2c5.964 0 10.8 4.836 10.8 10.8 0 2.21-.667 4.267-1.812 5.976l-5.69-15.588c.004-.01.008-.02.012-.03-.004-.002-.007-.004-.012-.006C14.417 1.684 13.237 1.2 12 1.2zm-7.697 4.14a9.553 9.553 0 0 1 5.07-3.99L4.475 14.54A9.556 9.556 0 0 1 4.303 5.34zm7.697 17.46c-2.09 0-4.045-.598-5.702-1.635l5.51-16.01 5.642 16.096A10.748 10.748 0 0 1 12 22.8zm8.79-4.83a9.544 9.544 0 0 1-3.666 3.618l5.228-15.093A9.556 9.556 0 0 1 20.79 17.97z"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    type: "Web Architecture",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#000000" />
        <path d="M18.8 19.8L10.3 8.7H8.5V15.3H9.9V10.6L17.7 20.7C18.1 20.4 18.5 20.1 18.8 19.8Z" fill="white" />
        <rect x="14.2" y="8.7" width="1.4" height="6.6" fill="white" />
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    type: "Infrastructure",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M7.05 10.42c-.5 0-.96.06-1.39.18-.42.12-.76.32-1.02.58-.26.27-.44.6-.54 1-.1.4-.1.85-.01 1.36.09.52.28.98.57 1.38.29.4.67.7 1.13.9.46.2.98.3 1.57.3.74 0 1.4-.18 1.97-.53.58-.35 1.01-.84 1.28-1.46v1.73h1.86V9.45h-1.86v1.44c-.28-.53-.7-.94-1.25-1.22-.55-.28-1.2-.42-1.95-.42l-.36.17zm.25 1.76c.4 0 .75.09 1.05.26.3.17.54.41.71.72.17.31.26.68.26 1.1s-.09.79-.26 1.1a1.9 1.9 0 0 1-.71.72c-.3.17-.65.26-1.05.26-.4 0-.75-.09-1.05-.26a1.9 1.9 0 0 1-.71-.72 2.37 2.37 0 0 1-.26-1.1c0-.42.09-.79.26-1.1.17-.31.41-.55.71-.72.3-.17.65-.26 1.05-.26z" fill="#232F3E"/>
        <path d="M18.83 6.94l-1.86.34v7.35c0 .35.08.62.24.8.16.19.43.28.81.28h.81v1.54h-1.3c-.93 0-1.63-.25-2.09-.76-.46-.51-.69-1.24-.69-2.18V7.33l-1.87.34V5.8h1.87V3.53h1.86V5.8h2.22v1.14z" fill="#232F3E"/>
        <path d="M21.92 16.96c-2.47 1.82-5.71 2.79-8.81 2.79-4.36 0-8.29-1.62-11.25-4.32-.23-.21-.03-.5.25-.34 3.19 1.85 7.14 2.96 11.2 2.96 2.76 0 5.8-.68 8.44-2.1.39-.21.72.23.17.51v.5z" fill="#FF9900"/>
        <path d="M22.84 15.65c-.31-.4-.88-.58-1.95-.44-1.07.13-2.31.75-2.46.96-.15.21.05.46.2.35.48-.35 1.58-.45 2.15-.38.58.07 1.34.43 1.48.71.14.28.4.13.58-.15.18-.28.31-.65 0-1.05z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: "Meta",
    type: "Paid Media",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 7.07C9.36 2.5 4.88 2.06 2.19 4.75-.49 7.43-.2 12.06 2.76 15.15c2.4 2.5 5.25 2.22 8.04-1.57l1.2-1.63 1.2 1.63c2.79 3.79 5.64 4.07 8.04 1.57 2.96-3.09 3.25-7.72.57-10.4-2.69-2.69-7.17-2.25-9.81 2.32zm-6.27 7c-1.89 0-3.23-1.47-3.23-3.52 0-2.34 1.7-3.87 3.59-3.87 1.83 0 3.26 1.41 4.54 3.7-1.39 2.38-2.95 3.69-4.9 3.69zm12.54 0c-1.95 0-3.51-1.31-4.9-3.69 1.28-2.29 2.71-3.7 4.54-3.7 1.89 0 3.59 1.53 3.59 3.87 0 2.05-1.34 3.52-3.23 3.52z" fill="#0668E1"/>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    type: "Enterprise Cloud",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
        <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.61.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#FFFFFF" fillOpacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    type: "Data Layer",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#336791">
        <path d="M11.967 0C7.29 0 4.673 2.95 4.382 6.096c-.34 3.666 1.488 6.744 1.488 6.744-.33.15-.71.28-1.12.38-1.52.37-2.67 1.25-2.67 2.71 0 1.76 1.63 2.77 3.69 2.77 1.42 0 2.53-.48 3.14-1.28.32.22.68.42 1.08.58-1.42 1.34-1.24 3.12-.13 4.29 1.15 1.22 3.11 1.71 5.31 1.71 2.45 0 4.54-.61 5.76-2.01 1.09-1.25 1.18-2.92.51-4.43 1.27-.61 2.19-1.8 2.48-3.23.36-1.78-.32-3.8-1.85-5.11-.2-.17-.42-.32-.65-.45.03-.4.04-.79.02-1.18C21.14 3.32 17.53 0 11.967 0zm.06 2.12c4.32 0 6.94 2.53 6.69 6.22-.05.77-.24 1.5-.54 2.16-1.15-.73-2.62-1.13-4.24-1.13-1.1 0-2.12.18-3.01.52-.7-1.71-1.06-3.81-.88-5.32.19-1.61 1.69-2.45 1.98-2.45zm-1.8 9.53c1.07-.35 2.27-.54 3.52-.54 1.63 0 3.12.33 4.24 1.01.27.76.24 1.59-.09 2.29-.44.93-1.39 1.55-2.58 1.68-.42-1.34-1.29-2.38-2.43-2.94-.87-.43-1.82-.62-2.66-.5zm-4.4 3.66c1.17 0 2.14.47 2.44 1.16-.62.48-1.46.77-2.44.77-1.16 0-1.83-.54-1.83-1.13 0-.49.62-.8 1.83-.8z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    type: "API Backend",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm0 2.7l4.5 2.6v5.2L12 17.4l-4.5-2.6v-5.2L12 7z"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    type: "Payments Engine",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 16.14.47 13.976.47 8.077.47 4.093 3.486 4.093 8.375c0 5.488 4.704 6.647 8.28 7.975 2.502.934 3.356 1.642 3.356 2.664 0 .984-.874 1.545-2.312 1.545-2.696 0-5.597-1.135-7.464-2.155L5.05 23.9c1.996.866 4.67 1.34 7.214 1.34 6.223 0 10.395-3.037 10.395-8.109 0-5.637-4.48-6.936-8.683-7.981z"/>
      </svg>
    ),
  },
];



export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-white font-sans">
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO AREA (THE HOOK)
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
        style={{ background: "linear-gradient(160deg, #faf5ff 0%, #f0f9ff 50%, #fdf4ff 100%)" }}
      >
        <ParticleField count={40} color="124, 58, 237" opacity={0.25} />

        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] mesh-blob-1 opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] mesh-blob-2 opacity-50 pointer-events-none" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] mesh-blob-3 opacity-40 pointer-events-none" />

        <GlowingOrb className="top-[-5%] left-[10%]" color="#7C3AED" size={350} opacity={0.12} duration={10} />
        <GlowingOrb className="bottom-[10%] right-[15%]" color="#38bdf8" size={280} opacity={0.1} duration={12} />

        <div className="relative z-10 max-w-5xl px-6 md:px-8 w-full flex flex-col items-center text-center mx-auto">
          {/* Centered Hero Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity" }}
            className="flex flex-col items-center text-center gap-6 max-w-4xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 font-display"
            >
              We Build High-Performance Web Applications &amp;{" "}
              <AnimatedGradientText from="#6D28D9" via="#9333EA" to="#38bdf8">
                Scale Them with Performance Marketing That Drives Actual Revenue
              </AnimatedGradientText>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal mx-auto"
            >
              Stop losing shoppers to sluggish load times and burning ad spend on unoptimized funnels. We unite full-stack web engineering, custom headless e-commerce, and automated CRM/ERP workflows with ruthless, data-driven acquisition.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  colorTheme="violet"
                  className="!py-4 !px-8 !text-sm sm:!text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 flex items-center justify-center gap-2 w-full sm:w-auto group"
                >
                  <span>Book a Free Architecture Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  colorTheme="violet"
                  className="!py-4 !px-8 !text-sm sm:!text-base bg-white/80 hover:bg-white w-full sm:w-auto"
                >
                  Explore Case Studies
                </Button>
              </Link>
            </motion.div>

            {/* Trust Assurances */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium pt-2"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free 30-min Technical Scope
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> NDA Signed Before Scoping
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Direct Senior Engineering Access
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: TRUST & CREDIBILITY BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-gradient-to-r from-purple-50/50 via-white to-sky-50/50 border-y border-purple-100/70 relative">
        <div className="max-w-7xl px-6 md:px-8 mx-auto text-center mb-6">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 font-display">
              Empowering Ambitious Startups &amp; Global Enterprises to Scale Predictably.
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Scrolling Carousel of Client & Tech Partner Badges */}
        <div className="relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6 pr-6">
            {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl border border-purple-100/90 bg-white/95 backdrop-blur-sm shadow-sm hover:border-purple-300 hover:shadow-md transition-all shrink-0 group"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black text-slate-900 leading-tight font-display">{partner.name}</span>
                  <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider font-mono">{partner.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: WHO WE ARE (THE VALUE PROPOSITION)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-white">
        <GlowingOrb className="top-10 left-[-5%]" color="#7C3AED" size={350} opacity={0.07} blur={100} />
        <GlowingOrb className="bottom-10 right-[-5%]" color="#38bdf8" size={300} opacity={0.07} blur={90} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <ScrollReveal direction="left" className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Your Next-Generation Technology &amp;{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Revenue Growth Partner
                </AnimatedGradientText>
              </h2>

              <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
                <p className="font-semibold text-slate-900">
                  At <strong className="text-purple-700 font-bold">KK Next Tech Solutions</strong>, we go beyond writing code and running ad campaigns, we build integrated, resilient digital ecosystems engineered to deliver predictable revenue.
                </p>
                <p className="font-normal text-slate-600">
                  Whether you are an agile startup looking to capture market share or an established enterprise modernizing legacy architecture, we deploy targeted technology stacks and precision marketing frameworks aligned directly with your bottom-line business objectives.
                </p>
              </div>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Predictable Revenue Focus", desc: "Digital ecosystems built around bottom-line growth" },
                  { title: "Agile & Enterprise Ready", desc: "From fast startup MVPs to secure enterprise modernization" },
                  { title: "Integrated Tech & Growth", desc: "No silos: engineering and marketing work in sync" },
                  { title: "Bespoke Modern Stacks", desc: "Zero bloat, sub-second load times & hardened security" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                    <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column: Visual Feature Showcase Card */}
            <ScrollReveal direction="right" className="lg:col-span-5">
              <Tilt3DCard intensity={6}>
                <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border border-purple-500/20 shadow-2xl relative overflow-hidden flex flex-col gap-6">
                  <GlowingOrb className="-top-20 -right-20" color="#7C3AED" size={250} opacity={0.3} blur={60} />

                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Integrated Growth Ecosystem</span>
                    <h3 className="text-2xl font-black font-display leading-tight">
                      Engineering + Performance Marketing = Unstoppable Scale
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We unify custom web architecture, e-commerce infrastructure, CRM automation, and performance marketing under one accountable agency roof.
                    </p>
                  </div>

                  {/* Visual Dashboard Snippet */}
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 group/img">
                    <img
                      src="/images/hero_dashboard.jpg"
                      alt="KK Next Tech Architecture & Growth Dashboard"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Average Growth Rate</p>
                      <p className="text-xl font-extrabold text-emerald-400">+240% YoY Revenue</p>
                    </div>
                    <Link href="/contact">
                      <Button variant="primary" colorTheme="violet" className="!py-2.5 !px-5 !text-xs">
                        Start Audit
                      </Button>
                    </Link>
                  </div>
                </div>
              </Tilt3DCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: CORE SOLUTIONS (SERVICE OFFERINGS)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-12 md:py-16 bg-slate-50/60 relative overflow-hidden border-y border-purple-100/60">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-3xl">
                High-Performance Solutions Engineered for{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Bottom-Line Growth
                </AnimatedGradientText>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-2xl leading-relaxed text-base">
                Discover our specialized capabilities across custom web development, e-commerce, headless CMS, performance marketing, and enterprise CRM/ERP integration.
              </p>
            </ScrollReveal>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSolutions.map((sol, idx) => (
              <ScrollReveal key={sol.id} delay={idx * 0.08} direction="up">
                <Tilt3DCard intensity={6} className="h-full">
                  <Link href={sol.link} className="block h-full">
                    <div
                      className={cn(
                        "h-full rounded-3xl p-8 border border-purple-100 bg-white shadow-lg shadow-purple-900/5",
                        "hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group flex flex-col justify-between gap-6"
                      )}
                    >
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                          <div className={cn("w-13 h-13 rounded-2xl flex items-center justify-center border p-3.5", sol.iconColor)}>
                            <sol.icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-extrabold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                            {sol.stat}
                          </span>
                        </div>

                        <div className="flex flex-col gap-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-purple-600">{sol.badge}</span>
                          <h3 className="text-xl font-extrabold text-slate-900 font-display leading-tight group-hover:text-purple-700 transition-colors">
                            {sol.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed font-normal">
                            {sol.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 pt-4 border-t border-purple-100/80">
                        <div className="flex flex-wrap gap-1.5">
                          {sol.highlights.map((h, i) => (
                            <span key={i} className="text-[11px] font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs font-bold text-slate-700 group-hover:text-purple-700 transition-colors">
                            Explore Architecture &amp; Impact
                          </span>
                          <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: WHY PARTNER WITH US? (THE DIFFERENTIATORS)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <GlowingOrb className="top-1/2 left-[-10%]" color="#7C3AED" size={450} opacity={0.06} blur={120} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                Why Partner With Us?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-2xl leading-relaxed text-base">
                We bring web development, software solutions and digital marketing together to help businesses work more efficiently and reach their goals.
              </p>
            </ScrollReveal>
          </div>

          {/* Differentiators Matrix / Styled Comparison Table */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-purple-200 shadow-xl shadow-purple-900/5 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white font-display">
                  <th className="py-5 px-8 text-base font-extrabold w-1/3">Core Capability</th>
                  <th className="py-5 px-8 text-base font-extrabold w-2/3">Strategic Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {differentiators.map((diff, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/40 transition-colors">
                    <td className="py-6 px-8 align-top">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2.5 rounded-xl border", diff.color)}>
                          <diff.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-base font-extrabold text-slate-900 font-display block">{diff.capability}</span>
                          <span className="text-xs font-semibold text-purple-600">{diff.badge}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-8 align-top">
                      <p className="text-slate-600 leading-relaxed font-medium text-base">
                        {diff.impact}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Version for Differentiators */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {differentiators.map((diff, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} direction="up">
                <div className="p-6 rounded-3xl border border-purple-100 bg-purple-50/30 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2.5 rounded-xl border", diff.color)}>
                      <diff.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 font-display">{diff.capability}</h4>
                      <span className="text-xs font-bold text-purple-600">{diff.badge}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{diff.impact}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: OUR PROVEN GROWTH PROCESS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-slate-50/60 border-t border-purple-100">
        <GlowingOrb className="top-0 left-[20%]" color="#7C3AED" size={400} opacity={0.08} blur={120} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16 relative z-10">
          <div className="text-center flex flex-col items-center gap-4">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                Our Proven Growth Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-xl leading-relaxed text-base">
                A structured 4-step execution framework designed to transition your vision from technical audit to predictable scaling.
              </p>
            </ScrollReveal>
          </div>

          {/* 4-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthProcessSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <Tilt3DCard intensity={8} className="h-full">
                    <div className="h-full rounded-3xl p-8 border border-purple-100 bg-white shadow-lg shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between gap-6 group">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <div
                            className={cn(
                              "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg font-display font-black text-lg",
                              step.color
                            )}
                          >
                            {Icon && <Icon className="w-6 h-6 stroke-[2.5]" />}
                          </div>
                          <span className="text-2xl font-black font-display text-purple-300 group-hover:text-purple-600 transition-colors">
                            {`0${idx + 1}`}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-extrabold text-lg text-slate-900 font-display leading-tight">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {step.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-purple-100/80 flex items-center gap-2 text-xs font-bold text-purple-600">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        Milestone Verified
                      </div>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PORTFOLIO & CASE STUDIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
              
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                  <AnimatedGradientText>Client Success Stories</AnimatedGradientText>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/portfolio">
                <Button variant="outline" className="shrink-0">
                  All Case Studies <ArrowRight className="inline w-4 h-4 ml-1" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 0.1} direction={idx === 0 ? "left" : "right"}>
                <Tilt3DCard intensity={6} className="h-full">
                  <div className="h-full rounded-3xl p-8 border border-purple-100 bg-white shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <Badge colorTheme="navy">{project.category}</Badge>
                      <span className="text-xs font-extrabold bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 px-3 py-1.5 rounded-full border border-purple-200">
                        {project.resultMetric}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors leading-tight font-display mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="relative w-full h-[230px] rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 group/img">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs font-mono bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-purple-800 group-hover:translate-x-1 transition-all"
                      >
                        View Case Study <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6.5: CLIENT TESTIMONIALS & TRUST PROOF
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white via-purple-50/30 to-slate-50/40 relative overflow-hidden border-t border-purple-100/60">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Trusted by Forward-Thinking Brands &amp;{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Enterprise Leaders
                </AnimatedGradientText>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Read how our custom development, performance marketing, and operational CRM automations have delivered measurable business ROI.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={t.id} delay={idx * 0.08}>
                <Tilt3DCard intensity={6} className="h-full">
                  <div className="h-full p-6 rounded-3xl bg-white border border-purple-100/80 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between gap-6 group">
                    <div className="flex flex-col gap-4">
                      {/* Rating Stars & Metric */}
                      <div className="flex items-center justify-between gap-2">
                        {t.metric ? (
                          <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                            {t.metric}
                          </span>
                        ) : null}
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-50 flex flex-col gap-3">
                      <div>
                        <p className="text-sm font-extrabold text-slate-900 font-display leading-tight">{t.clientName}</p>
                        <p className="text-xs text-purple-700 font-bold">{t.role}</p>
                        <p className="text-[11px] text-slate-500 font-semibold">{t.company}</p>
                      </div>

                      {t.caseStudySlug && (
                        <Link
                          href={`/portfolio/${t.caseStudySlug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:translate-x-0.5 transition-all"
                        >
                          Read Verified Case Study <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: FREQUENTLY ASKED QUESTIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-purple-100 bg-slate-50/40">
        <FAQSection
          items={homeFAQs}
          eyebrow="Frequently Asked Questions"
          title="Questions About Our Services?"
          description="Learn how KK Next Tech Solutions works with startups and established businesses to deliver web development, software and digital marketing services."
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: CONVERSION FOOTER (FINAL CALL-TO-ACTION)
      ═══════════════════════════════════════════════════════════════════ */}
      <CTABanner
  
        title={
          <>
            Stop Guessing. Build Scalable{" "}
            <AnimatedGradientText>Software &amp; Growth Systems.</AnimatedGradientText>
          </>
        }
        description="Book a 30-minute technical roadmap call. We will audit your current architecture or ad stack and outline an actionable execution plan."
        buttonText="Book Free Technical Roadmap Call →"
        buttonLink="/contact"
      />
    </div>
  );
}
