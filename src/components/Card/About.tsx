import React from "react"

const AboutUs = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About us</h1>
        <p className="text-xl text-gray-600 mb-8">
          Unlock potential, find serenity: explore yoga's power
        </p>
        <p className="text-lg text-gray-700 mb-8">
          At ZenFlow Yoga, we believe that true well-being comes from within.
          Our classes are designed to help you reconnect with your body, mind,
          and spirit.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="text-lg italic text-gray-600">
            "Visiting ZenFlow Yoga was truly enlightening. Thank you, ZenFlow
            Yoga, for helping me deepen my practice and nourish my soul."
          </p>
          <p className="text-md text-gray-700 mt-4">Sarah Smith</p>
          <p className="text-sm text-gray-500">Graphic designer</p>
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Start your journey
        </button>
      </div>
    </div>
  )
}

export default AboutUs
