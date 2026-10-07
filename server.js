const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Store is running!');
});

app.get('/about', (req, res) => {
  res.send('This is my store!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
