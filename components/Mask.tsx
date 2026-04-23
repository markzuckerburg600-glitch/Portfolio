"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import { useGLTF, PresentationControls } from "@react-three/drei"
import { FlipCard } from "./ui/flip-card"
import { flipCardData } from "@/lib/constants"

gsap.registerPlugin(ScrollTrigger)

function House() {
  const scale = 0.04
  const houseRef = useRef<THREE.Mesh>(null)
  const { scene } = useGLTF("/house.glb")

  return (
    <>
    <primitive object={scene} ref = {houseRef} scale = {[scale,scale,scale]} rotation = {[0.2, 0, 0]} position = {[0, -0.10, -0.15]}/>
    </>
  )
}

// Slowly raise up the grid 
export default function Mask() {
    const controlsRef = useRef<any>(null)

    useGSAP(() => {
    gsap.fromTo("#grid-container", {
        y: -30,
        opacity: 0.25
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#grid-container",
            start: "top bottom",
            end: "bottom top",
        }
    })
    }, [])

  return (
    <div className = "">
    {/* House container */}
    <div id = "grid-container" className="font-mono grid grid-cols-2 gap-2 p-3">
    <div className = "p-5 font-bold text-4xl border-2 border-gray-200 rounded-4xl h-[50vh]">
        Everyday, I strive to learn something new and apply that to real-world projects.
    </div>
    <div className = "h-[50vh]">
    <Canvas
    camera={{ position: [0, 0, 0.5], fov: 45, near: 0.1, far: 100 }}
    className = ""
    >
    <PresentationControls
    snap 
    speed = {1.5} 
    zoom = {0.5}
    azimuth = {[-Math.PI/2, Math.PI/2]}
    polar = {[0, Math.PI/2]}
    config = {{
        mass: 2,
        friction: 5,
        tension: 100
    }}
    >
    <House/>
    </PresentationControls>
    <ambientLight intensity={0.5}/>
    <pointLight position={[0.10, 0.02, 0]} intensity={0.02} color = "white"/>
    <directionalLight position = {[2,3,4]} intensity = {1}/>
    </Canvas>
    </div>
    </div>
    {/* Bento layout*/}
    <div>
    
    </div>

    {/* Get in touch*/}
    <FlipCard data = {flipCardData}/>
    </div>
  )
}
