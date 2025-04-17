import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation for route change detection
import image from "../assets/image.png";
import videoDesktop from "../assets/jam-analytics-video.mp4";
import videoMobile from "../assets/jam-analytics-video-mobile.mp4";
import FloatingShape from "./FloatingShape";

const GridBackground = () => {
  // Track scroll position and trigger animation on enter view
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Re-trigger the animation on subsequent scrolls or page re-visits
    amount: 0.,  // Trigger when 50% of the element is in the viewport
    margin: "-90px 0px", // Optional offset for earlier triggering
  });

  // Track route changes using React Router's useLocation hook
  const location = useLocation();

  return (
    <div className="relative w-full overflow-hidden bg-[#000000]">
      <div className="relative pt-20 pb-32">
        {/* Floating Shapes with Different Directions */}
        <FloatingShape
          color="bg-[#361764]"
          size="w-60 h-60"
          top="1%"
          left="2%"
          animation="float1 10s ease-in-out infinite"
       // Ensures it stays in front of the video
        />
        <FloatingShape
          color="bg-[#361764]"
          size="w-48 h-48"
          top="25%"
          left="90%"
          animation="float2 12s ease-in-out infinite"
          
        />
        <FloatingShape
          color="bg-[#361764]"
          size="w-40 h-40"
          top="70%"
          left="65%"
          animation="float3 14s ease-in-out infinite"
          
        />
        <FloatingShape
          color="bg-[#361764]"
          size="w-36 h-36"
          top="10%"
          left="70%"
          animation="float4 16s ease-in-out infinite"
         
        />
        <FloatingShape
          color="bg-[#361764]"
          size="w-56 h-56"
          top="35%"
          left="15%"
          animation="float5 8s ease-in-out infinite"
          
        />
        <FloatingShape
          color="bg-[#361764]"
          size="w-52 h-52"
          top="70%"
          left="5%"
          animation="float6 10s ease-in-out infinite"
         
        />
        <FloatingShape
          color="bg-[#361764]"
          size="w-64 h-64"
          top="50%"
          left="80%"
          animation="float7 12s ease-in-out infinite"
       
        />

        {/* Heading + Video */}
        <div className="relative w-[90%] mx-auto text-center">
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[60px] xl:text-[70px] font-medium leading-none"
            style={{ fontFamily: "Castoro" }}
          >
            Automate Your Job
          </h1>

          <div
            className="relative flex items-center justify-center w-[80%] sm:w-[60%] md:w-[60%] lg:w-[46%] h-[100%] pt-24 mx-auto transition-transform duration-300 ease-in-out"
            ref={ref} // Attach the ref for scroll detection
            style={{ zIndex: 1 }} // Lower z-index for the video
          >
            {/* Jam AI logo tag */}
            <div className="absolute top-9 flex left-3 space-x-2 -translate-x-[40%] sm:-translate-x-[80%] md:-translate-x-[74%] px-3 py-1 border border-white/50 text-white bg-white/10 backdrop-blur-md rounded-3xl"
             >
              <img
                src={image}
                alt="Jam AI Logo"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <p className="font-inter text-sm sm:text-base md:text-lg">Jam AI</p>
            </div>

            {/* AnimatePresence + Motion for enter and exit animation */}
            <AnimatePresence>
              {isInView && (
                <motion.div
                  key={location.pathname} // Re-render on route change
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.25 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  
                  className="w-full mt-6 rounded-[20px] overflow-hidden shadow-lg"
                  style={{ zIndex: 0 }} // Ensure the video is below the floating shapes
                >
                  <video
                    src={videoDesktop}
                    autoPlay
                    loop
                    muted
                    className="hidden sm:block w-full h-auto object-cover"
                  />
                  <video
                    src={videoMobile}
                    autoPlay
                    loop
                    muted
                    className="block sm:hidden w-full h-auto object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
