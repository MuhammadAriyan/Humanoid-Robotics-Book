#!/bin/bash

echo "🚀 Deploying Fubuni Chat Backend to Railway"
echo "============================================"

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Check if logged in to Railway
if ! railway whoami &> /dev/null; then
    echo "🔐 Please login to Railway:"
    railway login
fi

# Navigate to backend directory
cd backend

echo "📦 Deploying to Railway..."
railway up

echo "⚙️  Setting environment variables..."

# Prompt for environment variables
read -p "Enter your Neon Database URL: " db_url
read -p "Enter your OpenRouter API Key: " api_key
read -p "Enter your frontend domain (e.g., https://yourdomain.github.io): " frontend_domain

# Set environment variables
railway variables set NEON_DATABASE_URL="$db_url"
railway variables set OPENROUTER_API_KEY="$api_key"
railway variables set APP_ENV="production"
railway variables set BACKEND_CORS_ORIGINS='["'"$frontend_domain"'"]'

echo "🎉 Deployment initiated!"
echo ""
echo "📋 Next steps:"
echo "1. Wait for deployment to complete (2-3 minutes)"
echo "2. Get your backend URL: railway domain"
echo "3. Test health endpoint: curl https://your-backend-url.railway.app/health"
echo "4. Update frontend CORS settings if needed"
echo ""
echo "🔍 Check deployment status: railway logs"
echo "📊 View your app: railway open"