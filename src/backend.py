from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
# from components import JamAnalyticsChatbot

import logging
import os
from src.components.chatbot import JamAnalyticsChatbot
print(os.path.abspath("src/data/knowledge_base.json"))
print(os.path.exists("src/data/knowledge_base.json"))
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    chatbot = JamAnalyticsChatbot("src/data/knowledge_base.json")
    logger.info("Successfully initialized JamAnalyticsChatbot")
except FileNotFoundError as e:
    logger.error(f"Failed to load knowledge_base.json: {e}")
    raise HTTPException(status_code=500, detail="Failed to initialize chatbot: knowledge base file not found")
except Exception as e:
    logger.error(f"Unexpected error during chatbot initialization: {e}")
    raise HTTPException(status_code=500, detail="Failed to initialize chatbot: unexpected error")

class MessageRequest(BaseModel):
    message: str

@app.get("/greeting")
async def get_greeting():
    try:
        return {"greeting": chatbot.get_greeting()}
    except Exception as e:
        logger.error(f"Error in get_greeting: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch greeting")

@app.get("/initial-suggestions")
async def get_initial_suggestions():
    try:
        return {"suggestions": chatbot.get_options()}
    except Exception as e:
        logger.error(f"Error in get_initial_suggestions: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch initial suggestions")

@app.post("/respond")
async def respond_to_message(request: MessageRequest):
    try:
        user_input = request.message
        response = chatbot.respond(user_input)
        response_time = chatbot.get_response_time(user_input)
        return {
            "response": response,
            "response_time": response_time
        }
    except Exception as e:
        logger.error(f"Error in respond_to_message: {e}")
        raise HTTPException(status_code=500, detail="Failed to process message")

# Add this for debugging
if __name__ == "__main__":
    print("Testing JamAnalyticsChatbot directly...")
    print("Greeting:", chatbot.get_greeting())
    test_message = "How does it work?"
    response = chatbot.respond(test_message)
    response_time = chatbot.get_response_time(test_message)
    print(f"Response to '{test_message}': {response}")
    print(f"Response time: {response_time:.2f} microseconds")