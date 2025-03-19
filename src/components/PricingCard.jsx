import React from "react";
import { CheckSquare, Calculator } from "lucide-react";

const PricingCard = ({ plan }) => {
  const { name, price, period, features, popular } = plan;

  return (
    <div className={`p-8 rounded-xl bg-white border-2 ${
      popular ? "border-blue-500" : "border-gray-200"
    }`}>
      {popular && (
        <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mt-4">{name}</h3>
      <div className="mt-4 mb-8">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-4">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center">
            <CheckSquare className="w-5 h-5 text-blue-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      {popular && (
        <button className="w-full mt-4 px-4 py-2 text-blue-600 flex items-center justify-center gap-2 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
          <Calculator className="w-4 h-4" />
          Calculate Your Bill
        </button>
      )}
      <button
        className={`w-full mt-4 px-6 py-3 rounded-full font-medium ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        } transition-colors`}
      >
        {name === "Basic" ? "Start Free" : "Contact Sales"}
      </button>
    </div>
  );
};

export default PricingCard;