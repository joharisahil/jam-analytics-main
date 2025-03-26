import tkinter as tk
from tkinter import scrolledtext
import time
import re
import random
import json
import os

class JamAnalyticsChatbot:
    def __init__(self, root):
        self.root = root
        self.root.title("Jam Analytics Chatbot")
        self.root.geometry("500x600")
        self.root.resizable(True, True)
        
        # Initialize message history
        self.messages = [
            {"sender": "bot", "text": "👋 Hi there! I'm Jam's AI assistant. How can I help you today?"}
        ]
        
        # Track conversation topics and interests
        self.conversation_topics = set()
        self.user_interests = {}
        
        # Define intent patterns
        self.intent_patterns = {
            "features": [r"feature", r"capability", r"what can it do", r"functions"],
            "pricing": [r"price", r"cost", r"plans", r"subscription", r"bill"],
            "integration": [r"integrate", r"connect with", r"tools supported"],
            "dashboard": [r"analytics", r"dashboard", r"reporting"],
            "workflow": [r"workflow", r"automation", r"process generation"],
            "support": [r"help", r"support", r"contact"],
            "security": [r"security", r"safe", r"data protection"],
            "collaboration": [r"collaboration", r"teamwork", r"working together"],
            "launch": [r"launch", r"when are you launching", r"available"],
            "free_trial": [r"free trial", r"trial", r"try it"]
        }

        # Load or initialize knowledge base
        self.knowledge_base_file = "knowledge_base.json"
        self.load_knowledge_base()
        
        # Create UI components
        self.create_widgets()
        
        # Initial suggestions
        self.initial_suggestions = [
            "What pricing plans do you offer?",
            "Tell me about your features",
            "When are you launching?",
            "How does it work?",
            "Do you offer a free trial?"
        ]
        
        # Display welcome message and suggestions
        self.display_message(self.messages[0]["text"], "bot")
        self.display_suggestions(self.initial_suggestions)

    def load_knowledge_base(self):
        """Load or initialize knowledge base"""
        if os.path.exists(self.knowledge_base_file):
            with open(self.knowledge_base_file, 'r') as f:
                self.knowledge_base = json.load(f)
        else:
            self.initialize_knowledge_base()

    def initialize_knowledge_base(self):
        """Default knowledge base"""
        self.knowledge_base = {
            "product_info": {
                "name": "Jam Analytics",
                "description": "An AI-powered analytics platform that helps businesses automate workflows, gain real-time insights, and collaborate efficiently.",
                "status": "Launching soon. Join the waitlist at jamanalytics.com!"
            },
            "faqs": [
                {"question": "What makes Jam Analytics different?", 
                 "answer": "Jam Analytics stands out with AI-powered workflow generation and real-time collaboration."},
                {"question": "Do you offer custom solutions?", 
                 "answer": "Yes! Our Enterprise plan includes custom solutions tailored to your business needs."},
                {"question": "Do you have a free trial?", 
                 "answer": "Yes! The Pro plan includes a 14-day free trial."},
                {"question": "What are the pricing plans?", 
                 "answer": "We offer Basic (free forever), Pro (up to $12/month), and custom Enterprise plans."}
            ]
        }
        self.save_knowledge_base()

    def save_knowledge_base(self):
        with open(self.knowledge_base_file, 'w') as f:
            json.dump(self.knowledge_base, f)

    def create_widgets(self):
        # Header
        header_frame = tk.Frame(self.root, bg="#2563eb", pady=10)
        header_frame.pack(fill=tk.X)
        header_label = tk.Label(header_frame, text="Jam Analytics Assistant", font=("Arial", 16, "bold"), bg="#2563eb", fg="white")
        header_label.pack()

        # Chat area
        self.chat_area = scrolledtext.ScrolledText(self.root, wrap=tk.WORD, width=50, height=20, font=("Arial", 10))
        self.chat_area.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
        self.chat_area.config(state=tk.DISABLED)

        # Suggestions
        self.suggestions_frame = tk.Frame(self.root)
        self.suggestions_frame.pack(fill=tk.X, padx=10)

        # Input field
        input_frame = tk.Frame(self.root, pady=10)
        input_frame.pack(fill=tk.X, side=tk.BOTTOM)
        self.user_input = tk.Entry(input_frame, font=("Arial", 12), width=40)
        self.user_input.pack(side=tk.LEFT, padx=10)
        self.user_input.bind("<Return>", lambda event: self.send_message())
        send_button = tk.Button(input_frame, text="Send", bg="#2563eb", fg="white", command=self.send_message)
        send_button.pack(side=tk.RIGHT, padx=10)

        # Footer
        footer = tk.Label(self.root, text="Powered by Jam Analytics AI", font=("Arial", 8), fg="gray")
        footer.pack(side=tk.BOTTOM, pady=5)

    def display_message(self, message, sender):
        self.chat_area.config(state=tk.NORMAL)
        self.chat_area.insert(tk.END, "\n")
        if sender == "user":
            self.chat_area.insert(tk.END, "You: ", "user_tag")
            self.chat_area.insert(tk.END, message + "\n", "user_message")
        else:
            self.chat_area.insert(tk.END, "Jam AI: ", "bot_tag")
            self.chat_area.insert(tk.END, message + "\n", "bot_message")

        self.chat_area.tag_configure("user_tag", foreground="#2563eb", font=("Arial", 10, "bold"))
        self.chat_area.tag_configure("user_message", foreground="#2563eb")
        self.chat_area.tag_configure("bot_tag", foreground="#333333", font=("Arial", 10, "bold"))
        self.chat_area.tag_configure("bot_message", foreground="#333333")
        self.chat_area.see(tk.END)
        self.chat_area.config(state=tk.DISABLED)

    def display_suggestions(self, suggestions):
        for widget in self.suggestions_frame.winfo_children():
            widget.destroy()
        for suggestion in suggestions:
            suggestion_button = tk.Button(
                self.suggestions_frame, text=suggestion,
                font=("Arial", 8), bg="#f3f4f6", fg="#2563eb", relief=tk.FLAT, borderwidth=1,
                command=lambda s=suggestion: self.use_suggestion(s)
            )
            suggestion_button.pack(side=tk.LEFT, padx=2, pady=4)

    def use_suggestion(self, suggestion):
        self.user_input.delete(0, tk.END)
        self.user_input.insert(0, suggestion)
        self.send_message()

    def send_message(self):
        user_message = self.user_input.get().strip()
        if not user_message:
            return
        self.messages.append({"sender": "user", "text": user_message})
        self.display_message(user_message, "user")
        self.user_input.delete(0, tk.END)

        self.update_user_interests(user_message)

        self.root.after(100, lambda: self.root.update())
        time.sleep(0.5)

        bot_response = self.get_bot_response(user_message)
        self.messages.append({"sender": "bot", "text": bot_response})
        self.display_message(bot_response, "bot")

        suggestions = self.get_follow_up_suggestions(bot_response, user_message)
        self.display_suggestions(suggestions)

    def update_user_interests(self, message):
        message_lower = message.lower()
        for topic, patterns in self.intent_patterns.items():
            for pattern in patterns:
                if re.search(pattern, message_lower):
                    self.conversation_topics.add(topic)
                    self.user_interests[topic] = self.user_interests.get(topic, 0) + 1

    def detect_intent(self, message):
        message_lower = message.lower()
        for faq in self.knowledge_base["faqs"]:
            if self.is_similar(message_lower, faq["question"].lower()):
                return "faq", faq["question"]
        for intent, patterns in self.intent_patterns.items():
            for pattern in patterns:
                if re.search(pattern, message_lower):
                    return intent, pattern
        if any(phrase in message_lower for phrase in ["what is", "tell me about", "jam analytics"]):
            return "product_info", None
        return "unknown", None

    def is_similar(self, message, target):
        message_words = set(message.split())
        target_words = set(target.split())
        common_words = message_words.intersection(target_words)
        return len(target_words) > 0 and len(common_words) / len(target_words) > 0.5

    def get_bot_response(self, message):
        intent, pattern = self.detect_intent(message)
        if intent == "faq":
            for faq in self.knowledge_base["faqs"]:
                if self.is_similar(message.lower(), faq["question"].lower()):
                    return faq["answer"]
        elif intent == "features":
            return "Jam Analytics offers smart workflow automation, seamless integration, real-time dashboards, task management, and role-based access."
        elif intent == "pricing":
            return "We offer Basic (free), Pro (up to $12/month), and Enterprise plans with custom pricing."
        elif intent == "integration":
            return "You can connect Jam Analytics with your favorite tools through our seamless integration hub."
        elif intent == "dashboard":
            return "Our custom analytics dashboard provides real-time insights and reporting."
        elif intent == "workflow":
            return "Jam Analytics uses AI to generate and optimize workflows tailored to your business."
        elif intent == "support":
            return "You can reach out to our help center or contact sales for dedicated support."
        elif intent == "security":
            return "We prioritize security with role-based access controls and data protection."
        elif intent == "collaboration":
            return "Real-time collaboration tools help your team work together seamlessly."
        elif intent == "launch":
            return self.knowledge_base["product_info"]["status"]
        elif intent == "free_trial":
            return "Yes! Our Pro plan includes a 14-day free trial so you can experience all features risk-free."
        elif intent == "product_info":
            return self.knowledge_base["product_info"]["description"]
        else:
            return "I'm not sure I understand. Would you like to know about features, pricing, or how Jam Analytics works?"

    def get_follow_up_suggestions(self, last_bot_message, user_message):
        return [
            "What are your features?",
            "Tell me about pricing.",
            "Do you offer a free trial?",
            "How does the workflow generation work?"
        ]

# Start the app
def main():
    root = tk.Tk()
    chatbot = JamAnalyticsChatbot(root)
    root.mainloop()

if __name__ == "__main__":
    main()
