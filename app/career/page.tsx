"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, ChevronDown, ChevronUp, Briefcase, GraduationCap, Heart, Home, Paperclip, Send } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import GraphicPlaceholder from "@/components/ui/GraphicPlaceholder";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { cn } from "@/lib/utils";

const careerFAQs: FAQItem[] = [
  {
    q: "How long does the hiring process take?",
    a: "Our hiring process typically takes 2–3 weeks from application to offer. It includes a profile review (3–5 days), a technical or portfolio screening call (60 mins), a take-home task or live session (role-dependent), and a final culture-fit call with a senior team member. We move fast and respect your time."
  },
  {
    q: "Are all positions fully remote?",
    a: "Most positions are fully remote across India. Some roles have an optional in-office presence at our Noida/Delhi NCR office for collaborative sprint weeks. We have no mandatory relocation requirements and provide full home-office setup support including internet stipends."
  },
  {
    q: "Do I need a CS degree to apply?",
    a: "No. We care about what you can build, not where you studied. We evaluate candidates based on their portfolio, GitHub contributions, real-world projects, and problem-solving approach in our technical screens. A strong portfolio beats a degree every time for us."
  },
  {
    q: "I don’t see a role that matches me exactly. Can I still apply?",
    a: "Absolutely. We encourage general applications. If you're an exceptional developer, designer, marketer, or data analyst, use the application form below and select 'General Engineering Application'. We review every profile that comes in, even when there's no open headcount."
  },
  {
    q: "What does the onboarding process look like?",
    a: "Your first week is structured: you'll meet every team member, get full access to our project management tools, review our code and design standards, and complete a small onboarding task in your area of expertise. By week two, you're contributing to a live client project with full support."
  },
  {
    q: "Do you hire freelancers or only full-time?",
    a: "We hire both. We maintain a network of trusted freelance collaborators for project-specific engagements — particularly for graphic design, video editing, and specialist backend work. If you're interested in freelance collaboration, mention it in your cover letter and we'll flag your profile accordingly."
  },
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Please select a target role"),
  portfolioUrl: z.string().url("Please input a valid URL").or(z.string().length(0)),
  coverLetter: z.string().min(10, "Please introduce yourself briefly (min 10 chars)"),
});

type FormValues = z.infer<typeof schema>;

