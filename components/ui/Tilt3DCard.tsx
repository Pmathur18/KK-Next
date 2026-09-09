"use client";

import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export default function Tilt3DCard({
  children,
  className,
  intensity = 12,
  glare = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [rawX, rawY, glareX, glareY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    glareX.set(50);
    glareY.set(50);
  }, [rawX, rawY, glareX, glareY]);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18) 0%, transparent 65%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={cn("relative", className)}
    >
      {children}
      {glare && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}
