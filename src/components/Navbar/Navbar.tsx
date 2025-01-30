"use client"
import { useState, useEffect } from "react"

import Logo from "./Logo"
import MenuLarge from "./MenuLarge"
import LoginButton from "./LoginButton"
import HamburgerMenu from "./HamburgerMenu"
import FloatingButton from "./FloatingButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario hace scroll más allá de 50px, cambia el estado
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`flex items-center justify-between py-4 px-6 fixed top-0 left-0 right-0 w-full z-10 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Logo />
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <MenuLarge />
        <LoginButton />
      </nav>

      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <FloatingButton />
    </>
  )
}
