import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon; // Ensure correct type for Lucide icons
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors">
      {Icon && <Icon size={48} className="text-blue-600 mb-4" />}{" "}
      {/* Ensure Icon renders */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
