import { MessageSquare, Sparkles, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Describe your business needs", description: "Tell us about your business type and requirements" },
  { icon: Sparkles, title: "AI generates custom solution", description: "Our AI analyzes and creates your perfect workflow" },
  { icon: Rocket, title: "Launch and customize", description: "Use and modify your application in real-time" },
];

function HowItWorks() {
  return (
    <section className="bg-white py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <step.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default HowItWorks;