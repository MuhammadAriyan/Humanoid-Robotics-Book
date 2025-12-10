export default function handler(req, res) {
  // Simple health check
  if (req.method === 'GET' && req.url === '/health') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ status: 'healthy' });
    return;
  }
  
  // Simple chat endpoint
  if (req.method === 'POST' && req.url === '/api/chat') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json({
      response: "Hello! I'm Fubuni, your robotics assistant. How can I help you today?",
      session_id: "test-session-123"
    });
    return;
  }
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }
  
  // 404 for other routes
  res.status(404).json({ error: 'Not Found' });
}