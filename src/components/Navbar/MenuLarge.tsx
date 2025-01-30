export default function MenuLarge() {
  return (
    <div className="hidden lg:flex space-x-6 flex-grow justify-center">
      <a href="/" className="text-sm text-black hover:text-gray-700">
        Home
      </a>
      <a href="/planes" className="text-sm text-black hover:text-gray-700">
        Planes
      </a>
      <a href="/suscribete" className="text-sm text-black hover:text-gray-700">
        Suscribirse
      </a>
    </div>
  )
}
