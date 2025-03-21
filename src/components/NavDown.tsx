import React from "react";
// import { ArrowRight, Play } from "lucide-react";

const NavDown = () => {
  return (
    <div className="min-h-screen bg-[#0a060f] flex items-center justify-center relative overflow-hidden">
     
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
        className="absolute w-[1400px] h-[1400px] md:w-[600px] md:h-[650px] rounded-full bottom-[-600px] md:bottom-[-450px] opacity-85 border-8 border-black shadow-[0_0_80px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #1E0935 35%, #0C0318 50%, #000000 80%)",
        }}
      ></div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pt-8 md:pt-28 pb-32 relative z-10">
        <div className="text-center">
        <h1
        className="text-[78px] font-[695] leading-[110%] text-center mx-auto
        bg-gradient-to-b from-white to-[#664993] text-transparent bg-clip-text pb-3"
      >
        Transform Your Business <br />
        Operations with AI- <br />
        Powered Management
      </h1>

      {/* Subheading with Correct Color and Spacing */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto p-10 leading-relaxed ">
        Automate workflows, boost productivity, and scale your business with
        intelligent solutions.
      </p>

      {/* Buttons Styled Exactly Like Image */}
      <div className="flex justify-center gap-36 mt-1">
        <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-[20px] font-medium 
          hover:bg-gray-200 transition-all flex items-center shadow-md">
          Get Started
        </button>
           <button className="px-4 py-2 bg-white text-black rounded-lg text-[20px] font-medium
          border border-gray-400 hover:border-white transition-all flex items-center shadow">
          View Demo
        </button>
      </div>

        </div>
      </div>
    </div>
  );
};

export default NavDown;
