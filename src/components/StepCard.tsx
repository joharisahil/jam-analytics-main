import React from "react";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({
  icon: Icon,
  title,
  description,
  stepNumber,
}) => {
  return (
    <div
      className="relative md:w-full md:h-auto  md:px-0 text-center items-center rounded-[1.5rem] text-white transition-transform duration-500 transform-gpu
      hover:scale-[1.05] hover:-translate-y-3 border border-[#3f3f3f]
      bg-gradient-to-br from-[#0a0a0a] via-[#1b0031] to-[#2b0047]
      shadow-[rgba(244,223,255,0.15)_inset_0_4px_8px,_rgba(0,0,0,0.9)_0_8px_30px]
      hover:shadow-[rgba(244,223,255,0.35)_0_12px_35px_0,rgba(244,223,255,0.4)_0_0_40px] p-8 "
      style={{
        perspective: "1000pxz",
        //background: `linear-gradient(180deg, #010002 0%, #361764 100%)`,
       //boxShadow: `0px 10px 74px 10px #4E00BF69`,
      }}
    >
      {/* Icon Section */}
      <div
        className="w-16 h-16 mx-auto mt-6 mb-8 rounded-3xl flex items-center justify-center"
        style={{
          background: `linear-gradient(215.15deg, rgba(52, 41, 66, 0.53) -171.85%, rgba(151, 71, 255, 0.53) 85.28%, rgba(140, 69, 255, 0.212) 122.51%)`,
          boxShadow:
              "inset 2px 2px 8px rgba(255,255,255,0.15), 0 6px 14px rgba(151,71,255,0.5), 0 2px 3px rgba(0,0,0,0.8)",
            transform: "rotateX(10deg) rotateY(-10deg)"
        }}
      >
        {Icon && <Icon className="w-8 h-8 text-white" />}
      </div>

      {/* Step Number Badge */}
      <div
        className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center text-white text-sm font-semibold rounded-md z-20 backdrop-blur-lg"
        style={{
          background: "#3D3D3D66",
          border: "1px solid #FFFFFF26",
          boxShadow: `0px 0px 6px 3px #FFFFFF40 inset`,
          backdropFilter: "blur(14px)",
        }}
      >
        {stepNumber}
      </div>

      {/* Title */}
      <h3 className="text-white font-inter leading-[100%] text-[18px] mt-2 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 mt-6 text-center  ">{description}</p>
    </div>
  );
};

export default StepCard;
