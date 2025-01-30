"use client"

export default function HamburgerMenu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean
  toggleMenu: () => void
}) {
  return (
    <div
      className={`lg:hidden fixed inset-0 bg-white bg-opacity-90 z-20 transition-all duration-300 ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end p-6">
        <button onClick={toggleMenu} className="text-black">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-6 p-6">
        <a
          href="/"
          className="text-lg text-black hover:text-gray-700"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="/planes"
          className="text-lg text-black hover:text-gray-700"
          onClick={toggleMenu}
        >
          Planes
        </a>
        <a
          href="/suscribete"
          className="text-lg text-black hover:text-gray-700"
          onClick={toggleMenu}
        >
          Suscribirse
        </a>
        <a
          href="/login"
          className="bg-gradient-to-r from-[#E53D00] via-[#F68D3B] to-[#FFB88C] text-lg text-[#1B1B1B] py-2 px-4 rounded-full font-semibold shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#FFB88C] hover:via-[#F68D3B] hover:to-[#E53D00] hover:text-white"
          onClick={toggleMenu}
        >
          Iniciar sesión
        </a>
      </div>
    </div>
  )
}
