import { Workflow, Construction as Connection, LayoutDashboard, CheckSquare, Shield, Users } from "lucide-react";

const features = [
  { icon: Workflow, title: "Smart Workflow Generation", description: "AI-powered workflow creation and optimization" },
  { icon: Connection, title: "Seamless Integration Hub", description: "Connect with your existing tools effortlessly" },
  { icon: LayoutDashboard, title: "Custom Analytics Dashboard", description: "Real-time insights and reporting" },
  { icon: CheckSquare, title: "Automated Task Management", description: "Let AI handle your routine tasks" },
  { icon: Shield, title: "Role-Based Access Control", description: "Secure and granular permissions" },
  { icon: Users, title: "Real-Time Collaboration", description: "Work together seamlessly" },
];

function Features() {
  return (
    <section className="bg-white py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Powerful Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors">
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;