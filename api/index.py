def handler(request):
    """Simple Vercel serverless function"""
    
    # Handle CORS
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    
    # Handle OPTIONS preflight
    if request.method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': ''
        }
    
    # Health check
    if request.method == 'GET' and request.path == '/health':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': '{"status": "healthy"}'
        }
    
    # Chat endpoint
    if request.method == 'POST' and request.path == '/api/chat':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': '{"response": "Hello from Fubuni! I\\'m your robotics assistant.", "session_id": "test"}'
        }
    
    # 404 for other routes
    return {
        'statusCode': 404,
        'headers': headers,
        'body': '{"error": "Not Found"}'
    }