import React from "react";
import { LucideIcon } from "lucide-react"


interface StepCardProps {
  icon?: LucideIcon// Ensures proper typing for icon components
  title: string;
  description: string;
}
const StepCard : React.FC<StepCardProps>= ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
       {Icon && <Icon className="w-8 h-8 text-blue-600" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StepCard;