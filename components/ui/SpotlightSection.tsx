"use client";

import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightSectionProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  size?: number;
}

export default function SpotlightSection({
  children,
  className,
  spotlightColor = "rgba(7, 89, 213, 0.12)",
  size = 500,
}: SpotlightSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(${size}px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-size);
    mouseY.set(-size);
  }, [mouseX, mouseY, size]);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
