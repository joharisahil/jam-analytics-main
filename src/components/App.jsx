import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ArrowRight, Play } from "lucide-react";

// Import components
import NavBar from "./NavBar";
import FeatureCard from "./FeatureCard";
import StepCard from "./StepCard";
import PricingCard from "./PricingCard";
import FooterDown from "./FooterDown";

// Import data
import { features } from "../data/features";
import { steps } from "../data/steps";
import { plans } from "../data/plans";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <NavBar setShowProfile={setShowProfile} showProfile={showProfile} />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Transform Your Business Operations with AI-Powered Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automate workflows, boost productivity, and scale your business with
            intelligent solutions
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center">
              Launching Soon <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-blue-600 transition-colors flex items-center">
              Watch Demo <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
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

export default App;