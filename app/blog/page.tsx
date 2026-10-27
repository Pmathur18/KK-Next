"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  BookOpen,
  Laptop,
  ShoppingBag,
  TrendingUp,
  Database,
  Layers,
  ChevronRight,
  Mail,
  User,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import ParticleField from "@/components/ui/ParticleField";
import GlowingOrb from "@/components/ui/GlowingOrb";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import CTABanner from "@/components/ui/CTABanner";
import { blogPosts, BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

/* ─── Filter Categories ─────────────────────────────────────────────────────── */
const FILTER_CATEGORIES = [
  "All",
  "Engineering & Code",
  "E-Commerce & Shopify",
  "Growth & Performance Marketing",
  "ERP & Automation",
  "Case Studies",
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

// Helper to normalize blog post categories to the 5 requested B2B pillars
export function getFilterCategory(post: BlogPost): FilterCategory {
  if (post.category === "Case Studies" || post.slug.includes("case-studies")) {
    return "Case Studies";
  }
  if (
    post.category === "Ecommerce & AI" ||
    post.category === "Ecommerce" ||
    post.slug.includes("ecommerce") ||
    post.slug.includes("shopify")
  ) {
    return "E-Commerce & Shopify";
  }
  if (
    post.category === "Web Design" ||
    post.category === "Tech Stack" ||
    post.slug.includes("tech-stack") ||
    post.slug.includes("web-vs-shopify")
  ) {
    return "Engineering & Code";
  }
  if (
    post.category === "Digital Growth" ||
    post.category === "B2B & Strategy" ||
    post.slug.includes("performance-marketing") ||
    post.slug.includes("first-party-data")
  ) {
    return "Growth & Performance Marketing";
  }
  if (
    post.category === "B2B & ERP" ||
    post.category === "CRM & ERP" ||
    post.category === "Operations & AI" ||
    post.slug.includes("crm-erp") ||
    post.slug.includes("inventory-management")
  ) {
    return "ERP & Automation";
  }
  return "Engineering & Code";
}

export default function BlogPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Categorize and count posts
  const postCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      All: blogPosts.length,
      "Engineering & Code": 0,
      "E-Commerce & Shopify": 0,
      "Growth & Performance Marketing": 0,
      "ERP & Automation": 0,
      "Case Studies": 0,
    };
    blogPosts.forEach((p) => {
      const cat = getFilterCategory(p);
      counts[cat] += 1;
    });
    return counts;
  }, []);

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedFilter === "All") {
      return blogPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return blogPosts.filter((p) => getFilterCategory(p) === selectedFilter);
  }, [selectedFilter, featuredPost]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-slate-900 min-h-screen py-8 md:py-14 font-sans">
      <ParticleField count={30} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-8%] right-[-5%]" color="#7C3AED" size={450} opacity={0.09} blur={110} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO HEADER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col items-center text-center gap-6 pb-10 relative z-10">
              <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display text-slate-900 uppercase max-w-4xl">
            Tech Insights, Engineering Guides &amp;{" "}
            <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
              Growth Strategies.
            </AnimatedGradientText>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Actionable breakdowns on modern web development, headless Shopify architectures, enterprise ERP automation, and high-ROAS performance marketing for scaling brands.
          </p>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. FEATURED / PILLAR ARTICLE HERO CARD
      ════════════════════════════════════════════════════════════════════ */}
      {featuredPost && selectedFilter === "All" && (
        <section className="pb-12 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
          <ScrollReveal>
            <Tilt3DCard intensity={4}>
              <div className="rounded-[32px] overflow-hidden border border-purple-200/90 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 shadow-2xl shadow-purple-950/5 hover:border-purple-300 transition-all">
                {/* Left Preview Image */}
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 group/featured min-h-[300px]">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/featured:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-[11px] font-black uppercase tracking-wider font-mono shadow-md">
                      Featured Pillar Guide
                    </span>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-5 flex flex-col justify-between py-2 gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                        {getFilterCategory(featuredPost)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight hover:text-purple-700 transition-colors cursor-pointer">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {featuredPost.summary}
                    </p>
                  </div>

                  {/* Meta & Action */}
                  <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5 font-mono">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-black shadow-md shadow-purple-600/25 transition-all group/btn"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          3. STICKY LOW-FRICTION CATEGORY FILTER BAR
      ════════════════════════════════════════════════════════════════════ */}
      <section className="sticky top-[64px] z-30 bg-white/85 backdrop-blur-xl border-y border-purple-100 py-3 px-6 md:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = selectedFilter === cat;
              const count = postCounts[cat];
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2",
                    isActive
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 font-extrabold"
                      : "bg-slate-100/80 hover:bg-purple-50 text-slate-600 hover:text-purple-700 border border-slate-200/70"
                  )}
                >
                  <span>{cat}</span>
                  <span
                    className={cn(
                      "text-[11px] px-2 py-0.5 rounded-full font-mono font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/70 text-slate-600"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-400 font-mono shrink-0">
            Showing <span className="text-purple-700 font-bold">{filteredPosts.length}</span> Articles
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. ARTICLES GRID (WITH READ TIME, CATEGORY, & AUTHOR BADGE)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 max-w-7xl px-6 md:px-8 mx-auto min-h-[400px] relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => {
                const categoryTheme = getFilterCategory(post);
                return (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                  >
                    <Tilt3DCard intensity={6} className="h-full">
                      <div className="flex flex-col justify-between group bg-white border border-purple-100 p-6 rounded-3xl shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:border-purple-300 transition-all h-full">
                        <div className="flex flex-col gap-4">
                          {/* Image Box */}
                          <Link
                            href={`/blog/${post.slug}`}
                            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 group/card block cursor-pointer"
                          >
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                          </Link>

                          {/* Category and Read Time */}
                          <div className="flex items-center justify-between gap-2 pt-1">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                              {categoryTheme}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono font-semibold">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>

                          {/* Post Title */}
                          <h3 className="font-black text-lg text-slate-900 font-display group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>

                          {/* Summary */}
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                            {post.summary}
                          </p>
                        </div>

                        {/* Card Footer: Date & Read Link */}
                        <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-purple-500" />
                            <span>{post.date}</span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-purple-600 hover:text-purple-800 transition-colors shrink-0 group/link"
                          >
                            <span>Read Article</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </Tilt3DCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 text-sm">
            No articles found inside this category.
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. NEWSLETTER & INBOUND CTA BANNER
      ════════════════════════════════════════════════════════════════════ */}
      <CTABanner
       
        title={
          <>
            Engineering &amp; Growth Breakdowns for{" "}
            <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
              Founders &amp; CTOs
            </AnimatedGradientText>
          </>
        }
        description="We summarize production-tested code architectures, headless Shopify benchmarks, and ROAS scaling frameworks. Sent once a month. Zero spam."
        buttonText=""
        buttonLink=""
      >
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md my-2">
          <input
            type="email"
            required
            placeholder="Enter your work email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border border-purple-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-purple-600 placeholder-slate-400 text-slate-800 w-full shadow-sm"
          />
          <Button
            type="submit"
            variant="primary"
            colorTheme="violet"
            className="flex items-center justify-center gap-2 whitespace-nowrap !py-3 !px-7 shadow-lg shadow-purple-500/25 cursor-pointer font-bold"
          >
            <Mail className="w-4 h-4 shrink-0" /> Subscribe Free
          </Button>
        </form>
        {subscribed && (
          <span className="text-xs text-emerald-600 font-bold block pt-1">
            ✓ You&apos;re subscribed to KK Next Tech engineering insights!
          </span>
        )}
      </CTABanner>

    </div>
  );
}
