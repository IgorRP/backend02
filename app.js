const { const1 } = require('./interface.js');

//console.log(const1);


//import {GoogleGenAI} from '@google/genai';

const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send(const1);
});

app.get('/link1', (req, res) => {
  res.send('<p>pagina link1</p>');
});

app.use((req, res) => {
  res.status(404).send('<p>nops... pagina errada</p>');
});

//const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
/*
async function main(pergunta) {
  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents: pergunta,
  });
  //console.log(response.text);
}

main();
*/
