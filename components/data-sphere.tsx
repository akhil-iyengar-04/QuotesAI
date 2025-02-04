"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Text } from "@react-three/drei"
import type * as THREE from "three"

function DataPoint({ position }: { position: [number, number, number] }) {
  return (
    <Sphere args={[0.05, 16, 16]} position={position}>
      <meshBasicMaterial color="white" />
    </Sphere>
  )
}

function FloatingNumber({ position }: { position: [number, number, number] }) {
  const number = useMemo(() => Math.floor(Math.random() * 100), [])
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0] * 10) * 0.1
    }
  })

  return (
    <Text ref={ref} position={position} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
      {number}
    </Text>
  )
}

function DataSphereObject() {
  const groupRef = useRef<THREE.Group>(null!)
  const dataPoints = useMemo(() => {
    return Array.from({ length: 150 }, () => {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = 2.5 * Math.sin(phi) * Math.cos(theta)
      const y = 2.5 * Math.sin(phi) * Math.sin(theta)
      const z = 2.5 * Math.cos(phi)
      return [x, y, z] as [number, number, number]
    })
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[2.5, 64, 64]}>
        <meshBasicMaterial color="white" wireframe />
      </Sphere>
      {dataPoints.map((position, index) => (
        <DataPoint key={index} position={position} />
      ))}
      {dataPoints.slice(0, 15).map((position, index) => (
        <FloatingNumber key={index} position={position} />
      ))}
    </group>
  )
}

export function DataSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <DataSphereObject />
    </Canvas>
  )
}

