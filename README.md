# 🎓 Campus

A **full-stack campus management web application** designed to simplify and digitalize campus activities.  
The project separates **frontend and backend architectures** to ensure scalability, maintainability, and faster development.

---

## 🚀 Overview

Campus is a modern web application that helps manage campus-related activities through a clean and scalable architecture.

The application consists of:

- A **frontend** built using modern JavaScript tooling
- A **backend API** built with Node.js
- A modular structure suitable for large-scale campus applications

---

## 🏗️ Project Structure

```plaintext
Campus/
│
├── frontend/ # Frontend application
│ ├── src/ # Source files
│ ├── public/ # Static assets
│ ├── index.html # Entry point
│ ├── package.json # Frontend dependencies
│ ├── vite.config.js # Vite configuration
│ └── eslint.config.js # ESLint configuration
│
├── backend/ # Backend server
│ └── (API routes and server logic)
│
├── package.json # Root configuration
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- JavaScript
- React-Vite
- Tailwindcss
- Claudinary

### Backend
- Node.js
- REST API architecture
- Express.js
- Mongoose (MongoDB ORM)
- Email.js

### Tools
- ESLint
- npm

---

## 📦 Installation

### Prerequisites

Make sure you have installed:

- **Node.js (v14 or higher)**
- **npm or yarn**

Check installation:

```bash
node -v
npm -v
```

### Setup
1. Clone the repository
   ```bash
   git clone https://github.com/rajmahadev422/Campus.git
   cd Campus
   ```
2. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   cd ..
  ```
3. Install backend dependencies
  ```bash
  cd backend
  npm install
  cd ..
  ```
4. Create `.env` file
   ```env
    VITE_BACKEND=http://localhost:5000/api
    VITE_CLOUD_NAME = dpbxxxx # Claudinary
    VITE_UPLOAD_PRESET = Image # Claudinary
    VITE_CLIENT_ID=xxxxxxxxxxxxxxxxx.apps.googleusercontent.com # Google-OAuth
    MONGO_URI=mongodb+srv://[user-name]:[password].y8dzde5.mongodb.net/database # MongoDB
    PORT=5000
    JWT_ACCESS_SECRET=secret-toekn
    JWT_REFRESH_SECRET=secret-token
    NODE_ENV=production
    GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxx.apps.googleusercontent.com # Google-OAuth
    PUBLIC_KEY=y7upmG3exxxxxxxxx # Google-OAuth
    PRIVATE_KEY=_kjsRnuPxxxxxxxx # Google-OAuth
    SERVICE_ID=servixxxxxxxxxxxx # Email.js
    TEMPLATE_ID=template_xxxxxxx # Email.js
   ```
5. Running the Project
   * **Start frontend**
     ```bash
     cd frontend
     npm run dev
     ```
     Frontend runs on: `http://localhost:5173`
   * **Start Backend**
     ```bash
     cd backend
     npm start # Start server for production
     npm run dev # Start server for developement
     ```
     Backend runs on: `http://localhost:3000`

## ✨ Features

* Full-stack JavaScript application
* Modular project architecture
* Fast development using Vite
* RESTful backend API
* Scalable folder structure
* Code quality using ESLint
* Easy to extend for new campus features

## 📚 Future Improvements

* Student dashboard
* Faculty management
* Attendance tracking
* Campus announcements
* File sharing system
* Resources management

## 📄 License

This project is open-source and available under the MIT License.
