import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import HackerRoom from '../components/HackerRoom'

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Dawid <span className="waving-hand">👋🏼</span></p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero