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
          <div
  className="relative z-10 bg-purple-950 py-1 overflow-hidden"
  style={{
    boxShadow: "0 0 60px 45px #2C1251",
  }}
>
</div>

{/* 0 0 30px 25px rgba(112,5,235,0.5) */}

         <GridBackground/>

<section id="feature" className="relative bg-black py-20 overflow-hidden">
  {/* Background Grid */}
  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-16">
      Powerful Features
    </h2>

    {/* Feature Container with Glow */}
    <div 
  className="relative mx-auto max-w-6xl p-10 rounded-xl bg-black/50 backdrop-blur-md shadow-[0_0_60px_10px_rgba(112,5,235,0.5)]"
  style={{
    borderWidth: "3px",
    borderStyle: "solid",
    borderImage: "linear-gradient(to right, #7005eb, white) 1",
    
  }}
>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-white/10 divide-y md:divide-y-0 md:divide-x">
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
