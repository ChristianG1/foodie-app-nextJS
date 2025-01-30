import React from "react"

const QuoteSection: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center max-w-md mx-auto">
      <p className="text-lg italic text-gray-600 mb-4">
        "Visiting ZenFlow Yoga was truly enlightening. Thank you, ZenFlow Yoga,
        for helping me deepen my practice and nourish my soul."
      </p>
      <p className="text-md text-gray-700 font-semibold">Sarah Smith</p>
      <p className="text-sm text-gray-500">Graphic designer</p>
      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Start your journey
      </button>
    </div>
  )
}

export default QuoteSection
