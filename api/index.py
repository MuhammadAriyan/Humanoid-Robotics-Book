from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import json

# Create FastAPI app
app = FastAPI(title="Fubuni Chat API", version="1.0.0")

# Configure CORS for Vercel
origins = [
    "https://muhammadariyan.github.io",
    "https://ary-s-physical-humanoid-robotics.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/chat")
async def chat_endpoint(request: dict):
    # Simple response for testing
    return {
        "response": "Hello! I'm Fubuni, your robotics assistant. How can I help you today?",
        "session_id": "test-session",
    }


# Vercel serverless entry point
from mangum import Mangum

handler = Mangum(app)
