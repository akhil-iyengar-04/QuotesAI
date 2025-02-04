"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphereObject() {
  const sphereRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    sphereRef.current.position.y = Math.sin(t) * 0.2
    sphereRef.current.rotation.y = t * 0.5
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial color="#FF8C00" attach="material" distort={0.4} speed={4} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

export function AnimatedSphere() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphereObject />
    </Canvas>
  )
}

