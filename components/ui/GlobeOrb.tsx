"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls } from "@react-three/drei";
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
    const dots: [number, number, number][] = [];
    for (let lat = -60; lat <= 60; lat += 24) {
      for (let lng = 0; lng < 360; lng += 24) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lng * Math.PI) / 180;
        dots.push([
          radius * Math.cos(phi) * Math.cos(theta),
          radius * Math.sin(phi),
          radius * Math.cos(phi) * Math.sin(theta),
        ]);
      }
    }

    return { lines, dots };
  }, [radius]);
}

function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { lines, dots } = useGlobeGeometry(1.5);

  // Smooth low-cost auto-rotate
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x += delta * 0.04;
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

      {/* Intersection dots */}
      {dots.map(([x, y, z], i) => (
        <Sphere key={i} args={[0.02, 6, 6]} position={[x, y, z]}>
          <meshBasicMaterial color="#9333EA" transparent opacity={0.7} />
        </Sphere>
      ))}

      {/* Core glow sphere */}
      <Sphere ref={meshRef} args={[1.48, 20, 20]}>
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

export default function GlobeOrb({ className, size = 480 }: GlobeOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  // Stop WebGL render loop when GlobeOrb scrolls out of view
  useEffect(() => {
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
      className={`pointer-events-none select-none ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "low-power", antialias: true, alpha: true }}
        frameloop={isInView ? "always" : "never"}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#7C3AED" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
        <WireframeGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
