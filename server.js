const express = require('express');
const path = require('path');
const products = require('./models/products');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;


app.get('/about', (req, res) => {
  res.send('This is my store!');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
