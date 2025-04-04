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
          backgroundColor: "#0f0614",
          backgroundImage: `
        linear-gradient(0deg, #1A1A1A 1px, transparent 1px),
        linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
        }}
      >
        <FloatingShape color="bg-[#4B227B]" size="w-64 h-64" top="15%" left="20%"  />
        <FloatingShape color="bg-[#4B227B]" size="w-48 h-48" top="15%" left="80%"  />
        <FloatingShape color="bg-[#4B227B]" size="w-40 h-40" top="70%" left="15%" />
        <FloatingShape color="bg-[#4B227B]" size="w-36 h-36" top="70%" left="75%" />

        {/* Text Section */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 w-[90%]  text-center top-20">
          <h1
            className="text-white text-[78px] font-medium  leading-none"
            style={{ fontFamily: "Castoro" }}
          >
            Ask Anything Related To Your Job
          </h1>

          {/* jam-analytic-video */}

          <div className="relative flex items-center justify-center left-[23rem] w-[46%] h-[60%]  pt-24 transition-transform duration-300 ease-in-out hover:scale-125">
            {/* "Jam AI" Logo Div */}
            <div className="absolute top-12 left-2 flex items-center space-x-2 px-2 border border-white/50 text-white bg-transparent rounded-3xl">
              <img
                src={image}
                alt="jam-analytic-logo"
                className="rounded-full w-5 h-5 border-2 border-white"
              />
              <p className="font-inter text-white text-[19px]">Jam AI</p>
            </div>

            {/* Outer Video Container */}
            <div className=" w-full h-full rounded-[20px] overflow-hidden">
              {/* Inner Video */}
              <video
                src={video}
                autoPlay
                loop
                muted
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
