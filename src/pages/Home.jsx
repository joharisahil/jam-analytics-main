import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar
import FeatureCard from "../components/FeatureCard.jsx";
import StepCard from "../components/StepCard";
import PricingCard from "../components/PricingCard";
import { features } from "../data/features";
import { steps } from "../data/steps";
import { plans } from "../data/plans";
import FooterDown from "../components/FooterDown.jsx";
import NavDown from "../components/NavDown.jsx";

function Home() {
  return (
    <div className="bg-white.py-20">
      {/* Navigation */}
      <NavBar />
      <NavDown />

      {/* Features */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Steps (New Section) */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterDown />
    </div>
  );
}

export default Home;
