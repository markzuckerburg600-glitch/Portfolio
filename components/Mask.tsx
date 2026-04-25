"use client"

import { useRef, useEffect, useState } from "react"
import { Playfair_Display } from "next/font/google"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import { useGLTF, PresentationControls } from "@react-three/drei"
import { FlipCard } from "./ui/flip-card"
import { flipCardData } from "@/lib/constants"
import { useMediaQuery } from "react-responsive"
import About from "./About"

const playfair = Playfair_Display({ subsets: ["latin"] })

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
    const [mounted, setMounted] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 1024 })

    useEffect(() => {
        setMounted(true)
    }, [])

    useGSAP(() => {
    const mottoSplit = new SplitText("#motto", { type: "chars, words"})
    const descriptionSplit = new SplitText("#description", { type: "lines" })
    
    gsap.from(mottoSplit.chars, {
        yPercent: 100,
        duration: 1.5,
        ease: "expo.out", 
        stagger: 0.06,
        scrollTrigger: {
            trigger: "#motto",
            start: "top bottom",
            end: "bottom top",
        }
    })

    gsap.from(descriptionSplit.lines, {
        yPercent: 100,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
            trigger: "#description",
            start: "top bottom",
            end: "bottom top",
        }
    })


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
    <>
    <div className = "">
    {/* House container */}
    <h1 className={`${playfair.className} flex justify-center font-bold lg:text-7xl md:text-6xl sm:text-5xl mb-10`} id = "motto"> My<span className={`${playfair.className} ml-2 text-blue-600`}>Motto</span> </h1>
    <div id = "grid-container" className="font-mono grid grid-cols-2 gap-2 p-3">
    <div className = {`p-5 font-bold lg:text-5xl md:text-4xl sm:text-3xl border-2 border-gray-200 rounded-4xl ${mounted && isMobile ? 'h-[50vh]' : 'h-[60vh]'}`} id = "description">
        Everyday, I strive to learn something new and apply that to real-world projects.
        I have an open mind to new challenges.
    </div>
    <div className = {`${mounted && isMobile ? 'h-[50vh]' : 'h-[60vh]'}`}>
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
        <About/>
    </div>

    {/* Get in touch*/}
    <FlipCard data = {flipCardData}/>
    </div>
    </>
  )
}
