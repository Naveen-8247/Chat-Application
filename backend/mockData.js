const sessions = [
  {
    id: 'f8d3e9c7',
    title: 'Initial Deployment Checklist',
    history: [
      { sender: 'user', content: 'What are the key steps for a new product launch?' },
      {
        sender: 'model',
        content: 'I have compiled a checklist for your initial product deployment, focusing on essential pre-launch and post-launch phases.',
        structuredData: {
          headers: ['Phase', 'Task', 'Status'],
          rows: [
            ['Pre-Launch', 'Final QA & Testing', 'Completed'],
            ['Pre-Launch', 'Marketing Assets Ready', '90%'],
            ['Launch Day', 'Server Scalability Check', 'N/A'],
            ['Post-Launch', 'Monitor Feedback Channels', 'Pending']
          ]
        },
        feedback: null
      },
      { sender: 'user', content: 'Can you show me the sales data for Q3?' }
    ]
  },
  {
    id: 'b6a1f2d5',
    title: 'Q3 Sales Analysis Report',
    history: [
      { sender: 'user', content: 'Summarize the Q3 sales performance by region.' },
      {
        sender: 'model',
        content: 'The third quarter showed strong performance, particularly in the North and West regions. Here is the detailed breakdown.',
        structuredData: {
          headers: ['Region', 'Revenue (M)', 'Growth (%)'],
          rows: [
            ['North', '$2.5', '18%'],
            ['South', '$1.8', '5%'],
            ['East', '$2.1', '12%'],
            ['West', '$3.0', '25%']
          ]
        },
        feedback: 'like'
      }
    ]
  }
];

const getSessionTitles = () => {
  return sessions.map(session => ({
    id: session.id,
    title: session.title || 'New Chat...'
  }));
};

const getNewSessionId = () => {
  const newId = Math.random().toString(36).substring(2, 10);
  const newSession = {
    id: newId,
    title: null,
    history: []
  };
  sessions.unshift(newSession);
  return newId;
};

const getSessionHistory = (id) => {
  return sessions.find(session => session.id === id);
};

const setSessionTitle = (sessionId, question) => {
  const session = sessions.find(s => s.id === sessionId);
  if (session && !session.title) {
    session.title = question.substring(0, 40) + (question.length > 40 ? '...' : '');
  }
};

const getDynamicMockResponse = (question) => {
  const lowerCaseQuestion = question.toLowerCase();

  if (lowerCaseQuestion.includes('sales') || lowerCaseQuestion.includes('q3')) {
    return {
      content: 'Here is the requested mock sales performance data based on your query.',
      structuredData: {
        headers: ['Region', 'Revenue (M)', 'Growth (%)'],
        rows: [
          ['North', '$2.6', '20%'],
          ['South', '$1.7', '3%'],
          ['East', '$2.2', '14%'],
          ['West', '$3.1', '27%']
        ]
      }
    };
  }

  if (lowerCaseQuestion.includes('checklist') || lowerCaseQuestion.includes('launch') || lowerCaseQuestion.includes('steps')) {
    return {
      content: 'I have generated a new mock deployment checklist for your reference.',
      structuredData: {
        headers: ['Phase', 'Task', 'Status'],
        rows: [
          ['Pre-Launch', 'Beta Testing', '75%'],
          ['Launch Day', 'Final Code Freeze', 'Completed'],
          ['Post-Launch', 'Initial Bug Report', 'Pending']
        ]
      }
    };
  }

  return {
    content: `Based on your question: "${question}", here is a generic mock structured analysis.`,
    structuredData: {
      headers: ['Query Parameter', 'Value', 'Generated'],
      rows: [
        ['Question Length', question.length, 'Numeric'],
        ['Keywords Detected', 'None', 'N/A'],
        ['Timestamp', new Date().toLocaleTimeString(), 'Current']
      ]
    }
  };
};

const generateStructuredResponse = (sessionId, question) => {
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return null;

  setSessionTitle(sessionId, question);

  const mockResponse = getDynamicMockResponse(question);

  const response = {
    sender: 'model',
    content: mockResponse.content,
    structuredData: mockResponse.structuredData,
    feedback: null
  };

  session.history.push({ sender: 'user', content: question });
  session.history.push(response);

  return response;
};

module.exports = {
  getSessionTitles,
  getNewSessionId,
  getSessionHistory,
  generateStructuredResponse
};