// import { ArrowRight, Play } from "lucide-react";

const NavDown = () => {
  return (
    <div className="min-h-screen bg-[#0a060f] flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute w-[2800px] h-[2800px] md:w-[3500px] md:h-[3500px] rounded-full bottom-[-1100px] md:bottom-[-900px] opacity-100 border-8"
        style={{
          background:
            "radial-gradient(circle,  #090909 70%, #ffffff 100%, #0A020F 100%)",
        }}
      ></div>
      {/* Largest Circle  */}
      <div
  className="absolute w-[2800px] h-[2800px] md:w-[2350px] md:h-[2350px] rounded-full bottom-[-1100px] md:bottom-[-900px] opacity-70 "
  style={{
    background:
           "radial-gradient(circle, #000000 60%, #000000 75%, #361764 85%)"
  }}
></div>



      {/* Second Circle  */}
      <div
        className="absolute w-[2200px] h-[2200px] md:w-[2300px] md:h-[2350px] rounded-full bottom-[-950px] md:bottom-[-1400px] opacity-95 border-8 border-black shadow-[0_0_120px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #1E0935 60%, #120424 65%, #000000 90%)",
        }}
      ></div>

      {/* Third Circle */}
      <div
        className="absolute w-[1600px] h-[1600px] md:w-[1900px] md:h-[1950px] rounded-full bottom-[-1250px] md:bottom-[-1250px] opacity-90 border-8 border-black shadow-[0_0_100px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #361764 42%, #120424 65%, #000000 85%)",
        }}
      ></div>

      {/* Smallest Circle  */}
      <div
        className="absolute w-[1400px] h-[1400px] md:w-[1550px] md:h-[1750px] rounded-full bottom-[-800px] md:bottom-[-1260px] opacity-85 border-8 border-black shadow-[0_0_80px_#000000]"
        style={{
          background:
            "radial-gradient(circle, #361764 47%, #0C0318 65%, #000000 80%)",
        }}
      ></div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pt-20 md:pt-28 pb-32 relative z-10">
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
        <button className="px-4 py-2 bg-[#ffffffd0] text-gray-900 rounded-lg text-[20px] font-medium 
          hover:bg-gray-200 transition-all flex items-center shadow-md">
          Get Started
        </button>
           <button className="px-4 py-2 bg-[#ffffffd0] text-black rounded-lg text-[20px] font-medium
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