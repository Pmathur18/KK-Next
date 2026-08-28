"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Mail, Phone, MapPin, Clock, Send, Link as LinkIcon, Building2, Globe } from "lucide-react";
import { Linkedin, Twitter, Instagram } from "@/components/ui/BrandIcons";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
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

  const onSubmit = (data: FormValues) => {
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
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20 animate-fadeIn">
      
      {/* 1. HEADER SECTION (Schbang Style) */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto text-center pb-12 border-b border-slate-200 flex flex-col items-center gap-4">
        <Badge colorTheme="navy">Get In Touch</Badge>
        <h1 className="text-4xl sm:text-6xl font-black text-ink tracking-tight font-display uppercase">
          GOT AN IDEA? <br/>Drop Us A Message
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
          We simplify digital growth. Send us your project scope inquiries or email us directly at <span className="font-bold text-[#0A2540] underline">bd@kknextech.com</span>.
        </p>
      </section>

      {/* Grid container */}
      <div className="max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 pt-16 relative z-10">
        
        {/* Left Column: Contact Form (Apple Glass) */}
        <div className="lg:col-span-7 bg-white/50 backdrop-blur-2xl border border-white/60 p-6 md:p-10 rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)]">
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-16 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-[#EBF3FC] border border-blue-200 flex items-center justify-center text-[#0A2540] mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-ink font-display">Inquiry Sent Successfully!</h2>
              <p className="text-sm text-slate-500 max-w-sm">
                Thank you for reaching out. A partner from our chosen office will get back to you within 24 business hours.
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
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
                      errors.name ? "border-red-500" : ""
                    )}
                    placeholder="Vijay Sharma"
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>
                  )}
                </div>

                {/* Organization Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="orgName" className="text-xs font-bold uppercase tracking-wider text-zinc-555">
                    Your Organization
                  </label>
                  <input
                    id="orgName"
                    type="text"
                    {...register("orgName")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
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
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
                      errors.email ? "border-red-500" : ""
                    )}
                    placeholder="vijay@company.com"
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-red-500">{errors.email.message}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
                      errors.phone ? "border-red-500" : ""
                    )}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <span className="text-xs font-semibold text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              {/* Website URL */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="socialLink" className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                  Website or Social Media Link
                </label>
                <div className="relative flex">
                  <LinkIcon className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                  <input
                    id="socialLink"
                    type="text"
                    {...register("socialLink")}
                    className={cn(
                      "w-full bg-zinc-50/50 border border-zinc-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
                      errors.socialLink ? "border-red-500" : ""
                    )}
                    placeholder="https://mybrand.com"
                  />
                </div>
                {errors.socialLink && (
                  <span className="text-xs font-semibold text-red-500">{errors.socialLink.message}</span>
                )}
              </div>

              {/* Services multi-select pills (Schbang-style) */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                  Which services are you interested in?
                </span>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => {
                    const active = selectedServices.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleServiceToggle(opt)}
                        className={cn(
                          "py-2 px-4.5 border rounded-full text-xs font-bold transition-all cursor-pointer",
                          active
                            ? "bg-zinc-900 border-zinc-800 text-white shadow-sm"
                            : "bg-zinc-50 border-zinc-200 text-zinc-650 hover:bg-zinc-100"
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <span className="text-xs font-semibold text-red-500">{errors.services.message}</span>
                )}
              </div>

              {/* Preferred office selection pills */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-555">
                  Preferred Office Location
                </span>
                <div className="flex flex-wrap gap-2">
                  {officeOptions.map((opt) => {
                    const active = selectedOffice === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("office", opt.id, { shouldValidate: true })}
                        className={cn(
                          "py-2 px-4.5 border rounded-full text-xs font-bold transition-all cursor-pointer",
                          active
                            ? "bg-zinc-900 border-zinc-800 text-white shadow-sm"
                            : "bg-zinc-50 border-zinc-200 text-zinc-650 hover:bg-zinc-100"
                        )}
                      >
                        {opt.name}
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
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                  What's on your mind?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={cn(
                    "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink resize-none",
                    errors.message ? "border-red-500" : ""
                  )}
                  placeholder="Tell us about your brand challenge..."
                />
                {errors.message && (
                  <span className="text-xs font-semibold text-red-500">{errors.message.message}</span>
                )}
              </div>

              {/* How did you hear about us? pills */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-550">
                  How did you hear about us?
                </span>
                <div className="flex flex-wrap gap-2">
                  {sourceOptions.map((opt) => {
                    const active = selectedSource.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleSourceToggle(opt)}
                        className={cn(
                          "py-2 px-4.5 border rounded-full text-xs font-bold transition-all cursor-pointer",
                          active
                            ? "bg-zinc-900 border-zinc-800 text-white shadow-sm"
                            : "bg-zinc-50 border-zinc-200 text-zinc-650 hover:bg-zinc-100"
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {errors.source && (
                  <span className="text-xs font-semibold text-red-500">{errors.source.message}</span>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="primary"
                colorTheme="violet"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 shrink-0" />
                  </>
                )}
              </Button>

            </form>
          )}
        </div>

        {/* Right Column: Office Address Details & Map */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-ink tracking-tight">Our Global Offices</h2>
            <p className="text-sm text-zinc-550 leading-relaxed max-w-sm">
              We operate across five global offices to deliver synchronized creative and engineering scale.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {officesList.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-b border-slate-150 pb-5 last:border-b-0 last:pb-0">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center text-[#0A2540] shrink-0 border border-blue-200 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-ink uppercase tracking-wider">{item.city}</span>
                  <span className="text-xs text-slate-500 leading-normal max-w-xs">{item.address}</span>
                  <span className="text-[10px] text-slate-400 font-bold font-mono">{item.phone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Press Contact Section (Schbang-style) */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
            <span className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#0A2540]" /> Press &amp; Media Contact
            </span>
            <div className="flex flex-col gap-1 text-[11px] text-zinc-500">
              <p>For press releases & media inquiries, email our relations desk:</p>
              <span className="font-bold text-ink mt-2">avik.karmakar@kknextech.com</span>
              <span className="font-bold text-ink">divleen.jaggi@kknextech.com</span>
            </div>
          </div>

          {/* Styled Map */}
          <div className="relative w-full h-[200px] rounded-3xl overflow-hidden border border-zinc-200/50 bg-zinc-100 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.434771587817!2d77.3621464!3d28.6167664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce561f5f2479f%3A0xc0c8ff0e3d2319ef!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714282372352!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90"
            />
          </div>

        </div>

      </div>

      {/* FAQs */}
      <div className="border-t border-zinc-200/50">
        <FAQSection
          items={contactFAQs}
          eyebrow="Before You Reach Out"
          title="Contact — FAQs"
          description="Quick answers to the most common questions we get before a first conversation."
        />
      </div>

    </div>
  );
}
