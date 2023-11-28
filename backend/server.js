import express from 'express';
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
  res.send();
});

app.get('/api/brands', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.send(data.brands);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Serve at http://localhost:${port}`);
});
