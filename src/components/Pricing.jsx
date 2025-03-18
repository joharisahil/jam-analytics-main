import { CheckSquare, Calculator } from "lucide-react";

function Pricing() {
    const plans = [
      {
        name: "Basic",
        price: "$10",
        period: "per month",
        features: [
          "1 workflow",
          "Basic analytics",
          "1 team member",
          "500MB storage",
          "Limited customization",
          "Community support",
        ],
      },
      {
        name: "Pro",
        price: "$30",
        period: "per month",
        features: [
          "All features from Basic",
          "Advanced analytics",
          "3 team members",
          "10GB storage",
          "Additional customizations",
          "Priority support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        features: [
          "Custom workflows",
          "Dedicated support",
          "SLA guarantee",
          "Custom integrations",
        ],
      },
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                       <CheckSquare className="w-5 h-5 text-blue-600 mr-2" />{feature}
                    </li>
                  ))}
                </ul>
                {plan.popular && (
                  <button className="w-full mt-4 px-4 py-2 text-blue-600 flex items-center justify-center gap-2 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
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
            ))}
          </div>
        </div>
      </section>
    );
  }
  export default Pricing;