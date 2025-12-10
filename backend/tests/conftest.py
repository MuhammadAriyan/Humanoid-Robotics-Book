import sys
import os
from dotenv import load_dotenv

# Add the backend directory to the path so imports work correctly
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

# Load test environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env.test"))
