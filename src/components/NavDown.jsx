import { ArrowRight, Play } from "lucide-react";

function NavDown() {
  const handlegetstarted = () => {
    alert("clicked");
  };
  const handleviewdemo = () => {
    alert("view");
  }
  return (
    <section className="relative container mx-auto px-6 pt-20 pb-32 text-center bg-black overflow-hidden">
      {/* Background Semi-Circle Design */}
      <div className="absolute inset-0 flex flex-col justify-end items-center">
        <div className="w-[1100px] h-[550px] bg-gradient-to-r from-[#6A0DAD] to-[#22234D] opacity-40 rounded-t-full absolute bottom-0"></div>
        <div className="w-[900px] h-[450px] bg-black opacity-80 rounded-t-full absolute bottom-0"></div>
        <div className="w-[700px] h-[350px] bg-gradient-to-r from-[#6A0DAD] to-[#22234D] opacity-50 rounded-t-full absolute bottom-0"></div>
      </div>
      
      {/* Content */}
      <h1 className="relative text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#ffffff] to-[#6A0DAD] text-transparent bg-clip-text leading-tight">
        Transform Your Business
        <br /> Operations with AI-
        <span className="text-[#EAEAEA]">Powered Management</span>
      </h1>
      <p className="relative text-lg md:text-xl text-[#EAEAEA] mb-8 max-w-2xl mx-auto">
        Automate workflows, boost productivity, and scale your business with intelligent assistants.
      </p>
      <div className="relative flex flex-col sm:flex-row justify-center gap-4">
        <button
          className="px-8 py-3 rounded-full font-medium text-[#0D0D0D] bg-white transition-all shadow-md hover:shadow-lg"
          onClick={handlegetstarted}
        >
          Get Started <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
        <button
          className="px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg border border-white text-white"
          onClick={handleviewdemo}
        >
          View Demo <Play className="ml-2 w-5 h-5 inline" />
        </button>
      </div>
    </section>
  );
}

export default NavDown;