const NavDown = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center bg-[#0] ">
      {/* <div className=""> */}
      {/* Background Circles */}
      <div
        className="absolute w-[2200px] h-[2200px] md:w-[1500px] md:h-[1500px] rounded-full bottom-[-700px] md:bottom-[-1000px] opacity-95 border-8 border-black shadow-[#000000] "
        style={{
          background: "radial-gradient(circle, #361764 30%, #11081f 38%, #000000 90%)",
          boxShadow: "0 0 200px 150px #11081f",
        }}
        
      ></div>

      <div
        className="absolute w-[1100px] h-[1100px] md:w-[1100px] md:h-[1150px] rounded-full bottom-[-800px] md:bottom-[-800px] opacity-90 border-8 border-black shadow-[0_0_100px_#000000]"
        style={{
          background: "radial-gradient(circle, #2C1251 40%, #0C0318 48%, #000000 80%)",
          boxShadow: "0 0 150px 45px #11081f",
        }}
      ></div>

      <div
        className="absolute w-[700px] h-[700px] rounded-full bottom-[-200px] md:bottom-[-500px] opacity-85 border-8 border-black shadow-[0_0_80px_#000000]"
        style={{
          background: "radial-gradient(circle, #2C1251 25%, #0C0318 65%, #000000 80%)",
          boxShadow: "0 0 90px 40px #130d1f",
        }}
      ></div>
      {/* </div> */}


      {/* Content Section */}
      <div className="container mx-auto px-6 pt-16 md:pt-28 pb-32 relative z-10">
        <div className="text-center">
          <h1 className="text-[75px]  font-semibold leading-[110%] text-center mx-auto bg-gradient-to-b from-white to-[#664993] text-transparent bg-clip-text pb-3">
            Transform Your Business <br />
            Operations with AI- <br />
            Powered Management
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto p-10 leading-relaxed">
            Automate workflows, boost productivity, and scale your business with
            intelligent solutions.
          </p>

          <div className="flex justify-center gap-14 mt-1">
            <button
              className="px-4 py-2 bg-white text-gray-900 rounded-lg text-[20px] font-medium 
              hover:bg-gray-200 transition-all flex items-center shadow-md"
            >
              Get Started
            </button>
            <button
              className="px-4 py-2 bg-white text-black rounded-lg text-[20px] font-medium
              border border-gray-400 hover:border-white transition-all flex items-center shadow"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDown;
