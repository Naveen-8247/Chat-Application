Lumibyte Chat Application

This project is a modern, responsive chat application built with React and styled using Tailwind CSS. It is designed to interact with a dedicated backend API to provide conversational responses, structured data analysis, and persistent session history.

🚀 Key Features

Persistent Chat History: Automatically saves conversation sessions and displays them in the sidebar for easy retrieval.

Real-time Updates: Sessions are updated and refreshed automatically when a new conversation is started or a title is generated.

Structured Data Support: Capable of receiving and displaying data from the model in clean, responsive HTML tables.

User Feedback: Ability to like or dislike model responses.

Responsive UI: Fully adapts to mobile, tablet, and desktop screen sizes.

Theme Toggle: Supports both light and dark modes.

🛠️ Architecture and Setup

This application is a frontend-only repository that consumes an external API service for all data and logic.

🌐 API Endpoint

The application is configured to connect to the following external API base URL for all chat and session management:

[https://chat-application-server-fggy.onrender.com/api](https://chat-application-server-fggy.onrender.com/api)


📦 Local Setup

To run the frontend locally, you will need Node.js and npm installed.

Clone the repository (if applicable):

git clone [your-repo-url]
cd [your-repo-name]


Install dependencies:

npm install


Start the development server:

npm start


The application should now be accessible in your browser, typically at http://localhost:3000.

🖥️ Usage

Start a New Chat: Click the "New Chat" button in the sidebar or simply type a message into the input field when you are on the home screen (/).

View History: All your past sessions will be listed under the "History" section in the sidebar. Click any session title to load the full conversation.

Theme Switch: Use the Sun/Moon icon in the header to instantly switch between Light Mode and Dark Mode.

Feedback: Use the Thumbs Up or Thumbs Down icons below a structured response to provide feedback.

💻 Technologies Used

Frontend Framework: React

Styling: Tailwind CSS (for rapid, responsive utility-first styling)

Routing: React Router DOM

Icons: Lucide React

📝 Troubleshooting

If chat history is not displaying in the sidebar, or if new messages fail to load:

Check the API Status: The application relies on the external API. If the backend service (on Render) has been inactive, it may be "sleeping" and needs a moment to spin up and respond to the first request.

Browser Console: Open your browser's console (F12) to check for network errors. A Failed to fetch error confirms the backend server is unreachable.
