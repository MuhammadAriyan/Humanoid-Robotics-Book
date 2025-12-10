# 🚀 Manual Railway Deployment Guide

Since the CLI couldn't be installed in this environment, here's how to deploy manually:

## Step 1: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub (recommended)

## Step 2: Create New Project
1. Click "New Project" 
2. Select "Deploy from GitHub repo"
3. Choose your repository: `Ary-s-Physical-Humanoid-Robotics`
4. Select the `main` branch

## Step 3: Configure Deployment
1. **Root Path**: Set to `backend/` (since that's where the Python app is)
2. **Build Command**: `pip install -r requirements.txt`
3. **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. **Runtime**: Python 3.11

## Step 4: Set Environment Variables
In your Railway project settings, add these variables:

```bash
NEON_DATABASE_URL=postgresql://your-neon-db-url-here
OPENROUTER_API_KEY=your-openrouter-api-key-here
APP_ENV=production
BACKEND_CORS_ORIGINS=["https://muhammadariyan.github.io"]
```

## Step 5: Deploy
1. Click "Deploy" 
2. Wait 2-3 minutes for deployment to complete
3. Railway will give you a URL like: `https://your-app-name.railway.app`

## Step 6: Test Deployment
```bash
# Test health endpoint
curl https://your-app-name.railway.app/health

# Test chat API
curl -X POST "https://your-app-name.railway.app/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"message": "What is robotics?"}'
```

## Step 7: Update Frontend
Once you have your Railway URL, update the frontend to connect to it.

## 🔍 Alternative: Use Railway Dashboard
1. Go to your Railway dashboard
2. Click "New Project"
3. Click "Deploy from GitHub repo"
4. Follow the steps above

## 📞 Need Help?
- Railway docs: https://docs.railway.app
- Check deployment logs in Railway dashboard
- Make sure all environment variables are set correctly