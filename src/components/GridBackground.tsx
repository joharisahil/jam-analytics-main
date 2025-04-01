import FloatingShape from "./FloatingShape";
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
        <div className="absolute  left-1/2 transform -translate-x-1/2 w-[90%]  text-center top-12">
          <h1
            className="text-white text-4xl font-bold italic"
            style={{ fontFamily: "Bona Nova, italic" }}
          >
            You’ve Been Doing It the Hard Way… It’s Time to Change That!
          </h1>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto leading-tight">
            Juggling between multiple software? <br />
            Using spreadsheets & paper for critical processes? <br />
            No insights from sales calls? <br />
            What if AI could handle all of this—so you can focus on growing?
          </p>
          {/* jam-analytic-video */}
         
          <div className="relative flex items-center rounded-xl justify-center left-[23rem] w-[46%] h-[60%] pt-6">
         


      <div className="relative mx-auto max-w-6xl rounded-xl-blur-md animate-spin-slow"
        style={{
          borderWidth: "3px",
          borderRadius:"20px",
          borderStyle: "rounded",
          borderImage: "linear-gradient(0deg, purple, white) 1",
          animation: "rotateBorder 4s linear infinite"
        }}
      >


        <div className="relative z-10 rounded-xl overflow-hidden bg-[#44335e]">


          <video src={video} autoPlay loop muted className="w-auto h-auto  rounded-xl shadow-lg" />
        </div>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default GridBackground;
