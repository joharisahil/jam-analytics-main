import { useNavigate } from "react-router-dom"; 


const NavDown = () => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden flex items-center justify-center bg-[#0]">
      {/* <div className=""> */}
      {/* Background Circles */}
      <div
        className="absolute w-[1200px] h-[1550px] bottom-[-1160px] md:w-[1500px] md:h-[1500px] xl:w-[1500px] xl:h-[1500px] sm:w-[1500px] sm:h-[1500px] lg:w-[1200px] lg:h-[1400px] rounded-full  md:bottom-[-1000px] sm:bottom-[-1000px] opacity-95 border-8 border-black lg:bottom-[-1050px]"
        style={{
          background:
            "radial-gradient(circle, #361764 25%, #11081f 40%, #000000 85%)",
          boxShadow:
            "inset 4px 4px 250px 80px #000000, 0 0 250px 100px #11081f",
        }}
      ></div>

      <div
        className="absolute w-[800px] h-[950px] bottom-[-680px] md:w-[1300px] md:h-[1300px] xl:w-[1200px] xl:h-[1250px] lg:w-[950px] lg:h[950px] rounded-full lg:bottom-[-1050px] md:bottom-[-950px] sm:bottom-[-1200px] xl:bottom-[-950px] opacity-90 border-8 border-black"
        style={{
          background:
            "radial-gradient(circle, #2C1251 30%, #0C0318 50%, #000000 85%)",
          boxShadow: "inset 0 0 150px 70px #000000, 0 0 150px 50px #11081f",
        }}
      ></div>

      <div
        className="absolute  w-[500px] h-[500px]  bottom-[-350px] md:w-[700px] md:h-[650px] lg:h-[650px] lg:w-[700px] rounded-full  md:bottom-[-500px] lg:bottom-[-500px] sm:bottom-[-500px] sm:w-[700px] sm:h-[700px] opacity-85 border-8 border-black"
        style={{
          background:
            "radial-gradient(circle, #2C1251 10%, #0C0318 40%, #000000 90%)",
          boxShadow: "inset 0 0 140px 45px #000000, 0 0 100px 50px #130d1f",
        }}
      ></div>

      {/* </div> */}

      {/* Content Section */}
      <div className="container  px-4 pt-36 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 pb-36 relative z-10">
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
            <button onClick={() => navigate("/GetStarted")}
              className="px-2 py-1 bg-white text-gray-900 rounded-lg text-[20px] font-medium 
              hover:bg-gray-200 transition-all flex items-center shadow-md"
            >
              Get Started
            </button>
            <a href="#product"
              className="px-2 py-1 bg-white text-black rounded-lg text-[20px] font-medium
              border border-gray-400 hover:border-white transition-all flex items-center shadow"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDown;
