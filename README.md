Lumibyte Chat Application

This project is a modern, responsive chat application built with React and styled using Tailwind CSS. It interacts with a dedicated backend API to provide conversational responses, structured data analysis, and persistent session history.

🚀 Key Features

Persistent Chat History: Automatically saves conversation sessions and displays them in the sidebar for easy retrieval.

Real-time Updates: Sessions are updated and refreshed automatically when a new conversation is started or a title is generated.

Structured Data Support: Capable of receiving and displaying data from the model in clean, responsive HTML tables.

User Feedback: Ability to like or dislike model responses.

Responsive UI: Fully adapts to mobile, tablet, and desktop screen sizes.

Theme Toggle: Supports both light and dark modes.

🛠️ Architecture and Setup

This application is the frontend client that consumes an external API service for all data and conversation logic.

🌐 API Endpoint

The application is configured to connect to the following external API base URL for all chat and session management:

[https://chat-application-server-fggy.onrender.com/api](https://chat-application-server-fggy.onrender.com/api)


📦 Local Setup

To run the frontend locally, ensure you have Node.js and npm installed.

Clone the repository:

git clone [your-repo-url]
cd [your-repo-name]


Install dependencies:

npm install


Start the development server:

npm start


The application should now be accessible in your browser, typically at http://localhost:3000.

🖥️ Usage Guide

Start a New Chat: Click the "New Chat" button in the sidebar or simply send a message when on the home screen (/).

View History: Past sessions are listed under the "History" section. Click any title to load the conversation.

Theme Switch: Use the Sun/Moon icon in the header to switch between Light Mode and Dark Mode.

Feedback: Use the Thumbs Up or Thumbs Down icons below a structured response to provide feedback.

💻 Technologies Used

Frontend Framework: React

Styling: Tailwind CSS

Routing: React Router DOM

Icons: Lucide React

📝 Troubleshooting

If chat history is not displaying in the sidebar, or if new messages fail to load:

Check the API Status: The backend service (hosted on Render) may be "sleeping" if it hasn't been used recently. It may take up to a minute to wake up and process the first request.

Browser Console: Check your browser's developer console (F12) for network errors. A Failed to fetch error confirms the backend server is unreachable.
