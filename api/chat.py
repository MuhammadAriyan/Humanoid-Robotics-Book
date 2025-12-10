def handler(request):
    import json

    # Simple chat response
    response = {
        "response": "Hello! I'm Fubuni, your robotics assistant. How can I help you today?",
        "session_id": "test-session-123",
    }

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        "body": json.dumps(response),
    }
