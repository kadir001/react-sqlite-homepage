# React + Tailwind CSS + Express + SQLite Web App

A full-stack project built with:

- **React (Vite)**
- **Tailwind CSS (PostCSS)**
- **React Router**
- **Express.js backend**
- **SQLite database**
- User authentication
- Blog/note system
- Responsive layout

---

## ✨ Features

### 🔐 Authentication
- Register & Login system
- Passwords hashed via bcrypt
- Protected Dashboard route

### 📝 Blog System
- Visitors can post blog notes
- Stored in SQLite
- Shows:
  - author  
  - message  
  - timestamp  
- Displayed on homepage

### 🎨 Frontend
- **Tailwind CSS** (utility-first styling)
- Clean, responsive layout
- Organized components (Layout, Header, Footer)

### 🗄 Backend
- SQLite database stored locally (`db.sqlite`)
- Express REST API
- Routes:
  - `POST /auth/register`
  - `POST /auth/login`
  - `GET /blog`
  - `POST /blog`

---

## 📦 Project Structure
project/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Layout, Header, Footer
│ │ ├── pages/ # Home, Login, Register, Dashboard, About
│ │ ├── hooks/ # useAuth hook
│ │ ├── App.jsx
│ │ ├── index.css # Tailwind imports
│ │ └── main.jsx
│ └── package.json
│
└── server/ # Express backend with SQLite
├── server.js
├── db.sqlite
└── package.json

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kadir001/react-sqlite-homepage.git
cd react-sqlite-homepage

cd client
npm install
npm run dev

