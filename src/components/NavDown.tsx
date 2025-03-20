import React from 'react';
import { ArrowRight, Play } from "lucide-react";

const NavDown = () => {
  return (
    <div className="min-h-screen bg-[#0f0c13] flex items-center justify-center relative overflow-hidden">

      {/* Background Circles in Downward Direction */}
      <div className="absolute w-[2000px] h-[2000px] bg-gradient-to-b from-[#2f194f] via-[#000000] to-[#6448ac] rounded-full bottom-[-800px] opacity-100"></div>

      <div className="absolute w-[1600px] h-[1550px] bg-gradient-to-b from-[#2f194f] via-[#000000] to-[#6f4a9b] rounded-full bottom-[-650px] opacity-91"></div>
      <div className="absolute w-[1200px] h-[1200px] bg-gradient-to-r from-[#2f194f] via-[#000000] to-[#6f4a9b] rounded-full bottom-[-550px] opacity-85"></div>
      <div className="absolute w-[750px] h-[720px] bg-gradient-to-tl from-[#6f4a9b] via-[#000000] to-[#2f194f] rounded-full bottom-[-350px] opacity-90"></div>

      {/* Sticky Content Section */}
      <div className="container mx-auto px-6 pt-28 pb-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug">
            <span className="text-white">Transform Your Business</span>
            <br />
            <span className="text-gray-300">Operations with AI-</span>
            <br />
            <span className="text-purple-400">Powered Management</span>
          </h1>
          <p className="text-md text-gray-400 mb-8 max-w-2xl mx-auto">
            Automate workflows, boost productivity, and scale your business with
            intelligent solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-transparent text-white rounded-full font-medium border border-gray-600 hover:border-purple-400 transition-colors flex items-center">
              View Demo <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDown;
