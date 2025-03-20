import React from "react";
import NavBar from "../components/NavBar"; // Top navigation bar
import FeatureCard from "../components/FeatureCard"; // Card component for features
import StepCard from "../components/StepCard"; // Card component showing steps/how-it-works
import PricingCard from "../components/PricingCard"; // Card for pricing plans
import { features } from "../data/features"; // Features data
import { steps } from "../data/steps"; // Steps/how-it-works data
import { plans } from "../data/plans"; // Pricing plans data
import { Routes, Route } from "react-router-dom";
import FooterDown from "../components/FooterDown"; // Footer component
import NavDown from "../components/NavDown"; // Hero section or landing banner

function Home() {
  return (
    <>
      <div className=" bg-gradient-to-b from-white to-gray-50">
        {/* Top navigation bar */}
        <NavBar />

        {/* Hero section or landing banner */}
        <section id="home" className="bg-white py-20">
          <NavDown />
        </section>

        {/*
          You can enable routing for different sections if needed:
          <Routes>
            <Route path="/" element={<NavDown/>}/>
            <Route path="/feature" element={<FeatureCard/>}/>
            <Route path="/pricing" element={<PricingCard/>}/>
            <Route path="/about" element={<FooterDown/>}/>
          </Routes>
        */}

        {/* Features section */}
        <section id="feature" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dynamically render all features from the features data array */}
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Steps section explaining how the product works */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Render each step from the steps data array */}
              {steps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing section with plans */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Render pricing cards dynamically from the plans data array */}
              {plans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer section */}
        <FooterDown />
      </div>
    </>
  );
}

export default Home;
