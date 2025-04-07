import { CheckSquare } from "lucide-react";

type Plan = {
  name: string;
  price?: string;
  period?: string;
  features: string[];
  popular?: boolean;
};

type PricingCardProps = {
  plan: Plan;
  isHovered?: boolean;
  isAnyHovered?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  isHovered,
  isAnyHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  const isPopular = plan.popular;

  // Determines if the card should have the glowing/highlight style
  const showHighlight =
    (isPopular && (!isAnyHovered || isHovered)) || (!isPopular && isHovered);

  // Grid only when card is highlighted (glowing)
  const showGrid = showHighlight;

  const cardStyle = showHighlight
    ? {
        boxShadow:
          "7px 6px 14.6px 0px #FFFFFF40 inset, 0px 2px 20.4px 0px #FFFFFF40, 0px 10px 74px 10px #4E00BF69",
        backgroundImage: `
          linear-gradient(0deg, #1A1A1A 1px, transparent 1px),
          linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        background:
          "linear-gradient(180deg, #000000 24%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #010002 0%, #361764 100%)",
         
      }
    : {
        background:
          "linear-gradient(285.26deg, #000000 -18.24%, #361764 124.22%)",
      };

  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`relative flex flex-col justify-between m-6 p-6 rounded-xl text-white text-left w-full max-w-sm min-h-[500px] overflow-hidden transition-all duration-100 ,transition-transform ease-in-out hover:scale-110 ${
        isPopular ? "bg-[#8C45FF66]" : "border-transparent"
      }`}
      style={cardStyle}
    >
      {/* Grid overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 3px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-Inter font-semibold">{plan.name}</h3>

        {plan.price ? (
          <p className="text-xl mt-2 text-gray-400">
            {plan.price}
            <span className="text-gray-400 text-xl">/{plan.period}</span>
          </p>
        ) : (
          <p className="text-xl text-gray-400 mt-4">{plan.period}</p>
        )}

        <hr className="my-4 border-t border-gray-700" />

        <ul className="pt-10 space-y-5">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <CheckSquare className="w-5 h-5 text-white mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        className="relative z-10 py-3 rounded-lg font-medium transition text-white"
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
