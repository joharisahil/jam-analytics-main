from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from components import JamAnalyticsChatbot
import logging
chatbot = JamAnalyticsChatbot("C:/Users/Vishal sharma/jam-analytics-main/src/data/knowledge_base.json")
# Configure logging
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

# Initialize the chatbot with error handling
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