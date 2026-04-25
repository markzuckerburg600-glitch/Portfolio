import gsap from "gsap" 
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, CSSPlugin } from "gsap/all"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { SiPytorch, SiNextdotjs, SiTailwindcss, SiLangchain, SiGsap, SiThreedotjs } from "react-icons/si"
import { useMediaQuery } from "react-responsive"


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const leftExpertise = [
  { title: "Three.js", icon: <SiThreedotjs /> },
  { title: "GSAP", icon: <SiGsap/>},
  { title: "PyTorch", icon: <SiPytorch /> },
  { title: "Polars", icon:  <Image src = "/polars.svg" alt = "Polars" width = {24} height = {24}/>},
]

const rightExpertise = [
  { title: "Next.js", icon: <SiNextdotjs /> },
  { title: "TailwindCSS", icon: <SiTailwindcss /> },
  { title: "Langgraph", icon: <SiLangchain /> },
  { title: "Monai", icon:  <Image src = "/monai.png" alt = "Monai" width = {65} height = {24}/> },
]

const realExpertisesLeft = [
  { title: "Public Speaking", icon: <SiGsap/> },
  { title: "Video Editing", icon: <SiGsap/> },
  { title: "Chess", icon: <SiGsap/> },
  { title: "Chemistry", icon: <SiGsap/> },
]

const realExpertisesRight = [
  { title: "Tutoring", icon: <SiGsap/> },
  { title: "Scientific Research", icon: <SiGsap/> },
  { title: "Piano", icon: <SiGsap/> },
  { title: "Volunteer Work", icon: <SiGsap/> },
]

gsap.registerPlugin(ScrollTrigger, CSSPlugin)
export default function About() {
// Contains the mask and the bento layout
  const isMobile = useMediaQuery({ maxWidth: 768 })
  useGSAP(() => {
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "+=1300",
        scrub: 1.5,
        pin: true,
      }
    })

    maskTimeline.
    to("#coding", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut"
    })
    .to(".masked-img", {
      scale: 1.3,
      duration: 2,
      maskSize: "200%",
      ease: "power2.inOut"
    })
    .to("#real", {
      delay: 0.5,
      opacity: 1,
      y: -100,
      duration: 2,
      ease: "power2.inOut",
      scale: 1.1,
    })

  })
  
  return (
    <>
    <div className = "relative" id = "container">
      <div className = "flex justify-center flex-col items-center">
          <Image
          className = "masked-img shadow-2xl absolute top-50 z-0"
          id = "ryan"
          src = "/ryanlaptop.png"
          alt = "Ryan Chen"
          width = {400}
          height = {400}/>
          <h1 className={`absolute top-10 text-[7rem] font-bold opacity-50 ${montserrat.className} z-10`}> 
            <span className="bg-linear-to-r from-[#f42e13] to-[#046fc1] bg-clip-text text-transparent">What I Offer</span> 
          </h1>
          {/* Fading out section */}
          <section className = "flex flex-col items-center mt-110 relative z-10" id = "coding">
          <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
            <div className = "flex flex-col gap-4 justify-start items-start">
              {leftExpertise.map((topic) => (
                <div key={topic.title} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-3xl text-blue-600">{topic.icon}</div>
                  <span className={`text-xl font-semibold text-gray-700 ${montserrat.className}`}>{topic.title}</span>
                </div>
              ))}
            </div>
            <div className = "flex flex-col gap-4 justify-end items-end">
              {rightExpertise.map((topic) => (
                <div key={topic.title} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <span className={`text-xl font-semibold text-gray-700 ${montserrat.className}`}>{topic.title}</span>
                  <div className="text-3xl text-blue-600">{topic.icon}</div>
                </div>
              ))}
            </div>
          </div>
          </section>
          {/* Fade in section */}
          <section className = "flex flex-col items-center opacity-0 mt-55" id = "real">
          <h1 className = "font-mono text-4xl md:text-5xl font-bold text-gray-800 mb-3">I have experience in </h1>
          <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
            <div className = "flex flex-col gap-4 justify-start items-start">
              {realExpertisesLeft.map((topic) => (
                <div key={topic.title} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-3xl text-blue-600">{topic.icon}</div>
                  <span className={`text-xl font-semibold text-gray-700 ${montserrat.className}`}>{topic.title}</span>
                </div>
              ))}
            </div>
            <div className = "flex flex-col gap-4 justify-end items-end">
              {realExpertisesRight.map((topic) => (
                <div key={topic.title} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <span className={`text-xl font-semibold text-gray-700 ${montserrat.className}`}>{topic.title}</span>
                  <div className="text-3xl text-blue-600">{topic.icon}</div>
                </div>
              ))}
            </div>
          </div>
          </section>
        </div>
      </div>
    </>
  )
}
