//@ts-ignore
import Navbar from "./components/Navbar";
//@ts-ignore
import Hero from "./components/Hero";
//@ts-ignore
import Features from "./components/Features";
//@ts-ignore
import HowItWorks from "./components/HowItWorks";
//@ts-ignore
import Pricing from "./components/Pricing";
//@ts-ignore
import CTA from "./components/CTA";
//@ts-ignore
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;




























































































































































// import React from "react";
// import {
//   ArrowRight,
//   Play,
//   Workflow,
//   Construction as Connection,
//   LayoutDashboard,
//   CheckSquare,
//   Shield,
//   Users,
//   MessageSquare,
//   Sparkles,
//   Rocket,
//   Calculator,
// } from "lucide-react";

// function App() {
//   const features = [
//     {
//       icon: Workflow,
//       title: "Smart Workflow Generation",
//       description: "AI-powered workflow creation and optimization",
//     },
//     {
//       icon: Connection,
//       title: "Seamless Integration Hub",
//       description: "Connect with your existing tools effortlessly",
//     },
//     {
//       icon: LayoutDashboard,
//       title: "Custom Analytics Dashboard",
//       description: "Real-time insights and reporting",
//     },
//     {
//       icon: CheckSquare,
//       title: "Automated Task Management",
//       description: "Let AI handle your routine tasks",
//     },
//     {
//       icon: Shield,
//       title: "Role-Based Access Control",
//       description: "Secure and granular permissions",
//     },
//     {
//       icon: Users,
//       title: "Real-Time Collaboration",
//       description: "Work together seamlessly",
//     },
//   ];

//   const steps = [
//     {
//       icon: MessageSquare,
//       title: "Describe your business needs",
//       description: "Tell us about your business type and requirements",
//     },
//     {
//       icon: Sparkles,
//       title: "AI generates custom solution",
//       description: "Our AI analyzes and creates your perfect workflow",
//     },
//     {
//       icon: Rocket,
//       title: "Launch and customize",
//       description: "Use and modify your application in real-time",
//     },
//   ];

//   const plans = [
//     {
//       name: "Basic",
//       price: "Free",
//       period: "Forever",
//       features: [
//         "1 workflows",
//         "Basic analytics",
//         "1 team member",
//         "500 mb storage",
//         "Limited customization",
//         "Community support",
//       ],
//     },
//     {
//       name: "Pro",
//       price: "Up to $12",
//       period: "per month",
//       features: [
//         "All features from basic",
//         "Pay per feature available",
//         "Advanced analytics",
//         "3 team members",
//         "10 gb storage",
//         "Additional customizations",
//         "Priority support",
//         "14-day free trial",
//       ],
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       period: "contact us",
//       features: [
//         "Custom workflows",
//         "Dedicated support",
//         "SLA guarantee",
//         "Custom integrations",
//         "14-day free trial",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Navigation */}
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
//             Jam Analytics
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 pt-20 pb-32">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
//             Transform Your Business Operations with AI-Powered Management
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Automate workflows, boost productivity, and scale your business with
//             intelligent solutions
//           </p>
//           <div className="flex justify-center gap-4">
//             <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center">
//               Launching Soon <ArrowRight className="ml-2 w-4 h-4" />
//             </button>
//             <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-blue-600 transition-colors flex items-center">
//               Watch Demo <Play className="ml-2 w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-16">
//             Powerful Features
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors"
//               >
//                 <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
//                   <step.icon className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
      // <section className="py-20">
      //   <div className="container mx-auto px-6">
      //     <h2 className="text-3xl font-bold text-center mb-16">
      //       Simple, Transparent Pricing
      //     </h2>
      //     <div className="grid md:grid-cols-3 gap-8">
      //       {plans.map((plan, index) => (
      //         <div
      //           key={index}
      //           className={`p-8 rounded-xl bg-white border-2 ${
      //             plan.popular ? "border-blue-500" : "border-gray-200"
      //           }`}
      //         >
      //           {plan.popular && (
      //             <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
      //               Most Popular
      //             </span>
      //           )}
      //           <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
      //           <div className="mt-4 mb-8">
      //             <span className="text-4xl font-bold">{plan.price}</span>
      //             <span className="text-gray-600">/{plan.period}</span>
      //           </div>
      //           <ul className="space-y-4">
      //             {plan.features.map((feature, featureIndex) => (
      //               <li key={featureIndex} className="flex items-center">
      //                 <CheckSquare className="w-5 h-5 text-blue-600 mr-2" />
      //                 {feature}
      //               </li>
      //             ))}
      //           </ul>
      //           {plan.popular && (
      //             <button className="w-full mt-4 px-4 py-2 text-blue-600 flex items-center justify-center gap-2 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
      //               <Calculator className="w-4 h-4" />
      //               Calculate Your Bill
      //             </button>
      //           )}
      //           <button
      //             className={`w-full mt-4 px-6 py-3 rounded-full font-medium ${
      //               plan.popular
      //                 ? "bg-blue-600 text-white hover:bg-blue-700"
      //                 : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      //             } transition-colors`}
      //           >
      //             {plan.name === "Basic" ? "Start Free" : "Contact Sales"}
      //           </button>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

//       {/* Bottom CTA */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl mb-8">
//             Join our waitlist to be notified when we launch.
//           </p>
//           <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
//             Join Waitlist
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
      // <footer className="bg-gray-50 py-12">
      //   <div className="container mx-auto px-6">
      //     <div className="grid md:grid-cols-4 gap-8">
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Product</h4>
      //         <ul className="space-y-2">
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Features
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Pricing
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Security
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Resources</h4>
      //         <ul className="space-y-2">
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Blog
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Documentation
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Help Center
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Company</h4>
      //         <ul className="space-y-2">
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               About
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Careers
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" className="text-gray-600 hover:text-blue-600">
      //               Contact
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
      //         <p className="text-gray-600 mb-4">
      //           Get the latest updates and news
      //         </p>
      //         <div className="flex">
      //           <input
      //             type="email"
      //             placeholder="Enter your email"
      //             className="flex-1 px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-200 focus:outline-none focus:border-blue-500"
      //           />
      //           <button className="px-6 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition-colors">
      //             Subscribe
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
      //       © 2024 Jam Analytics. All rights reserved.
      //     </div>
      //   </div>
      // </footer>
//     </div>
//   );
// }

// export default App;
