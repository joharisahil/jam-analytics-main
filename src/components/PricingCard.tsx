import { CheckSquare } from "lucide-react";

type Plan = {
  name: string;
  price?: string;
  period?: string;
  features: string[];
  popular?: boolean;
};

const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div
      className={`relative flex-col m-14  rounded-xl border-2  ${
        plan.popular ? "border-purple-500 shadow-lg shadow-purple-600" : "border-white"
      } bg-[#0C0318] text-white text-center`}
    >
      {/* {plan.popular && (
        <div className="absolute top-0 left-0 right-0 px-3  text-sm text-purple-300 bg-purple-900/30 rounded-t-xl">
          Most Popular
        </div>
      )} */}
      <h3 className="text-2xl font-semibold">{plan.name}</h3>
      {plan.price ? (
        <p className="text-1xl  mt-2 text-purple-400">
          {plan.price}
          <span className="text-gray-400 text-lg">/{plan.period}</span>
        </p>
      ) : (
        <p className="text-xl text-gray-300 mt-2">{plan.period}</p>
      )}

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center text-gray-300">
            <CheckSquare className="w-5 h-5 text-purple-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full px-6 py-3 rounded-lg font-medium transition ${
          plan.popular
            ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        {plan.name === "Basic" ? "Start Free" : "Contact Sales"}
      </button>
    </div>
  );
};

export default PricingCard;