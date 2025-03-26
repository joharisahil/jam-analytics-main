import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send } from 'lucide-react';

export default function JamAnalyticsChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm Jam's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initial suggested questions
  const initialSuggestions = [
    "What pricing plans do you offer?",
    "Tell me about your features",
    "When are you launching?",
    "How does it work?",
    "Do you offer a free trial?"
  ];

  // Follow-up suggestions based on the last bot response
  const getFollowUpSuggestions = (lastBotMessage:string):string[] => {
    const msg = lastBotMessage.toLowerCase();
    
    // Pricing follow-ups
    if (msg.includes("plan") || msg.includes("pricing") || msg.includes("basic") || msg.includes("pro") || msg.includes("enterprise")) {
      return [
        "Tell me about the Pro plan",
        "What's included in Enterprise?",
        "Is there a free trial?",
        "How many team members can I add?"
      ];
    }
    
    // Features follow-ups
    else if (msg.includes("feature") || msg.includes("offers")) {
      return [
        "Tell me about workflows",
        "How do integrations work?",
        "Explain analytics dashboards",
        "What about security?"
      ];
    }
    
    // Workflow follow-ups
    else if (msg.includes("workflow")) {
      return [
        "How customizable are workflows?",
        "Can I integrate with my tools?",
        "Show me an example",
        "What about pricing?"
      ];
    }
    
    // Integration follow-ups
    else if (msg.includes("integration") || msg.includes("connect")) {
      return [
        "Which tools can I integrate?",
        "Is there an API?",
        "How hard is setup?",
        "Tell me about pricing"
      ];
    }
    
    // Analytics follow-ups
    else if (msg.includes("analytic") || msg.includes("dashboard") || msg.includes("kpi")) {
      return [
        "Can I customize dashboards?",
        "What metrics are available?",
        "How does reporting work?",
        "What plan includes analytics?"
      ];
    }
    
    // Launch follow-ups
    else if (msg.includes("launch") || msg.includes("soon") || msg.includes("waitlist")) {
      return [
        "How do I join the waitlist?",
        "Will there be early access?",
        "What features at launch?",
        "Tell me about pricing"
      ];
    }
    
    // Trial follow-ups
    else if (msg.includes("trial") || msg.includes("14-day")) {
      return [
        "What's included in the trial?",
        "Do I need a credit card?",
        "Can I cancel anytime?",
        "What happens after 14 days?"
      ];
    }
    
    // Team size follow-ups
    else if (msg.includes("team") || msg.includes("member")) {
      return [
        "Pro plan details",
        "Enterprise plan details",
        "Can I add more members later?",
        "How do roles work?"
      ];
    }
    
    // Storage follow-ups
    else if (msg.includes("storage") || msg.includes("gb")) {
      return [
        "Can I upgrade storage?",
        "What's the file size limit?",
        "Tell me about pricing",
        "Enterprise storage options"
      ];
    }
    
    // Support follow-ups
    else if (msg.includes("support") || msg.includes("priority") || msg.includes("sla")) {
      return [
        "How quick is priority support?",
        "What's included in SLA?",
        "Community support details",
        "Enterprise support options"
      ];
    }
    
    // How it works follow-ups
    else if ((msg.includes("how") && msg.includes("work")) || msg.includes("simple")) {
      return [
        "Can I see a demo?",
        "Tell me about pricing",
        "What integrations are available?",
        "Is there onboarding support?"
      ];
    }
    
    // Demo follow-ups
    else if (msg.includes("demo")) {
      return [
        "How do I get started?",
        "Tell me about pricing",
        "Is there a free trial?",
        "Book a personalized demo"
      ];
    }
    
    // Security follow-ups
    else if (msg.includes("secur") || msg.includes("privacy") || msg.includes("encryption")) {
      return [
        "How is data stored?",
        "Do you have certifications?",
        "Role-based access details",
        "Enterprise security options"
      ];
    }
    
    // Contact follow-ups
    else if (msg.includes("contact") || msg.includes("sales")) {
      return [
        "What's your email?",
        "Do you have phone support?",
        "Book a demo",
        "Tell me about pricing"
      ];
    }
    
    // Default follow-ups for welcome message or unclear context
    else {
      return [
        "What pricing plans do you offer?",
        "Tell me about your features",
        "When are you launching?",
        "How does it work?"
      ];
    }
  };

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const getBotResponse = (message:string):string => {
    const msg = message.toLowerCase();
    
    // Pricing related questions
    if (msg.includes("price") || msg.includes("cost") || msg.includes("billing") || msg.includes("plan")) {
      return "We offer three plans: Basic (Free), Pro (up to $12/month), and Enterprise (custom pricing). The Pro plan includes advanced analytics, 3 team members, and 10GB storage. Would you like more details on a specific plan?";
    }
    
    // Features related questions
    else if (msg.includes("feature") || msg.includes("what can")) {
      return "Jam Analytics offers smart workflow generation, seamless integrations, custom analytics dashboards, automated task management, role-based access control, and real-time collaboration. Which feature would you like to know more about?";
    }
    
    // Workflow questions
    else if (msg.includes("workflow")) {
      return "Our AI-powered workflow generation helps you create and optimize business processes automatically. Just describe your needs, and our system will generate custom workflows for you!";
    }
    
    // Integration questions
    else if (msg.includes("integrat") || msg.includes("connect")) {
      return "Our Seamless Integration Hub allows you to connect Jam Analytics with your existing tools and software. What specific integration are you interested in?";
    }
    
    // Analytics questions
    else if (msg.includes("analytic") || msg.includes("dashboard") || msg.includes("report")) {
      return "Our Custom Analytics Dashboard provides real-time insights and reporting. You can track KPIs, visualize data, and make data-driven decisions all in one place.";
    }
    
    // Launch/availability questions
    else if (msg.includes("launch") || msg.includes("available") || msg.includes("when") || msg.includes("waitlist")) {
      return "We're launching soon! Join our waitlist on the homepage to be notified as soon as we go live and get early access.";
    }
    
    // Trial questions
    else if (msg.includes("trial") || msg.includes("try")) {
      return "Both our Pro and Enterprise plans come with a 14-day free trial. No credit card required to start!";
    }
    
    // Team size questions
    else if (msg.includes("team") || msg.includes("member") || msg.includes("user")) {
      return "The Basic plan includes 1 team member, Pro includes 3 team members, and Enterprise offers custom team sizes. Need more seats? The Enterprise plan is perfect for larger teams.";
    }
    
    // Storage questions
    else if (msg.includes("storage") || msg.includes("space")) {
      return "The Basic plan includes 500MB storage, Pro includes 10GB, and Enterprise offers custom storage options based on your needs.";
    }
    
    // Support questions
    else if (msg.includes("support") || msg.includes("help")) {
      return "Basic users get community support, Pro users receive priority support, and Enterprise clients enjoy dedicated support with SLA guarantees. How else can I assist you?";
    }
    
    // How it works questions
    else if (msg.includes("how") && msg.includes("work")) {
      return "It's simple! 1) Describe your business needs, 2) Our AI generates a custom solution, and 3) You launch and customize in real-time. Would you like a demo?";
    }
    
    // Demo questions
    else if (msg.includes("demo")) {
      return "You can watch our product demo directly from the homepage. It shows how Jam Analytics works in action!";
    }
    
    // Security questions
    else if (msg.includes("secur") || msg.includes("privacy") || msg.includes("data")) {
      return "We take security seriously with role-based access control, encryption, and regular security audits. Your data is safe with us!";
    }
    
    // Contact questions
    else if (msg.includes("contact") || msg.includes("sales") || msg.includes("talk to")) {
      return "You can contact our sales team through the 'Contact Sales' button on the pricing page, or visit our Contact page in the footer.";
    }
    
    // Greetings
    else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello! How can I help you learn more about Jam Analytics today?";
    }
    
    // Thank you responses
    else if (msg.includes("thank") || msg.includes("thanks")) {
      return "You're welcome! Feel free to ask if you have any other questions about Jam Analytics.";
    }
    
    // Default response
    else {
      return "I'm not sure I understand. Would you like to know about our features, pricing, or how Jam Analytics works?";
    }
  };

  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    
    const userMessage = { sender: "user", text: text };
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      const botMessage = { sender: "bot", text: getBotResponse(text) };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
    
    setInput("");
  };

  const handleSuggestedQuestion = (question:string) => {
    handleSend(question);
  };

  const getCurrentSuggestions = ():string[] => {
    if (messages.length === 1) {
      return initialSuggestions;
    } else {
      const lastBotMessage = messages.filter(msg => msg.sender === "bot").pop()?.text||"";
      return getFollowUpSuggestions(lastBotMessage);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-700 p-4 rounded-full shadow-lg hover:bg-purple-800 transition flex items-center justify-center text-white"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      ) : (
        <div className="w-full max-w-md shadow-2xl rounded-xl bg-gradient-to-br from-[#200F40] to-[#120824] border border-purple-900/50">
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h2 className="text-xl font-bold">Jam Analytics Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-purple-200 transition"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-xl shadow-md max-w-xs break-words ${
                    msg.sender === "user"
                      ? "bg-purple-700 text-white"
                      : "bg-purple-900/50 text-white border border-purple-700/30"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            
            {messages.length > 0 && messages[messages.length - 1].sender === "bot" && (
              <div className="mt-4 mb-2">
                <div className="flex flex-wrap gap-2">
                  {getCurrentSuggestions().map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="bg-purple-900/30 hover:bg-purple-800/50 text-purple-200 text-sm py-1 px-3 rounded-full border border-purple-700/30 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-purple-900/50 flex gap-2 bg-gradient-to-r from-[#200F40] to-[#120824]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-purple-900/30 text-white flex-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 border border-purple-700/30 placeholder-purple-300"
              placeholder="Ask about Jam Analytics..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={() => handleSend()}
              className="bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800 transition flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
          
          <div className="px-3 pb-3 text-xs text-purple-300 text-center">
            Powered by Jam Analytics AI
          </div>
        </div>
      )}
    </div>
  );
}