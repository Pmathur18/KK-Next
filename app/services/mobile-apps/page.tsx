"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Smartphone, Cpu, Shield, HelpCircle, Layers } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";

const mobileFAQs: FAQItem[] = [
  {
    q: "Do you build for iOS, Android, or both?",
    a: "We build for both simultaneously using Flutter or React Native, which means you get a single codebase that runs natively on both iOS (App Store) and Android (Google Play). This significantly reduces development time and cost compared to separate native builds."
  },
  {
    q: "Flutter or React Native — which do you recommend?",
    a: "For apps requiring highly custom UI animations and pixel-perfect design, we recommend Flutter. For apps that need to share business logic with a React web app or require a large third-party JS library ecosystem, React Native is the stronger choice. We recommend based on your specific requirements, not our preferences."
  },
  {
    q: "How much does a mobile app typically cost?",
    a: "A standard MVP mobile app (authentication, core screens, REST API integration) typically starts around ₹4–6 lakhs. Feature-rich apps with real-time chat, offline sync, payment gateways, and custom animations range from ₹10–25 lakhs. We scope every project individually and provide fixed-price quotes."
  },
  {
    q: "Do you handle App Store and Google Play submission?",
    a: "Yes — we manage the full submission process for both stores. This includes setting up developer accounts (if needed), writing app store listings, creating screenshots and preview videos, configuring in-app purchases, handling review feedback, and pushing the final approved build live."
  },
  {
    q: "Can the app work offline without an internet connection?",
    a: "Yes. We implement offline-first architecture using on-device SQLite databases and background sync queues. Your users can interact with the app fully offline, and data syncs automatically when connectivity is restored — with conflict resolution handled gracefully."
  },
  {
    q: "What happens after the app launches? Do you provide updates?",
    a: "Absolutely. Post-launch, we monitor crash logs via Firebase Crashlytics, push OS-compatibility updates as iOS/Android release new versions, and implement feature iterations based on your user feedback. We offer monthly retainer plans for ongoing app evolution so your product never goes stale."
  },
];

export default function MobileAppsService() {
  const serviceData = services.find((s) => s.id === "mobile-apps")!;
  const mobileProjects = projects.filter((p) => p.category === "Mobile Apps");

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

  return (
    <div className="relative overflow-hidden w-full bg-bg-base py-12 md:py-20">
      
      {/* Sub-Hero */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-6 pb-16 border-b border-zinc-200/50">
        <div className="flex items-center gap-2">
          <Link href="/services" className="text-xs font-semibold text-zinc-400 hover:text-ink">
            Services
          </Link>
          <span className="text-xs text-zinc-400">/</span>
          <span className="text-xs font-semibold text-accent-primary">Mobile Apps</span>
        </div>
        <Badge colorTheme="peach" className="w-fit">
          {serviceData.badge}
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink max-w-3xl">
          {serviceData.title}
        </h1>
        <p className="text-lg text-zinc-650 leading-relaxed max-w-2xl">
          {serviceData.longDescription}
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto border-b border-zinc-200/50">
        <div className="flex flex-col gap-12 md:gap-16">
          <SectionHeading
            eyebrow="Key Offerings"
            title="Engineered for high native performance"
            description="Our cross-platform builds ensure rapid release cycles while delivering the exact speed of native code bases."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="flex gap-6 p-8 rounded-3xl bg-white border border-zinc-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-pastel-peach flex items-center justify-center text-ink shadow-sm shrink-0">
                    <Icon className="w-6 h-6 text-accent-secondary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-ink">{feat.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-550 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform & Tech Stacks */}
      <section className="py-16 bg-white border-b border-zinc-200/50">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">
            Platform Frameworks:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {serviceData.techStack.map((tech) => (
              <span key={tech} className="text-xs md:text-sm font-mono bg-zinc-50 border border-zinc-200/60 px-4 py-1.5 rounded-full text-ink font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio */}
      {mobileProjects.length > 0 && (
        <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent mobile launches"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileProjects.map((p) => (
                <Card key={p.slug} colorBg={p.color as any} className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <Badge colorTheme="ink">{p.category}</Badge>
                    <h3 className="text-xl font-bold text-ink mt-2">{p.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-650 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-ink hover:text-accent-primary hover:translate-x-1 transition-all mt-6 pt-4 border-t border-zinc-950/5"
                  >
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <div className="border-t border-zinc-200/50">
        <FAQSection
          items={mobileFAQs}
          eyebrow="Got Questions?"
          title="Mobile App Development — FAQs"
          description="Common questions about building your iOS and Android app with us."
        />
      </div>

    </div>
  );
}
