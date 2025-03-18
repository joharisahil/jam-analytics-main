import React from "react";
import { CheckSquare, Calculator } from "lucide-react";

const PricingCard = ({ plan }) => (
  <div
    className={`p-8 rounded-xl bg-white border-2 ${
      plan.popular ? "border-blue-500" : "border-gray-200"
    }`}
  >
    {plan.popular && (
      <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
    <div className="mt-4 mb-8">
      <span className="text-4xl font-bold">{plan.price}</span>
      <span className="text-gray-600">/{plan.period}</span>
    </div>
    <ul className="space-y-4">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckSquare className="w-5 h-5 text-blue-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    {plan.popular && (
      <button className="w-full mt-4 px-4 py-2 text-blue-600 flex items-center justify-center gap-2 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
        <Calculator className="w-4 h-4" />
        Calculate Your Bill
      </button>
    )}
    <button
      className={`w-full mt-4 px-6 py-3 rounded-full font-medium ${
        plan.popular
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      } transition-colors`}
    >
      {plan.name === "Basic" ? "Start Free" : "Contact Sales"}
    </button>
  </div>
);

export default PricingCard;
