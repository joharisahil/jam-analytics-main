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
      className="p-6 rounded-xl text-white transition-transform duration-300
      hover:scale-110 border-2 border-gray-800
      bg-gradient-to-b from-black via-[#1a0127] to-[#240137]
      shadow-[inset_2.26px_4.53px_9.06px_#FFFFFF40,inset_3.62px_2.26px_8.42px_#CFCFCF40]
      hover:shadow-[0px_10px_74px_10px_#4E00BF69]"

    
    >
      {Icon && (
        <div
          className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl"
          style={{
            background:
              "linear-gradient(215.15deg, rgba(52, 41, 66, 0.53) -171.85%, rgba(151, 71, 255, 0.53) 85.28%, rgba(140, 69, 255, 0.212) 122.51%)",
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
