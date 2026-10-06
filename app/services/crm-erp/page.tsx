"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Database,
  Workflow,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  GitBranch,
  RefreshCw,
  Clock,
  Shield,
  Server,
  Activity,
  ChevronRight
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import GlowingOrb from "@/components/ui/GlowingOrb";
import SpotlightSection from "@/components/ui/SpotlightSection";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import BeamBorder from "@/components/ui/BeamBorder";
import FloatingBadge from "@/components/ui/FloatingBadge";
import ParticleField from "@/components/ui/ParticleField";
import NumberTicker from "@/components/ui/NumberTicker";

import { projects } from "@/data/portfolio";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const crmFAQs: FAQItem[] = [
  {
    q: "Which CRM and ERP platforms do you work with?",
    a: "Our primary platforms are Zoho CRM, Zoho One, Salesforce, Odoo, and HubSpot. For custom ERP builds we use Node.js + PostgreSQL backends with React admin dashboards. We choose the platform based on your team size, budget, and existing infrastructure — not based on commission."
  },
  {
    q: "Can you migrate our data from an existing CRM?",
    a: "Yes. Data migration is a core part of every CRM implementation. We audit your existing data, clean duplicates, map field structures to the new system, and run parallel testing before the final cutover. You don't lose a single lead record."
  },
  {
    q: "How much customization is possible with an off-the-shelf CRM like Zoho or Odoo?",
    a: "Quite a lot. Both Zoho and Odoo support custom modules, workflow automations, webhook integrations, and custom dashboards. For 80% of businesses, a well-configured Zoho or Odoo setup handles everything. If your processes are truly unique, we build custom modules or a fully bespoke system on top."
  },
  {
    q: "How long does a typical CRM/ERP implementation take?",
    a: "A standard Zoho CRM setup with custom pipelines and automation takes 3–5 weeks. A full Odoo ERP implementation (inventory, accounting, HR, sales) typically takes 8–16 weeks depending on module count and data complexity. We give you a fixed-scope timeline in writing before kickoff."
  },
  {
    q: "Do you provide training for our team after implementation?",
    a: "Yes — every implementation includes user training sessions tailored to each department (sales team, finance team, operations). We provide recorded walkthroughs, documentation, and a post-launch support window where your team can ask questions as real workflows begin."
  },
  {
    q: "Can the CRM integrate with our website, WhatsApp, and other tools?",
    a: "Absolutely. We connect your CRM to your website contact forms, WhatsApp Business API, email (Gmail/Outlook), payment gateways, inventory systems, and marketing tools. Our integrations use webhooks, Zapier, or direct API connections to ensure real-time data sync across all your tools."
  },
];

const pipelineStages = [
  {
    step: "01",
    name: "Multi-Source Lead Capture",
    desc: "Webhooks ingest leads in real-time from Shopify, Meta Ads, WhatsApp, and Webforms.",
    tag: "Instant 0.2s Sync",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
  },
  {
    step: "02",
    name: "AI Enrichment & Scoring",
    desc: "Autonomous heuristics classify deal size, assign priority tags, and verify email/phone authenticity.",
    tag: "Automated Heuristics",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-600",
  },
  {
    step: "03",
    name: "Intelligent Routing",
    desc: "Round-robin distribution allocates high-intent accounts to top agents with automatic calendar booking.",
    tag: "Zero Delay",
    icon: GitBranch,
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    step: "04",
    name: "Omnichannel Follow-up",
    desc: "Triggered WhatsApp, SMS, and Email drip sequences maintain high touchpoints until conversion.",
    tag: "3.4x Response",
    icon: RefreshCw,
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: "05",
    name: "ERP & Financial Sync",
    desc: "Won deals generate automated GST invoices, ledger entries, inventory reserves, and dispatch slips.",
    tag: "100% Error-free",
    icon: Server,
    color: "from-amber-500 to-orange-600",
  },
];

