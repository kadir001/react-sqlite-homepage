import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function DashboardPage({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch("http://localhost:5000/blog")
      .then(res => res.json())
      .then(data => {
        const myPosts = data.filter(p => p.author === user);
        setPosts(myPosts);
      });
  }, [user]);

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welkom op je dashboard, {user}!</h2>
      {posts.length === 0 ? (
        <p>Je hebt nog geen blogposts.</p>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
              <div>{post.content}</div>
              <div className="text-xs text-gray-500 mt-1">{post.created_at}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
