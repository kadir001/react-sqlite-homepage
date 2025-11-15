const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const authRoutes = require("./routes/auth.jsx");
const blogRoutes = require("./routes/blog.jsx");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./db.sqlite");

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  hashed_password TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author TEXT,
  content TEXT,
  created_at TEXT
)`);

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
