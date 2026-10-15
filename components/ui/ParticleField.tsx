"use client";

import React, { useEffect, useRef } from "react";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  opacity?: number;
  className?: string;
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

export default function ParticleField({
  count = 45,
  color = "124, 58, 237",
  opacity = 0.35,
  className,
  speed = 0.25,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Adapt count for smaller mobile screens to maintain 60 FPS
    const effectiveCount = typeof window !== "undefined" && window.innerWidth < 768
      ? Math.min(count, 24)
      : count;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    particlesRef.current = Array.from({ length: effectiveCount }, () => ({
      x: Math.random() * (canvas.width || 400),
      y: Math.random() * (canvas.height || 400),
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * opacity + 0.08,
    }));

    const maxDist = 110;
    const maxDistSq = maxDist * maxDist;

    const draw = () => {
      if (!isVisibleRef.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const len = particles.length;

      // Draw connections in a single batched stroke call
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = `rgba(${color}, 0.12)`;
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      // Draw all particle dots in a single batched fill call
      ctx.fillStyle = `rgba(${color}, ${opacity})`;
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        ctx.moveTo(p.x + p.r, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    // Pause animation when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          cancelAnimationFrame(animRef.current);
          animRef.current = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(animRef.current);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [count, color, opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
      style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
    />
  );
}
