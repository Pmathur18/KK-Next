"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  delay?: number;
  hover3D?: boolean;
}

export default function GlassCard({
  children,
  className,
  dark = false,
  delay = 0,
  hover3D = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover3D ? { y: -8, scale: 1.02, rotateX: 3 } : { y: -4 }}
      className={cn(
        "relative rounded-3xl overflow-hidden border transition-all duration-300",
        dark
          ? "bg-white/5 backdrop-blur-2xl border-white/10 shadow-2xl"
          : "bg-white/80 backdrop-blur-2xl border-purple-100/80 shadow-xl shadow-purple-900/5",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glass sheen */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: dark
            ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
