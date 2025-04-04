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
      className={`relative flex flex-col justify-between m-6 p-6  rounded-xl text-white text-left w-full max-w-sm min-h-[500px]`}
      style={{
        boxShadow:
          "7px 6px 14.6px 0px #FFFFFF40 inset, 0px 2px 20.4px 0px #FFFFFF40, 0px 10px 74px 10px #4E00BF69",
        background:
          "linear-gradient(180deg, #000000 24%, rgba(0, 0, 0, 0) 100%), #332059, linear-gradient(180deg, #010002 0%, #361764 100%)",
      }}
    >
      {/* Content Section */}
      <div>
        <h3 className="text-2xl mt-4 font-semibold">{plan.name}</h3>

        {plan.price ? (
          <p className="text-xl mt-2 text-purple-400">
            {plan.price}
            <span className="text-gray-400 text-lg">/{plan.period}</span>
          </p>
        ) : (
          <p className="text-xl text-gray-300 mt-2">{plan.period}</p>
        )}

        <ul className="mt-4 space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <CheckSquare className="w-5 h-5 text-white mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <button
        className=" py-3 rounded-lg font-medium transition text-white"
        style={{
          background: "#8C45FF66",
          border: "1px solid #FFFFFF26",
          boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {plan.name === "Basic" ? "Start Free" : "Contact Sales"}
      </button>
    </div>
  );
};

export default PricingCard;
