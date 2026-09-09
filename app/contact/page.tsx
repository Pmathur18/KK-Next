"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Mail, Phone, MapPin, Clock, Send, Link as LinkIcon, Building2, Globe, Sparkles, MessageSquare } from "lucide-react";
import { Linkedin, Twitter, Instagram } from "@/components/ui/BrandIcons";

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
    { city: "Mumbai (HQ)", address: "402, Creative Hub, Lower Parel, Mumbai, MH, India", phone: "+91 22 4567 8910" },
    { city: "Bangalore", address: "139, Oxford Tower, Kodihalli, Bangalore, KA, India", phone: "+91 80 4321 0987" },
    { city: "Gurugram (NCR)", address: "6th Floor, Platina Tower, M.G. Road, Gurugram, HR, India", phone: "+91 124 555 1234" },
    { city: "London, UK", address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ", phone: "+44 20 7946 0958" },
    { city: "Amsterdam", address: "Weesperstraat 388, 1018 DN Amsterdam, Netherlands", phone: "+31 20 794 8472" }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white py-12 md:py-20">
      <ParticleField count={40} color="124, 58, 237" opacity={0.15} />
      <GlowingOrb className="top-[-10%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="bottom-[10%] left-[-5%]" color="#38bdf8" size={350} opacity={0.08} blur={100} />
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto text-center pb-12 border-b border-purple-100 flex flex-col items-center gap-4 relative z-10">
        <ScrollReveal>
          <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
            Get In Touch
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-display uppercase">
            GOT AN IDEA? <br/>
            <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
              Drop Us A Message
            </AnimatedGradientText>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We simplify digital growth. Send us your project scope inquiries or email us directly at <span className="font-bold text-purple-700 underline">hello@kknextech.com</span>.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid container */}
      <div className="max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 pt-16 relative z-10">
        
        {/* Left Column: Contact Form with Spotlight */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left">
            <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.08)" size={600} className="rounded-[36px]">
              <div className="bg-white/90 backdrop-blur-2xl border border-purple-200/80 p-6 md:p-10 rounded-[36px] shadow-xl shadow-purple-900/5">
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
                          placeholder="Prakhar Mathur"
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
                          placeholder="Acme Corp"
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
                          placeholder="prakhar@example.com"
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
                          placeholder="+91 98765 43210"
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
                        placeholder="https://yourcompany.com"
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
                        placeholder="Tell us about your project, timeline, and goals..."
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
                  <a href="mailto:hello@kknextech.com" className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>hello@kknextech.com</span>
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 98765 43210</span>
                  </a>
                  <div className="flex items-center gap-3 text-purple-200">
                    <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>

          {/* Global Presence List */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
              Global Office Presence
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {officesList.map((off, idx) => (
                <ScrollReveal key={off.city} delay={idx * 0.05}>
                  <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-extrabold text-slate-900 font-display">{off.city}</span>
                      <span className="text-xs text-slate-500">{off.address}</span>
                      <span className="text-xs text-purple-700 font-bold mt-1">{off.phone}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

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
