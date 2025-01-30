"use client"

import { useEffect, useRef } from "react"
import { useScroll } from "framer-motion"
import gsap from "gsap"
import { ReactLenis } from "lenis/dist/lenis-react"

export default function BannerVideo() {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Se actualiza el progreso del scroll para animar la escala y la opacidad
    scrollYProgress.onChange((progress) => {
      // Aseguramos que el valor de scroll esté entre 0 y 1
      const scrollValue = progress

      // Usamos gsap para animar la escala y opacidad de manera suave
      gsap.to(videoRef.current, {
        scale: 1 - scrollValue * 0.8, // El 0.8 controla qué tan rápido se reduce el tamaño
        opacity: 1 - scrollValue * 0.5, // 0.5 controla la rapidez del desvanecimiento
        duration: 0.3, // Duración de la animación para hacerla suave
        ease: "power2.out", // Curva de animación suave
      })
    })
  }, [scrollYProgress])

  return (
    <section className="relative w-full min-h-screen">
      <ReactLenis
        root
        options={{
          lerp: 0.1, // Suaviza el desplazamiento
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/videos/bannerejemplo2.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </ReactLenis>
    </section>
  )
}