const erpFeatures = [
  {
    title: "End-to-End Sales Pipelines",
    desc: "Connect lead capture scripts to customer profiles, tracking deal velocity, communication trails, and rep performance.",
    icon: BarChart3,
    stat: "42% faster cycle",
    color: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-200/80",
    iconColor: "text-purple-600 bg-purple-50",
  },
  {
    title: "Real-time Inventory & ERP Core",
    desc: "Synchronize raw material stocks, warehouse dispatch, supplier purchase orders, and double-entry accounting ledgers.",
    icon: Database,
    stat: "Zero stock drift",
    color: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-200/80",
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    title: "Autonomous Workflow Engine",
    desc: "Eliminate manual data re-entry with asynchronous webhook relays, validation rules, and smart escalation alerts.",
    icon: Workflow,
    stat: "60+ hrs saved/mo",
    color: "from-fuchsia-500/10 to-pink-500/5",
    border: "border-fuchsia-200/80",
    iconColor: "text-fuchsia-600 bg-fuchsia-50",
  },
  {
    title: "Executive Intelligence Portals",
    desc: "Role-based dashboards delivering instant drill-downs on gross margins, churn risk, and live pipeline health.",
    icon: ShieldCheck,
    stat: "Sub-second load",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-200/80",
    iconColor: "text-emerald-600 bg-emerald-50",
  },
];

