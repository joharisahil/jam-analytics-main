import json
import time
from typing import Dict, List, Optional

class JamAnalyticsChatbot:
    def __init__(self, knowledge_base_path: str):
        # Load the knowledge base
        with open(knowledge_base_path, 'r') as f:
            self.knowledge_base = json.load(f)
        self.options = [
            "What pricing plans do you offer?",
            "Tell me about your features",
            "When are you launching?",
            "How does it work?",
            "Do you offer a free trial?"
        ]

    def get_greeting(self) -> str:
        return self.knowledge_base["greeting"]

    def get_options(self) -> List[str]:
        return self.options

    def respond(self, user_input: str) -> Optional[str]:
        user_input = user_input.lower().strip()

        # Check for specific questions
        if "pricing" in user_input or "plans" in user_input:
            pricing_data = self.knowledge_base["pricing"]
            response = pricing_data["description"] + "\n\n"
            for plan in pricing_data["plans"]:
                response += f"**{plan['name']} Plan**\nCost: {plan['cost']}\nFeatures:\n"
                for feature in plan["features"]:
                    response += f"- {feature}\n"
                response += f"Call to Action: {plan['cta']}\n\n"
            return response

        elif "feature" in user_input:
            features_data = self.knowledge_base["features"]
            response = features_data["description"] + "\n"
            for feature in features_data["list"]:
                response += f"- {feature}\n"
            return response

        elif "launch" in user_input:
            return self.knowledge_base["launch"]

        elif "how" in user_input and "work" in user_input:
            how_it_works_data = self.knowledge_base["how_it_works"]
            response = how_it_works_data["description"] + "\n"
            for step in how_it_works_data["steps"]:
                response += f"- {step}\n"
            return response

        elif "free trial" in user_input:
            return self.knowledge_base["free_trial"]

        else:
            return "I'm sorry, I didn't understand that. Please choose one of the options or ask about Jam Analytics!"

    def get_response_time(self, user_input: str) -> float:
        start_time = time.time()
        self.respond(user_input)
        end_time = time.time()
        return (end_time - start_time) * 1_000_000  # Convert to microseconds