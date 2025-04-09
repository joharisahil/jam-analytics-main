const NavDown = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center bg-[#0] p-1">
      {/* <div className=""> */}
      {/* Background Circles */}
      <div
        className="absolute w-[2200px] h-[2200px] md:w-[1500px] md:h-[1500px] rounded-full bottom-[-700px] md:bottom-[-1000px] opacity-95 border-8 border-black"
        style={{
          background:
            "radial-gradient(circle, #361764 25%, #11081f 40%, #000000 85%)",
          boxShadow:
            "inset 4px 4px 250px 80px #000000, 0 0 250px 100px #11081f",
        }}
      ></div>

      <div
        className="absolute w-[1100px] h-[1100px] md:w-[1100px] md:h-[1150px] rounded-full bottom-[-800px] md:bottom-[-800px] opacity-90 border-8 border-black"
        style={{
          background:
            "radial-gradient(circle, #2C1251 30%, #0C0318 50%, #000000 85%)",
          boxShadow: "inset 0 0 150px 70px #000000, 0 0 150px 50px #11081f",
        }}
      ></div>

      <div
        className="absolute w-[700px] h-[700px] rounded-full bottom-[-200px] md:bottom-[-500px] opacity-85 border-8 border-black"
        style={{
          background:
            "radial-gradient(circle, #2C1251 10%, #0C0318 40%, #000000 90%)",
          boxShadow: "inset 0 0 140px 45px #000000, 0 0 100px 50px #130d1f",
        }}
      ></div>

      {/* </div> */}

      {/* Content Section */}
      <div className="container  px-4 pt-32 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 pb-32 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[75px] font-semibold leading-[110%] text-center mx-auto bg-gradient-to-b from-white to-[#664993] text-transparent bg-clip-text pb-3">
            Transform Your Business <br className="hidden md:block" />
            Operations with AI- <br className="hidden md:block" />
            Powered Management
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-6 px-4 text-gray-300 max-w-3xl mx-auto  leading-relaxed">
            Automate workflows, boost productivity, and scale your business with
            intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8">
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
