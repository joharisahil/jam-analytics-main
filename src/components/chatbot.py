import tkinter as tk
from tkinter import scrolledtext
import time
import re
import random

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
        
        # Track conversation topics for improvement
        self.conversation_topics = set()
        self.user_interests = {}
        
        # Knowledge base for dynamic responses
        self.initialize_knowledge_base()
        
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
        
        # Display initial message
        self.display_message(self.messages[0]["text"], "bot")
        
        # Display initial suggestions
        self.display_suggestions(self.initial_suggestions)

    def initialize_knowledge_base(self):
        # Core information about the product
        self.product_info = {
            "name": "Jam Analytics",
            "description": "An AI-powered analytics platform that helps businesses generate insights and automate workflows.",
            "status": "launching soon",
            "website": "jamanalytics.com"
        }
        
        # Detailed knowledge base for dynamic responses
        self.knowledge_base = {
            "pricing": {
                "plans": ["Basic", "Pro", "Enterprise"],
                "basic": {"cost": "Free", "team_size": 1, "storage": "500MB", "support": "Community"},
                "pro": {"cost": "$12/month", "team_size": 3, "storage": "10GB", "support": "Priority"},
                "enterprise": {"cost": "Custom pricing", "team_size": "Custom", "storage": "Custom", "support": "Dedicated with SLA"},
                "trial": "14-day free trial for Pro and Enterprise plans, no credit card required"
            },
            "features": {
                "main_features": ["Smart Workflow Generation", "Seamless Integrations", "Custom Analytics Dashboards", 
                                 "Automated Task Management", "Role-based Access Control", "Real-time Collaboration"],
                "workflow": "AI-powered system that automatically creates and optimizes business processes based on your specific needs",
                "integrations": "Connect with your existing tools and software through our Integration Hub",
                "analytics": "Real-time insights and reporting dashboard with customizable KPIs and visualizations",
                "task_management": "Automate repetitive tasks and track progress in real-time",
                "access_control": "Secure role-based permissions to ensure data security",
                "collaboration": "Real-time collaboration tools for team members"
            },
            "launch": {
                "date": "Coming soon",
                "waitlist": "Join our waitlist on the homepage to get early access",
                "early_access": "Waitlist members will be the first to try the platform"
            },
            "security": {
                "measures": ["Encryption at rest and in transit", "Regular security audits", "Role-based access control", "GDPR compliance"],
                "data_policy": "We never sell your data and maintain strict privacy controls"
            },
            "support": {
                "channels": ["Email", "Live chat", "Knowledge base"],
                "hours": "24/7 for Enterprise customers, business hours for Pro customers"
            },
            "company": {
                "mission": "To democratize data analytics and make it accessible to businesses of all sizes",
                "team": "A dedicated team of data scientists, engineers, and business experts"
            },
            "demo": {
                "availability": "Product demo video available on the homepage",
                "request": "Custom demos available for enterprise customers"
            },
            "contact": {
                "sales": "Contact our sales team through the 'Contact Sales' button on the pricing page",
                "support": "Support available through our help center or in-app chat"
            }
        }
        
        # Intent patterns to match user queries
        self.intent_patterns = {
            "pricing": [r"pric(e|ing)", r"cost", r"billing", r"plan", r"payment", r"subscription", r"how much"],
            "features": [r"feature", r"capability", r"what can", r"offer", r"do you have"],
            "workflow": [r"workflow", r"process", r"automation"],
            "integrations": [r"integrat", r"connect", r"api", r"work with"],
            "analytics": [r"analytic", r"dashboard", r"report", r"kpi", r"metric", r"chart", r"graph"],
            "launch": [r"launch", r"available", r"when", r"waitlist", r"release", r"coming"],
            "trial": [r"trial", r"try", r"free", r"demo"],
            "team": [r"team", r"member", r"user", r"seat", r"add people"],
            "storage": [r"storage", r"space", r"capacity", r"data limit"],
            "support": [r"support", r"help", r"assist", r"customer service"],
            "security": [r"secur", r"privacy", r"data", r"protect"],
            "contact": [r"contact", r"sales", r"talk to", r"email", r"phone", r"reach"],
            "how_works": [r"how.+work", r"explain", r"function"],
            "greeting": [r"^(hi|hello|hey|greetings)"],
            "thanks": [r"thank", r"appreciate", r"helpful"],
            "comparison": [r"compar", r"vs", r"versus", r"difference", r"better than"],
            "use_case": [r"use case", r"example", r"scenario", r"instance"],
            "export": [r"export", r"download", r"save", r"backup"]
        }
        
        # FAQs for common questions
        self.faqs = [
            {"question": "What makes Jam Analytics different?", 
             "answer": "Jam Analytics stands out with our AI-powered workflow generation, which automatically creates and optimizes processes based on your specific business needs. Unlike competitors, we combine analytics with automation for a truly integrated solution."},
            {"question": "Do you offer custom solutions?", 
             "answer": "Yes! Our Enterprise plan includes custom solutions tailored to your specific business requirements. Our team will work directly with you to ensure Jam Analytics fits perfectly into your operations."},
            {"question": "How secure is my data?", 
             "answer": "We take security seriously with encryption at rest and in transit, regular security audits, role-based access control, and GDPR compliance. Your data is never sold and remains protected at all times."},
            {"question": "What industries do you serve?", 
             "answer": "Jam Analytics works across multiple industries including e-commerce, finance, healthcare, education, and more. Our flexible platform adapts to your industry-specific needs."},
            {"question": "What kind of support do you offer?", 
             "answer": "Basic users get community support, Pro users receive priority support, and Enterprise clients enjoy dedicated support with SLA guarantees."},
            {"question": "Can I export my data?", 
             "answer": "Yes, you can export your data in multiple formats including CSV, Excel, and PDF. We believe your data belongs to you and make it easy to extract when needed."}
        ]

    def create_widgets(self):
        # Create header
        header_frame = tk.Frame(self.root, bg="#2563eb", pady=10)
        header_frame.pack(fill=tk.X)
        
        header_label = tk.Label(header_frame, text="Jam Analytics Assistant", 
                               font=("Arial", 16, "bold"), bg="#2563eb", fg="white")
        header_label.pack()
        
        # Create chat display area
        self.chat_area = scrolledtext.ScrolledText(self.root, wrap=tk.WORD, 
                                                  width=50, height=20, 
                                                  font=("Arial", 10))
        self.chat_area.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
        self.chat_area.config(state=tk.DISABLED)
        
        # Create suggestions area
        self.suggestions_frame = tk.Frame(self.root)
        self.suggestions_frame.pack(fill=tk.X, padx=10)
        
        # Create input area
        input_frame = tk.Frame(self.root, pady=10)
        input_frame.pack(fill=tk.X, side=tk.BOTTOM)
        
        self.user_input = tk.Entry(input_frame, font=("Arial", 12), width=40)
        self.user_input.pack(side=tk.LEFT, padx=10)
        self.user_input.bind("<Return>", lambda event: self.send_message())
        
        send_button = tk.Button(input_frame, text="Send", bg="#2563eb", fg="white",
                               command=self.send_message)
        send_button.pack(side=tk.RIGHT, padx=10)
        
        # Create footer
        footer = tk.Label(self.root, text="Powered by Jam Analytics AI", 
                         font=("Arial", 8), fg="gray")
        footer.pack(side=tk.BOTTOM, pady=5)

    def display_message(self, message, sender):
        self.chat_area.config(state=tk.NORMAL)
        
        # Add some spacing
        self.chat_area.insert(tk.END, "\n")
        
        # Format based on sender
        if sender == "user":
            self.chat_area.insert(tk.END, "You: ", "user_tag")
            self.chat_area.insert(tk.END, message + "\n", "user_message")
        else:
            self.chat_area.insert(tk.END, "Jam AI: ", "bot_tag")
            self.chat_area.insert(tk.END, message + "\n", "bot_message")
        
        # Configure tags
        self.chat_area.tag_configure("user_tag", foreground="#2563eb", font=("Arial", 10, "bold"))
        self.chat_area.tag_configure("user_message", foreground="#2563eb")
        self.chat_area.tag_configure("bot_tag", foreground="#333333", font=("Arial", 10, "bold"))
        self.chat_area.tag_configure("bot_message", foreground="#333333")
        
        # Scroll to the bottom
        self.chat_area.see(tk.END)
        self.chat_area.config(state=tk.DISABLED)

    def display_suggestions(self, suggestions):
        # Clear previous suggestions
        for widget in self.suggestions_frame.winfo_children():
            widget.destroy()
        
        # Create new suggestion buttons
        for suggestion in suggestions:
            suggestion_button = tk.Button(self.suggestions_frame, text=suggestion,
                                         font=("Arial", 8), bg="#f3f4f6", fg="#2563eb",
                                         relief=tk.FLAT, borderwidth=1,
                                         command=lambda s=suggestion: self.use_suggestion(s))
            suggestion_button.pack(side=tk.LEFT, padx=2, pady=4)

    def use_suggestion(self, suggestion):
        self.user_input.delete(0, tk.END)
        self.user_input.insert(0, suggestion)
        self.send_message()

    def send_message(self):
        user_message = self.user_input.get().strip()
        if not user_message:
            return
        
        # Add user message to history
        self.messages.append({"sender": "user", "text": user_message})
        self.display_message(user_message, "user")
        self.user_input.delete(0, tk.END)
        
        # Update user interests for personalization
        self.update_user_interests(user_message)
        
        # Simulate typing delay for bot
        self.root.after(100, lambda: self.root.update())
        time.sleep(0.6)  # Simulate processing delay
        
        # Get bot response
        bot_response = self.get_bot_response(user_message)
        
        # Add bot message to history
        self.messages.append({"sender": "bot", "text": bot_response})
        self.display_message(bot_response, "bot")
        
        # Update suggestions based on bot response
        follow_up_suggestions = self.get_follow_up_suggestions(bot_response, user_message)
        self.display_suggestions(follow_up_suggestions)

    def update_user_interests(self, message):
        # Track topics user is interested in for better personalization
        message_lower = message.lower()
        
        # Check each intent pattern
        for topic, patterns in self.intent_patterns.items():
            for pattern in patterns:
                if re.search(pattern, message_lower):
                    self.conversation_topics.add(topic)
                    self.user_interests[topic] = self.user_interests.get(topic, 0) + 1

    def detect_intent(self, message):
        message_lower = message.lower()
        
        # Check for exact FAQ matches
        for faq in self.faqs:
            if self.is_similar(message_lower, faq["question"].lower()):
                return "faq", faq["question"]
        
        # Check each intent pattern
        for intent, patterns in self.intent_patterns.items():
            for pattern in patterns:
                if re.search(pattern, message_lower):
                    return intent, pattern
        
        # Check for general product information
        if any(word in message_lower for word in ["what is", "tell me about", "jam analytics"]):
            return "product_info", None
        
        # Check for comparison questions
        if any(word in message_lower for word in ["compare", "vs", "versus", "difference"]):
            return "comparison", None
            
        # Default to unknown intent
        return "unknown", None

    def is_similar(self, message, target):
        # Simple similarity check - can be enhanced with NLP techniques
        message_words = set(message.split())
        target_words = set(target.split())
        
        # If more than 50% of words match, consider it similar
        common_words = message_words.intersection(target_words)
        if len(target_words) > 0 and len(common_words) / len(target_words) > 0.5:
            return True
        return False

    def get_bot_response(self, message):
        # Detect user intent
        intent, pattern = self.detect_intent(message)
        
        # Personalize response based on conversation history
        personalized_prefix = self.get_personalization_prefix()
        
        # Generate response based on intent
        if intent == "pricing":
            return self.generate_pricing_response(message, personalized_prefix)
        
        elif intent == "features":
            return self.generate_features_response(message, personalized_prefix)
        
        elif intent == "workflow":
            return f"{personalized_prefix}Our AI-powered workflow generation helps you create and optimize business processes automatically. Just describe your needs, and our system will generate custom workflows for you! Would you like to see an example?"
        
        elif intent == "integrations":
            return f"{personalized_prefix}Our Seamless Integration Hub allows you to connect Jam Analytics with your existing tools and software. We support integrations with popular platforms like Slack, Google Workspace, Microsoft 365, Salesforce, and many more. What specific tools do you need to integrate with?"
        
        elif intent == "analytics":
            return f"{personalized_prefix}Our Custom Analytics Dashboard provides real-time insights and reporting. You can track KPIs, visualize data with customizable charts, and make data-driven decisions all in one place. The dashboards are fully customizable to suit your specific business needs."
        
        elif intent == "launch":
            return f"{personalized_prefix}We're launching soon! Join our waitlist on the homepage to be notified as soon as we go live and get early access. Early waitlist members will receive special bonuses including extended trial periods and exclusive onboarding support."
        
        elif intent == "trial":
            if "demo" in message.lower():
                return f"{personalized_prefix}You can watch our product demo directly from the homepage. It shows how Jam Analytics works in action! For more detailed demonstrations, our team can also arrange a personalized walkthrough."
            else:
                return f"{personalized_prefix}Both our Pro and Enterprise plans come with a 14-day free trial. No credit card required to start! The trial gives you full access to all features so you can thoroughly evaluate if Jam Analytics is right for your needs."
        
        elif intent == "team":
            return f"{personalized_prefix}The Basic plan includes 1 team member, Pro includes 3 team members, and Enterprise offers custom team sizes. Need more seats? The Enterprise plan is perfect for larger teams with custom pricing based on your specific requirements."
        
        elif intent == "storage":
            return f"{personalized_prefix}The Basic plan includes 500MB storage, Pro includes 10GB, and Enterprise offers custom storage options based on your needs. All plans include our advanced compression technology to maximize your storage efficiency."
        
        elif intent == "support":
            return f"{personalized_prefix}Basic users get community support, Pro users receive priority support during business hours, and Enterprise clients enjoy 24/7 dedicated support with SLA guarantees. Our support team consists of product experts who can help with any issues you might encounter."
        
        elif intent == "security":
            return f"{personalized_prefix}We take security seriously with role-based access control, encryption at rest and in transit, regular security audits, and GDPR compliance. Your data is never sold and remains protected with enterprise-grade security measures at all times."
        
        elif intent == "contact":
            return f"{personalized_prefix}You can contact our sales team through the 'Contact Sales' button on the pricing page, or visit our Contact page in the footer. For existing customers, you can also reach support directly from within the platform."
        
        elif intent == "how_works":
            return f"{personalized_prefix}Jam Analytics works in three simple steps: 1) Describe your business needs, 2) Our AI generates a custom solution with workflows and analytics dashboards, and 3) You launch and customize in real-time. The platform adapts to your specific requirements and grows with your business."
        
        elif intent == "greeting":
            return "Hello! How can I help you learn more about Jam Analytics today? Feel free to ask about our features, pricing, or how our platform can help your business."
        
        elif intent == "thanks":
            return "You're welcome! Feel free to ask if you have any other questions about Jam Analytics. I'm here to help you make the most of our platform."
        
        elif intent == "faq":
            # Return the answer to the matched FAQ
            for faq in self.faqs:
                if self.is_similar(message.lower(), faq["question"].lower()):
                    return faq["answer"]
        
        elif intent == "product_info":
            return f"Jam Analytics is an AI-powered analytics platform that helps businesses generate insights and automate workflows. Our platform combines powerful analytics dashboards with intelligent workflow automation to help businesses of all sizes make better decisions and improve efficiency."
        
        elif intent == "comparison":
            return f"Compared to other analytics platforms, Jam Analytics offers a unique combination of analytics and workflow automation powered by AI. While competitors focus on either analytics or automation, we bring both together in a seamless experience. Our pricing is also more competitive, with plans starting at free for small businesses."
        
        elif intent == "use_case":
            use_cases = [
                "A marketing team can use Jam Analytics to track campaign performance and automatically adjust ad spend based on real-time results.",
                "E-commerce businesses use our platform to analyze customer behavior and automate inventory management workflows.",
                "Sales teams leverage Jam Analytics to track pipeline metrics and automate follow-up processes for leads.",
                "HR departments use our solution to monitor employee satisfaction metrics and streamline onboarding workflows."
            ]
            return f"{personalized_prefix}Here's a relevant example of how Jam Analytics can be used: {random.choice(use_cases)} Would you like to hear about more use cases specific to your industry?"
        
        elif intent == "export":
            return f"{personalized_prefix}Yes, you can export your data from Jam Analytics in multiple formats including CSV, Excel, and PDF. We believe your data belongs to you and make it easy to extract when needed. Pro and Enterprise plans also include API access for automated data extraction."
        
        # Default response with improvement based on conversation history
        else:
            if len(self.conversation_topics) > 0:
                topics_str = ", ".join(self.conversation_topics)
                return f"I'm not sure I understand that question. Based on our conversation about {topics_str}, would you like to know more about any of these topics? Or you can try rephrasing your question."
            else:
                return f"I'm not sure I understand. Would you like to know about our features, pricing, or how Jam Analytics works? Feel free to ask specific questions about how we can help your business."

    def get_personalization_prefix(self):
        """Generate a personalized prefix based on user interests"""
        if len(self.messages) > 3 and self.user_interests:
            top_interest = max(self.user_interests.items(), key=lambda x: x[1])[0]
            
            prefixes = {
                "pricing": "Based on your interest in pricing, ",
                "features": "Since you're exploring our features, ",
                "integrations": "As you're interested in integrations, ",
                "analytics": "Considering your focus on analytics, ",
                "workflow": "With your interest in workflows, ",
                "security": "Since data security is important to you, ",
                "team": "For your team management needs, ",
                "trial": "As you're considering trying our platform, "
            }
            
            return prefixes.get(top_interest, "")
        return ""

    def generate_pricing_response(self, message, prefix):
        """Generate a detailed response about pricing based on the query"""
        message_lower = message.lower()
        
        # Check for specific plan inquiries
        if "basic" in message_lower or "free" in message_lower:
            return f"{prefix}Our Basic plan is completely free and includes 1 team member, 500MB storage, and access to community support. It's perfect for individuals or small businesses just getting started with analytics."
        
        elif "pro" in message_lower:
            return f"{prefix}The Pro plan costs $12/month and includes advanced analytics, 3 team members, 10GB storage, and priority support. It's our most popular option for growing businesses that need more powerful features."
        
        elif "enterprise" in message_lower:
            return f"{prefix}Our Enterprise plan offers custom pricing based on your specific needs. It includes custom team sizes, storage options, dedicated support with SLA guarantees, and advanced security features. Perfect for larger organizations with complex requirements."
        
        # General pricing information
        else:
            return f"{prefix}We offer three plans: Basic (Free), Pro ($12/month), and Enterprise (custom pricing). The Basic plan includes 1 team member and 500MB storage. The Pro plan includes advanced analytics, 3 team members, and 10GB storage. Enterprise offers custom solutions tailored to your business. All paid plans come with a 14-day free trial, no credit card required."

    def generate_features_response(self, message, prefix):
        """Generate a detailed response about features based on the query"""
        message_lower = message.lower()
        
        # Check for specific feature inquiries
        for feature in ["workflow", "integration", "analytic", "task", "access", "collaboration"]:
            if feature in message_lower:
                if feature == "workflow":
                    return f"{prefix}Our Smart Workflow Generation uses AI to automatically create and optimize business processes based on your specific needs. Just describe what you need, and our system will generate custom workflows for you!"
                elif feature == "integration":
                    return f"{prefix}Our Seamless Integration Hub connects with your existing tools like Slack, Google Workspace, Microsoft 365, Salesforce, and many more. Easy setup with no coding required in most cases."
                elif feature == "analytic":
                    return f"{prefix}Our Custom Analytics Dashboards give you real-time insights with customizable KPIs and visualizations. Track everything that matters to your business in one place."
                elif feature == "task":
                    return f"{prefix}Our Automated Task Management feature helps you automate repetitive tasks and track progress in real-time, freeing up your team to focus on what matters most."
                elif feature == "access":
                    return f"{prefix}Our Role-based Access Control ensures data security by giving team members access only to the information they need, with custom permission levels for different roles."
                elif feature == "collaboration":
                    return f"{prefix}Our Real-time Collaboration tools allow team members to work together seamlessly, with shared dashboards, comments, and notifications to keep everyone on the same page."
        
        # General features overview
        return f"{prefix}Jam Analytics offers several key features: Smart Workflow Generation (AI-powered process automation), Seamless Integrations (connect with your existing tools), Custom Analytics Dashboards (real-time insights and reporting), Automated Task Management, Role-based Access Control (for security), and Real-time Collaboration. Which feature would you like to know more about?"

    def get_follow_up_suggestions(self, last_bot_message, user_message):
        """Generate contextual follow-up suggestions based on the conversation"""
        # Detect the intent of the last user message
        intent, _ = self.detect_intent(user_message)
        
        # Prepare suggestions based on the intent and bot response
        if intent == "pricing":
            return [
                "Tell me about the Pro plan",
                "What's included in Enterprise?",
                "Is there a free trial?",
                "How many team members can I add?"
            ]
        
        elif intent == "features":
            return [
                "Tell me about workflows",
                "How do integrations work?",
                "Explain analytics dashboards",
                "What about security?"
            ]
        
        elif intent == "workflow":
            return [
                "How customizable are workflows?",
                "Can I integrate with my tools?",
                "Show me a workflow example",
                "What plan includes workflows?"
            ]
        
        elif intent == "integrations":
            return [
                "Which tools can I integrate?",
                "Is there an API?",
                "How difficult is setup?",
                "Do all plans include integrations?"
            ]
        
        elif intent == "analytics":
            return [
                "Can I customize dashboards?",
                "What metrics are available?",
                "How does reporting work?",
                "Can I export analytics data?"
            ]
        
        elif intent == "launch":
            return [
                "How do I join the waitlist?",
                "Will there be early access?",
                "What features at launch?",
                "Tell me about pricing"
            ]
        
        elif intent == "trial":
            return [
                "How long is the trial?",
                "What's included in the trial?",
                "Do I need a credit card?",
                "Can I convert to paid later?"
            ]
        
        elif intent == "security":
            return [
                "How is my data protected?",
                "Are you GDPR compliant?",
                "Do you sell user data?",
                "Tell me about access control"
            ]
        
        elif intent == "product_info" or intent == "greeting":
            return [
                "What pricing plans do you offer?",
                "Tell me about your features",
                "When are you launching?",
                "How does it work?"
            ]
        
        # Personalize suggestions based on user interests
        elif len(self.user_interests) > 1:
            # Get the top 2 interests excluding the current topic
            interests = sorted(self.user_interests.items(), key=lambda x: x[1], reverse=True)
            suggestions = []
            
            for topic, _ in interests[:2]:
                if topic != intent:  # Avoid suggesting the same topic
                    if topic == "pricing":
                        suggestions.append("Tell me about pricing plans")
                    elif topic == "features":
                        suggestions.append("What features do you offer?")
                    elif topic == "integrations":
                        suggestions.append("Which tools can I integrate?")
                    elif topic == "analytics":
                        suggestions.append("Tell me about analytics dashboards")
                    elif topic == "security":
                        suggestions.append("How secure is my data?")
                    elif topic == "workflow":
                        suggestions.append("How do workflows work?")
            
            # Add some general suggestions
            if len(suggestions) < 4:
                general = ["How does it work?", "Is there a free trial?", "When are you launching?", "Can you show me use cases?"]
                for item in general:
                    if len(suggestions) < 4 and item not in suggestions:
                        suggestions.append(item)
            
            return suggestions
        
        # Default follow-ups for unknown intent
        else:
            return [
                "What pricing plans do you offer?",
                "Tell me about your features",
                "When are you launching?",
                "How does it work?"
            ]

# Main function to run the application
def main():
    root = tk.Tk()
    chatbot = JamAnalyticsChatbot(root)
    root.mainloop()

if __name__ == "__main__":
    main()