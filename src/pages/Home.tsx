import NavBar from "../components/NavBar.tsx";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard.tsx";
import PricingCard from "../components/PricingCard";
import { features } from "../data/features.tsx";
import { steps } from "../data/steps.tsx";
import { plans } from "../data/plans";
import FooterDown from "../components/FooterDown";
import NavDown from "../components/NavDown";
import { useState } from "react";
import GridBackground from "../components/GridBackground.tsx";
import ContactForm from "../components/ContactForm.tsx";


function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className=" bg-gradient-to-b from-white to-gray-50">
        {/* Navigation */}

        <NavBar />
        <section id="home" className="bg-black">
          <NavDown />
        </section>
        <div className="relative z-30  overflow-hidden"
          style={{ boxShadow: "6px 0 40px 30px #0C0318",}}
        ></div>

        {/* 0 0 30px 25px rgba(112,5,235,0.5) */}
        <section id="product">
          <GridBackground />
        </section>

        <section
          id="feature"
          className="relative bg-black py-16 overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-4 ">
              Powerful Features
            </h2>

            {/* Feature Container with Glow */}
            <div className=" mx-auto max-w-6xl p-10 rounded-xl  ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 ">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Steps (New Section) */}
        <section className=" bg-black py-10">
          <div className="container mx-auto px-6 w-[78%] h-[80%]">
            <h2 className="mx-auto text-center text-3xl text-gray-500  font-inter mb-14">
              How It Works
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 md:mx-28 lg:mx-20 gap-14  ">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-14  bg-black">
          <div className="items-center container mx-auto">
            {/* ...titles... */}
            <h2 className=" mx-auto text-4xl w-20 font-medium text-center mb-4 text-gray-500  font-inter pt-5">
              Pricing
            </h2>
            <div
              className="text-center mt-2 m-10"
              style={{
                background:
                  "linear-gradient(285.26deg, #000000 -18.24%, #000000 124.22%)",
                border: "1px solid transparent",
                borderImageSource:
                  "linear-gradient(109.98deg, rgba(0, 0, 0, 0.55) 40.2%, #FFFFFF 100%)",
              }}
            >
              <section className="w-full px-1 sm:px-4 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
                  {plans.map((plan, index) => (
                    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
                      <PricingCard
                        key={index}
                        plan={plan}
                        isHovered={hoveredIndex === index}
                        isAnyHovered={hoveredIndex !== null}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-black">
        <ContactForm />
         
        </section>
     

        {/* Footer */}
        <section id="footer">
          <FooterDown />
        </section>
      </div>
    </>
  );
}

export default Home;
