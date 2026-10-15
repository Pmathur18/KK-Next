"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

// Precompute wireframe geometry once so it's not created on every frame
function useGlobeGeometry(radius = 1.5) {
  return useMemo(() => {
    const lines: THREE.Vector3[][] = [];

    // Latitude lines (fewer steps for silky smooth 60fps)
    for (let lat = -80; lat <= 80; lat += 24) {
      const points: THREE.Vector3[] = [];
      const phi = (lat * Math.PI) / 180;
      for (let lng = 0; lng <= 360; lng += 8) {
        const theta = (lng * Math.PI) / 180;
        points.push(
          new THREE.Vector3(
            radius * Math.cos(phi) * Math.cos(theta),
            radius * Math.sin(phi),
            radius * Math.cos(phi) * Math.sin(theta)
          )
        );
      }
      lines.push(points);
    }

    // Longitude lines
    for (let lng = 0; lng < 360; lng += 24) {
      const points: THREE.Vector3[] = [];
      const theta = (lng * Math.PI) / 180;
      for (let lat = -90; lat <= 90; lat += 8) {
        const phi = (lat * Math.PI) / 180;
        points.push(
          new THREE.Vector3(
            radius * Math.cos(phi) * Math.cos(theta),
            radius * Math.sin(phi),
            radius * Math.cos(phi) * Math.sin(theta)
          )
        );
      }
      lines.push(points);
    }

    // Intersection dots
    const dots: number[] = [];
    for (let lat = -60; lat <= 60; lat += 24) {
      for (let lng = 0; lng < 360; lng += 24) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lng * Math.PI) / 180;
        dots.push(
          radius * Math.cos(phi) * Math.cos(theta),
          radius * Math.sin(phi),
          radius * Math.cos(phi) * Math.sin(theta)
        );
      }
    }

    return { lines, dots };
  }, [radius]);
}

function GlobeDots({ dots }: { dots: number[] }) {
  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(dots), 3));
    return geo;
  }, [dots]);

  return (
    <points geometry={pointsGeometry}>
      <pointsMaterial
        size={0.05}
        color="#9333EA"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { lines, dots } = useGlobeGeometry(1.5);

  // Smooth low-cost auto-rotate
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Grid lines */}
      {lines.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#7C3AED"
          lineWidth={0.5}
          transparent
          opacity={0.3}
        />
      ))}

      {/* Single GPU draw call for all intersection dots */}
      <GlobeDots dots={dots} />

      {/* Core glow sphere */}
      <Sphere ref={meshRef} args={[1.48, 16, 16]}>
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.04}
          wireframe={false}
        />
      </Sphere>
    </group>
  );
}

interface GlobeOrbProps {
  className?: string;
  size?: number;
}

export default function GlobeOrb({ className, size = 440 }: GlobeOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none select-none max-w-full aspect-square ${className ?? ""}`}
      style={{ width: size, height: size, maxWidth: "100%" }}
    >
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          style={{ background: "transparent", width: "100%", height: "100%" }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: "low-power", antialias: true, alpha: true }}
          frameloop={isInView ? "always" : "never"}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#7C3AED" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
          <WireframeGlobe />
        </Canvas>
      )}
    </div>
  );
}
