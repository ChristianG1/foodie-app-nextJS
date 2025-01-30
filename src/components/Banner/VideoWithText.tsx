"use client"

import { IoHeartOutline } from "react-icons/io5"

export default function VideoWithText() {
  return (
    <section className="flex justify-between w-full min-h-screen bg-white">
      {/* Video en el lado izquierdo */}
      <div className="w-1/2 overflow-hidden relative">
        <video
          className="w-full h-full object-cover"
          src="/videos/bannerejemplo2.mp4"
          autoPlay
          muted
          loop
        ></video>

        {/* Título dentro del video */}
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
          Conectar
        </h2>
      </div>

      {/* Contenido en el lado derecho */}
      <div className="w-1/2 pl-8 flex flex-col justify-start items-start">
        {/* Contenedor circular con corazón en la parte superior */}
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8">
          {/* Corazón de react-icons */}
          <IoHeartOutline className="text-white text-3xl" />
        </div>

        {/* Título */}
        <h3 className="text-4xl font-semibold text-black mb-6">Cycle</h3>

        {/* Descripción */}
        <p className="text-lg text-gray-800 mb-8">
          Clip-in & experience the new standard in cycling. Build a powerful
          foundation of form, technique and rhythm while embracing a philosophy
          of constant progress surrounded by the inspiration of what’s possible.
        </p>

        {/* Botón */}
        <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg mb-4">
          Book your first HQ session free
        </button>

        <p className="text-sm text-gray-600 mb-8">
          Start your 7-day free trial on-demand
        </p>
      </div>
    </section>
  )
}
