const express = require('express');
const app = express();

app.get('/notes', (req, res) => {
  const notes = require('./notes.json');
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const note = req.body;
  const notes = require('./notes.json');
  notes.push(note);
  require('fs').writeFileSync('./notes.json', JSON.stringify(notes));
  res.sendStatus(201);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});