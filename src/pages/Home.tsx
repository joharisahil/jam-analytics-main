import NavBar from "../components/NavBar.tsx";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard.tsx";
import PricingCard from "../components/PricingCard";
import { features } from "../data/features.tsx";
import { steps } from "../data/steps.tsx";
import { plans } from "../data/plans";
import FooterDown from "../components/FooterDown";
import NavDown from "../components/NavDown";
import GridBackground from "../components/GridBackground.tsx";

function Home() {
  return (
    <>
      <div className=" bg-gradient-to-b from-white to-gray-50">
        {/* Navigation */}

          <NavBar />
          <section id="home" className="bg-black">
          <NavDown />
          </section>
         
         <GridBackground/>

        {/* Features */}
        <section id="feature" className="bg-black py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-16">
      Powerful Features
    </h2>

    <div className="relative mx-auto max-w-6xl p-10 border border-zinc-200 rounded-xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </div>
</section>


        {/* Steps (New Section) */}
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

        {/* Pricing */}
        <section id="pricing" className="py-20">
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

        {/* Footer */}
        <FooterDown />
      </div>
    </>
  );
}

export default Home;
