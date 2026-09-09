"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 15,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + v.toFixed(decimals) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}
