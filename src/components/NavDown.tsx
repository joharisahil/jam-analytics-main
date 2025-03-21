import React from "react";
import { ArrowRight, Play } from "lucide-react";

const NavDown = () => {
  return (


    
    
    <section className="container mx-auto px-6 pt-20 pb-32 text-center">
      {/* Heading with Exact Font, Gradient, and Size */}
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

      {/* Buttons Styled  */}
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
    </section>
  );
};

export default NavDown;