# ✅ Backend Deployment Checklist

## Pre-Deployment Checklist
- [ ] Repository is pushed to GitHub with all backend files
- [ ] Railway account created and GitHub connected
- [ ] Neon database URL obtained
- [ ] OpenRouter API key obtained
- [ ] Frontend domain known for CORS configuration

## Deployment Steps
- [ ] Create new Railway project from GitHub repo
- [ ] Set root path to `backend/`
- [ ] Configure build command: `pip install -r requirements.txt`
- [ ] Configure start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- [ ] Set runtime to Python 3.11
- [ ] Add environment variables:
  - [ ] `NEON_DATABASE_URL`
  - [ ] `OPENROUTER_API_KEY`
  - [ ] `APP_ENV=production`
  - [ ] `BACKEND_CORS_ORIGINS=["https://muhammadariyan.github.io"]`
- [ ] Click deploy and wait for completion

## Post-Deployment Verification
- [ ] Health check passes: `curl https://your-app.railway.app/health`
- [ ] API docs accessible: `https://your-app.railway.app/docs`
- [ ] Chat API responds: Test with sample message
- [ ] CORS configured correctly for frontend
- [ ] Logs show no errors

## Frontend Integration
- [ ] Update frontend to use production backend URL
- [ ] Test chat functionality end-to-end
- [ ] Verify mobile responsiveness
- [ ] Check error handling

## Monitoring
- [ ] Set up log monitoring in Railway dashboard
- [ ] Configure alerts for errors
- [ ] Monitor API usage and costs
- [ ] Check database performance

## Security
- [ ] API keys are set as environment variables (not in code)
- [ ] HTTPS is enforced
- [ ] CORS is properly configured
- [ ] Rate limiting considered if needed

## Troubleshooting Common Issues
- **500 errors**: Check environment variables and logs
- **CORS errors**: Verify `BACKEND_CORS_ORIGINS` includes frontend domain
- **Database errors**: Check `NEON_DATABASE_URL` format and accessibility
- **API key errors**: Verify OpenRouter key is valid and has credits

## Production URLs to Save
- Backend URL: `_________________________`
- Health endpoint: `_________________________`
- API docs: `_________________________`
- Railway dashboard: `_________________________`