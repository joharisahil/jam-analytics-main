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
      className="p-6 rounded-2xl text-white transition-transform duration-300 transform-gpu
      hover:scale-105 hover:-translate-y-2 border border-[#3f3f3f]
      bg-gradient-to-b from-black via-[#1a0127] to-[#240137]
      shadow-[8px_8px_20px_#00000080,4px_4px_12px_#5e2ca580,inset_2px_2px_6px_#ffffff1a]
      hover:shadow-[0_16px_40px_0_#4E00BF99,0_0_30px_#814dff80]"
    >
      {Icon && (
        <div
          className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl shadow-inner"
          style={{
            background:
              "linear-gradient(215.15deg, rgba(52, 41, 66, 0.53) -171.85%, rgba(151, 71, 255, 0.53) 85.28%, rgba(140, 69, 255, 0.212) 122.51%)",
            boxShadow: "inset 2px 2px 6px rgba(255,255,255,0.1), 0 4px 10px rgba(151,71,255,0.4)",
          }}
        >
          <Icon size={28} className="text-white" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
