from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sys
import os
import json

# Add backend to path
sys.path.append("./backend")

from backend.app.api import chat, test_chat

# Create FastAPI app
app = FastAPI(title="Fubuni Chat API", version="1.0.0")

# Configure CORS for Vercel
origins = []
if os.getenv("NODE_ENV") == "development":
    origins = ["*"]
else:
    # Parse cors origins from settings
    cors_origins = os.getenv(
        "BACKEND_CORS_ORIGINS", '["https://muhammadariyan.github.io"]'
    )
    try:
        origins = json.loads(cors_origins)
    except:
        origins = ["https://muhammadariyan.github.io"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(chat.router, prefix="/api", tags=["chat"])
app.include_router(test_chat.router, prefix="/api", tags=["test"])


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# Vercel serverless entry point
from mangum import Mangum

handler = Mangum(app)
