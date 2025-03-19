import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;