"use client"
import { useRef, Fragment } from "react"
import Letters from "./Letters"
import { lines } from "@/lib/constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function RandomRotation() {
    return Math.random() * 90 - 45
}

export default function LetterMessAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current) return

        const letters = containerRef.current.querySelectorAll('.letter')
        const triggers: ScrollTrigger[] = []
        
        letters.forEach((letter) => {
            const speed = parseFloat(letter.getAttribute('data-speed') || "1")
            
            gsap.from(letter, {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            })

            const trigger = ScrollTrigger.create({
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: true,
                invalidateOnRefresh: true,
                animation: gsap.to(letter, {
                    y: Math.min((1 - speed) * ScrollTrigger.maxScroll(window) + 20, 800),
                    rotation: RandomRotation(),
                    ease: "power1.inOut",
                    duration: 1.5,
                })
            })
            triggers.push(trigger)
        })

        const emojiElement = containerRef.current.querySelector("#emoji")
        if (emojiElement) {
            gsap.from(emojiElement, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.5
            })
        }

        return () => {
            triggers.forEach(trigger => trigger.kill())
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className = "mt-25 overflow-hidden">
            <div className = "mb-100 flex h-screen justify-start flex-row">
                 {lines.map((line) => (
                    <Fragment key = {line}>
                    <div className = "flex ml-3">
                        <Letters word = {line}/>
                    </div>
                    </Fragment>
                 ))}
            <div className="ml-3 font-serif lg:text-7xl md:text-5xl sm:text-4xl font-extrabold" id = "emoji">
                🤗
            </div>
            </div>
        </div>
    )
}

