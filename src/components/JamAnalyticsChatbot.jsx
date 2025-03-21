import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import { botResponses, suggestionsByTopic } from './chatbotData';

// This would typically be stored in a database
const LOCAL_STORAGE_KEY = "jam_analytics_chatbot_training";

export default function JamAnalyticsChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi there! I'm Jam's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [trainedResponses, setTrainedResponses] = useState(() => {
    // Load trained responses from localStorage
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {};
  });
  const [feedbackMode, setFeedbackMode] = useState(null);
  const messagesEndRef = useRef(null);

  // Initial suggested questions
  const initialSuggestions = [
    "What pricing plans do you offer?",
    "Tell me about your features",
    "When are you launching?",
    "How does it work?",
    "Do you offer a free trial?"
  ];

  // Save trained responses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(trainedResponses));
  }, [trainedResponses]);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    const shouldScroll = messagesEndRef.current && isOpen;
    shouldScroll && messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // This function now uses the trainedResponses data first before falling back to predefined responses
  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    
    // Check if we have a direct match in the trained responses
    if (trainedResponses[msg]) {
      return trainedResponses[msg];
    }
    
    // Check if we have a semantic match in the trained responses
    const semanticMatch = findSemanticMatch(msg, Object.keys(trainedResponses));
    if (semanticMatch && trainedResponses[semanticMatch]) {
      return trainedResponses[semanticMatch];
    }
    
    // Use the keyword mapping as a fallback
    const keywordMap = {
      "price": "pricing",
      "cost": "pricing",
      "billing": "pricing",
      "plan": "pricing",
      "feature": "features",
      "what can": "features",
      "workflow": "workflow",
      "integrat": "integration",
      "connect": "integration",
      "analytic": "analytics",
      "dashboard": "analytics",
      "report": "analytics",
      "launch": "launch",
      "available": "launch",
      "when": "launch",
      "waitlist": "launch",
      "trial": "trial",
      "try": "trial",
      "team": "team",
      "member": "team",
      "user": "team",
      "storage": "storage",
      "space": "storage",
      "support": "support",
      "help": "support",
      "how": "howItWorks",
      "work": "howItWorks",
      "demo": "demo",
      "secur": "security",
      "privacy": "security",
      "data": "security",
      "contact": "contact",
      "sales": "contact",
      "talk to": "contact",
      "hello": "greeting",
      "hi": "greeting",
      "hey": "greeting",
      "thank": "thanks",
      "thanks": "thanks"
    };
    
    // Find the first matching topic
    const matchingTopic = Object.entries(keywordMap).find(([keyword]) => 
      msg.includes(keyword)
    );
    
    // Return the appropriate response or the default
    return botResponses[matchingTopic ? matchingTopic[1] : "default"];
  };

  // Simple semantic matching function - could be replaced with more sophisticated NLP in a real implementation
  const findSemanticMatch = (userQuery, trainedQueries) => {
    // Convert everything to lowercase and remove punctuation
    const normalizedQuery = userQuery.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const queryWords = normalizedQuery.split(" ").filter(word => word.length > 3);
    
    // Find the query with the most word matches
    let bestMatch = null;
    let highestMatchCount = 0;
    
    trainedQueries.forEach(trainedQuery => {
      const normalizedTrainedQuery = trainedQuery.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      const trainedWords = normalizedTrainedQuery.split(" ");
      
      // Count matching words
      const matchCount = queryWords.filter(word => 
        trainedWords.some(trainedWord => trainedWord.includes(word) || word.includes(trainedWord))
      ).length;
      
      // If this is a better match and we have at least 2 matching words or 50% coverage
      if (matchCount > highestMatchCount && 
          (matchCount >= 2 || matchCount / queryWords.length >= 0.5)) {
        highestMatchCount = matchCount;
        bestMatch = trainedQuery;
      }
    });
    
    return bestMatch;
  };

  const handleSend = (text = input) => {
    const trimmedText = text.trim();
    const shouldSend = trimmedText !== "";
    
    if (shouldSend) {
      const userMessage = { sender: "user", text: trimmedText };
      setMessages((prev) => [...prev, userMessage]);
      
      // Reset feedback mode when sending a new message
      setFeedbackMode(null);
      
      // Simulate a small delay for the bot response
      setTimeout(() => {
        const botResponse = getBotResponse(trimmedText);
        const botMessage = { 
          sender: "bot", 
          text: botResponse,
          forQuery: trimmedText // Store the query this response answers
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 600);
      
      setInput("");
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSend(question);
  };

  // Handle user feedback on responses
  const handleFeedback = (isPositive, messageIndex) => {
    const message = messages[messageIndex];
    
    if (message.sender !== "bot" || !message.forQuery) return;
    
    if (isPositive) {
      // Positive feedback reinforces the current response
      setTrainedResponses(prev => ({
        ...prev,
        [message.forQuery.toLowerCase()]: message.text
      }));
      setFeedbackMode("positive");
    } else {
      // Negative feedback prompts for correction
      setFeedbackMode("negative");
    }
  };

  // Handle the submission of corrected responses
  const handleCorrection = (correctResponse) => {
    const lastBotMessage = messages.filter(msg => msg.sender === "bot").pop();
    
    if (lastBotMessage && lastBotMessage.forQuery) {
      // Update the trained responses with the correction
      setTrainedResponses(prev => ({
        ...prev,
        [lastBotMessage.forQuery.toLowerCase()]: correctResponse
      }));
      
      // Also update the visible message
      setMessages(prev => 
        prev.map((msg, i) => 
          i === prev.length - 1 ? { ...msg, text: correctResponse } : msg
        )
      );
      
      setFeedbackMode(null);
    }
  };

  // For developer training mode
  const handleDeveloperTraining = () => {
    const developerInput = prompt("Enter a question to train:");
    if (!developerInput) return;
    
    const developerResponse = prompt("Enter the correct response:");
    if (!developerResponse) return;
    
    setTrainedResponses(prev => ({
      ...prev,
      [developerInput.toLowerCase()]: developerResponse
    }));
    
    alert("Training data added successfully!");
  };

  // Get the appropriate suggestions based on conversation state
  const getCurrentSuggestions = () => {
    const isFirstMessage = messages.length === 1;
    
    if (isFirstMessage) {
      return initialSuggestions;
    }
    
    const lastBotMessage = messages.filter(msg => msg.sender === "bot").pop().text;
    const lowerCaseMessage = lastBotMessage.toLowerCase();
    
    // Find matching suggestions using keywords
    const suggestionsMappings = {
      "plan": "pricing",
      "pricing": "pricing",
      "basic": "pricing",
      "pro": "pricing", 
      "enterprise": "pricing",
      "feature": "features",
      "offers": "features",
      "workflow": "workflow",
      "integration": "integration",
      "connect": "integration",
      "analytic": "analytics",
      "dashboard": "analytics",
      "kpi": "analytics",
      "launch": "launch",
      "soon": "launch",
      "waitlist": "launch",
      "trial": "trial",
      "14-day": "trial",
      "team": "team",
      "member": "team",
      "storage": "storage",
      "gb": "storage",
      "support": "support",
      "priority": "support",
      "sla": "support",
      "demo": "demo",
      "secur": "security",
      "privacy": "security",
      "encryption": "security",
      "contact": "contact",
      "sales": "contact"
    };
    
    const matchingTopic = Object.entries(suggestionsMappings).find(([keyword]) => 
      lowerCaseMessage.includes(keyword)
    );
    
    return matchingTopic ? suggestionsByTopic[matchingTopic[1]] : suggestionsByTopic.default;
  };

  // Reset training data - for testing and development
  const resetTraining = () => {
    if (confirm("Are you sure you want to reset all training data?")) {
      setTrainedResponses({});
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      alert("Training data has been reset.");
    }
  };

  // This div will be positioned fixed at the bottom-right of the viewport
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
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Jam Analytics Assistant</h2>
              {/* Developer menu - typically hidden in production */}
              <div className="ml-2 relative group">
                <button className="text-xs text-blue-300 px-1 rounded">⚙️</button>
                <div className="hidden group-hover:block absolute bg-white text-black shadow-lg rounded p-2 z-10 right-0 min-w-32">
                  <button 
                    onClick={handleDeveloperTraining}
                    className="w-full text-left p-1 hover:bg-gray-100 text-sm"
                  >
                    Add Training Data
                  </button>
                  <button 
                    onClick={resetTraining}
                    className="w-full text-left p-1 hover:bg-gray-100 text-sm text-red-500"
                  >
                    Reset Training
                  </button>
                </div>
              </div>
            </div>
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
                className={`mb-3 ${
                  msg.sender === "user" ? "flex justify-end" : ""
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="flex flex-col">
                    <span
                      className="inline-block px-4 py-2 rounded-xl shadow-sm max-w-xs break-words bg-white text-gray-800 border border-gray-200"
                    >
                      {msg.text}
                    </span>
                    
                    {/* Only show feedback buttons on the last bot message */}
                    {index === messages.length - 1 && (
                      <div className="flex mt-1 ml-1 text-xs text-gray-500">
                        <button 
                          onClick={() => handleFeedback(true, index)}
                          className="flex items-center mr-3 hover:text-blue-600"
                        >
                          <ThumbsUp size={14} className="mr-1" /> Helpful
                        </button>
                        <button 
                          onClick={() => handleFeedback(false, index)}
                          className="flex items-center hover:text-blue-600"
                        >
                          <ThumbsDown size={14} className="mr-1" /> Improve
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
                {msg.sender === "user" && (
                  <span
                    className="inline-block px-4 py-2 rounded-xl shadow-sm max-w-xs break-words bg-blue-600 text-white"
                  >
                    {msg.text}
                  </span>
                )}
              </div>
            ))}
            
            {/* Feedback correction input */}
            {feedbackMode === "negative" && (
              <div className="mb-4 p-3 bg-gray-100 rounded-lg border border-gray-300">
                <p className="text-sm mb-2">How should I improve my response?</p>
                <textarea 
                  className="w-full p-2 border rounded text-sm mb-2"
                  rows={3}
                  placeholder="Provide a better response..."
                  defaultValue={messages[messages.length - 1]?.text || ""}
                />
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => setFeedbackMode(null)}
                    className="px-3 py-1 text-sm rounded border hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={(e) => {
                      const textarea = e.target.parentNode.previousSibling;
                      handleCorrection(textarea.value);
                    }}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
            
            {feedbackMode === "positive" && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200 text-green-700 text-sm">
                Thanks for your feedback! I'll remember this response for similar questions.
              </div>
            )}
            
            {/* Display suggested questions after every bot message */}
            {messages.length > 0 && messages[messages.length - 1].sender === "bot" && !feedbackMode && (
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
            Powered by Jam Analytics AI • {Object.keys(trainedResponses).length} topics learned
          </div>
        </div>
      )}
    </div>
  );
}