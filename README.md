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

