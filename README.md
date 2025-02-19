# Real-Time Chat Application

## 📌 Project Description
This project was my thesis. Real-time chat application built using **React.js** and **Socket.IO** along with modern web technologies. The application allows users to communicate in real-time, log in and out, and manage messages securely.
Read it here: https://urn.fi/URN:NBN:fi:amk-202501302101

## 🚀 Technologies Used

### **Frontend:**
- [React.js](https://reactjs.org/) - For building the user interface
- [Redux Toolkit](https://redux-toolkit.js.org/) - For state management
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Socket.IO Client](https://socket.io/) - For real-time communication

### **Backend:**
- [Node.js](https://nodejs.org/) - Server environment
- [Express.js](https://expressjs.com/) - Lightweight backend framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Socket.IO](https://socket.io/) - For real-time communication
- [JWT (JSON Web Token)](https://jwt.io/) - For authentication
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - For password hashing

## 📂 Project Structure
```
├── client/       # Frontend code (React)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Pages (login, chat, home, etc.)
│   │   ├── store/       # Redux files
│   │   ├── hooks/       # Custom hooks
│   │   ├── main.jsx
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/       # Backend code (Node.js + Express)
│   ├── config/   # Configurations (DB, Socket, environment variables)
│   ├── controllers/ # API logic
│   ├── models/   # MongoDB schemas
│   ├── routes/   # API routes
│   ├── middleware/ # Authentication & error handling
│   ├── utils/    # Utility functions (JWT, Socket connection, etc.)
│   ├── index.js  # Server entry point
│   ├── package.json
│   └── .env
│
└── README.md
```

## 🛠 Installation & Setup

### **1️⃣ Clone this repository**
```sh
git clone https://github.com/username/chat-app.git
cd chat-app
```

### **2️⃣ Install dependencies**
#### **Backend:**
```sh
cd server
npm install
```

#### **Frontend:**
```sh
cd ../client
npm install
```

### **3️⃣ Start the development servers**
#### **Backend:**
```sh
cd server
npm run dev
```
#### **Frontend:**
```sh
cd ../client
npm run dev
```
The application runs locally at: `http://localhost:5173`

## 🔑 User Authentication
- Users can register and log in using JWT authentication.
- Passwords are securely hashed using **Bcrypt**.

## 📡 Real-Time Communication
- Socket.IO maintains a **WebSocket** connection between users.
- Users can see online users and receive messages in real-time.
- Messages are stored in a **MongoDB** database.

## 🔍 API Routes
### **User Routes (`/api/users`)**
| Method | Route | Description |
|--------|--------|--------|
| POST | `/register` | Creates a new user |
| POST | `/login` | Logs in a user |
| POST | `/logout` | Logs out a user |
| GET | `/profile` | Fetches logged-in user details |

### **Message Routes (`/api/messages`)**
| Method | Route | Description |
|--------|--------|--------|
| GET | `/:id` | Fetches messages of a specific conversation |
| POST | `/send/:id` | Sends a message |
