"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment, Float, PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"

const FloatingCube = ({ position, size, color, speed, rotationFactor }) => {
const meshRef = useRef()

useFrame((state) => {
  const time = state.clock.getElapsedTime()

  // Floating animation
  meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2

  // Rotation animation
  meshRef.current.rotation.x = time * rotationFactor * 0.2
  meshRef.current.rotation.y = time * rotationFactor * 0.3
  meshRef.current.rotation.z = time * rotationFactor * 0.1
})

return (
  <mesh ref={meshRef} position={position}>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
  </mesh>
)
}

const FloatingSphere = ({ position, radius, color, speed, rotationFactor }) => {
const meshRef = useRef()

useFrame((state) => {
  const time = state.clock.getElapsedTime()

  // Floating animation
  meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2

  // Rotation animation
  meshRef.current.rotation.x = time * rotationFactor * 0.2
  meshRef.current.rotation.y = time * rotationFactor * 0.3
})

return (
  <mesh ref={meshRef} position={position}>
    <sphereGeometry args={[radius, 32, 32]} />
    <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
  </mesh>
)
}

const FloatingTorus = ({ position, args, color, speed, rotationFactor }) => {
const meshRef = useRef()

useFrame((state) => {
  const time = state.clock.getElapsedTime()

  // Floating animation
  meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2

  // Rotation animation
  meshRef.current.rotation.x = time * rotationFactor * 0.2
  meshRef.current.rotation.y = time * rotationFactor * 0.3
})

return (
  <mesh ref={meshRef} position={position}>
    <torusGeometry args={args} />
    <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
  </mesh>
)
}

const Experience = ({ darkMode }) => {
const cameraRef = useRef()

// Background color based on theme
const bgColor = darkMode ? new THREE.Color("#111827") : new THREE.Color("#f3f4f6")

useFrame(({ scene }) => {
  scene.background = bgColor
})

return (
  <>
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={25} />

    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableRotate={true}
      rotateSpeed={0.5}
      autoRotate
      autoRotateSpeed={0.5}
    />

    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />

    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <FloatingCube
        position={[-3, 0, -5]}
        size={[1, 1, 1]}
        color={darkMode ? "#3b82f6" : "#2563eb"}
        speed={1.2}
        rotationFactor={0.5}
      />

      <FloatingSphere
        position={[3, 1, -6]}
        radius={0.8}
        color={darkMode ? "#8b5cf6" : "#7c3aed"}
        speed={1.5}
        rotationFactor={0.7}
      />

      <FloatingTorus
        position={[0, -2, -4]}
        args={[0.8, 0.3, 16, 100]}
        color={darkMode ? "#ec4899" : "#db2777"}
        speed={1.3}
        rotationFactor={0.6}
      />

      <FloatingCube
        position={[4, -1, -7]}
        size={[0.8, 0.8, 0.8]}
        color={darkMode ? "#10b981" : "#059669"}
        speed={1.1}
        rotationFactor={0.4}
      />

      <FloatingSphere
        position={[-4, 2, -8]}
        radius={0.6}
        color={darkMode ? "#f59e0b" : "#d97706"}
        speed={1.4}
        rotationFactor={0.8}
      />
    </Float>

    <Stars radius={50} depth={50} count={darkMode ? 5000 : 0} factor={4} saturation={0} fade speed={1} />

    <Environment preset="city" />
  </>
)
}

export default Experience
