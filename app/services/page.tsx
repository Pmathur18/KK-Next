"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Laptop, 
  Smartphone, 
  Share2, 
  Database, 
  CheckCircle2, 
  Cpu, 
  Shield, 
  Layers
} from "lucide-react";
import { Instagram, Linkedin, Twitter, Facebook } from "@/components/ui/BrandIcons";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const allServicesFAQs: FAQItem[] = [
  {
    q: "How do I know which service is right for my business?",
    a: "Start with a discovery call — it's completely free and no-pressure. We'll assess your current tech stack, business growth objectives, and operations bottlenecks to propose a tailored plan rather than generic pre-packaged solutions."
  },
  {
    q: "Can I bundle multiple services (e.g. Website + Social Media + CRM)?",
    a: "Yes, and we highly recommend it! When your website, mobile app, marketing channels, and CRM/ERP automations are engineered by one unified team, there are zero communication gaps, seamless API synchronization, and full accountability."
  },
  {
    q: "How long does a website or mobile app project typically take?",
    a: "A standard website or MVP mobile application typically takes 3–5 weeks. Advanced headless Shopify builds and cross-platform apps take 6–10 weeks. Comprehensive CRM/ERP implementations range from 4–12 weeks depending on module complexities."
  },
  {
    q: "Do you build for both iOS and Android simultaneously?",
    a: "Yes! We build cross-platform mobile apps using React Native and Flutter, giving you native speed, 60fps animations, and a single shared codebase deployed across both Apple App Store and Google Play Store."
  },
  {
    q: "What makes your CRM & ERP service different?",
    a: "Unlike generic resellers, our engineers specialize in custom webhook pipelines, database synchronization, API middleware, and workflow automation on Zoho, Salesforce, and Odoo — visit our dedicated CRM & ERP page for in-depth capabilities."
  },
  {
    q: "Do you offer post-launch maintenance and continuous support?",
    a: "Every engagement includes a post-launch warranty and engineering support window. We also offer monthly retainer agreements covering 24/7 uptime monitoring, security updates, feature iterations, and analytics reviews."
  },
];

