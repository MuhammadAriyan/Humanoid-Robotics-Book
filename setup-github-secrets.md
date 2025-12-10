# GitHub Secrets Setup Guide

To set up the required GitHub Secrets for your CI/CD pipeline, follow these steps:

## Required GitHub Secrets

1. **RAILWAY_TOKEN**
   - Your Railway API token for deployment
   - Get this from Railway dashboard > Settings > API Tokens

## Railway Secrets (Already Set)

Since you already have these in Railway, no need to add them to GitHub:
- NEON_DATABASE_URL
- OPENROUTER_API_KEY
- BACKEND_CORS_ORIGINS
- APP_ENV

## How to Add Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Click on **Secrets and variables** > **Actions**
4. Click **New repository secret**
5. Add each secret with the exact name and value

## Commands to Get Values

### For Railway Token:
```bash
# Install Railway CLI if not already installed
npm install -g @railway/cli

# Login and get token
railway login
railway token create
```

### For Frontend URL:
```bash
# After deploying to GitHub Pages once, your URL will be:
# https://[your-username].github.io/[your-repo-name]
```

## Environment Variables Usage

The CI pipeline uses GitHub Secrets directly:
- Tests run with environment variables (no .env file created)
- Railway deployment sets variables securely via Railway CLI
- No secrets are exposed in logs or artifacts

## Testing the Setup

After adding secrets, push to main branch to trigger the workflow:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Secrets support for CI/CD"
git push origin main
```

Check the Actions tab in GitHub to see the workflow run.