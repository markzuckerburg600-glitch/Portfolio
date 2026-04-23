"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function getRandomSpeed() {
    return Math.random() * 2;
}
// Hydration error here 
export default function Letters({ word }: { word: string }) {
  return (
    <>
        {word.split("").map((letter, i) => (
            <div
            aria-label={getRandomSpeed().toString()}
            key={i}
            className = "font-serif letter lg:text-7xl md:text-5xl sm:text-4xl font-extrabold"
            suppressHydrationWarning
            >
                {letter}
            </div>
        ))}  
    </>
  )
}
