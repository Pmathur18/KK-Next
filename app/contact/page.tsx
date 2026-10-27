"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

function ContactSearchParamsSync({
  setValue,
  setAuditGoal,
}: {
  setValue: (name: "services", val: string[]) => void;
  setAuditGoal: (goal: string) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setValue("services", [serviceParam]);
      const lower = serviceParam.toLowerCase();
      if (lower.includes("web") || lower.includes("app")) {
        setAuditGoal("Build / Modernize Web App");
      } else if (lower.includes("crm") || lower.includes("erp")) {
        setAuditGoal("Automate Workflows with CRM / ERP");
      } else if (lower.includes("ecom") || lower.includes("shopify") || lower.includes("e-com")) {
        setAuditGoal("Boost E-Commerce ROAS & Conversion");
      } else {
        setAuditGoal("Full-Funnel Paid Marketing & SEO");
      }
    }
  }, [searchParams, setValue, setAuditGoal]);
  return null;
}
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Mail, Phone, MapPin, Clock, Send, Link as LinkIcon, Building2, Globe, Sparkles, MessageSquare, ArrowRight, ArrowLeft, Video, FileText, Layers } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/BrandIcons";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SpotlightSection from "@/components/ui/SpotlightSection";
import GlowingOrb from "@/components/ui/GlowingOrb";
import ParticleField from "@/components/ui/ParticleField";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import BeamBorder from "@/components/ui/BeamBorder";
import FloatingBadge from "@/components/ui/FloatingBadge";
import { cn } from "@/lib/utils";

