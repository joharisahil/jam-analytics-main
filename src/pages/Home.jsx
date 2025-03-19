import React from "react";
import { ArrowRight, Play } from "lucide-react";

// Import components
import NavBar from "../components/NavBar";
import NavDown from "../components/NavDown";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";
import PricingCard from "../components/PricingCard";
import FooterDown from "../components/FooterDown";

// Import data
import { features } from "../data/features";
import { steps } from "../data/steps";
import { plans } from "../data/plans";

function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <NavBar />
      <NavDown />

      

      {/* Features Grid */}
      <section className="bg-white py-20">
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

      {/* How It Works */}
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
          <h2 className="text-3xl font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Join our waitlist to be notified when we launch.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Join Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <FooterDown />
    </div>
  );
}

export default Home;