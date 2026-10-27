"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Receipt,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  Clock,
  Sparkles,
  FileText,
  Workflow,
  Check,
  ChevronRight,
  Smartphone,
  CreditCard,
  Building2,
  Users,
  Compass,
  FileSpreadsheet,
  Layers,
  Lock,
  Globe,
  DollarSign,
  BarChart3,
  Search,
  FileCheck2,
  HelpCircle,
  Eye,
  Settings,
  UserCheck,
  Briefcase,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import GlowingOrb from "@/components/ui/GlowingOrb";
import ParticleField from "@/components/ui/ParticleField";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import CTABanner from "@/components/ui/CTABanner";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { cn } from "@/lib/utils";

// ── 12 Features from Core Platform ──────────────────────────────────────────
const frdFeatures = [
  {
    id: "ocr-capture",
    title: "Expense capture & OCR receipts",
    desc: "Snap paper bills on mobile or upload PDFs. Smart neural OCR extracts merchant, date, amount, currency, and line items in seconds.",
    icon: Smartphone,
    color: "from-purple-500/10 to-indigo-500/5 text-purple-700 border-purple-200",
  },
  {
    id: "expense-reports",
    title: "Expense reports",
    desc: "Bundle individual claims into organized monthly, client, or trip reports with automatic categorization and cost-center allocations.",
    icon: FileSpreadsheet,
    color: "from-blue-500/10 to-cyan-500/5 text-blue-700 border-blue-200",
  },
  {
    id: "configurable-approvals",
    title: "Configurable approvals",
    desc: "Design multi-tier approval chains based on claim amounts, department hierarchies, or category thresholds with automated routing.",
    icon: Workflow,
    color: "from-emerald-500/10 to-teal-500/5 text-emerald-700 border-emerald-200",
  },
  {
    id: "policy-engine",
    title: "Policy engine",
    desc: "Enforce per-diem limits, receipt mandates, weekend spending restrictions, and out-of-policy warning banners before submission.",
    icon: Shield,
    color: "from-amber-500/10 to-orange-500/5 text-amber-700 border-amber-200",
  },
  {
    id: "gst-tax",
    title: "GST & tax details",
    desc: "Auto-verify vendor GSTIN numbers in real-time, auto-split CGST, SGST, and IGST, and generate audit-ready tax credit reconciliation data.",
    icon: FileCheck2,
    color: "from-fuchsia-500/10 to-pink-500/5 text-fuchsia-700 border-fuchsia-200",
  },
  {
    id: "reimbursements-advances",
    title: "Reimbursements & advances",
    desc: "Track employee cash advances, automatically reconcile balances against final expense claims, and record settlement reference numbers.",
    icon: DollarSign,
    color: "from-purple-500/10 to-violet-500/5 text-purple-700 border-purple-200",
  },
  {
    id: "travel-mileage",
    title: "Travel, mileage & per diem",
    desc: "Google Maps GPS distance tracking with custom 2-wheeler and 4-wheeler rates, plus automated metro vs non-metro per-diem rules.",
    icon: Compass,
    color: "from-cyan-500/10 to-blue-500/5 text-cyan-700 border-cyan-200",
  },
  {
    id: "multi-currency",
    title: "Multi-currency",
    desc: "Automated conversion for international business trips with live exchange rate logging and base currency normalization.",
    icon: Globe,
    color: "from-indigo-500/10 to-purple-500/5 text-indigo-700 border-indigo-200",
  },
  {
    id: "dashboards-analytics",
    title: "Dashboards & analytics",
    desc: "Instant executive clarity on corporate burn, top spending employees, category trends, and policy violation frequency.",
    icon: BarChart3,
    color: "from-violet-500/10 to-purple-500/5 text-violet-700 border-violet-200",
  },
  {
    id: "accounting-export",
    title: "Accounting export & API",
    desc: "1-Click ledger-ready exports structured for Tally Prime, QuickBooks, and SAP, with REST APIs for custom enterprise ERP sync.",
    icon: Layers,
    color: "from-blue-500/10 to-indigo-500/5 text-blue-700 border-blue-200",
  },
  {
    id: "audit-trail",
    title: "Audit trail",
    desc: "Immutable, timestamped logs of every expense submission, approval, modification, rejection, and payout note for 100% audit readiness.",
    icon: Clock,
    color: "from-emerald-500/10 to-green-500/5 text-emerald-700 border-emerald-200",
  },
  {
    id: "security-tenant",
    title: "Security & tenant isolation",
    desc: "Role-based access permissions, strict data encryption at rest and in transit, and isolated tenant architecture with Indian data hosting.",
    icon: Lock,
    color: "from-slate-500/10 to-purple-500/5 text-slate-700 border-slate-200",
  },
];

