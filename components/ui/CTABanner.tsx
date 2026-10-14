"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightSection from "@/components/ui/SpotlightSection";
import BeamBorder from "@/components/ui/BeamBorder";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { cn } from "@/lib/utils";

export interface CTABannerProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function CTABanner({
  badge = "Ready to Build Your Win?",
  title,
  description = "Book a free 30-minute discovery call to discuss your web application, mobile product, or CRM automation goals.",
  buttonText = "Schedule Free Discovery Call →",
  buttonLink = "/contact",
  children,
  className,
}: CTABannerProps) {
  return (
    <section className={cn("py-10 md:py-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10", className)}>
      <ScrollReveal>
        <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.12)" size={500}>
          <BeamBorder colorFrom="#7C3AED" colorTo="#38bdf8" duration={4} borderRadius="2rem">
            <div className="bg-gradient-to-r from-purple-50 via-white to-cyan-50 rounded-[1.875rem] p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden">
              {badge && (
                <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                  {badge}
                </Badge>
              )}

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                {title || (
                  <>
                    Let&apos;s Build Your Next{" "}
                    <AnimatedGradientText>Case Study Together</AnimatedGradientText>
                  </>
                )}
              </h2>

              {description && (
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                  {description}
                </p>
              )}

              {children}

              {buttonText && buttonLink && (
                <Link href={buttonLink}>
                  <Button
                    variant="primary"
                    colorTheme="violet"
                    className="!py-4 !px-8 !text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    {buttonText}
                  </Button>
                </Link>
              )}
            </div>
          </BeamBorder>
        </SpotlightSection>
      </ScrollReveal>
    </section>
  );
}
