# 🌟 Lumibyte Chat Application

A modern, elegant, and fully responsive **AI-powered chat application** built with **React** and **Tailwind CSS**.  
It seamlessly connects with a dedicated backend API to deliver:

- Conversational responses  
- Structured data analysis  
- Persistent session history  
- Real-time UI updates  

This project ensures a smooth and interactive chat experience across all devices.

---

## 🚀 Features

### 📌 Persistent Chat History
- Automatically saves all chat sessions  
- Displays them beautifully in the sidebar for quick access  

### ⚡ Real-time Updates
- Chats, titles, and history refresh automatically  
- Updates instantly when a new message is sent  

### 📊 Structured Data Rendering
- Supports structured data from the model  
- Renders clean, responsive HTML tables  

### 👍 User Feedback
- Users can like or dislike individual model responses  

### 📱 Fully Responsive UI
- Optimized for **mobile**, **tablet**, and **desktop**  

### 🌗 Theme Toggle
- Smooth switching between **Light** and **Dark** mode  

---

## 🛠️ Architecture Overview

This repository represents the **frontend client** of the Lumibyte Chat System.  
All of the following are powered by an **external backend API**:

- Conversational logic  
- Session storage  
- Response generation  
- Feedback handling  

---

## 🌐 API Base URL

All chat and session communication is handled through:

https://chat-application-server-fggy.onrender.com/api

yaml
Copy code

If you deploy your own backend, update this base URL accordingly.

---

## 📦 Local Setup

Follow these steps to run the frontend locally:

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-name>
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start the Development Server
bash
Copy code
npm start
Your app will be available at:

arduino
Copy code
http://localhost:3000
🖥️ Usage Guide
➕ Start a New Chat
Click “New Chat” in the sidebar

Or type your first message on the home screen (/)

📂 View Chat History
All chat sessions appear under History

Click any session title to reopen and review it

🌗 Switch Themes
Use the Sun/Moon icon in the header to toggle Light/Dark mode

👍 Provide Feedback
Use Thumbs Up / Thumbs Down below structured responses

💻 Tech Stack
Category	Technology
Frontend	React
Styling	Tailwind CSS
Routing	React Router DOM
Icons	Lucide React
Backend (API)	Express + Node.js (Hosted on Render)

📝 Troubleshooting
❗ Chat history not loading?
The backend may be sleeping (Render free-tier)

Give it 30–60 seconds to wake up

❗ New messages not showing?
Open Developer Tools → Console

Check for network errors

“Failed to fetch” → backend server may be offline or waking

Confirm the API base URL is correct

🤝 Contributing
Pull requests are welcome!
For major changes, please open an issue first to discuss your ideas.


