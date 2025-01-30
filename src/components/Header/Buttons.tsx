export default function Buttons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <a
        href="/planes"
        className="bg-gradient-to-r from-[#E53D00] via-[#F68D3B] to-[#FFB88C] text-[#1B1B1B] py-1 px-3 rounded-full text-md font-semibold shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#FFB88C] hover:via-[#F68D3B] hover:to-[#E53D00] hover:text-white"
      >
        Descubre nuestros planes
      </a>
      <a
        href="/suscribete"
        className="border-2 border-[#E53D00] text-[#E53D00] py-1 px-3 rounded-full text-md font-semibold shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#E53D00] hover:via-[#F68D3B] hover:to-[#FFB88C] hover:text-white"
      >
        Suscríbete ahora
      </a>
    </div>
  )
}
