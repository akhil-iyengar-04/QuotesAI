"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function SpacetimeCurve() {
  const meshRef = useRef<THREE.Group>(null!)

  // Parameters for Flamm's paraboloid
  const r_s = 1.0 // Schwarzschild radius
  const numRadial = 40
  const numAngular = 40
  const rMax = 10
  const zStretch = 2.0

  const { positions, indices } = useMemo(() => {
    const positions: number[] = []
    const indices: number[] = []

    // Generate vertices for both upper and lower paraboloids
    for (let isUpper = 0; isUpper <= 1; isUpper++) {
      const sign = isUpper ? 1 : -1

      for (let i = 0; i <= numRadial; i++) {
        const r = r_s + (rMax - r_s) * (i / numRadial)

        for (let j = 0; j <= numAngular; j++) {
          const theta = (j / numAngular) * Math.PI * 2

          const x = r * Math.cos(theta)
          const y = r * Math.sin(theta)
          // Flamm's paraboloid formula: z = ±2√(rs(r-rs))
          const z = sign * zStretch * 2 * Math.sqrt(r_s * (r - r_s))

          positions.push(x, z, y) // Note: y and z swapped for better orientation
        }
      }
    }

    // Generate indices for wireframe
    const verticesPerRow = numAngular + 1
    for (let k = 0; k <= 1; k++) {
      const offset = k * (numRadial + 1) * verticesPerRow

      // Radial lines
      for (let i = 0; i < numRadial; i++) {
        for (let j = 0; j <= numAngular; j++) {
          const current = offset + i * verticesPerRow + j
          const next = current + verticesPerRow
          indices.push(current, next)
        }
      }

      // Angular lines
      for (let i = 0; i <= numRadial; i++) {
        for (let j = 0; j < numAngular; j++) {
          const current = offset + i * verticesPerRow + j
          const next = current + 1
          indices.push(current, next)
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      indices: new Uint16Array(indices),
    }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003 // Increased rotation speed
    }
  })

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={0.5} rotation={[0, 0, Math.PI / 6]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="index" count={indices.length} array={indices} itemSize={1} />
        </bufferGeometry>
        <lineBasicMaterial color="white" linewidth={1} />
      </lineSegments>
    </group>
  )
}

export function SpacetimeCurveAnimation() {
  return (
    <Canvas camera={{ position: [15, 8, 15], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <SpacetimeCurve />
    </Canvas>
  )
}

