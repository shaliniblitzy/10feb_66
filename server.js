const express = require('express');
const app = express();
const PORT = 3000;

// Disable X-Powered-By header to prevent framework information disclosure
app.disable('x-powered-by');

// Security headers middleware — applies to all responses
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', "default-src 'none'");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
