import sys
import os
import pytest
from dotenv import load_dotenv

# Add the backend directory to the path so imports work correctly
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

# Load test environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env.test"))

# Import database initialization
from app.database.init import create_db_and_tables


@pytest.fixture(scope="session", autouse=True)
def setup_database():
    """
    Create database tables before running tests
    """
    create_db_and_tables()
