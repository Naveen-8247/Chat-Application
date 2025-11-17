const express = require('express');
const cors = require('cors');
const {
  getSessionTitles,
  getNewSessionId,
  getSessionHistory,
  generateStructuredResponse
} = require('./mockData');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/sessions', (req, res) => {
  res.json(getSessionTitles());
});

app.get('/api/new-chat', (req, res) => {
  const newId = getNewSessionId();
  res.json({ sessionId: newId });
});

app.get('/api/session/:id', (req, res) => {
  const session = getSessionHistory(req.params.id);
  if (session) {
    res.json(session);
  } else {
    res.status(404).json({ message: 'Session not found' });
  }
});

app.post('/api/chat/:id', (req, res) => {
  const sessionId = req.params.id;
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ message: 'Question is required' });
  }

  const response = generateStructuredResponse(sessionId, question);

  if (response) {
    res.json(response);
  } else {
    res.status(404).json({ message: 'Session not found' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});