const contactFAQs: FAQItem[] = [
  {
    q: "How quickly will you respond to my inquiry?",
    a: "We respond to all contact form submissions within 4 business hours. For urgent project inquiries, you can also reach us directly via WhatsApp or phone — our team is available Monday through Saturday, 9AM to 7PM IST."
  },
  {
    q: "Is there a minimum project size or budget requirement?",
    a: "Our minimum engagement for web development starts at ₹2.5 lakhs. For social media management, monthly retainers start at ₹25,000/month. For CRM implementations, engagements start at ₹3.5 lakhs. We don't take on projects below these thresholds because we can't guarantee the quality and support our clients deserve at lower budgets."
  },
  {
    q: "Will you sign an NDA before we discuss our project?",
    a: "Yes, absolutely. We're happy to sign a mutual NDA before any detailed project discussion. Data confidentiality is something we take seriously for every client. Just mention it when you reach out and we'll send a standard NDA for your review within 24 hours."
  },
  {
    q: "What are your payment terms?",
    a: "We typically work on a milestone-based payment structure: 40% upfront to begin, 30% at the midpoint milestone, and 30% at project delivery. For monthly retainer services (social media, maintenance), payment is monthly in advance. We accept bank transfer, UPI, and international wire transfers."
  },
  {
    q: "What happens on the first discovery call?",
    a: "The discovery call (30–45 minutes) is a no-pressure conversation. We'll ask about your business goals, current pain points, target audience, timeline, and budget range. After the call, we'll send a tailored proposal within 2–3 business days outlining our recommended approach, team, timeline, and pricing."
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients across India, UAE, Singapore, UK, and the US. International clients are onboarded fully remotely with video discovery calls, shared project dashboards, and billing in USD or AED upon request. Our core working hours overlap comfortably with Gulf and UK time zones."
  },
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  orgName: z.string().min(2, "Organization name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  socialLink: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  services: z.array(z.string()).min(1, "Please select at least one service interested in"),
  office: z.string().min(1, "Please select a preferred office"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  source: z.array(z.string()).min(1, "Please select how you heard about us"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formMode, setFormMode] = useState<"audit" | "detailed">("audit");
  const [auditStep, setAuditStep] = useState<number>(1);
  const [auditGoal, setAuditGoal] = useState<string>("Build / Modernize Web App");
  const [auditRevenue, setAuditRevenue] = useState<string>("$10k - $50k / ₹8L - ₹40L Monthly");
  const [auditName, setAuditName] = useState<string>("");
  const [auditEmail, setAuditEmail] = useState<string>("");
  const [auditPhone, setAuditPhone] = useState<string>("");
  const [auditUrl, setAuditUrl] = useState<string>("");
  const [auditSubmitting, setAuditSubmitting] = useState<boolean>(false);
  const [auditSubmitted, setAuditSubmitted] = useState<boolean>(false);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditName || !auditEmail) return;
    setAuditSubmitting(true);
    setTimeout(() => {
      setAuditSubmitting(false);
      setAuditSubmitted(true);
    }, 1200);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      services: [],
      source: [],
      office: "",
      socialLink: "",
    }
  });

  const selectedServices = watch("services") || [];
  const selectedSource = watch("source") || [];
  const selectedOffice = watch("office") || "";

  const onSubmit = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setFormSubmitted(true);
        reset();
        resolve(true);
      }, 1500);
    });
  };

  const handleServiceToggle = (val: string) => {
    const isSelected = selectedServices.includes(val);
    const updated = isSelected
      ? selectedServices.filter(s => s !== val)
      : [...selectedServices, val];
    setValue("services", updated, { shouldValidate: true });
  };

  const handleSourceToggle = (val: string) => {
    const isSelected = selectedSource.includes(val);
    const updated = isSelected
      ? selectedSource.filter(s => s !== val)
      : [...selectedSource, val];
    setValue("source", updated, { shouldValidate: true });
  };

  const serviceOptions = [
    "Branding", "SEO Search Campaigns", "Performance Media",
    "Web Development", "Mobile Applications", "CRM & ERP Integrations"
  ];

  const sourceOptions = [
    "Referral", "LinkedIn", "Google Search", "News/Press", "Event/Conference"
  ];

  const officeOptions = [
    { id: "mumbai", name: "Mumbai (HQ)" },
    { id: "bangalore", name: "Bangalore" },
    { id: "gurugram", name: "Gurugram" },
    { id: "london", name: "London (UK)" },
    { id: "amsterdam", name: "Amsterdam" }
  ];

  const officesList = [
    { city: "Mumbai (HQ)", address: "402, Creative Hub, Lower Parel, Mumbai, MH, India", phone: "+91 9001360054" },
    { city: "Bangalore", address: "139, Oxford Tower, Kodihalli, Bangalore, KA, India", phone: "+91 9001360054" },
    { city: "Gurugram (NCR)", address: "6th Floor, Platina Tower, M.G. Road, Gurugram, HR, India", phone: "+91 9001360054" },
    { city: "London, UK", address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ", phone: "+91 9001360054" },
    { city: "Amsterdam", address: "Weesperstraat 388, 1018 DN Amsterdam, Netherlands", phone: "+91 9001360054" }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white py-8 md:py-12">
      <Suspense fallback={null}>
        <ContactSearchParamsSync setValue={setValue} setAuditGoal={setAuditGoal} />
      </Suspense>
      <ParticleField count={40} color="124, 58, 237" opacity={0.15} />
      <GlowingOrb className="top-[-10%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="bottom-[10%] left-[-5%]" color="#38bdf8" size={350} opacity={0.08} blur={100} />

      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto text-center pb-8 border-b border-purple-100 flex flex-col items-center gap-4 relative z-10">
        <ScrollReveal>
          <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
            Get In Touch
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-display uppercase">
            GOT AN IDEA? <br />
            <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
              Drop Us A Message
            </AnimatedGradientText>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We simplify digital growth. Send us your project scope inquiries or email us directly at <span className="font-bold text-purple-700 underline">info@kknexttech.com</span>.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid container */}
      <div className="max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 pt-10 relative z-10">

        {/* Left Column: Contact Form with Spotlight */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left">
            <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.08)" size={600} className="rounded-[36px]">
              <div className="bg-white/90 backdrop-blur-2xl border border-purple-200/80 p-6 md:p-10 rounded-[36px] shadow-xl shadow-purple-900/5">
                {/* Mode Selector Tabs */}
                <div className="flex p-1 bg-purple-50/80 border border-purple-100 rounded-2xl mb-8 gap-1">
                  <button
                    type="button"
                    onClick={() => setFormMode("audit")}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer",
                      formMode === "audit"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/25"
                        : "text-slate-600 hover:text-purple-700 hover:bg-white/50"
                    )}
                  >
                    <Video className="w-4 h-4" />
                    <span>24h Video &amp; Tech Audit</span>
                    <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Fast</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormMode("detailed")}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer",
                      formMode === "detailed"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/25"
                        : "text-slate-600 hover:text-purple-700 hover:bg-white/50"
                    )}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Detailed Brief</span>
                  </button>
                </div>

                {formMode === "audit" ? (
                  auditSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-2 shadow-lg">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-black text-slate-900 font-display">24-Hour Video Audit Request Confirmed!</h2>
                      <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                        Our lead solutions architect will analyze your site speed, checkout/conversion funnels, and infrastructure. We will email your custom 10-minute video breakdown to <strong className="text-purple-700">{auditEmail}</strong> within 24 business hours.
                      </p>
                      <Button variant="secondary" onClick={() => { setAuditSubmitted(false); setAuditStep(1); }} className="mt-2">
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleAuditSubmit} className="flex flex-col gap-6">
                      {/* Step Progress Bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                            {auditStep}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                            {auditStep === 1 && "Step 1: Select Your Strategic Goal"}
                            {auditStep === 2 && "Step 2: Select Monthly Revenue / Stage"}
                            {auditStep === 3 && "Step 3: Where to Send Your Video Teardown"}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400">Step {auditStep} of 3</span>
                      </div>

                      {/* Step 1: Goals */}
                      {auditStep === 1 && (
                        <div className="flex flex-col gap-3">
                          <p className="text-xs text-slate-500 font-medium">What is your primary commercial or technical objective?</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { id: "Build / Modernize Web App", desc: "Next.js 15, React 19, TypeScript, cloud microservices & sub-100ms APIs." },
                              { id: "Boost E-Commerce ROAS & Conversion", desc: "Headless Shopify, frictionless checkout, speed & inventory sync." },
                              { id: "Automate Workflows with CRM / ERP", desc: "Salesforce, Odoo, custom database integrations & dispatch automation." },
                              { id: "Full-Funnel Paid Marketing & SEO", desc: "High-intent Meta/Google ads, programmatic campaigns & technical SEO." },
                            ].map((g) => {
                              const active = auditGoal === g.id;
                              return (
                                <button
                                  key={g.id}
                                  type="button"
                                  onClick={() => setAuditGoal(g.id)}
                                  className={cn(
                                    "p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 cursor-pointer",
                                    active
                                      ? "border-purple-600 bg-purple-50/70 shadow-md ring-2 ring-purple-600/20"
                                      : "border-purple-100 bg-white hover:border-purple-300 hover:bg-purple-50/30"
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900 font-display">{g.id}</span>
                                    {active && <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />}
                                  </div>
                                  <p className="text-[11px] text-slate-500 leading-relaxed">{g.desc}</p>
                                </button>
                              );
                            })}
                          </div>
                          <div className="pt-4 flex justify-end">
                            <Button
                              type="button"
                              onClick={() => setAuditStep(2)}
                              variant="primary"
                              colorTheme="violet"
                              className="!py-3 !px-6 text-sm"
                            >
                              Next: Select Business Stage <ArrowRight className="w-4 h-4 ml-1 inline" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Revenue / Budget Stage */}
                      {auditStep === 2 && (
                        <div className="flex flex-col gap-3">
                          <p className="text-xs text-slate-500 font-medium">What is your current monthly revenue or project budget tier?</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { tier: "< $10k / ₹8L Monthly", desc: "Early Growth / Lean MVP Launch / Initial Product Architecture" },
                              { tier: "$10k - $50k / ₹8L - ₹40L Monthly", desc: "Scaling Brand / Store Migration / Performance Funnel Scaling" },
                              { tier: "$50k - $250k / ₹40L - ₹2Cr Monthly", desc: "Established Business / Multi-System ERP & CRM Automation" },
                              { tier: "$250k+ / ₹2Cr+ Monthly", desc: "Enterprise Infrastructure / Custom High-Throughput APIs & SLAs" },
                            ].map((b) => {
                              const active = auditRevenue === b.tier;
                              return (
                                <button
                                  key={b.tier}
                                  type="button"
                                  onClick={() => setAuditRevenue(b.tier)}
                                  className={cn(
                                    "p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 cursor-pointer",
                                    active
                                      ? "border-purple-600 bg-purple-50/70 shadow-md ring-2 ring-purple-600/20"
                                      : "border-purple-100 bg-white hover:border-purple-300 hover:bg-purple-50/30"
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900 font-display">{b.tier}</span>
                                    {active && <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />}
                                  </div>
                                  <p className="text-[11px] text-slate-500 leading-relaxed">{b.desc}</p>
                                </button>
                              );
                            })}
                          </div>
                          <div className="pt-4 flex items-center justify-between">
                            <Button
                              type="button"
                              onClick={() => setAuditStep(1)}
                              variant="outline"
                              className="!py-3 !px-5 text-sm"
                            >
                              <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                            </Button>
                            <Button
                              type="button"
                              onClick={() => setAuditStep(3)}
                              variant="primary"
                              colorTheme="violet"
                              className="!py-3 !px-6 text-sm"
                            >
                              Next: Final Details <ArrowRight className="w-4 h-4 ml-1 inline" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Contact Details */}
                      {auditStep === 3 && (
                        <div className="flex flex-col gap-4">
                          <p className="text-xs text-slate-500 font-medium">Where should our solutions team email your personalized 24-hour video audit breakdown?</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Your Full Name *</label>
                              <input
                                required
                                type="text"
                                value={auditName}
                                onChange={(e) => setAuditName(e.target.value)}
                                placeholder="e.g. Alex Morgan"
                                className="bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Work Email *</label>
                              <input
                                required
                                type="email"
                                value={auditEmail}
                                onChange={(e) => setAuditEmail(e.target.value)}
                                placeholder="alex@company.com"
                                className="bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Phone / WhatsApp *</label>
                              <input
                                required
                                type="tel"
                                value={auditPhone}
                                onChange={(e) => setAuditPhone(e.target.value)}
                                placeholder="+91 98765 43210"
                                className="bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Website or Store URL</label>
                              <input
                                type="url"
                                value={auditUrl}
                                onChange={(e) => setAuditUrl(e.target.value)}
                                placeholder="https://yourbrand.com"
                                className="bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium"
                              />
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-100 text-[11px] text-purple-800 flex items-center gap-2.5">
                            <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                            <span><strong>What happens next:</strong> A partner will record a custom 10-minute screencast detailing your speed metrics, conversion leaks, and recommended roadmap. No pitch, 100% technical insights.</span>
                          </div>

                          <div className="pt-2 flex items-center justify-between">
                            <Button
                              type="button"
                              onClick={() => setAuditStep(2)}
                              variant="outline"
                              className="!py-3 !px-5 text-sm"
                            >
                              <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                            </Button>
                            <Button
                              type="submit"
                              variant="primary"
                              colorTheme="violet"
                              disabled={auditSubmitting}
                              className="!py-3.5 !px-8 text-sm shadow-xl shadow-purple-500/25"
                            >
                              {auditSubmitting ? "Generating Audit Ticket..." : "Get 24-Hour Video Audit Teardown →"}
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  )
                ) : (
                  <div>
                    {formSubmitted ? (
                      <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
                        <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-2 shadow-lg">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 font-display">Inquiry Sent Successfully!</h2>
                        <p className="text-sm text-slate-500 max-w-sm">
                          Thank you for reaching out. A partner from our team will get back to you within 4 business hours.
                        </p>
                        <Button variant="secondary" onClick={() => setFormSubmitted(false)} className="mt-2">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register("name")}
                          className={cn(
                            "bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium",
                            errors.name ? "border-red-500" : ""
                          )}
                        />
                        {errors.name && (
                          <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>
                        )}
                      </div>

                      {/* Organization Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="orgName" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Your Organization
                        </label>
                        <input
                          id="orgName"
                          type="text"
                          {...register("orgName")}
                          className={cn(
                            "bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium",
                            errors.orgName ? "border-red-500" : ""
                          )}
                        />
                        {errors.orgName && (
                          <span className="text-xs font-semibold text-red-500">{errors.orgName.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={cn(
                            "bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium",
                            errors.email ? "border-red-500" : ""
                          )}
                        />
                        {errors.email && (
                          <span className="text-xs font-semibold text-red-500">{errors.email.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className={cn(
                            "bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium",
                            errors.phone ? "border-red-500" : ""
                          )}
                        />
                        {errors.phone && (
                          <span className="text-xs font-semibold text-red-500">{errors.phone.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Social/Website Link */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="socialLink" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between">
                        <span>Website or LinkedIn (Optional)</span>
                        <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
                      </label>
                      <input
                        id="socialLink"
                        type="url"
                        {...register("socialLink")}
                        className="bg-purple-50/30 border border-purple-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>

                    {/* Services Multi-Select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Services You Need
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((svc) => {
                          const active = selectedServices.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => handleServiceToggle(svc)}
                              className={cn(
                                "text-xs font-bold px-3.5 py-2 rounded-xl transition-all border cursor-pointer",
                                active
                                  ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 scale-105"
                                  : "bg-white text-slate-600 border-purple-100 hover:border-purple-300 hover:bg-purple-50"
                              )}
                            >
                              {svc}
                            </button>
                          );
                        })}
                      </div>
                      {errors.services && (
                        <span className="text-xs font-semibold text-red-500">{errors.services.message}</span>
                      )}
                    </div>

                    {/* Preferred Office */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Preferred Location Hub
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {officeOptions.map((off) => {
                          const active = selectedOffice === off.id;
                          return (
                            <button
                              key={off.id}
                              type="button"
                              onClick={() => setValue("office", off.id, { shouldValidate: true })}
                              className={cn(
                                "text-xs font-bold p-2.5 rounded-xl border text-center transition-all cursor-pointer",
                                active
                                  ? "bg-slate-900 text-white border-slate-900 shadow-md scale-102"
                                  : "bg-white text-slate-600 border-purple-100 hover:border-purple-300"
                              )}
                            >
                              {off.name}
                            </button>
                          );
                        })}
                      </div>
                      {errors.office && (
                        <span className="text-xs font-semibold text-red-500">{errors.office.message}</span>
                      )}
                    </div>

                    {/* Message Details */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        What&apos;s on your mind?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className={cn(
                          "bg-purple-50/30 border border-purple-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-purple-500 focus:bg-white text-slate-900 transition-all font-medium resize-none",
                          errors.message ? "border-red-500" : ""
                        )}
                      />
                      {errors.message && (
                        <span className="text-xs font-semibold text-red-500">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Source Multi-Select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        How Did You Hear About Us?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {sourceOptions.map((src) => {
                          const active = selectedSource.includes(src);
                          return (
                            <button
                              key={src}
                              type="button"
                              onClick={() => handleSourceToggle(src)}
                              className={cn(
                                "text-xs font-bold px-3 py-1.5 rounded-xl transition-all border cursor-pointer",
                                active
                                  ? "bg-purple-100 text-purple-800 border-purple-300"
                                  : "bg-white text-slate-500 border-purple-100 hover:border-purple-200"
                              )}
                            >
                              {src}
                            </button>
                          );
                        })}
                      </div>
                      {errors.source && (
                        <span className="text-xs font-semibold text-red-500">{errors.source.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      colorTheme="violet"
                      disabled={isSubmitting}
                      className="w-full !py-4 shadow-xl shadow-purple-500/25 mt-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Inquiry...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" /> Send Inquiry &amp; Book Discovery Call
                        </span>
                      )}
                    </Button>

                  </form>
                )}
              </div>
            )}
              </div>
            </SpotlightSection>
          </ScrollReveal>
        </div>

        {/* Right Column: Direct Info & 3D Office Cards */}
        <div className="lg:col-span-5 flex flex-col gap-8">

          <ScrollReveal direction="right">
            <Tilt3DCard intensity={6}>
              <div className="p-8 rounded-[32px] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white border border-purple-500/20 shadow-2xl flex flex-col gap-6 relative overflow-hidden">
                <GlowingOrb className="top-[-20%] right-[-20%]" color="#7C3AED" size={200} opacity={0.3} blur={60} />

                <div className="relative z-10 flex flex-col gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
                    Direct Contact
                  </span>
                  <h3 className="text-2xl font-black font-display text-white">
                    Need a Faster Response?
                  </h3>
                  <p className="text-sm text-purple-200 leading-relaxed">
                    Speak directly with a solutions engineer to audit your requirements.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-4 pt-4 border-t border-purple-500/20 text-sm">
                  <a href="mailto:info@kknexttech.com" className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>info@kknexttech.com</span>
                  </a>
                  <a href="mailto:sales@kknexttech.com" className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>sales@kknexttech.com</span>
                  </a>
                  <a href="tel:+919001360054" className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 9001360054</span>
                  </a>
                  <div className="flex items-center gap-3 text-purple-200">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                  </div>

                  <div className="pt-3 border-t border-purple-500/20 flex items-center gap-3">
                    <span className="text-xs font-semibold text-purple-300">Connect with us:</span>
                    <a
                      href="https://www.linkedin.com/company/kknexttechsolution/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/kknexttechsolution"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>

          {/* Visual Engineering Hub Card */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="rounded-[32px] overflow-hidden border border-purple-100 shadow-xl group bg-slate-900 relative">
              <img
                src="/images/tech_team_workspace.jpg"
                alt="KK Next Tech Solutions Client Success & Engineering Hub"
                className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 block mb-1">
                  Global Engineering Hub
                </span>
                <p className="text-sm font-extrabold font-display">
                  Serving Startups &amp; Enterprises Globally · 24/7 Deployment Coverage
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* FAQs */}
      <div className="border-t border-purple-100 mt-20">
        <FAQSection
          items={contactFAQs}
          eyebrow="Got Questions?"
          title="Contact &amp; Engagement — FAQs"
          description="Everything you need to know before reaching out to our team."
        />
      </div>

    </div>
  );
}
