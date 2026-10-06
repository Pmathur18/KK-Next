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
  count = 60,
  color = "124, 58, 237",
  opacity = 0.4,
  className,
  speed = 0.3,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const runningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const parent = canvas.parentElement;
    if (!parent) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const particleCount = reducedMotion ? Math.min(count, 12) : isCoarsePointer ? Math.min(count, 24) : count;

    resize();
    window.addEventListener("resize", resize);

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * opacity + 0.1,
    }));

    let lastFrame = 0;
    const draw = (timestamp = 0) => {
      if (!runningRef.current || document.hidden) return;
      if (timestamp - lastFrame < 32) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      draw();
    };
    const stop = () => {
      runningRef.current = false;
      cancelAnimationFrame(animRef.current);
    };
    const visibilityChange = () => (document.hidden ? stop() : start());
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "240px" }
    );

    observer.observe(canvas);
    document.addEventListener("visibilitychange", visibilityChange);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibilityChange);
    };
  }, [count, color, opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
    />
  );
}
