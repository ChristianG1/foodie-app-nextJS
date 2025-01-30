export default function TextWithArrowButton() {
  return (
    <>
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-sm text-black font-semibold">
        Conocer más
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-dashed border-[#E53D00]">
          <button className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#E53D00] via-[#F68D3B] to-[#FFB88C] rounded-full shadow-md hover:scale-110 transition-transform hover:bg-gradient-to-r hover:from-[#FFB88C] hover:via-[#F68D3B] hover:to-[#E53D00]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-6 h-6 transition-colors duration-200 hover:fill-white"
            >
              <path
                fillRule="evenodd"
                d="M12 15.75a.75.75 0 0 1-.53-.22l-5.25-5.25a.75.75 0 1 1 1.06-1.06L12 13.94l4.72-4.72a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-.53.22z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
