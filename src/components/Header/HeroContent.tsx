import Buttons from "./Buttons"

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 z-10">
      <div className="max-w-3xl w-full mt-20">
        <h1 className="font-poppins text-4xl md:text-5xl font-extrabold mb-6 text-black">
          Lorem, ipsum dolor sit amet{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E53D00] via-[#F68D3B] to-[#FFB88C]">
            consectetur
          </span>{" "}
          adipisicing elit. Molestias
        </h1>
        <Buttons />
      </div>
    </div>
  )
}
