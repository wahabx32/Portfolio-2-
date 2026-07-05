"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Instance, Instances, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({
  count,
  color,
  size,
  radius,
  speed,
}: {
  count: number;
  color: string;
  size: number;
  radius: number;
  speed: number;
}) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // random point inside a flattened sphere shell
      const r = radius * (0.35 + 0.65 * Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi) - 2;
    }
    return arr;
  }, [count, radius]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x += delta * speed * 0.3;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

type CrystalData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
};

function Crystal({ data }: { data: CrystalData }) {
  const ref = useRef<THREE.Object3D>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = data.rotation[0] + t * data.speed * 0.3;
    ref.current.rotation.y = data.rotation[1] + t * data.speed * 0.4;
    ref.current.position.y =
      data.position[1] + Math.sin(t * data.speed + data.phase) * 0.5;
  });

  return (
    <Instance
      ref={ref as never}
      position={data.position}
      rotation={data.rotation}
      scale={data.scale}
    />
  );
}

function Crystals({ count }: { count: number }) {
  const data = useMemo<CrystalData[]>(
    () =>
      Array.from({ length: count }, () => ({
        position: [
          THREE.MathUtils.randFloatSpread(26),
          THREE.MathUtils.randFloatSpread(16),
          THREE.MathUtils.randFloatSpread(10) - 5,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: 0.08 + Math.random() * 0.18,
        speed: 0.25 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      })),
    [count],
  );

  return (
    <Instances limit={count} frustumCulled={false}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#8b5cf6"
        metalness={0.9}
        roughness={0.15}
        emissive="#4c1d95"
        emissiveIntensity={0.5}
      />
      {data.map((d, i) => (
        <Crystal key={i} data={d} />
      ))}
    </Instances>
  );
}

function HeroShapes({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.4}>
        <mesh position={[4.6, 1.6, -2.5]} scale={isMobile ? 1.1 : 1.7}>
          <sphereGeometry args={[1, 48, 48]} />
          <MeshDistortMaterial
            color="#1e1b4b"
            distort={0.38}
            speed={1.6}
            metalness={0.85}
            roughness={0.12}
            emissive="#312e81"
            emissiveIntensity={0.55}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.8} floatIntensity={1.1}>
        <mesh position={[-5.2, -2, -3.5]} rotation={[0.6, 0.4, 0]}>
          <torusGeometry args={[1.3, 0.32, 24, 80]} />
          <meshStandardMaterial
            color="#0ea5e9"
            metalness={0.95}
            roughness={0.1}
            emissive="#0369a1"
            emissiveIntensity={0.45}
          />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.6}>
        <mesh position={[-3.6, 2.4, -4]} scale={1.05}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            wireframe
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {!isMobile && (
        <Float speed={1.4} rotationIntensity={0.9} floatIntensity={1.3}>
          <mesh position={[3.4, -2.8, -5]} scale={0.8}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#38bdf8"
              metalness={0.9}
              roughness={0.15}
              emissive="#0c4a6e"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      )}
    </>
  );
}

function ParallaxRig() {
  useFrame((state) => {
    const { camera, pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 1.1,
      0.04,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.6,
      0.04,
    );
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  // computed once on mount; the canvas is client-only (ssr: false)
  const [isMobile] = useState(() => window.innerWidth < 768);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 11], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#050505", 14, 30]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[8, 6, 8]} intensity={2.4} decay={0} color="#38bdf8" />
      <pointLight position={[-8, -4, 6]} intensity={2} decay={0} color="#8b5cf6" />

      <Particles
        count={isMobile ? 350 : 1200}
        color="#7dd3fc"
        size={0.035}
        radius={16}
        speed={0.02}
      />
      <Particles
        count={isMobile ? 150 : 500}
        color="#c4b5fd"
        size={0.05}
        radius={12}
        speed={-0.015}
      />
      <Crystals count={isMobile ? 10 : 26} />
      <HeroShapes isMobile={isMobile} />
      <ParallaxRig />
    </Canvas>
  );
}
