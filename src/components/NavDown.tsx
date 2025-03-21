import React from "react";
import { ArrowRight, Play } from "lucide-react";

const NavDown = () => {
  return (
    <div className="min-h-screen bg-[#0a060f] flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute w-[2800px] h-[2800px] md:w-[3500px] md:h-[3500px] rounded-full bottom-[-1100px] md:bottom-[-900px] opacity-100 border-8 border-black shadow-[0_0_150px_#000000]"
        style={{
          background:
            "radial-gradient(circle,  #090909 70%, #ffffff 100%, #0A020F 100%)",
        }}
      ></div>
      {/* Largest Circle  */}
      <div
        className="absolute w-[2800px] h-[2800px] md:w-[2000px] md:h-[2000px] rounded-full bottom-[-1100px] md:bottom-[-900px] opacity-100 border-8 border-black shadow-[0_0_150px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #0A020F 60%, #1E0935, #ffffff 85%, #A34DE0 20%)",
        }}
      ></div>

      {/* Second Circle  */}
      <div
        className="absolute w-[2200px] h-[2200px] md:w-[1600px] md:h-[1600px] rounded-full bottom-[-950px] md:bottom-[-750px] opacity-95 border-8 border-black shadow-[0_0_120px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #1E0935 60%, #120424 65%, #000000 90%)",
        }}
      ></div>

      {/* Third Circle */}
      <div
        className="absolute w-[1600px] h-[1600px] md:w-[1300px] md:h-[1250px] rounded-full bottom-[-800px] md:bottom-[-600px] opacity-90 border-8 border-black shadow-[0_0_100px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #1E0935 25%, #120424 57%, #000000 85%)",
        }}
      ></div>

      {/* Smallest Circle  */}
      <div
        className="absolute w-[1400px] h-[1400px] md:w-[900px] md:h-[850px] rounded-full bottom-[-600px] md:bottom-[-450px] opacity-85 border-8 border-black shadow-[0_0_80px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #1E0935 35%, #0C0318 50%, #000000 80%)",
        }}
      ></div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pt-20 md:pt-28 pb-32 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
            <span className="text-white">Transform Your Business</span>
            <br />
            <span className="text-gray-300">Operations with AI-</span>
            <br />
            <span className="text-purple-400">Powered Management</span>
          </h1>
          <p className="text-md md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Automate workflows, boost productivity, and scale your business with
            intelligent solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 md:px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-6 md:px-8 py-3 bg-transparent text-white rounded-full font-medium border border-gray-600 hover:border-purple-400 transition-colors flex items-center">
              View Demo <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDown;
