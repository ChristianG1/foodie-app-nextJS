"use client"
import HeroContent from "./HeroContent"
import HeroImages from "./HeroImages"
import TextWithArrowButton from "./TextWithArrowButton"

export default function Header() {
  return (
    <header className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center">
      <HeroContent />
      <HeroImages />
    </header>
  )
}
