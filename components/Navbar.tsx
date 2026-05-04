"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ]
  const pathName = usePathname()
  return (
    pathName !== "/projects" && (
      <nav className = "gap-3 bg-transparent p-3 absolute z-10 w-full">
        <ul className = "flex flex-row justify-around">
        {links.map((link, i) => (
          <Link className = {`${i === 0 ? " mr-auto" : ""}  ${pathName === link.href ? "underline" : ""} p-1.5 font-mono font-bold lg:text-3xl md:text-2xl ml-15 mr-10 mt-5 hover:scale-105 hover:bg-white hover:font-extrabold transition-all ease-in-out duration-200 rounded-4xl`} key = {link.name} href = {link.href}> 
          <li>
            {link.name}
          </li>
          </Link>
        ))}
        </ul>
      </nav>
    )
  )
}
