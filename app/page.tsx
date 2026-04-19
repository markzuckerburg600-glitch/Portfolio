"use client"
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { Spinner } from "@/components/ui/spinner";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Plane from "@/models/Plane";
import Bird from "@/models/Bird";

// Preload models
useGLTF.preload("/plane.glb")
useGLTF.preload("/bird.glb")
useGLTF.preload("/scene.gltf")

{/* <div className = "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  Popup
</div> */}

export default function Home() {
  const [screenScale, setScreenScale] = useState<[number, number, number] | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(false)
  const [currentStage, setCurrentStage] = useState<number>(1)
  
  useEffect(() => {
  const adjustIsland = () => {
    let screenScale = null
    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [1.2, 1.2 ,1.2]
    }
    setScreenScale(screenScale)
  }

  adjustIsland()
  }, [])

  return (
    <section className = "w-full h-screen relative">
      <Canvas className = {`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing": "cursor-grab"}`}
      camera = {{near: 0.1, far: 100, fov: 75}}
      dpr={[1, 2]}
      gl={{ 
        antialias: false,
        powerPreference: "high-performance"
      }}
      performance={{ min: 0.5 }}
      >
        <Suspense fallback = 
        {
          <Html>
          <div className="w-full h-full flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2">
          <p className="text-black text-4xl font-bold mb-4">Loading...</p>
          <Spinner className = "size-8"/>
          </div>
          </Html>
        }>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[1, 10, 5]} intensity={3.5} />
          <hemisphereLight skyColor = "#b1e1ff" groundColor = "#000000" intensity={1}/>
          <Sky
          isRotating = {isRotating}
          rotation = {[0,Math.PI,Math.PI]}
          />
          <Plane
          isRotating = {isRotating}
          />
          <Bird
          isRotating = {isRotating}
          />
          <Island
          scale = {screenScale}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage}
          />
        </Suspense>
        
      </Canvas>
    </section>
  );
}
