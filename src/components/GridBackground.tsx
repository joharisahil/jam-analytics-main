import FloatingShape from "./FloatingShape";
import image from "../assets/image.png";
import video from "../assets/jam-analytics-video.mp4";
import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#030307]">
      {/* === Main Grid Background (bold) === */}
      {/* <div
        className="
          absolute inset-0 z-0
          bg-[length:30px_30px]
          sm:bg-[length:45px_45px]
        "
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `
        }}
      /> */}

      {/* === Tilted Fine Grid Layer === */}
      {/* <div
        className="
          absolute inset-[-50%] z-10 rotate-[30deg] origin-center pointer-events-none
          bg-[length:2px_2px]
          sm:bg-[length:8px_8px]
        "
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `
        }}
      /> */}

      {/* === Content Layer === */}
      <div className="relative pt-20 pb-32 z-20">
        {/* Floating Shapes */}
        <FloatingShape color="bg-[#3c1a64]" size="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64" top="15%" left="20%" />
        <FloatingShape color="bg-[#4B227B]" size="w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48" top="15%" left="80%" />
        <FloatingShape color="bg-[#4B227B]" size="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40" top="70%" left="15%" />
        <FloatingShape color="bg-[#4B227B]" size="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36" top="70%" left="75%" />

        {/* Heading + Video Section */}
        <div className="relative w-[92%] sm:w-[88%] md:w-[85%] mx-auto text-center">
          <h1
            className="text-white font-medium leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[72px]"
            style={{ fontFamily: "Castoro" }}
          >
            Ask Anything Related To Your Job
          </h1>

          <div className="relative flex items-center justify-center w-[90%] sm:w-[70%] md:w-[60%] lg:w-[48%] xl:w-[42%] pt-20 mx-auto transition-transform duration-300 ease-in-out hover:scale-110">
            {/* Jam AI Logo */}
            <div className="absolute top-9 left-2 flex items-center space-x-2 px-2 py-1 border border-white/50 text-white bg-transparent rounded-3xl">
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
              className="rounded-[20px] overflow-hidden shadow-lg"
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
