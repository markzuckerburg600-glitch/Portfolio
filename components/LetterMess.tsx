"use client"
import { useRef, useEffect, Fragment } from "react"
import Letters from "./Letters"
import { lines } from "@/lib/constants"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
function RandomRotation() {
    return Math.random() * 90 - 45
}

function LetterMess(ref: React.RefObject<HTMLDivElement>) {
  const letters = ref.current?.querySelectorAll('.letter') || []
  letters.forEach(letter => {
    const speed = parseFloat(letter.getAttribute('aria-label') || "1")
    gsap.to(letter, {
        y: Math.min((1 - speed) * ScrollTrigger.maxScroll(window) + 20, 600),
        rotation: RandomRotation(),
        ease: "power1.inOut",
        duration: 1.5,
        scrollTrigger: {
            trigger: document.documentElement, 
            start: 0,
            end: window.innerHeight,
            scrub: true,
            invalidateOnRefresh: true,
        }
    })
  })
}

export default function LetterMessAnimation() {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!ref.current) return 
        LetterMess(ref)
    }, [])
    return (
        <div ref={ref} className = "mt-50">
            <div className = "mb-100 flex h-screen justify-start flex-row">
                 {lines.map((line, i) => (
                    <Fragment key = {line}>
                    <div className = "flex flex- ml-3">
                        <Letters word = {line}/>
                    </div>
                    </Fragment>
                 ))}
            </div>
        </div>
    )
}

