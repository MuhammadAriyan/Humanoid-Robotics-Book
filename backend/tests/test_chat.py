import pytest
from fastapi.testclient import TestClient
from app.main import app


@pytest.fixture
def client():
    with TestClient(app) as test_client:
        yield test_client


def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_chat_endpoint_exists(client):
    # Test that the chat endpoint exists (without actually processing a message)
    # This would require mocking the agent in a full implementation
    response = client.post("/api/chat", json={"message": "Hello"})
    # We expect this to fail due to missing agent implementation in test environment,
    # but the route should exist
    assert response.status_code in [
        200,
        422,
        500,
    ]  # 422 for validation error, 500 for agent error


def test_chat_stream_endpoint_exists(client):
    response = client.post("/api/chat/stream", json={"message": "Hello"})
    # Check that the streaming endpoint exists
    assert response.status_code in [200, 422, 500]


@pytest.mark.asyncio
async def test_fubuni_agent_process_message():
    """Test the Fubuni agent's process_message method directly"""
    from app.agents.fubuni_agent import get_fubuni_agent

    fubuni_agent = get_fubuni_agent()
    result = await fubuni_agent.process_message("Hello")

    # Test that we get a real response
    assert isinstance(result, str)
    assert len(result) > 0