// ── How It Works Steps (FRD Workflow 5.1) ────────────────────────────────────
const workflowSteps = [
  {
    step: "01",
    title: "Capture",
    desc: "Employee snaps a receipt on their smartphone or uploads an e-invoice PDF. Neural OCR automatically extracts the merchant, date, and amounts.",
    icon: Smartphone,
    color: "bg-purple-600 text-white",
  },
  {
    step: "02",
    title: "Submit",
    desc: "Claims are compiled into an expense report. The policy engine runs instant checks on limits, category caps, and GST details before submission.",
    icon: FileText,
    color: "bg-blue-600 text-white",
  },
  {
    step: "03",
    title: "Approve",
    desc: "Managers and finance review claims through rule-based hierarchies. Out-of-policy items are clearly flagged with one-tap approval or override remarks.",
    icon: UserCheck,
    color: "bg-indigo-600 text-white",
  },
  {
    step: "04",
    title: "Reimburse",
    desc: "Finance settles payout outside via direct bank transfer or payroll and records the reference UTR number in the system for a complete audit trail.",
    icon: CheckCircle2,
    color: "bg-emerald-600 text-white",
  },
];

// ── Roles & Permission Matrix ────────────────────────────────────────────────
const permissionRoles = [
  {
    role: "Employee",
    badge: "Submitter",
    icon: Users,
    desc: "Creates expense claims, snaps receipts, bundles items into reports, tracks approval progress, and requests travel advances.",
    responsibilities: [
      "Upload receipts via web or mobile",
      "Draft & submit categorized expense reports",
      "Track live status from review to reimbursement",
      "Request project & travel cash advances",
    ],
  },
  {
    role: "Manager",
    badge: "1st Level Approver",
    icon: Briefcase,
    desc: "Reviews team submissions, evaluates policy violation warnings, requests clarifications, and approves or rejects claims with comments.",
    responsibilities: [
      "Review department expense reports",
      "Flag or approve policy limit exceptions",
      "Add review comments & audit notes",
      "Forward approved claims to finance",
    ],
  },
  {
    role: "Finance",
    badge: "Auditor & Disburser",
    icon: FileCheck2,
    desc: "Audits verified claims, validates GST components, approves settlements, and exports clean batches to accounting software.",
    responsibilities: [
      "Audit receipt legitimacy & GST compliance",
      "Trigger payout clearance & enter UTR records",
      "Reconcile advance balances against claims",
      "Export ledgers directly to Tally & ERPs",
    ],
  },
  {
    role: "Admin",
    badge: "System Controller",
    icon: Settings,
    desc: "Configures company policy rules, sets category limits, designs approval hierarchies, assigns roles, and manages user access.",
    responsibilities: [
      "Define multi-tier approval routing rules",
      "Configure per-diem and spending limits",
      "Manage employee profiles & grade tiers",
      "Oversee tenant security & integration keys",
    ],
  },
  {
    role: "Auditor",
    badge: "Compliance Inspector",
    icon: Eye,
    desc: "Has read-only access to immutable audit trails, historical financial reports, and tax compliance data for internal or external review.",
    responsibilities: [
      "Inspect complete timestamped audit trails",
      "Access historical approved expense archives",
      "Verify tax reconciliation & GST data",
      "Export compliance reports for annual audits",
    ],
  },
];

// ── FAQs Specified by User ───────────────────────────────────────────────────
const expenseFAQs: FAQItem[] = [
  {
    q: "Who is it for?",
    a: "KK Next Expense is built for startups, growing SMEs, and enterprise companies that want to eliminate manual Excel spreadsheets, WhatsApp receipt chasing, and reimbursement bottlenecks.",
  },
  {
    q: "Does it replace our accounting software?",
    a: "Nahi, ye accounting software ko replace nahi karta balki accounting-ready export deta hai. Ye Tally Prime, QuickBooks, SAP aur custom ERPs ke sath synchronize ho jata hai taaki aapki existing accounting books seamlessly update ho sakein.",
  },
  {
    q: "Do you issue corporate cards or move money?",
    a: "Nahi, payment bahar hota hai (direct bank transfer / NEFT / IMPS ya payroll ke through) aur finance team UTR reference number record karti hai complete audit trail maintain karne ke liye.",
  },
  {
    q: "Is there a mobile app?",
    a: "Planned hai. Filhal website fully mobile-responsive Progressive Web App (PWA) ke roop me kisi bhi smartphone browser par effortlessly kaam karti hai.",
  },
  {
    q: "How is it priced?",
    a: "Custom quote. Hum aapki team size, custom policy requirements aur integrations ke hisab se transparent, personalized pricing offer karte hain.",
  },
];

