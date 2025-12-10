# Ary's Physical Humanoid Robotics

A comprehensive educational platform for humanoid robotics featuring an interactive AI chatbot assistant. Built with Docusaurus, React, and FastAPI.

## 🚀 Features

- **Interactive Chatbot**: Fubuni AI assistant powered by OpenAI Agents SDK
- **Modern UI**: Luxurious black & white glassmorphism design
- **Educational Content**: Comprehensive humanoid robotics curriculum
- **Full-Stack**: React frontend with FastAPI backend
- **Database**: PostgreSQL integration with Neon serverless
- **Real-time Chat**: Streaming responses with conversation history

## 📋 Prerequisites

- Node.js 20+ 
- Python 3.11+
- PostgreSQL (or Neon account)

## 🛠️ Installation

### Frontend Setup
```bash
npm install
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Environment Configuration
```bash
cp .env.example .env
# Edit .env with your actual API keys and database URL
```

## 🏃‍♂️ Local Development

### Quick Start (Both Frontend + Backend)
```bash
chmod +x start-system.sh
./start-system.sh
```

### Manual Start
```bash
# Terminal 1: Start Backend
cd backend
source venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2: Start Frontend
npm start
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

## 🧪 Testing

### Integration Tests
```bash
chmod +x test-integration.sh
./test-integration.sh
```

### Frontend Tests
```bash
npm run test
```

### Backend Tests
```bash
cd backend
python -m pytest tests/ -v
```

## 🚀 Deployment

### Quick Backend Deployment (Railway)
```bash
chmod +x deploy-backend.sh
./deploy-backend.sh
```

### Automatic Deployment
The project uses GitHub Actions for automatic deployment:
- **Frontend**: Deployed to GitHub Pages on push to main
- **Backend**: Ready for production deployment
- **Tests**: Run automatically on each push

### Backend Deployment Options

#### Option 1: Railway (Recommended)
```bash
cd backend
railway up
```

#### Option 2: Render
1. Connect repository to [Render](https://render.com)
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

#### Option 3: Docker
```bash
cd backend
docker build -t fubuni-backend .
docker run -p 8000:8000 fubuni-backend
```

### Manual Frontend Build
```bash
npm run build
```

### Environment Variables Required
```bash
NEON_DATABASE_URL=postgresql://your-neon-db-url
OPENROUTER_API_KEY=your-openrouter-api-key
APP_ENV=production
BACKEND_CORS_ORIGINS=["https://yourdomain.com"]
```

## 🔧 Configuration

### Required Environment Variables
- `NEON_DATABASE_URL`: PostgreSQL connection string
- `OPENROUTER_API_KEY`: OpenRouter API key for AI functionality
- `APP_ENV`: Set to 'production' for production deployment
- `BACKEND_CORS_ORIGINS`: Allowed frontend origins

### API Configuration
The chatbot uses OpenRouter with Amazon Nova model by default. Update `backend/app/config/settings.py` to modify AI providers.

## 📁 Project Structure

```
├── src/                    # React frontend source
│   ├── components/         # React components
│   │   └── FubuniChat/    # Chatbot components
│   ├── theme/             # Docusaurus theme customization
│   └── css/               # Styling
├── backend/               # FastAPI backend
│   ├── app/
│   │   ├── api/          # API endpoints
│   │   ├── agents/       # AI agent logic
│   │   ├── config/       # Configuration
│   │   └── models/       # Database models
│   └── tests/            # Backend tests
├── docs/                 # Documentation content
├── specs/                # Feature specifications
└── .github/workflows/    # CI/CD pipelines
```

## 🤖 Chatbot Features

- **Context-Aware**: Maintains conversation history
- **Robotics Expert**: Specialized in humanoid robotics topics
- **Streaming Responses**: Real-time message streaming
- **Glassmorphism UI**: Modern, elegant chat interface
- **Mobile Responsive**: Works on all device sizes

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**: Check Python version and virtual environment
2. **Chat not working**: Verify API keys in `.env` file
3. **Database errors**: Ensure `NEON_DATABASE_URL` is correctly set
4. **CORS issues**: Check `BACKEND_CORS_ORIGINS` configuration

### Health Checks
```bash
# Backend health
curl http://localhost:8000/health

# Test chat API
curl -X POST "http://localhost:8000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## 📚 Documentation

- [API Documentation](http://localhost:8000/docs) (when backend is running)
- [Feature Specifications](./specs/)
- [Development Guides](./docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
