🌟 Lumibyte Chat Application

A modern, elegant, and fully responsive AI-powered chat application built with React and styled using Tailwind CSS.
It seamlessly connects with a dedicated backend API to deliver:

Conversational responses

Structured data analysis

Persistent session history

Real-time UI updates

This project ensures a smooth and interactive chat experience across all devices.

🚀 Features
📌 Persistent Chat History

Automatically saves all chat sessions and displays them beautifully in the sidebar for quick access.

⚡ Real-time Updates

Chats, titles, and history refresh automatically whenever a new message is sent.

📊 Structured Data Rendering

Handles model-generated structured data and displays it in clean, responsive HTML tables.

👍 User Feedback

Users can like or dislike individual model responses.

📱 Fully Responsive UI

Optimized for mobile, tablet, and desktop.

🌗 Theme Toggle

Light and Dark mode support with smooth transitions.

🛠️ Architecture Overview

This repository represents the frontend client of the Lumibyte Chat System.

All conversational logic

Session storage

Response generation

Feedback handling

…are powered by an external backend API.

🌐 API Base URL

All chat and session communication is handled through:

https://chat-application-server-fggy.onrender.com/api


If you deploy your own backend, update this base URL accordingly.

📦 Local Setup

Follow these steps to run the frontend locally:

1️⃣ Clone the Repository
git clone <your-repo-url>
cd <your-repo-name>

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm start


The app will launch in your browser at:

http://localhost:3000

🖥️ Usage Guide
➕ Start a New Chat

Click “New Chat” in the sidebar or type your first message on the home screen (/).

📂 View Chat History

All chat sessions appear under History.
Click any session title to reopen and review it.

🌗 Switch Themes

Use the Sun/Moon icon in the header to toggle between Light and Dark mode.

👍 Provide Feedback

Click Thumbs Up / Thumbs Down under structured responses.

💻 Tech Stack
Category	Technology
Frontend	React
Styling	Tailwind CSS
Routing	React Router DOM
Icons	Lucide React
Backend (External API)	Express + Node.js (hosted on Render)


📝 Troubleshooting
❗ Chat history not loading?

The backend may be sleeping (Render free-tier). Give it 30–60 seconds to wake up.

❗ New messages not showing?

Open DevTools → Console → check for network errors.

A "Failed to fetch" error usually means the server is offline or waking up.

Confirm API URL matches the deployed backend.

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss your ideas.
