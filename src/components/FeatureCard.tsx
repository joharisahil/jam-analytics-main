import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div
      className="p-6 rounded-[1.5rem] text-white transition-transform duration-500 transform-gpu
      hover:scale-[1.05] hover:-translate-y-3 border border-[#3f3f3f]
      bg-gradient-to-br from-[#0a0a0a] via-[#1b0031] to-[#2b0047]
      shadow-[rgba(244,223,255,0.15)_inset_0_4px_8px,_rgba(0,0,0,0.9)_0_8px_30px]
      hover:shadow-[rgba(244,223,255,0.35)_0_12px_35px_0,rgba(244,223,255,0.4)_0_0_40px]"
      style={{
        perspective: "1000px",
      }}
    >
      {Icon && (
        <div
          className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl"
          style={{
            background:
              "linear-gradient(215.15deg, rgba(52, 41, 66, 0.53) -171.85%, rgba(151, 71, 255, 0.53) 85.28%, rgba(140, 69, 255, 0.212) 122.51%)",
            boxShadow:
              "inset 2px 2px 8px rgba(255,255,255,0.15), 0 6px 14px rgba(151,71,255,0.5), 0 2px 3px rgba(0,0,0,0.8)",
            transform: "rotateX(10deg) rotateY(-10deg)",
          }}
        >
          <Icon size={28} className="text-white" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-snug tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
