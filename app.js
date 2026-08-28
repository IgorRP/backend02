const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send('<p>pagina inicial2222222</p>');
});

app.get('/link1', (req, res) => {
  res.send('<p>pagina link1</p>');
});

app.use((req, res) => {
  res.status(404).send('<p>nops... pagina errada</p>');
});
