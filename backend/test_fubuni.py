#!/usr/bin/env python3
"""
Simple script to test the Fubuni agent directly
"""

import asyncio
import sys
import os

# Add the app directory to the Python path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "app"))

from app.agents.fubuni_agent import fubuni_agent


async def test_agent():
    """Test the Fubuni agent with a simple message"""
    message = "hi"
    print(f"Sending message to Fubuni: {message}")

    try:
        response = await fubuni_agent.process_message(message)
        print(f"Fubuni's response: {response}")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    asyncio.run(test_agent())
