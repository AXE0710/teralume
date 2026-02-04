'use client'

import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Edges, Html } from '@react-three/drei'
import * as THREE from 'three'

interface Product3DShowcaseProps {
  productType: 'cushion' | 'textile' | 'kitchen'
  color?: string
}

function CushionDisplay({ color = '#B89968' }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.2]}>
      <boxGeometry args={[2, 2, 1.5]} />
      <meshStandardMaterial
        color={color}
        metalness={0.1}
        roughness={0.7}
        envMapIntensity={1}
      />
      <Edges linewidth={0.5} color="#ffffff" />
    </mesh>
  )
}

function TextileDisplay({ color = '#87AE73' }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.002
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={1.8} castShadow receiveShadow>
      <planeGeometry args={[2.2, 2.2, 30, 30]} />
      <meshStandardMaterial
        color={color}
        metalness={0.05}
        roughness={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function KitchenClothDisplay({ color = '#CC6655' }: { color: string }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.4
    }
  })

  return (
    <group ref={group}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[-0.8 + i * 0.8, 0, i * 0.1]} scale={0.9 - i * 0.1} castShadow>
          <planeGeometry args={[1.5, 1.5, 16, 16]} />
          <meshStandardMaterial
            color={color}
            metalness={0}
            roughness={0.85}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function SceneContent({ productType }: { productType: 'cushion' | 'textile' | 'kitchen' }) {
  return (
    <>
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enableZoom={true}
        enablePan={true}
      />
      
      {productType === 'cushion' && <CushionDisplay color="#B89968" />}
      {productType === 'textile' && <TextileDisplay color="#87AE73" />}
      {productType === 'kitchen' && <KitchenClothDisplay color="#CC6655" />}

      <Environment preset="studio" intensity={1.5} />
      
      {/* Lighting */}
      <directionalLight position={[8, 8, 8]} intensity={1.2} color="#ffffff" castShadow />
      <directionalLight position={[-8, 4, -8]} intensity={0.8} color="#f5e6d3" />
      <ambientLight intensity={0.9} />
      <pointLight position={[0, 5, 0]} intensity={0.5} />
    </>
  )
}

export function Product3DShowcase({ productType = 'cushion' }: Product3DShowcaseProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-border bg-gradient-to-br from-muted via-background to-muted shadow-lg relative">
      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted via-background to-muted">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground">Rendering 3D Model...</p>
            </div>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
          shadows
        >
          <SceneContent productType={productType} />
        </Canvas>
      </Suspense>

      {/* Interactive Hint */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-end pb-4">
        <div className="text-center text-xs text-muted-foreground bg-gradient-to-t from-background via-background/80 to-transparent w-full py-3">
          <div className="flex items-center justify-center gap-2">
            <span>🖱️ Drag to rotate</span>
            <span className="text-border">•</span>
            <span>📜 Scroll to zoom</span>
          </div>
        </div>
      </div>
    </div>
  )
}
