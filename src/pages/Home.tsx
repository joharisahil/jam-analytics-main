import NavBar from "../components/NavBar";
import NavDown from "../components/NavDown";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";
import PricingCard from "../components/PricingCard";
import FooterDown from "../components/FooterDown";

import { features } from "../data/features";
import { steps } from "../data/steps";
import { plans } from "../data/plans"; // This now uses price as a number.

function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      <section id="home" className="bg-black">
        <NavDown />
      </section>

      <section id="feature" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* {plans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={{
                  ...plan,
                  price: Number(plan.price), // ensures type consistency (optional if already numbers)
                }}
              />
            ))} */}
          </div>
        </div>
      </section>

      <FooterDown />
    </div>
  );
}

export default Home;