export default function CrmErpService() {
  const serviceData = services.find((s) => s.id === "crm-erp")!;
  const crmProjects = projects.filter((p) => p.category === "CRM/ERP");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative overflow-hidden w-full bg-white py-12 md:py-20">

      {/* ── 1. HERO SECTION (Salesforce & Zoho Inspired) ── */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-8 pb-16 relative">
        <ParticleField count={45} color="124, 58, 237" opacity={0.2} />
        <GlowingOrb className="top-[-20%] left-[-10%]" color="#7C3AED" size={450} opacity={0.12} blur={120} />
        <GlowingOrb className="top-[30%] right-[-10%]" color="#38bdf8" size={380} opacity={0.1} blur={100} />

        <div className="flex items-center gap-2">
          <Link href="/services" className="text-xs font-bold text-slate-500 hover:text-purple-600 transition-colors">
            Services
          </Link>
          <span className="text-xs text-slate-400">/</span>
          <span className="text-xs font-bold text-purple-700">CRM &amp; ERP Solutions</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-5 max-w-3xl">
            <ScrollReveal>
              <BeamBorder colorFrom="#7C3AED" colorTo="#38bdf8" duration={3} borderRadius="999px" className="inline-block w-fit">
                <div className="bg-white px-4 py-1.5 rounded-full flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-purple-600 fill-current" />
                  <span className="text-xs font-bold text-purple-800">
                    Enterprise Workflow Automation
                  </span>
                </div>
              </BeamBorder>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 font-display">
                Automate Your Entire Operation with{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Zoho, Salesforce &amp; Odoo
                </AnimatedGradientText>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                We engineer scalable database middleware, bidirectional CRM synchronization, and automated invoicing pipelines that turn chaotic ops into clockwork.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact">
                  <Button variant="primary" colorTheme="violet" className="!py-3.5 !px-8 !text-sm shadow-xl shadow-purple-500/25">
                    Schedule Architecture Audit →
                  </Button>
                </Link>
                <a href="#pipeline-demo">
                  <Button variant="outline" className="!py-3.5 !px-6 !text-sm">
                    View Live Pipeline Architecture
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating Metric Badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <FloatingBadge
              icon={<BarChart3 className="w-4 h-4" />}
              subtitle="Efficiency Metric"
              title="60% Lower Ops Latency"
              delay={0.2}
            />
            <FloatingBadge
              icon={<Shield className="w-4 h-4" />}
              subtitle="Reliability"
              title="99.99% Sync Accuracy"
              delay={0.4}
            />
            <FloatingBadge
              icon={<Clock className="w-4 h-4" />}
              subtitle="Deployment Speed"
              title="3-5 Weeks Avg Go-Live"
              delay={0.6}
            />
          </div>
        </div>

        {/* ── 3D Dashboard Mockup with Glow & Perspective ── */}
        <ScrollReveal delay={0.3} className="w-full mt-6">
          <Tilt3DCard intensity={6} className="w-full">
            <div className="w-full relative rounded-[32px] overflow-hidden border border-purple-200/80 shadow-[0_25px_60px_rgba(124,58,237,0.12)] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-2 md:p-3.5 group">
              <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-900">
                <Image
                  src="/images/crm_erp_dashboard.jpg"
                  alt="KK Next Tech CRM & ERP Operations Dashboard"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating overlay stats */}
                <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold tracking-wide">Live Webhook Relay Active</span>
                  </div>
                  <div className="flex items-center gap-8 text-xs font-semibold">
                    <span>Events Today: <strong>142,890</strong></span>
                    <span>Failed Deliveries: <strong className="text-emerald-300">0.00%</strong></span>
                    <span>Sync Response: <strong>18ms</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </ScrollReveal>
      </section>

      {/* ── 2. INTERACTIVE PIPELINE FLOW (Salesforce/Zoho Style) ── */}
      <section id="pipeline-demo" className="py-24 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/30 border-y border-purple-100/60 relative scroll-mt-20">
        <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.08)" size={700}>
          <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Automated Architecture
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                The 5-Stage{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Autonomous CRM Pipeline
                </AnimatedGradientText>
              </h2>
              <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed">
                Here is how customer data flows seamlessly from first click to completed invoice without a single minute of manual copy-pasting.
              </p>
            </div>

            {/* Pipeline Stage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {pipelineStages.map((stage, idx) => (
                <ScrollReveal key={stage.step} delay={idx * 0.1} direction="up">
                  <Tilt3DCard intensity={8} className="h-full">
                    <div
                      onClick={() => setActiveTab(idx)}
                      className={cn(
                        "h-full p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-6",
                        activeTab === idx
                          ? "bg-white border-purple-500 shadow-xl shadow-purple-900/10 ring-2 ring-purple-500/20 -translate-y-1"
                          : "bg-white/80 border-purple-100/80 hover:border-purple-300 hover:shadow-lg"
                      )}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-purple-600 font-mono">
                            STAGE {stage.step}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                            {stage.tag}
                          </span>
                        </div>

                        <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br shadow-md", stage.color)}>
                          <stage.icon className="w-5 h-5" />
                        </div>

                        <div>
                          <h3 className="text-base font-extrabold text-slate-900 font-display mb-1.5 leading-snug">
                            {stage.name}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {stage.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-bold text-purple-600 pt-2 border-t border-purple-50">
                        <span>Stage Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Live Stats Rollup Band */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-purple-500/20 text-white shadow-2xl relative overflow-hidden">
              <ParticleField count={20} color="147, 51, 234" opacity={0.25} />
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                <div>
                  <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-1">Time to Lead Contact</p>
                  <p className="text-3xl md:text-4xl font-black text-white font-display flex items-baseline justify-center md:justify-start">
                    &lt;<NumberTicker value={2} suffix=" Mins" className="font-black text-white" />
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-1">Pipeline Conversion Lift</p>
                  <p className="text-3xl md:text-4xl font-black text-white font-display flex items-baseline justify-center md:justify-start">
                    +<NumberTicker value={38} suffix="%" className="font-black text-white" />
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-1">Data Ingestion Errors</p>
                  <p className="text-3xl md:text-4xl font-black text-white font-display flex items-baseline justify-center md:justify-start">
                    <NumberTicker value={0} suffix="%" className="font-black text-white" />
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-1">Avg Payback Period</p>
                  <p className="text-3xl md:text-4xl font-black text-white font-display flex items-baseline justify-center md:justify-start">
                    <NumberTicker value={45} suffix=" Days" className="font-black text-white" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpotlightSection>
      </section>

      {/* ── 3. CORE CAPABILITIES (Bento + 3D Tilt) ── */}
      <section className="py-24 max-w-7xl px-6 md:px-8 mx-auto">
        <div className="flex flex-col gap-16">
          <SectionHeading
            eyebrow="Capabilities"
            title="Tailored platforms & integrations"
            description="We build bespoke operations databases and set up configurations for top ERP suites like Zoho, Salesforce, and Odoo."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {erpFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={feat.title} delay={idx * 0.1}>
                  <Tilt3DCard intensity={6} className="h-full">
                    <div className={cn("h-full p-8 rounded-3xl bg-gradient-to-br border flex flex-col justify-between gap-6 shadow-lg shadow-purple-900/5 hover:shadow-xl transition-all duration-300", feat.color, feat.border)}>
                      <div className="flex items-start justify-between gap-4">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs", feat.iconColor)}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold text-purple-800 bg-white/90 px-3 py-1.5 rounded-full border border-purple-100 shadow-xs">
                          {feat.stat}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-black text-slate-900 font-display">{feat.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                      </div>

                      <div className="pt-4 border-t border-purple-100/60 flex items-center justify-between text-xs font-bold text-purple-700">
                        <span>Includes API Middleware &amp; Webhooks</span>
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                      </div>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. INTEGRATION TOOLS MARQUEE ── */}
      <section className="py-16 bg-slate-50/70 border-y border-purple-100">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col items-center gap-8">
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
            Supported Enterprise Platforms &amp; API Stacks
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl">
            {serviceData.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs md:text-sm font-mono bg-white border border-purple-200 px-5 py-2 rounded-2xl text-slate-800 font-bold shadow-xs hover:border-purple-400 hover:scale-105 transition-all cursor-pointer"
              >
                {tech}
              </span>
            ))}
            {["PostgreSQL", "Redis", "Twilio WhatsApp API", "Stripe Billing", "Razorpay Subscriptions", "Zapier Webhooks", "AWS Lambda"].map((tech) => (
              <span
                key={tech}
                className="text-xs md:text-sm font-mono bg-purple-50/80 border border-purple-200/80 px-5 py-2 rounded-2xl text-purple-700 font-bold shadow-xs hover:border-purple-400 hover:scale-105 transition-all cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RELATED CASE STUDIES ── */}
      {crmProjects.length > 0 && (
        <section className="py-24 max-w-7xl px-6 md:px-8 mx-auto">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Case Studies"
              title="Recent enterprise automation projects"
              description="Proven deployments transforming client bottom lines."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {crmProjects.map((p, idx) => (
                <ScrollReveal key={p.slug} delay={idx * 0.1}>
                  <Tilt3DCard intensity={6} className="h-full">
                    <div className="h-full p-8 rounded-3xl bg-white border border-purple-100/80 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <Badge colorTheme="navy">{p.category}</Badge>
                          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                            {p.resultMetric}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 font-display mt-2">{p.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
                      </div>
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-800 hover:translate-x-1 transition-all mt-4 pt-4 border-t border-purple-100"
                      >
                        Read Full Transformation Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. CTA BANNER ── */}
      <section className="py-16 max-w-7xl px-6 md:px-8 mx-auto">
        <ScrollReveal>
          <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.12)" size={500}>
            <BeamBorder colorFrom="#7C3AED" colorTo="#38bdf8" duration={4} borderRadius="2rem">
              <div className="bg-gradient-to-r from-purple-50 via-white to-cyan-50 rounded-[1.875rem] p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden">
                <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                  Ready to Automate?
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                  Get a Blueprint for Your{" "}
                  <AnimatedGradientText>Custom CRM Setup</AnimatedGradientText>
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                  Book a free 30-minute discovery session. We will map out your exact data flows, webhook triggers, and recommend the best tech stack.
                </p>
                <Link href="/contact">
                  <Button variant="primary" colorTheme="violet" className="!py-4 !px-8 !text-base shadow-xl shadow-purple-500/25">
                    Schedule Free Architecture Call →
                  </Button>
                </Link>
              </div>
            </BeamBorder>
          </SpotlightSection>
        </ScrollReveal>
      </section>

      {/* ── 7. FAQS ── */}
      <div className="border-t border-purple-100">
        <FAQSection
          items={crmFAQs}
          eyebrow="Got Questions?"
          title="CRM & ERP — FAQs"
          description="Common questions about our CRM implementation and ERP automation services."
        />
      </div>

    </div>
  );
}
