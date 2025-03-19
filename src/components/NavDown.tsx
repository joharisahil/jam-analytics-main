import React from 'react'
import { ArrowRight, Play } from "lucide-react";

const NavDown = () => {
  return (
    <section id="Home" className="container mx-auto px-6 pt-28 pb-32 text-center  ">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
        Transform Your Business Operations with AI-Powered Management
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Automate workflows, boost productivity, and scale your business with intelligent solutions
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center">
          Launching Soon <ArrowRight className="ml-2 w-4 h-4" />
        </button>
        <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-blue-600 transition-colors flex items-center">
          Watch Demo <Play className="ml-2 w-4 h-4" />
        </button>
      </div>
    </section>
  )
}

export default NavDown