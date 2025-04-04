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

        <GridBackground />

        {/* Features */}
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

        {/* Steps (New Section) */}
        <section className=" bg-black py-36">
          <div className="container mx-auto px-6 w-[78%] h-[80%]">
            <h2 className="mx-auto text-center text-3xl text-gray-500 border-2  w-48 border-gray-500 font-inter  mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8    ">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-black">
          <section className=" bg-black">
            <div className=" items-center container mx-auto px-6">
              <h2 className=" mx-auto text-lg w-20 font-medium text-center mb-4 text-gray-500 border-2 border-gray-500 font-inter">
                Pricing
              </h2>
              <p
                className="text-center text-2xl  text-gray-500 mb-8"
                style={{
                  fontFamily: "Microsoft Sans Serif",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Choose the right plan to meet your SEO <br></br>needs and start
                optimizing today.
              </p>
              <div
                className="text-center mt-2 m-20 "
                style={{
                  background:
                    "linear-gradient(285.26deg, #000000 -18.24%, #1B0F2E 124.22%)",
                  border: "1px solid transparent",
                  borderImageSource:
                    "linear-gradient(109.98deg, rgba(0, 0, 0, 0.55) 40.2%, #FFFFFF 100%)",
                }}
              >
                <div className="grid md:grid-cols-3 mx-auto">
                  {plans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <FooterDown />
      </div>
    </>
  );
}

export default Home;
