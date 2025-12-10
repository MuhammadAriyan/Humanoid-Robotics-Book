#!/bin/bash

echo "🔍 Verifying Backend Deployment"
echo "==============================="

# Check if backend URL is provided
if [ -z "$1" ]; then
    echo "❌ Please provide your backend URL"
    echo "Usage: ./verify-deployment.sh https://your-backend-url.railway.app"
    exit 1
fi

BACKEND_URL=$1

echo "🏥 Testing health endpoint..."
HEALTH_RESPONSE=$(curl -s "$BACKEND_URL/health")

if [[ $HEALTH_RESPONSE == *"healthy"* ]]; then
    echo "✅ Health check passed"
else
    echo "❌ Health check failed"
    echo "Response: $HEALTH_RESPONSE"
    exit 1
fi

echo "💬 Testing chat API..."
CHAT_RESPONSE=$(curl -s -X POST "$BACKEND_URL/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, can you help me with robotics?"}')

if [[ $CHAT_RESPONSE == *"response"* ]] || [[ $CHAT_RESPONSE == *"robotics"* ]]; then
    echo "✅ Chat API working"
    echo "📝 Sample response: $(echo $CHAT_RESPONSE | jq -r '.response' | head -c 100)..."
else
    echo "⚠️  Chat API might need configuration"
    echo "Response: $CHAT_RESPONSE"
fi

echo "📚 Checking API documentation..."
if curl -s "$BACKEND_URL/docs" | grep -q "swagger"; then
    echo "✅ API documentation accessible"
else
    echo "⚠️  API documentation not accessible"
fi

echo ""
echo "🎉 Deployment verification complete!"
echo "====================================="
echo "🔗 Backend URL: $BACKEND_URL"
echo "📖 API Docs: $BACKEND_URL/docs"
echo "🏥 Health: $BACKEND_URL/health"
echo ""
echo "📝 Next steps:"
echo "1. Update frontend environment with backend URL"
echo "2. Test full integration with frontend"
echo "3. Monitor logs for any issues"