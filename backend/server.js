const express = require('express');
const cors = require('cors');
const {
  getSessionTitles,
  getNewSessionId,
  getSessionHistory,
  generateStructuredResponse
} = require('./mockData');

const app = express();

const PORT = process.env.PORT || 5000;


const allowedOrigins = [
  'http://localhost:3000',
  'https://chat-application-client-side.vercel.app', 
  'https://chat-application-server-fggy.onrender.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST']
}));

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
