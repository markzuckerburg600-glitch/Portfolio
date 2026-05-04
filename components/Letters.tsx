"use client"
import { useState, useRef, useEffect } from "react"

export default function Letters({ word }: { word: string }) {
  const [speeds, setSpeeds] = useState<number[]>([])
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!initializedRef.current) {
      setSpeeds(word.split("").map(() => Math.random() * 2))
      initializedRef.current = true
    }
  }, [word])

  return (
    <>
        {word.split("").map((letter, i) => (
            <div
            data-speed={speeds[i] || 1}
            key={i}
            className = "text-black font-serif letter lg:text-7xl md:text-5xl sm:text-4xl font-extrabold"
            >
                {letter}
            </div>
        ))}
    </>
  )
}
