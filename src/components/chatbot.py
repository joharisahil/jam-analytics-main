import json
import logging
import os
import time
from typing import Dict, List, Optional

class JamAnalyticsChatbot:
    def __init__(self, knowledge_base_path: str):
        # Configure logging
        logging.basicConfig(
            level=logging.DEBUG,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        self.logger = logging.getLogger(__name__)

        # Default fallback options
        self.options = [
            "What pricing plans do you offer?",
            "Tell me about your features",
            "When are you launching?",
            "How does it work?",
            "Do you offer a free trial?"
        ]

        # Initialize knowledge base
        self.knowledge_base = {}

        # Detailed file path logging and verification
        self.logger.debug(f"Attempting to load knowledge base from: {https://github.com/joharisahil/jam-analytics-main/blob/a4fa4bd448d8c75cffb01d9ab77347b9dd61eafe/src/data/knowledge_base.json}")
        self.logger.debug(f"Absolute path: {os.path.abspath(knowledge_base_path)}")
        
        try:
            # Check if file exists
            if not os.path.exists(knowledge_base_path):
                self.logger.error(f"File does not exist: {knowledge_base_path}")
                raise FileNotFoundError(f"Knowledge base file not found: {knowledge_base_path}")

            # Attempt to open and parse the file
            with open(knowledge_base_path, 'r', encoding='utf-8') as f:
                self.logger.debug(f"Successfully opened file: {knowledge_base_path}")
                
                try:
                    self.knowledge_base = json.load(f)
                    self.logger.info("Knowledge base successfully loaded")
                except json.JSONDecodeError as json_err:
                    self.logger.error(f"JSON Decoding Error: {json_err}")
                    raise

        except Exception as e:
            self.logger.error(f"Error loading knowledge base: {e}")
            
            # Create a minimal fallback knowledge base
            self.knowledge_base = {
                "greeting": "Hi there! I'm Jam Analytics AI Assistant. How can I help you today?",
                "pricing": {"description": "Sorry, pricing details are currently unavailable."},
                "features": {"description": "Our features are being updated."},
                "launch": "Stay tuned for more information!",
                "how_it_works": {"description": "Details coming soon!"},
                "free_trial": "Free trial information will be available shortly."
            }
            self.logger.warning("Initialized with fallback knowledge base")

    def get_greeting(self) -> str:
        return self.knowledge_base.get("greeting", "Hi there! I'm Jam Analytics AI Assistant.")

    def get_options(self) -> List[str]:
        return self.options

    def respond(self, user_input: str) -> Optional[str]:
        user_input = user_input.lower().strip()
        self.logger.debug(f"Received user input: {user_input}")

        # Comprehensive response handling with fallback
        try:
            if "pricing" in user_input or "plans" in user_input:
                pricing_data = self.knowledge_base.get("pricing", {})
                return pricing_data.get("description", "Pricing information is currently unavailable.")

            elif "feature" in user_input:
                features_data = self.knowledge_base.get("features", {})
                return features_data.get("description", "Feature details are being updated.")

            elif "launch" in user_input:
                return self.knowledge_base.get("launch", "Launch details are coming soon!")

            elif "how" in user_input and "work" in user_input:
                how_it_works_data = self.knowledge_base.get("how_it_works", {})
                return how_it_works_data.get("description", "How it works information will be available shortly.")

            elif "free trial" in user_input:
                return self.knowledge_base.get("free_trial", "Free trial information is being prepared.")

            else:
                return "I'm sorry, I didn't understand that. Please choose one of the options or ask about Jam Analytics!"

        except Exception as e:
            self.logger.error(f"Error processing response: {e}")
            return "I encountered an error processing your request. Please try again."

    def get_response_time(self, user_input: str) -> float:
        start_time = time.time()
        self.respond(user_input)
        end_time = time.time()
        return (end_time - start_time) * 1_000_000  # Convert to microseconds