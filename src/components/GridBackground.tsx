import FloatingShape from "./FloatingShape";
import image from "../assets/image.png";
import video from "../assets/jam-analytics-video.mp4";

const GridBackground = () => {
  return (
    <div className="relative min-h-screen">
      {/* Grid Background */}
      <div
        className="w-full h-screen"
        style={{
          backgroundColor: "#000000f2",
          backgroundImage: `
        linear-gradient(0deg, #1A1A1A 1px, transparent 1px),
        linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      >
        <FloatingShape
          color="bg-purple-800"
          size="w-64 h-64"
          top="15%"
          left="20%"
        />
        <FloatingShape
          color="bg-purple-900"
          size="w-48 h-48"
          top="15%"
          left="80%"
        />
        <FloatingShape
          color="bg-purple-900"
          size="w-40 h-40"
          top="70%"
          left="15%"
        />
        <FloatingShape
          color="bg-purple-900"
          size="w-36 h-36"
          top="70%"
          left="75%"
        />

        {/* Text Section */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 w-[90%]  text-center top-20">
          <h1
           className="text-white text-[80px] font-medium  leading-none"
           style={{ fontFamily: "Castoro" }}
          >
            Ask Anything Related To Your Job
          </h1>
          
          {/* jam-analytic-video */}
         
          <div className="relative flex items-center justify-center left-[23rem] w-[46%] h-[60%] pt-20">

            {/*jam analytic logo*/}
            <div className="absolute top-10 left-2 flex space-x-4  border-2 border-white rounded-3xl mb-20 ">
              <img src ={image} alt="jam-analytic-logo " className="rounded-full w-10 h-10 space-x-3 px-2 py-2" />
              <p className="font-normal  text-white px-2 py-2">Jam AI</p>
            </div>
          
            {/* Outer Div with Animated Border */}
            <div className="relative  mx-auto max-w-3xl p-[5px]  rounded-[20px] overflow-hidden  before:absolute before:inset-2  before:left  before:bg-[conic-gradient(transparent,transparent,#815599)] before:animate-spin-slow ">
              
              {/* Inner Video Container */}
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#240932e3]">
                <video 
                  src={video} 
                  autoPlay 
                  loop 
                  muted 
                 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GridBackground;