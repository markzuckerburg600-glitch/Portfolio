"use client"

import Image from "next/image"
import dayjs from "dayjs"
import { navLinks, navIcons } from "@/lib/constants"

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Image src="/images/logo.svg" alt="macnavbar" width={13} height={13} />
        <p className = "font-bold">Ryan</p>

        <ul className="flex gap-5 ml-auto">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>

      </div>
      <div>
        <ul className="flex gap-5">
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <Image src={img} alt="navicon" width={13} height={13} />
              </li>
            ))}
          </ul>

        <time className="hidden sm:block">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  )
}
