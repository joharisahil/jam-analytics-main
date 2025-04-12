import FloatingShape from "./FloatingShape";
import image from "../assets/image.png";
import video from "../assets/jam-analytics-video.mp4";
import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#030307]">
      {/* Grid Section only till the video */}
      <div
  className="
    relative pt-20 pb-32
    bg-[length:25px_25px]
    sm:bg-[length:45px_45px]
    md:bg-[length:45px_45px]
    lg:bg-[length:45px_45px]
    xl:bg-[length:45px_45px]
    2xl:bg-[length:45px_45px]
  "
  style={{
    backgroundImage: `
      linear-gradient(0deg, #1A1A1A 1px, transparent 1px),
      linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
    `
  }}
      >
        {/* Floating Shapes */}
        <FloatingShape color="bg-[#361764]" size="w-64 h-64" top="15%" left="20%" />
        <FloatingShape color="bg-[#361764]" size="w-48 h-48" top="15%" left="80%" />
        <FloatingShape color="bg-[#361764]" size="w-40 h-40" top="70%" left="15%" />
        <FloatingShape color="bg-[#361764]" size="w-36 h-36" top="70%" left="75%" />

        {/* Heading + Video Section */}
        <div className="relative w-[90%] mx-auto text-center">
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[75px] font-medium leading-none"
            style={{ fontFamily: "Castoro" }}
          >
            Ask Anything Related To Your Job
          </h1>

          <div className="relative flex items-center justify-center w-[80%] sm:w-[60%] md:w-[60%] lg:w-[46%] h-auto pt-24 mx-auto transition-transform duration-300 ease-in-out hover:scale-125">
            {/* Jam AI Logo */}
            <div className="absolute top-12 left-2 flex items-center space-x-2 px-2 py-1 border border-white/50 text-white bg-transparent rounded-3xl">
              <img
                src={image}
                alt="jam-analytic-logo"
                className="rounded-full w-5 h-5 border-2 border-white"
              />
              <p className="font-inter text-white text-sm sm:text-base md:text-lg">
                Jam AI
              </p>
            </div>

            {/* Video */}
            <motion.div
              initial={{ scale: 1.25, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className=" rounded-[20px] overflow-hidden shadow-lg"
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                className=" object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
