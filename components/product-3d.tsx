'use client'

import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PresentationControls, Environment, Edges } from '@react-three/drei'
import * as THREE from 'three'
import { useLanguage } from '@/components/language-provider'

function CushionModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      if (!isHovered) {
        meshRef.current.rotation.y += 0.005
      }
      meshRef.current.position.y = Math.sin(Date.now() * 0.0005) * 0.15
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      scale={isHovered ? 1.1 : 1}
    >
      <boxGeometry args={[2, 2, 1.5]} />
      <meshPhongMaterial
        color="#B89968"
        shininess={150}
        emissive="#3a3a3a"
        wireframe={false}
      />
      <Edges linewidth={1} color="#ffffff" />
    </mesh>
  )
}

function ThreadModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.003
      meshRef.current.position.y = Math.cos(Date.now() * 0.0005) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[-1.5, 0, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 2.5, 32]} />
      <meshPhongMaterial
        color="#87AE73"
        shininess={100}
      />
    </mesh>
  )
}

function ClothModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.position.z = Math.sin(Date.now() * 0.0005) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[1.5, 0, 0]}>
      <planeGeometry args={[1.8, 1.8, 20, 20]} />
      <meshPhongMaterial
        color="#CC6655"
        shininess={80}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Scene3D() {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={1.2}
      rotation={[0.1, Math.PI * 0.1, 0]}
    >
      <group>
        <CushionModel />
        <ThreadModel />
        <ClothModel />
      </group>
      <Environment preset="studio" intensity={1.2} />
      
      {/* Lighting */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#f0e6d2" />
      <ambientLight intensity={0.8} />
    </PresentationControls>
  )
}

export function Product3D() {
  const { t } = useLanguage()

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-border bg-gradient-to-b from-muted to-muted/50">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-muted to-muted/50">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">{t('loading3D')}</p>
          </div>
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Scene3D />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center text-xs text-muted-foreground bg-gradient-to-t from-background to-transparent pointer-events-none">
        💡 {t('dragRotateZoom')}
      </div>
    </div>
  )
}
