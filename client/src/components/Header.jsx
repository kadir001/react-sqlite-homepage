import React from "react";
import { Link } from "react-router-dom";

export default function Header({ user, auth }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">React + SQLite Website</h1>
      <nav className="flex gap-4 text-gray-600 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user && <Link to="/dashboard">Dashboard</Link>}
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user && (
          <button
            onClick={auth.logout}
            className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
