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
      className="relative text-center items-center border-2 border-gray-800 bg-gradient-to-b from-black via-[#1a0127] to-[#240137] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-110"
      style={{
        background: `linear-gradient(180deg, #010002 0%, #361764 100%)`,
        boxShadow: `0px 10px 74px 10px #4E00BF69`,
      }}
    >
      {/* Icon Section */}
      <div
        className="w-16 h-16 mx-auto mt-6 mb-8 rounded-3xl flex items-center justify-center"
        style={{
          background: `linear-gradient(215.15deg, rgba(52, 41, 66, 0.53) -171.85%, rgba(151, 71, 255, 0.53) 85.28%, rgba(140, 69, 255, 0.212) 122.51%)`,
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
      <p className="text-slate-300 mt-6 text-center pr-6 pl-6">{description}</p>
    </div>
  );
};

export default StepCard;
