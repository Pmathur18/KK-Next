"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const directionMap: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 24,
        stiffness: 90,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