export default function ServicesPage() {
  const webPackages = [
    {
      name: "Starter Web",
      price: "₹2.5L",
      desc: "Perfect for emerging brands validating product ideas.",
      features: [
        "Modern Next.js or Shopify Setup",
        "5 Bespoke UI Design Templates",
        "100% Mobile & Tablet Responsive",
        "Core Web Vitals & SEO Setup",
        "1 Month Maintenance Support"
      ],
      color: "bg-white border border-slate-200",
    },
    {
      name: "Growth Engine",
      price: "₹5.5L",
      desc: "Our most popular build for scaling e-commerce & high-traffic brands.",
      features: [
        "Headless Commerce / Next.js App Router",
        "Custom Checkout & Inventory APIs",
        "Framer Motion Micro-Interactions",
        "Automated Webhooks & Analytics",
        "3 Months Dedicated Engineering Support"
      ],
      color: "bg-[#EBF3FC] border-2 border-[#0A2540]/30",
    },
    {
      name: "Enterprise Custom",
      price: "Custom Quote",
      desc: "Tailored code architectures for heavy industrial scales.",
      features: [
        "Custom Database & Microservice APIs",
        "Multi-region Edge CDN Optimization",
        "Penetration testing & Security seals",
        "Dedicated Account Lead & 24/7 SLAs",
        "CRM & ERP Deep Integration"
      ],
      color: "bg-white border border-slate-200",
    }
  ];

  const appFeatures = [
    {
      title: "UI/UX App Prototyping",
      desc: "Interactive visual mocks and animations engineered to validate and test flows on actual mobile devices.",
      icon: Layers,
    },
    {
      title: "Backend Sync & Integration",
      desc: "Robust API layer architectures establishing offline-first database sync frameworks with cloud databases.",
      icon: Cpu,
    },
    {
      title: "App Store Deployments",
      desc: "Complete handling of Apple App Store and Google Play submissions, compliance guidelines, and test phases.",
      icon: Smartphone,
    },
    {
      title: "Security & Monitoring",
      desc: "End-to-end data encryption mechanisms, device validation locks, and real-time crash monitoring suites.",
      icon: Shield,
    }
  ];

  const socialChannels = [
    { name: "LinkedIn", icon: Linkedin, color: "text-[#0A2540]" },
    { name: "Instagram", icon: Instagram, color: "text-[#1E40AF]" },
    { name: "Twitter / X", icon: Twitter, color: "text-ink" },
    { name: "Facebook", icon: Facebook, color: "text-[#0A2540]" }
  ];

  const socialMetrics = [
    { title: "+180%", metric: "Conversion CTR Growth" },
    { title: "-42%", metric: "Cost per Lead (CPL) Decrease" },
    { title: "650k+", metric: "Organic Monthly Reach" },
    { title: "3.5x", metric: "ROI Boost on Paid Campaigns" }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-6 pb-16 border-b border-slate-200">
        <span className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-[#0A2540]">
          Our Services
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-ink max-w-4xl font-display">
          High-performance engineering, creative media &amp; enterprise software.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
          We blend award-winning design aesthetics with production-ready software engineering. Explore our core services below or jump directly to what your business needs.
        </p>

        {/* Quick Nav Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="#websites"
            className="px-4 py-2 rounded-full bg-[#EBF3FC] hover:bg-[#DBEAFE] text-[#0A2540] text-xs font-bold transition-all border border-blue-200 flex items-center gap-1.5"
          >
            <Laptop className="w-3.5 h-3.5 text-[#0A2540]" /> Web Development
          </a>
          <a
            href="#social-media"
            className="px-4 py-2 rounded-full bg-[#F1F5F9] hover:bg-slate-200 text-[#050B14] text-xs font-bold transition-all border border-slate-200 flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5 text-[#0A2540]" /> Socials
          </a>
          <Link
            href="/services/crm-erp"
            className="px-4 py-2 rounded-full bg-[#050B14] hover:bg-black text-white text-xs font-bold transition-all border border-black flex items-center gap-1.5 group"
          >
            <Database className="w-3.5 h-3.5 text-white" /> CRM / ERP Automation
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── 2. SERVICE 1: WEBSITES & E-COMMERCE ── */}
      <section id="websites" className="py-20 max-w-7xl px-6 md:px-8 mx-auto border-b border-slate-200 scroll-mt-24">
        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-2xl">
              <Badge colorTheme="navy" className="w-fit">Web Development</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight font-display">
                Websites (Shopify &amp; Bespoke Custom)
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                High-conversion Shopify stores and bespoke Next.js web applications tailored to scale your brand. We prioritize blazingly fast load times, pixel-perfect UX, and robust backend integrations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Next.js", "React", "Shopify Headless", "Tailwind CSS", "TypeScript", "Node.js"].map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white px-3 py-1 rounded-full text-slate-700 border border-slate-200 shadow-2xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Web Packages / Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webPackages.map((pkg) => (
              <Card key={pkg.name} className={cn("p-8 flex flex-col justify-between rounded-3xl", pkg.color)}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-ink">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 min-h-[32px]">{pkg.desc}</p>
                  </div>
                  <div className="text-3xl font-extrabold text-ink font-display">
                    {pkg.price}
                  </div>
                  <ul className="flex flex-col gap-3 text-xs text-slate-700">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0A2540] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="mt-8">
                  <Button variant="outline" className="w-full !text-xs !py-2.5">
                    Choose {pkg.name}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. SERVICE 2: MOBILE APPLICATIONS ── */}
      <section id="mobile-apps" className="py-20 max-w-7xl px-6 md:px-8 mx-auto border-b border-slate-200 scroll-mt-24">
        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-2xl">
              <Badge colorTheme="navy" className="w-fit">App Engineering</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight font-display">
                Mobile Apps (iOS &amp; Android)
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Stunning cross-platform mobile apps built with React Native and Flutter for flawless native performance. One shared codebase with seamless App Store &amp; Google Play deployments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["React Native", "Flutter", "TypeScript", "iOS / Swift", "Android / Kotlin", "Firebase"].map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white px-3 py-1 rounded-full text-slate-700 border border-slate-200 shadow-2xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile App Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <Card key={feat.title} colorBg="bg-white" className="p-6 flex flex-col gap-4 border border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3FC] flex items-center justify-center text-ink border border-blue-200/50">
                    <Icon className="w-6 h-6 text-[#0A2540]" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. SERVICE 3: SOCIAL MEDIA & GROWTH ── */}
      <section id="social-media" className="py-20 max-w-7xl px-6 md:px-8 mx-auto border-b border-slate-200 scroll-mt-24">
        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-2xl">
              <Badge colorTheme="navy" className="w-fit">Digital Growth</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight font-display">
                Social Media Management &amp; Paid Ads
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Data-driven creative campaigns, full content production, paid performance advertising, and organic community scaling to amplify customer acquisition.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Meta Ads", "Google Analytics", "Figma", "TikTok Ads", "LinkedIn Ads", "Content Studio"].map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white px-3 py-1 rounded-full text-slate-700 border border-slate-200 shadow-2xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Channels & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Channels Card */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Channels We Scale</span>
              <div className="grid grid-cols-2 gap-4">
                {socialChannels.map((chan) => {
                  const Icon = chan.icon;
                  return (
                    <div key={chan.name} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 font-bold text-sm text-ink">
                      <Icon className={cn("w-5 h-5", chan.color)} />
                      <span>{chan.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-sm font-semibold text-slate-600">Want to see our interactive content scheduler &amp; analytics suite?</span>
                <Link href="/services/social-media-management">
                  <Button variant="primary" colorTheme="violet" className="!py-2.5 !px-6 !text-sm">
                    Explore Dedicated Social Platform →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {socialMetrics.map((item) => (
                <div key={item.metric} className="p-6 rounded-3xl bg-[#EBF3FC] border border-blue-200 flex flex-col gap-1.5">
                  <span className="text-3xl lg:text-4xl font-black text-[#0A2540] font-display">{item.title}</span>
                  <span className="text-xs font-semibold text-slate-700">{item.metric}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. CRM & ERP DEDICATED SPOTLIGHT (Apple Glass Design) ── */}
      <section className="py-16 max-w-7xl px-6 md:px-8 mx-auto">
        <div className="rounded-[36px] bg-slate-950/80 backdrop-blur-2xl text-white border border-white/15 p-8 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/15 rounded-full filter blur-[90px] pointer-events-none" />
          
          <div className="flex flex-col gap-4 max-w-2xl z-10">
            <div className="flex items-center gap-2">
              <Badge colorTheme="navy">Enterprise Dedicated Solution</Badge>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">★ Dedicated Portal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
              Looking for CRM &amp; ERP Solutions?
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              We offer a dedicated enterprise portal for deep workflow automations, custom database connectors, and enterprise systems including <strong>Zoho CRM</strong>, <strong>Salesforce</strong>, and <strong>Odoo ERP</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {["Salesforce", "Zoho One", "Odoo ERP", "Python Scripts", "PostgreSQL", "AWS Webhooks"].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md text-slate-200 border border-white/10 font-semibold backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="z-10 shrink-0">
            <Link href="/services/crm-erp">
              <Button variant="primary" colorTheme="peach" className="!py-4 !px-8 text-sm font-bold shadow-lg">
                Explore Dedicated CRM &amp; ERP Page →
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 6. BOTTOM CTA BLOCK (Apple Glass Design) ── */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto py-12">
        <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/15 text-white rounded-[36px] p-8 md:p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/15 rounded-full filter blur-[90px] pointer-events-none" />
          <SectionHeading
            eyebrow="Get Consultation"
            title="Unsure which stack fits your project?"
            description="Our solutions architects are available to run a full operations and technical code audit."
            align="center"
            theme="dark"
          />
          <Link href="/contact">
            <Button variant="primary" colorTheme="navy">
              Schedule Free 30-Min Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      {/* ── 7. COMPREHENSIVE FAQs ── */}
      <div className="border-t border-slate-200">
        <FAQSection
          items={allServicesFAQs}
          eyebrow="Got Questions?"
          title="Services — FAQs"
          description="Common questions about our web development, mobile apps, marketing, and CRM services."
        />
      </div>

    </div>
  );
}