export default function ExpenseManagementPage() {
  return (
    <div className="relative overflow-hidden w-full bg-white font-sans text-slate-900">
      <ParticleField count={40} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-10%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ═══════════════════════════════════════════════════════════════════
          2. HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                KK Next Tech · Expense Management &amp; Reimbursement
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-display">
                Leave Excel, email and WhatsApp{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  behind for expenses.
                </AnimatedGradientText>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                One platform to capture expenses, process receipts, enforce policy, route approvals and settle reimbursements, with a complete audit trail.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link href="#pricing">
                  <Button
                    variant="primary"
                    colorTheme="violet"
                    className="!py-4 !px-8 !text-base shadow-xl shadow-purple-500/25 text-center w-full sm:w-auto"
                  >
                    Get a quote <ArrowRight className="inline w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button
                    variant="outline"
                    className="!py-4 !px-8 !text-base hover:bg-purple-50/80 transition-all text-center w-full sm:w-auto"
                  >
                    See how it works
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Quick trust metrics */}
            <ScrollReveal delay={0.35}>
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-purple-100/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Complete Audit Trail
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Tally &amp; ERP Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Chasing
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Hero Graphic: Sample Report Card with Status Flow & Out-of-Policy Flag */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <Tilt3DCard intensity={6}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-2xl shadow-purple-900/10 flex flex-col gap-6 relative overflow-hidden">

                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-purple-50 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-600 block">
                        Expense Report #EXP-2026-084
                      </span>
                      <h3 className="text-lg font-black text-slate-900 font-display">
                        Q3 Client Onsite &amp; Sales Tour
                      </h3>
                      <p className="text-xs text-slate-500">
                        Aarav Sharma · Associate Lead (Sales)
                      </p>
                    </div>
                    <span className="text-xs font-black text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                      Under review
                    </span>
                  </div>

                  {/* Status Flow Stepper */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-display">
                      Workflow Pipeline
                    </span>
                    <div className="grid grid-cols-5 gap-1 text-center">
                      {[
                        { label: "Draft", status: "done" },
                        { label: "Submitted", status: "done" },
                        { label: "Review", status: "current" },
                        { label: "Approved", status: "upcoming" },
                        { label: "Reimbursed", status: "upcoming" },
                      ].map((s, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div
                            className={cn(
                              "w-full h-1.5 rounded-full",
                              s.status === "done" && "bg-emerald-500",
                              s.status === "current" && "bg-amber-500 animate-pulse",
                              s.status === "upcoming" && "bg-slate-200"
                            )}
                          />
                          <span
                            className={cn(
                              "text-[9px] font-bold truncate",
                              s.status === "done" && "text-emerald-700",
                              s.status === "current" && "text-amber-700 font-black",
                              s.status === "upcoming" && "text-slate-400"
                            )}
                          >
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Line Items inside report */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-display">
                      Claimed Line Items
                    </span>

                    {/* Item 1: In Policy */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Indigo Airlines (DEL → BLR)</p>
                          <p className="text-[10px] text-emerald-600 font-semibold">In Policy · Travel Allowance</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-800">₹6,420</span>
                    </div>

                    {/* Item 2: OUT OF POLICY USE CASE (FRD Example) */}
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-300 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
                            <AlertTriangle className="w-4 h-4 stroke-[2.5]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Taj Palace Luxury Stay</p>
                            <p className="text-[10px] text-slate-500">2 Nights Accommodation</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-black text-amber-900">₹14,500</span>
                      </div>

                      {/* Policy Exception Warning */}
                      <div className="p-2.5 rounded-xl bg-white/90 border border-amber-200 text-[11px] text-amber-900 flex flex-col gap-1">
                        <span className="font-extrabold flex items-center gap-1 text-amber-800">
                          ⚠️ Policy Limit Exceeded (FRD Cap: ₹8,000/night)
                        </span>
                        <p className="text-[10px] text-slate-600 leading-tight">
                          Exceeds Associate grade hotel limit. System flagged for VP Finance override before reimbursement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Summary Footer */}
                  <div className="pt-3 border-t border-purple-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase">Total Claim Amount</p>
                      <p className="text-base font-black text-slate-900 font-mono">₹20,920</p>
                    </div>
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      Audit Trail Active
                    </span>
                  </div>

                </div>
              </Tilt3DCard>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. FEATURES SECTION (12 Cards from FRD Modules)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-12 md:py-16 bg-slate-50/60 border-y border-purple-100/70 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">

          <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                12 Core Capabilities
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                Engineered for Complete{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Expense Governance
                </AnimatedGradientText>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Twelve specialized capabilities mapped directly to corporate financial governance, approval routing, and compliance needs.
              </p>
            </ScrollReveal>
          </div>

          {/* 12 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frdFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={feat.id} delay={idx * 0.04}>
                  <Tilt3DCard intensity={6} className="h-full">
                    <div className="h-full p-7 rounded-3xl bg-white border border-purple-100/80 shadow-md shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between gap-5 group">

                      <div className="flex flex-col gap-4">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border p-3", feat.color)}>
                          <Icon className="w-6 h-6" />
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-slate-900 font-display group-hover:text-purple-700 transition-colors mb-2">
                            {feat.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
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
          4. HOW IT WORKS (FRD Workflow 5.1: Capture → Submit → Approve → Reimburse)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-12 md:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">

          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Streamlined Workflow
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                How It Works
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Four clear steps to transition expenses from initial receipt snapshot to finalized accounting reimbursement.
              </p>
            </ScrollReveal>
          </div>

          {/* 4-Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <ScrollReveal key={st.step} delay={idx * 0.1}>
                  <div className="h-full p-8 rounded-3xl bg-purple-50/40 border border-purple-100 shadow-md flex flex-col justify-between gap-6 hover:border-purple-300 hover:bg-white transition-all">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-md", st.color)}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black font-display text-purple-200">
                          {st.step}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 font-display">
                        {st.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-purple-100 flex items-center gap-1.5 text-xs font-bold text-purple-700">
                      Step {st.step} Complete <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Interactive UI Platform Walkthrough Showcase */}
          <ScrollReveal delay={0.2} className="mt-4">
            <Tilt3DCard intensity={4}>
              <div className="rounded-3xl p-4 sm:p-6 bg-slate-950 border border-purple-500/20 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">app.kknexttech.com/expense/reimbursements</span>
                  </div>
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/60">
                    Live Platform Preview · Expense Management Architecture
                  </span>
                </div>
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-4 border border-white/10">
                  <img
                    src="/images/expense_management_platform.jpg"
                    alt="KK Next Tech Expense Management & Reimbursement Platform UI"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. ROLES (Permission Matrix: Employee, Manager, Finance, Admin, Auditor)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="roles" className="py-12 md:py-16 bg-slate-50/60 border-t border-purple-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">

          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Permission Matrix
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                Tailored Access for Every Role
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Granular permission controls ensuring every stakeholder sees only what they need with full security isolation.
              </p>
            </ScrollReveal>
          </div>

          {/* 5 Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {permissionRoles.map((r, idx) => {
              const Icon = r.icon;
              return (
                <ScrollReveal key={r.role} delay={idx * 0.08}>
                  <div className="h-full p-7 rounded-3xl bg-white border border-purple-100 shadow-lg shadow-purple-900/5 hover:border-purple-300 transition-all flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4">

                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                          {r.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-slate-900 font-display">
                          {r.role}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          {r.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-50 space-y-2">
                        {r.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="pt-3 border-t border-purple-100/70 text-[11px] font-bold text-slate-400">
                      Role-Based Access Protected
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. PRICING SECTION (Call Us, Get a Quote)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-12 md:py-16 bg-white relative border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">

          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Custom Team Pricing
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                No fixed plans. A quote built around your team.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Whether you have 10 employees or 500+, we build a tailored quote based on your exact user count, approval tiers, and accounting integration.
              </p>
            </ScrollReveal>
          </div>

          {/* 3 Step Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {[
              {
                num: "Step 1",
                title: "Call or email us",
                desc: "Reach out to our solutions architect via direct phone or corporate email.",
                icon: Phone,
              },
              {
                num: "Step 2",
                title: "Share your requirements",
                desc: "Tell us your user volume, expense categories, and accounting software (Tally, QuickBooks, SAP).",
                icon: FileText,
              },
              {
                num: "Step 3",
                title: "Get your custom quote",
                desc: "Receive a transparent proposal tailored to your team size with zero hidden setup costs.",
                icon: CheckCircle2,
              },
            ].map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100 text-center flex flex-col items-center gap-4 h-full justify-between">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/25">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Action Call & Email Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="tel:+919001360054">
              <Button
                variant="primary"
                colorTheme="violet"
                className="!py-4 !px-8 text-sm sm:text-base shadow-xl shadow-purple-500/25 flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Call +91 9001360054
              </Button>
            </a>
            <a href="mailto:info@kknexttech.com">
              <Button
                variant="outline"
                className="!py-4 !px-8 text-sm sm:text-base border-purple-300 hover:bg-purple-50 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-600" /> Email: info@kknexttech.com
              </Button>
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. FAQ SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-purple-100 bg-slate-50/40">
        <FAQSection
          items={expenseFAQs}
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Clear answers regarding our expense management software, integrations, money handling, and custom pricing."
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          8. BOTTOM CTA BANNER (Standardized across website)
      ═══════════════════════════════════════════════════════════════════ */}
      <CTABanner
        badge=""
        title={
          <>
            Ready to streamline your company{" "}
            <AnimatedGradientText>expenses &amp; reimbursements?</AnimatedGradientText>
          </>
        }
        description="Book a free 30-minute discovery call or request a custom quote built around your team size and ERP stack."
        buttonText="Get a Custom Quote →"
        buttonLink="#pricing"
      />

    </div>
  );
}
