import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send } from 'lucide-react';
import axios from 'axios';

export default function JamAnalyticsChatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Backend API URL
  const API_URL = "http://localhost:8000";

  // Fetch greeting and initial suggestions when the component mounts
  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get(`${API_URL}/greeting`);
        const greeting = response.data.greeting;
        setMessages([{ sender: "bot", text: `👋 ${greeting}` }]);
      } catch (error) {
        console.error("Error fetching greeting:", error);
        setMessages([{ sender: "bot", text: "👋 Hi there! I'm Jam's AI assistant. How can I help you today?" }]);
      }
    };

    const fetchInitialSuggestions = async () => {
      try {
        const response = await axios.get(`${API_URL}/initial-suggestions`);
        setSuggestions(response.data.suggestions);
      } catch (error) {
        console.error("Error fetching initial suggestions:", error);
        setSuggestions([
          "What pricing plans do you offer?",
          "Tell me about your features",
          "When are you launching?",
          "How does it work?",
          "Do you offer a free trial?"
        ]);
      }
    };

    fetchGreeting();
    fetchInitialSuggestions();
  }, []);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Follow-up suggestions based on the last bot response
  const getFollowUpSuggestions = (lastBotMessage: string): string[] => {
    const msg = lastBotMessage.toLowerCase();
    
    if (msg.includes("plan") || msg.includes("pricing") || msg.includes("basic") || msg.includes("pro") || msg.includes("enterprise")) {
      return [
        "Tell me about the Pro plan",
        "What's included in Enterprise?",
        "Is there a free trial?",
        "How many team members can I add?"
      ];
    } else if (msg.includes("feature") || msg.includes("offers")) {
      return [
        "Tell me about workflows",
        "How do integrations work?",
        "Explain analytics dashboards",
        "What about security?"
      ];
    } else if (msg.includes("launch") || msg.includes("soon") || msg.includes("waitlist")) {
      return [
        "How do I join the waitlist?",
        "Will there be early access?",
        "What features at launch?",
        "Tell me about pricing"
      ];
    } else if (msg.includes("trial") || msg.includes("14-day")) {
      return [
        "What's included in the trial?",
        "Do I need a credit card?",
        "Can I cancel anytime?",
        "What happens after 14 days?"
      ];
    } else {
      return suggestions; // Fallback to initial suggestions
    }
  };

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text: text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(`${API_URL}/respond`, { message: text });
      const botResponse = response.data.response;
      const responseTime = response.data.response_time;
      const botMessage = { 
        sender: "bot", 
        text: `${botResponse}\n(Response time: ${responseTime.toFixed(2)} microseconds)` 
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      const botMessage = { sender: "bot", text: "Sorry, I couldn't process your request. Please try again." };
      setMessages((prev) => [...prev, botMessage]);
    }

    setInput("");
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSend(question);
  };

  // Get the appropriate suggestions based on conversation state
  const getCurrentSuggestions = (): string[] => {
    if (messages.length === 1) {
      return suggestions;
    } else {
      const lastBotMessage = messages.filter(msg => msg.sender === "bot").pop()?.text || "";
      return getFollowUpSuggestions(lastBotMessage);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center text-white"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      ) : (
        <div className="w-full max-w-md shadow-xl rounded-xl bg-white border">
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h2 className="text-xl font-bold">Jam Analytics Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-xl shadow-sm max-w-xs break-words ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            
            {/* Display suggested questions after every bot message */}
            {messages.length > 0 && messages[messages.length - 1].sender === "bot" && (
              <div className="mt-4 mb-2">
                <div className="flex flex-wrap gap-2">
                  {getCurrentSuggestions().map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="bg-gray-100 hover:bg-gray-200 text-blue-600 text-sm py-1 px-3 rounded-full border border-gray-300 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border flex-1 p-2 rounded-lg focus:outline-blue-400 focus:ring-1 focus:ring-blue-400"
              placeholder="Ask about Jam Analytics..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={() => handleSend()}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
          
          <div className="px-3 pb-3 text-xs text-gray-500 text-center">
            Powered by Jam Analytics AI
          </div>
        </div>
      )}
    </div>
  );
}