// MacOS design project page 
import Image from "next/image"
import "./mac.css"
import Navbar from "@/components/mac/Navbar"
export default function page() {
  return (
    <>
    <Image src = "/mac.jpg" alt = "macbackground" width = {2000} height = {2000} className = "w-full h-full absolute top-0 left-0 z-[-1] object-cover object-center"/>
    <Navbar />
    </>
  )
}
