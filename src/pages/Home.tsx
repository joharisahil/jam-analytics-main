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
          className="relative z-30  overflow-hidden"
          style={{
            boxShadow: "6px 0 40px 30px #0C0318",
          }}
        ></div>

        {/* 0 0 30px 25px rgba(112,5,235,0.5) */}

        <GridBackground />
        <div
          className="relative z-30  overflow-hidden"
          style={{
            boxShadow: "6px 0 40px 30px #0C0318",
          }}
        ></div>

        <section
          id="feature"
          className="relative bg-black py-20 overflow-hidden"
        >
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
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
                  background:"linear-gradient(285.26deg, #000000 -18.24%, #1B0F2E 124.22%)",
                  border: "1px solid transparent",
                  borderImageSource: "linear-gradient(109.98deg, rgba(0, 0, 0, 0.55) 40.2%, #FFFFFF 100%)",
                    
                }}
              >
                <div className="grid md:grid-cols-3 gap-0 ">
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