export default function Career() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setFormSubmitted(true);
        reset();
        resolve(true);
      }, 1500);
    });
  };

  const perks = [
    { title: "Remote-First", desc: "Work from anywhere in India with full home-office setup stipends.", icon: Home, color: "bg-[#EBF3FC]" },
    { title: "Continuous Growth", desc: "Twice-a-year feedback cycles, mentor matches, and direct pathing.", icon: Briefcase, color: "bg-[#F8FAFC]" },
    { title: "Learning Allowance", desc: "Annual budgets for certifications, books, and technology courses.", icon: GraduationCap, color: "bg-[#F1F5F9]" },
    { title: "Health Benefits", desc: "Comprehensive insurance coverage for yourself and immediate family.", icon: Heart, color: "bg-[#050B14] text-white" },
  ];

  const positions = [
    {
      id: "p1",
      title: "Senior React Native Engineer",
      dept: "Engineering",
      loc: "Remote (India)",
      type: "Full-Time",
      desc: "We are seeking a senior mobile engineer to lead development on FitQuest and other high-performance iOS/Android applications. You will sync offline caches and compile spring transition animations.",
      reqs: [
        "4+ years of professional React Native engineering.",
        "Deep familiarity with SQLite on-device caches and data sync engines.",
        "Strict typescript standards and modular architecture guidelines."
      ]
    },
    {
      id: "p2",
      title: "Lead Frontend Developer (Next.js)",
      dept: "Engineering",
      loc: "Remote / Noida",
      type: "Full-Time",
      desc: "Join our core web engineering team. You will lead Shopify Headless integration layouts, optimize React Server Component structures, and compile custom CSS animations.",
      reqs: [
        "3+ years engineering Next.js applications.",
        "Strong CSS skills (Tailwind, PostCSS, keyframe loops).",
        "Experience mapping Shopify Storefront or similar headless APIs."
      ]
    },
    {
      id: "p3",
      title: "Social Advertising Specialist",
      dept: "Marketing",
      loc: "Remote (India)",
      type: "Full-Time",
      desc: "Manage high-growth paid social campaigns on Meta, Google, and LinkedIn. You will run audience optimization runs, direct creative graphics layouts, and compile performance metrics reports.",
      reqs: [
        "2+ years running Meta/Google search campaigns.",
        "Data-driven mindset focusing on CPL and conversion CTR numbers.",
        "Familiarity with visual wireframing tools (Figma, Canva)."
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20">
      
      {/* Hero */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-20 border-b border-slate-200">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-[#0A2540]">
            Careers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink font-display">
            Join the tech solution force.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            We are building a remote-friendly software agency dedicated to clean code base patterns and outstanding design aesthetics. Explore our perks and open positions.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[350px]">
          <div className="absolute inset-0 bg-blue-500/20 border border-white/40 rounded-[32px] rotate-[2deg] backdrop-blur-md" />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-[32px] overflow-hidden p-3 shadow-xl flex items-center justify-center">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-900">
              <img
                src="/images/tech_team_workspace.jpg"
                alt="KK Next Tech Workspace & Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-20 md:py-28 max-w-7xl px-6 md:px-8 mx-auto border-b border-zinc-200/50">
        <div className="flex flex-col gap-12 md:gap-16">
          <SectionHeading
            eyebrow="Benefits"
            title="Perks of working at KK NEX TECH"
            description="We structure incentives to support long-term engineering growth, family stability, and work-life balance."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} colorBg={p.color as any} className="flex flex-col gap-5 min-h-[200px]">
                  <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-ink shadow-sm border border-zinc-200/50">
                    <Icon className="w-5.5 h-5.5 text-accent-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-lg text-ink">{p.title}</h3>
                    <p className="text-xs text-zinc-650 leading-relaxed">{p.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Accordion */}
      <section className="py-20 md:py-28 max-w-7xl px-6 md:px-8 mx-auto border-b border-zinc-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <SectionHeading
              eyebrow="Openings"
              title="Find your role"
              description="Click on any listing below to view requirements and capabilities."
            />
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {positions.map((pos) => {
              const isExpanded = expandedRole === pos.id;
              return (
                <div
                  key={pos.id}
                  className="bg-white border border-zinc-250/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setExpandedRole(isExpanded ? null : pos.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer hover:bg-zinc-50/50 transition-colors"
                  >
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-lg text-ink">{pos.title}</h3>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge colorTheme="violet" className="!py-0.5 !px-2.5 !text-[9px]">
                          {pos.dept}
                        </Badge>
                        <span className="text-xs text-zinc-400 font-medium">{pos.loc}</span>
                        <span className="text-xs text-zinc-400 font-medium">·</span>
                        <span className="text-xs text-zinc-400 font-medium">{pos.type}</span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-zinc-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-zinc-100 pt-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-sm text-ink uppercase tracking-wider">Description</h4>
                        <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                          {pos.desc}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-sm text-ink uppercase tracking-wider">Requirements</h4>
                        <ul className="flex flex-col gap-2">
                          {pos.reqs.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-650 leading-tight">
                              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href="#apply-form" onClick={() => setExpandedRole(null)}>
                        <Button variant="primary" colorTheme="violet" className="!py-2 !px-6 !text-xs w-fit">
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Resume Application Form (Apple Glass) */}
      <section id="apply-form" className="py-20 md:py-28 max-w-7xl px-6 md:px-8 mx-auto">
        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-center items-center">
            <Badge colorTheme="violet" className="w-fit">Submission</Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mt-2">
              Send us your profile
            </h2>
            <p className="text-xs md:text-sm text-zinc-550 leading-relaxed max-w-md">
              Don't see a perfect match? Send us your resume anyway. We are always hiring talented generalists.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-[#EBF3FC] border border-blue-200 text-center flex flex-col items-center gap-4">
              <CheckCircle2 className="w-12 h-12 text-[#0A2540] shrink-0" />
              <h3 className="text-lg font-bold text-ink font-display">Application Sent Successfully!</h3>
              <p className="text-xs text-slate-500 max-w-sm">
                Thank you for applying. Our talent acquisition team will review your details and contact you via email inside 3-5 business days.
              </p>
              <Button variant="secondary" onClick={() => setFormSubmitted(false)} className="mt-2">
                Send Another Profile
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
                      errors.name ? "border-red-500" : ""
                    )}
                    placeholder="Rohit Sharma"
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
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
                    placeholder="rohit@gmail.com"
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-red-500">{errors.email.message}</span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Role selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Target Role
                  </label>
                  <select
                    id="role"
                    {...register("role")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink cursor-pointer",
                      errors.role ? "border-red-500" : ""
                    )}
                  >
                    <option value="">Select a role...</option>
                    <option value="react-native">Senior React Native Engineer</option>
                    <option value="nextjs-frontend">Lead Frontend Developer (Next.js)</option>
                    <option value="ads-specialist">Social Advertising Specialist</option>
                    <option value="generalist">General Engineering Application</option>
                  </select>
                  {errors.role && (
                    <span className="text-xs font-semibold text-red-500">{errors.role.message}</span>
                  )}
                </div>

                {/* Portfolio URL */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="portfolioUrl" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Portfolio / GitHub Link
                  </label>
                  <input
                    id="portfolioUrl"
                    type="text"
                    {...register("portfolioUrl")}
                    className={cn(
                      "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink",
                      errors.portfolioUrl ? "border-red-500" : ""
                    )}
                    placeholder="https://github.com/username"
                  />
                  {errors.portfolioUrl && (
                    <span className="text-xs font-semibold text-red-500">{errors.portfolioUrl.message}</span>
                  )}
                </div>

              </div>

              {/* Cover Letter */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="coverLetter" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Introduce yourself (Short Cover Letter)
                  </label>
                <textarea
                  id="coverLetter"
                  rows={4}
                  {...register("coverLetter")}
                  className={cn(
                    "bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 text-ink resize-none",
                    errors.coverLetter ? "border-red-500" : ""
                  )}
                  placeholder="Tell us about your technical achievements..."
                />
                {errors.coverLetter && (
                  <span className="text-xs font-semibold text-red-500">{errors.coverLetter.message}</span>
                )}
              </div>

              {/* Mock Resume Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Resume Attachment
                </label>
                <div className="border-2 border-dashed border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-zinc-50/50">
                  <Paperclip className="w-5 h-5 text-zinc-400 shrink-0" />
                  <span className="text-xs text-zinc-500 font-medium">Attach PDF file (mock upload)</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                colorTheme="violet"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Sending Application...</span>
                ) : (
                  <>
                    Submit Profile <Send className="w-4 h-4 shrink-0" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <div className="border-t border-zinc-200/50">
        <FAQSection
          items={careerFAQs}
          eyebrow="Got Questions?"
          title="Careers — FAQs"
          description="Everything you need to know about working and growing at KK NEX TECH SOLUTION."
        />
      </div>

    </div>
  );
}
