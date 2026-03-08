const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ ERROR:', err.stack);
  res.status(500).send('Something went wrong!');
});

// 404 handler
app.use((req, res) => {
  console.log('⚠️  404 Not Found:', req.url);
  res.status(404).send('Page not found');
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('\n' + '='.repeat(60));
  console.log('🌍 TURKANA COUNTY TOURISM WEBSITE - GOVERNMENT PROJECT');
  console.log('='.repeat(60));
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`📱 Mobile testing: cloudflared tunnel --url http://localhost:${PORT}`);
  console.log(`📍 Showcasing: Turkana County attractions ONLY`);
  console.log('='.repeat(60) + '\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Kill it with: lsof -ti:${PORT} | xargs kill -9`);
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('\n👋 Shutting down Turkana Tourism server...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});
