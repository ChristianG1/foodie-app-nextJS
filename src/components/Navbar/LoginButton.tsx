export default function LoginButton() {
  return (
    <div className="hidden lg:block">
      <a
        href="/login"
        className="bg-gradient-to-r from-[#E53D00] via-[#F68D3B] to-[#FFB88C] text-sm text-[#1B1B1B] py-2 px-4 rounded-full font-semibold shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#FFB88C] hover:via-[#F68D3B] hover:to-[#E53D00] hover:text-white"
      >
        Iniciar sesión
      </a>
    </div>
  )
}
