"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Cpu,
  Globe,
  Bell,
  Lock,
  Database,
  CloudCheck,
  Check,
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

const mobileFAQs: FAQItem[] = [
  {
    q: "Why build cross-platform with React Native or Flutter instead of native Swift/Kotlin?",
    a: "Cross-platform engineering allows your business to deploy simultaneously to both iOS (Apple App Store) and Android (Google Play Store) with a single codebase. This cuts development and maintenance costs in half, accelerates time-to-market, and delivers native 60fps performance without platform lag.",
  },
  {
    q: "Do you handle App Store and Google Play Store approvals and submissions?",
    a: "Yes, 100%. We manage the end-to-end publishing pipeline: creating developer accounts, configuring bundle certificates, writing privacy disclosures, testing against human review guidelines, and guaranteeing first-time approval.",
  },
  {
    q: "How does offline-first database synchronization work in your apps?",
    a: "We engineer local embedded database caching (using WatermelonDB or SQLite) so users can browse, submit data, and perform actions even with zero internet connectivity. When the device reconnects to Wi-Fi or cellular, the app automatically syncs changes to your cloud database in the background.",
  },
  {
    q: "How long does a mobile app MVP typically take to launch?",
    a: "A production-ready mobile MVP with 4–6 core user flows, authentication, push notifications, and payment processing takes 4 to 8 weeks. Enterprise apps with complex custom hardware integrations (Bluetooth, GPS, IoT) take 8 to 14 weeks.",
  },
  {
    q: "What security measures do you implement for user data and payments?",
    a: "All network traffic is encrypted via TLS 1.3 with SSL certificate pinning. Local sensitive tokens are stored inside hardware keystores (iOS Keychain and Android Keystore). Payment processing is handled via PCI-DSS compliant SDKs (Stripe, Razorpay, or Apple/Google Pay).",
  },
];

const mobilePillars = [
  {
    title: "Native 60 FPS Performance",
    desc: "Silky smooth UI transitions and responsive touch gestures built with React Native and Flutter, indistinguishable from pure native code.",
    icon: Zap,
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "Offline-First Synchronization",
    desc: "Local embedded storage with optimistic UI updates. Your users never see a loading spinner or lose unsaved actions when offline.",
    icon: Database,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    title: "Guaranteed App Store Approvals",
    desc: "Complete handling of Apple App Store Guidelines and Google Play Compliance, privacy manifests, and sandbox test builds.",
    icon: Shield,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "Automated Retargeting & Push",
    desc: "Segmented rich push notifications, in-app messaging triggers, and deep linking that drive daily active users and conversion funnels.",
    icon: Bell,
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
];

export default function MobileAppsPage() {
  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-x-clip font-sans">
      <ParticleField count={35} color="59, 130, 246" opacity={0.12} />
      <GlowingOrb className="top-[-8%] right-[-5%]" color="#3B82F6" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#7C3AED" size={380} opacity={0.08} blur={100} />

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">

          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display text-slate-900 uppercase">
              Mobile Apps <br />
              <AnimatedGradientText from="#2563EB" via="#7C3AED" to="#06B6D4">
                Engineered For Native Scale.
              </AnimatedGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We design and build high-performance iOS and Android mobile applications using React Native and Flutter. Fast, responsive, offline-ready, and loved by users.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact?service=mobile-apps">
                <Button variant="primary" colorTheme="sky" className="!py-3.5 !px-8 text-sm font-bold shadow-xl shadow-blue-500/25">
                  Launch Your Mobile App →
                </Button>
              </Link>
              <Link href="/portfolio?category=Mobile+Apps">
                <Button variant="outline" className="!py-3.5 !px-8 text-sm font-bold border-slate-300 hover:bg-slate-50">
                  Explore Mobile Case Studies
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Tech Stack Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 text-xs font-mono font-bold text-slate-500">
            {["React Native", "Flutter", "TypeScript", "iOS / Swift", "Android / Kotlin", "Firebase", "PostgreSQL", "Fastlane CI"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. VISUAL SHOWCASE & CORE STATS ── */}
      <section className="py-10 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-blue-100 shadow-2xl group bg-slate-900 relative">
            <img
              src="/images/mobile_app_showcase.jpg"
              alt="KK Next Tech Solutions Cross-Platform Mobile Engineering"
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                Production-Ready Architecture
              </span>
              <p className="text-xl font-black font-display">
                Single Codebase. 100% Native Performance on Both Stores.
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  ● Apple App Store Verified
                </span>
                <span className="flex items-center gap-1 text-blue-400 font-bold">
                  ● Google Play Verified
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col gap-4">
              
              <h3 className="text-2xl font-black text-slate-900 font-display">
                Why Industry Leaders Deploy With Us
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than building isolated iOS and Android codebases that require two separate engineering teams, our cross-platform architecture slashes delivery timelines in half and guarantees consistent user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex flex-col gap-1">
                <span className="text-3xl font-black text-blue-900 font-display">60 FPS</span>
                <span className="text-xs text-slate-600 font-medium">Native Gesture Fluidity</span>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200/80 flex flex-col gap-1">
                <span className="text-3xl font-black text-purple-900 font-display">50%</span>
                <span className="text-xs text-slate-600 font-medium">Faster Time to Market</span>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col gap-1">
                <span className="text-3xl font-black text-emerald-900 font-display">100%</span>
                <span className="text-xs text-slate-600 font-medium">Store Approval Record</span>
              </div>
              <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-200/80 flex flex-col gap-1">
                <span className="text-3xl font-black text-cyan-900 font-display">&lt; 100ms</span>
                <span className="text-xs text-slate-600 font-medium">Local Cache Read Speed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUR CORE CAPABILITY PILLARS ── */}
      <section className="py-12 bg-slate-50/70 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
          <SectionHeading
            eyebrow="Engineering Pillars"
            title="How We Build Flawless Mobile Products"
            description="From interaction design to automated CI/CD deployments and cloud backend synchronization."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobilePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col gap-4 justify-between hover:border-blue-300 transition-all"
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
        title="Ready to Build Your iOS & Android Mobile Application?"
        description="Schedule a technical discovery session with our mobile engineering leads. We'll map your architecture, timeline, and store publishing plan."
        buttonText="Schedule Mobile Discovery Call →"
        buttonLink="/contact"
      />

      {/* ── 6. COMPREHENSIVE FAQs ── */}
      <div className="border-t border-blue-100">
        <FAQSection
          items={mobileFAQs}
          eyebrow="Got Questions?"
          title="Mobile App Engineering — FAQs"
          description="Everything you need to know about our React Native & Flutter delivery, app store publishing, and maintenance."
        />
      </div>

    </div>
  );
}
