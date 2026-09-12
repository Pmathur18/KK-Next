"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import ParticleField from "@/components/ui/ParticleField";
import GlowingOrb from "@/components/ui/GlowingOrb";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { blogPosts, BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug);

  const filteredPosts = regularPosts.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="relative overflow-hidden w-full bg-white py-12 md:py-20">
      <ParticleField count={30} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-10%] right-[-5%]" color="#7C3AED" size={400} opacity={0.08} blur={100} />
      
      {/* Header */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-6 pb-12 border-b border-purple-100 relative z-10">
        <ScrollReveal>
          <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
            Our Insights
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 max-w-3xl font-display">
            KK Insights &amp;{" "}
            <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
              Engineering Guides
            </AnimatedGradientText>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            We share research summaries, design systems tips, and automated script snippets to keep product engineering teams ahead of the curve.
          </p>
        </ScrollReveal>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="py-12 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
          <ScrollReveal>
            <Tilt3DCard intensity={5}>
              <div className="rounded-[32px] overflow-hidden border border-purple-200/80 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 group/featured min-h-[260px]">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/featured:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between py-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Badge colorTheme="violet">Featured Post</Badge>
                      <span className="text-xs text-slate-400 font-medium">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-snug hover:text-purple-700 transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      {featuredPost.summary}
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="mt-8 pt-6 border-t border-purple-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar name={featuredPost.author.name} className="w-10 h-10 text-xs shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{featuredPost.author.name}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{featuredPost.author.role}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      Read Post <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-6 max-w-7xl px-6 md:px-8 mx-auto flex flex-wrap gap-2.5 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer",
              selectedCategory === cat
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 scale-105"
                : "bg-white text-slate-600 border-purple-100 hover:bg-purple-50 hover:border-purple-200"
            )}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Regular Posts Grid */}
      <section className="py-12 max-w-7xl px-6 md:px-8 mx-auto min-h-[300px] relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.08}>
                <Tilt3DCard intensity={6} className="h-full">
                  <div className="flex flex-col justify-between group bg-white border border-purple-100/80 p-6 rounded-3xl shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all h-full">
                    <div className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 group/card">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge colorTheme={post.category === "Websites" ? "sky" : (post.category === "Mobile Apps" ? "peach" : (post.category === "Social Media" ? "mint" : "yellow"))}>
                          {post.category}
                        </Badge>
                        <span className="text-[10px] text-slate-400 font-semibold">{post.readTime}</span>
                      </div>
                      <h3 className="font-black text-base md:text-lg text-slate-900 font-display group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors mt-6 pt-4 border-t border-purple-50"
                    >
                      Read Post <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400 text-sm">
            No articles found inside this category.
          </div>
        )}
      </section>

      {/* Newsletter Block (Apple Glass Design) */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto py-12">
        <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/15 rounded-[36px] p-8 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-[0_25px_60px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full filter blur-[90px] pointer-events-none" />
          <div className="flex flex-col gap-3 relative z-10">
            <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
              Newsletter
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-display">
              Get technical insights straight to your inbox
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-md">
              We compile solutions updates, design tokens, and automation advice. Sent once a month. No spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto md:max-w-md">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-zinc-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-zinc-400 placeholder-zinc-400 text-ink w-full min-w-[240px]"
            />
            <Button type="submit" variant="primary" colorTheme="ink" className="flex items-center justify-center gap-2 whitespace-nowrap">
              <Mail className="w-4 h-4 shrink-0" /> Subscribe
            </Button>
            {subscribed && (
              <span className="text-xs text-accent-primary font-bold block mt-2 sm:absolute sm:mt-14">
                Thank you for subscribing!
              </span>
            )}
          </form>
        </div>
      </section>

    </div>
  );
}
