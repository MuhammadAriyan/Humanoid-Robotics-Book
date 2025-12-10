# Deployment Guide for Fubuni Chat Backend

This guide covers multiple deployment options for the FastAPI backend.

## 🚀 Quick Deployment Options

### Option 1: Railway (Recommended - Easiest)

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Deploy from backend directory**
   ```bash
   cd backend
   railway up
   ```

4. **Set Environment Variables**
   ```bash
   railway variables set NEON_DATABASE_URL=your-db-url
   railway variables set OPENROUTER_API_KEY=your-api-key
   railway variables set APP_ENV=production
   railway variables set BACKEND_CORS_ORIGINS='["https://your-frontend-domain.com"]'
   ```

### Option 2: Render

1. **Create a new Web Service** on [Render Dashboard](https://render.com)

2. **Connect your GitHub repository**

3. **Configure Build Settings:**
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - Runtime: Python 3

4. **Set Environment Variables** in Render dashboard

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from backend directory**
   ```bash
   cd backend
   vercel --prod
   ```

### Option 4: Docker (Self-hosted)

1. **Build Docker image**
   ```bash
   cd backend
   docker build -t fubuni-backend .
   ```

2. **Run container**
   ```bash
   docker run -p 8000:8000 \
     -e NEON_DATABASE_URL=your-db-url \
     -e OPENROUTER_API_KEY=your-api-key \
     -e APP_ENV=production \
     fubuni-backend
   ```

## 🔧 Required Environment Variables

```bash
NEON_DATABASE_URL=postgresql://your-neon-db-url-here
OPENROUTER_API_KEY=your-openrouter-api-key-here
OPENAI_BASE_URL=https://openrouter.ai/api/v1
APP_ENV=production
BACKEND_CORS_ORIGINS='["https://your-frontend-domain.com"]'
```

## 🏥 Health Check

Once deployed, test the health endpoint:
```bash
curl https://your-backend-url.com/health
```

Expected response:
```json
{"status": "healthy"}
```

## 🧪 API Testing

Test the chat endpoint:
```bash
curl -X POST "https://your-backend-url.com/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"message": "What is robotics?"}'
```

## 📊 Monitoring

- **Health Endpoint**: `/health`
- **API Documentation**: `/docs` (Swagger UI)
- **OpenAPI Schema**: `/openapi.json`

## 🔒 Security Notes

1. **Never commit API keys** to version control
2. **Use HTTPS** in production
3. **Configure CORS** properly for your frontend domain
4. **Monitor logs** for unusual activity

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**: Check `BACKEND_CORS_ORIGINS` includes your frontend domain
2. **Database Connection**: Verify `NEON_DATABASE_URL` is correct and accessible
3. **API Key Issues**: Ensure `OPENROUTER_API_KEY` is valid and has credits
4. **Build Failures**: Check Python version compatibility (requires 3.11+)

### Debug Commands

```bash
# Check logs (Railway)
railway logs

# Check logs (Render)
# View in Render dashboard

# Local testing
cd backend
uvicorn app.main:app --reload
```

## 📈 Scaling

- **Railway**: Automatic scaling with pricing tiers
- **Render**: Free tier available, paid tiers for scaling
- **Vercel**: Serverless scaling
- **Docker**: Manual scaling with container orchestration

## 🔄 CI/CD Integration

The backend is already integrated with GitHub Actions in `.github/workflows/deploy.yml`. You can extend this for automatic deployments to your chosen platform.